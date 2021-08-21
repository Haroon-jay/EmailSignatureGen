import React from "react";
import { useState } from "react";
import { getDisclaimer } from "../../../../redux/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

const Disclaimer = () => {
  const [openQuote, setOpenQuote] = useState(false);
  const dispatch = useDispatch();
  const {disclaimer}=useSelector(state=>state.counter)
  const handleConfidentialityCheck=(e)=>{
    dispatch(getDisclaimer("IMPORTANT:The contents of this email and any attachments are confidential.They are intended for named recipient(s) only.If you have recieved this email by mistake,please notify the sender immediately and do not disclose the content to anyone or make copies thereof."))
  }
const handleVirusesCheck=()=>{
  dispatch(getDisclaimer("Warning:Although taking reasonable precautions to ensure no viruses or malicious software are present in this email,the sender cannot accept responsibility for any loss or damage arising from the use of this email or attachments"))
}
const handleBindingCheck=()=>{
  dispatch(getDisclaimer("No employee or agent is authorized to conclude any binding agreement on behalf of the company with another party bu email without specific confirmation"))
}
const handlePersonalOpinion=()=>{
  dispatch(getDisclaimer("All views and opinions expressed in this email message are the personal opinions of the author and do not represent those of the company. No liability can be held for any damages"))
}
const handleCorrectRecipient=()=>{
  dispatch(getDisclaimer("If you recieved this email in error,Please notify us immediately by sending an email or calling"))
}
const ownQuoteChange=(e)=>{
  dispatch(getDisclaimer(e.target.value))
}
  return (
    <>
      <article>
        <hr />
        <section className="grid gap-2 items-center justify-items-start mt-5  ml-4">
          <h1 className="text-2xl font-semibold">Add a disclaimer</h1>

          <h1  className="text-lg font-semibold">
            Choose your disclaimer type:
            {disclaimer}
          </h1>
          <ul class="list-none grid gap-2 text-gray-600 ">
            <li className="flex items-center gap-2">
              <input onClick={handleConfidentialityCheck} type="radio" name="disclaimer" id="contactChoice1" />
              Confidentiality
            </li>
            <li className="flex items-center gap-2">
              <input onClick={handleVirusesCheck} type="radio" name="disclaimer" id="contactChoice2" />
              No viruses
            </li>
            <li className="flex items-center gap-2">
              <input onClick={handleBindingCheck} type="radio" name="disclaimer" id="contactChoice3" />
              Non-blinding
            </li>
            <li className="flex items-center gap-2">
              <input onClick={handlePersonalOpinion} type="radio" name="disclaimer" id="contactChoice4" />
              Personal opinions
            </li>
            <li className="flex items-center gap-2">
              <input onClick={handleCorrectRecipient} type="radio" name="disclaimer" id="contactChoice4" />
              Correct recipient
            </li>
            <button onClick={() => setOpenQuote(!openQuote)}>
              <li className="flex items-center gap-2 text-semibold">
                <input type="radio" name="disclaimer" id="contactChoice4" />
                My Own Quotes
              </li>
            </button>
          </ul>
          <div className="justify-center mb-4 mt-1">
            {openQuote ? (
              <textarea
                class="resize-none border-2 rounded-md w-80 h-16 p-1"
                placeholder="type your disclaimer here"
                onChange={ownQuoteChange}
              ></textarea>
            ) : (
              ""
            )}
          </div>
        </section>
      </article>
    </>
  );
};

export default Disclaimer;
