import React from "react";

const CTA = () => {
  return (
    <>
      <article>
        <hr />
        <section className="grid gap-2 items-center justify-items-start mt-5  ml-4">
          <h1 className="text-2xl font-semibold">Button details</h1>
          <section className="grid gap-8 mt-4 justify-items-center">
            <div className="flex items-center gap-12 ">
              <h1>Button text</h1>
              <input
                class="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Website name"
              />
            </div>
            <div className="flex items-center gap-12 ">
              <h1>Button URL</h1>
              <input
                class="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="https://"
              />
            </div>
          </section>

          <h1 className="text-2xl font-semibold mt-4">Button style</h1>
          <section class="grid gap-3">
            <div className="flex gap-8 mt-2">
              <h1 className="font-semibold">Type</h1>
              <ul class="list-none flex gap-4 text-gray-600 items-center">
                <li className="flex items-center gap-2">
                  <input type="radio" id="contactChoice1" />
                  Full
                </li>
                <li className="flex items-center gap-2">
                  <input type="radio" id="contactChoice2" />
                  Light
                </li>
                <li className="flex items-center gap-2">
                  <input type="radio" id="contactChoice3" />
                  Simple Link
                </li>
              </ul>
            </div>
            <div className="flex gap-8 mt-2">
              <h1 className="font-semibold">Size</h1>
              <div className="inline-flex">
                <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300">
                  S
                </button>
                <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300">
                  L
                </button>
                <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300">
                  M
                </button>
              </div>
            </div>

            <div className="flex gap-8 mt-2 mb-5">
              <h1 className="font-semibold">Color</h1>
              <div className="inline-flex gap-2">
                <button className="w-6 h-6 bg-gray-700 rounded-full"></button>
                <button className="w-6 h-6 bg-red-700 rounded-full"></button>
                <button className="w-6 h-6 bg-blue-700 rounded-full"></button>
                <button className="w-6 h-6 bg-pink-600 rounded-full"></button>
                <button className="w-6 h-6 bg-blue-600 rounded-full"></button>
                <button className="w-6 h-6 bg-yellow-600 rounded-full"></button>
                <button className="w-6 h-6 bg-green-600 rounded-full"></button>
                <button className="w-6 h-6 bg-green-600 rounded-full"></button>
              </div>
            </div>
          </section>
        </section>
      </article>
    </>
  );
};

export default CTA;
