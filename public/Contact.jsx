import React from "react";
import { useRouter } from "next/router";

function Contact() {
  const route = useRouter();

  return (
    <button
      onClick={() => route.push("/contact")}
      className="h-screen w-full flex  flex-col justify-center items-center"
    >
      <div className="h-screen w-full flex  flex-col justify-center items-center">
        <h2 className="text-7xl font-queensTrial font-light"> Get in touch</h2>
        <p>Lets get that big idea started</p>
      </div>
    </button>
  );
}

export default Contact;
