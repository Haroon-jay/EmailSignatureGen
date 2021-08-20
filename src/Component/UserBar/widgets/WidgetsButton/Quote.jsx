import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getquoteTitle} from "../../../../redux/CounterSlice";
const Quote = () => {
  const dispatch = useDispatch();
  const [openQuote, setOpenQuote] = useState(false);

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => { 
      console.log(index) 
    setToggleState(index); 
    switch(index){
      case 1: 
      return dispatch(getquoteTitle("Success"));
      case 2: 
      return dispatch(getquoteTitle("Motivational"));
      case 3: 
      return dispatch(getquoteTitle("William Shakespeare"));
      case 4: 
      return dispatch(getquoteTitle("Science"));
      case 5: 
      return dispatch(getquoteTitle("Finance"));
      case 6: 
      return dispatch(getquoteTitle("Random"));
      case 7: 
      return dispatch(getquoteTitle("Funny"));
      case 8: 
      return dispatch(getquoteTitle("Positive"));
      case 9: 
      return dispatch(getquoteTitle("Friendship"));
      case 10: 
      return dispatch(getquoteTitle("Business"));
      case 11: 
      return dispatch(getquoteTitle("Albert Einstein"));            
      default:
      return dispatch(getquoteTitle(""));
    }
  };
  return (
    <>
      <article className="">
        <hr />
        <section className="grid items-center justify-items-center mt-7 ">
          <h1 className="font-semibold text-2xl">Add my Quote</h1>
          <div className="flex  gap-10 mt-6">
            <ul class="list-none grid gap-2 text-gray-600 ">
              <button onClick={() => toggleTab(1)}>
                <li className="flex items-center gap-2">
                  {/* <input type="radio" id="contactChoice2" /> */}
                  <div
                    className={
                      toggleState == 1
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Success
                </li>
              </button>
              <button onClick={() => toggleTab(2)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 2
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Motivational
                </li>
              </button>
              <button onClick={() => toggleTab(3)}>
                <li className="flex items-center gap-2">
                  {/* <input type="radio" id="contactChoice3" /> */}
                  <div
                    className={
                      toggleState == 3
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  William Shakespeare
                </li>
              </button>
              <button onClick={() => toggleTab(4)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 4
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Science
                </li>
              </button>
              <button onClick={() => toggleTab(5)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 5
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Finance
                </li>
              </button>
              <button onClick={() => toggleTab(6)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 6
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Random
                </li>
              </button>
            </ul>
            <ul class="list-none grid gap-2 text-gray-600">
              <button onClick={() => toggleTab(7)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 7
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Funny
                </li>
              </button>
              <button onClick={() => toggleTab(8)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 8
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Positive
                </li>
              </button>
              <button onClick={() => toggleTab(9)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 9
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Friendship
                </li>
              </button>
              <button onClick={() => toggleTab(10)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 10
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Business
                </li>
              </button>
              <button onClick={() => toggleTab(11)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 11
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Albert Einstein
                </li>
              </button>
              <button onClick={() => toggleTab(12)}>
                <li className="flex items-center gap-2 text-semibold">
                  {/* <input type="radio" id="contactChoice4" /> */}
                  <div
                    className={
                      toggleState == 12
                        ? "w-4 h-4 bg-red-800 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  My Own Quotes
                </li>
              </button>
            </ul>
          </div>
          <div className="mt-5 justify-center mb-5">
            {toggleState == 12 ? (
              <textarea class="resize-none border-2 rounded-md w-80 h-16 p-1" onChange={(e) => dispatch(getquoteTitle(e.target.value))}  ></textarea>
            ) : (
              ""
            )}
          </div>
        </section>
      </article>
    </>
  );
};

export default Quote;
