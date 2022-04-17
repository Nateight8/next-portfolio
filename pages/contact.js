import React from "react";

function Contact() {
  return (
    <main className="w-full h-screen">
      <div className=" bg-[#E9F1F4] mx-auto w-full">
        <div className=" w-[80%] mx-auto text-[#121921] py-12 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl mb-4 font-queensTrial">
            Get in touch
          </h1>
          <p className=" text-3xl font-thin md:text-4xl">Lets work together</p>
        </div>
      </div>
      <p className=" font-light text-xl text-center my-8">
        Personal project? (feel free to reach out ):
        <br /> (then you are a firm...I am be more than happy to join your team)
      </p>
      <form className="w-2/3 md:w-[45%] lg:w-[35%] mx-auto space-y-4 flex flex-col justify-center items-center ">
        <input
          type="text"
          className="input focus:bg-transparent"
          placeholder="Name"
        />
        <input type="email" className="input" placeholder="Email" />
        <textarea className="input" rows="4" />
        <button className="input bg-[#e9f1f4] text-[#121921] font-medium">
          {" "}
          Send
        </button>
      </form>
    </main>
  );
}

export default Contact;
