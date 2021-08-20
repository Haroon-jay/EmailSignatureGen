import React from "react";
import { useState } from "react";

const Disclaimer = () => {
  const [openQuote, setOpenQuote] = useState(false);

  return (
    <>
      <article>
        <hr />
        <section className="grid gap-2 items-center justify-items-start mt-5  ml-4">
          <h1 className="text-2xl font-semibold">Add a disclaimer</h1>

          <h1 className="text-lg font-semibold">
            Choose your disclaimer type:
          </h1>
          <ul class="list-none grid gap-2 text-gray-600 ">
            <li className="flex items-center gap-2">
              <input type="radio" id="contactChoice1" />
              Confidentiality
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" id="contactChoice2" />
              No viruses
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" id="contactChoice3" />
              Non-blinding
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" id="contactChoice4" />
              Personal opinions
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" id="contactChoice4" />
              Correct recipient
            </li>
            <button onClick={() => setOpenQuote(!openQuote)}>
              <li className="flex items-center gap-2 text-semibold">
                <input type="radio" id="contactChoice4" />
                My Own Quotes
              </li>
            </button>
          </ul>
          <div className="justify-center mb-4 mt-1">
            {openQuote ? (
              <textarea
                class="resize-none border-2 rounded-md w-80 h-16 p-1"
                placeholder="type your disclaimer here"
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
