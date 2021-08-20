import React from "react";

const PredesignedBanner = () => {
  return (
    <>
      <article>
        <hr />
        <div className="grid gap-2 items-center justify-items-start mt-5  ml-4">
          <h1 className="text-2xl font-semibold">PredesignedBanners</h1>
          <h1 className="text-lg font-semibold">Choose your banner</h1>
          <section className="grid gap-3 mt-4 justify-items-center mb-5">
            <img
              src="https://api.asm.skype.com/v1/objects/0-sa-d7-9b7113080efd794aa2a796d50c30795b/views/imgpsh_fullsize_anim"
              alt="banner"
              class="bg-cover w-80 h-16"
            />
            <img
              src="https://api.asm.skype.com/v1/objects/0-sa-d5-522d64c8e971d9af5a2a8a6d9c0a7f6e/views/imgpsh_fullsize_anim"
              alt="banner"
              class="bg-cover w-80 h-16"
            />
            <img
              src="https://api.asm.skype.com/v1/objects/0-sa-d8-5903f7fe3362e9a611ac70233b9c7c0a/views/imgpsh_fullsize_anim"
              alt="banner"
              class="bg-cover w-80 h-16"
            />
            <img
              src="https://api.asm.skype.com/v1/objects/0-sa-d4-a759488913806f28c8f4886215a36a80/views/imgpsh_fullsize_anim"
              alt="banner"
              class="bg-cover w-80 h-16"
            />
          </section>
        </div>
      </article>
    </>
  );
};

export default PredesignedBanner;
