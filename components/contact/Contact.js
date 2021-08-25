import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const ContactForm = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "gmail",
        "contactTemplate",
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      await e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="contact" className=" ">
      <div className="pt-16"></div>
      <h2 className="m-8 text-fourth font-extrabold text-4xl tracking-wider text-center">
        CONTACT ME!
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-evenly mb-10 md:space-y-6">
        <div className="md:w-img ">
          <img
            src="/img/contact-1.svg"
            className="px-16 pb-6 rounded-2xl w-card"
          ></img>
        </div>
        <form
          onSubmit={(e) => ContactForm(e)}
          className="bg-first flex justify-start flex-col p-10 space-y-2 w-96 border border-fourth rounded-xl"
        >
          <p className="text-fourth animate-pulse text-center"></p>
          <label className="text-fourth" htmlFor="name">
            Name:
          </label>
          <input type="text" name="name" placeholder="Name" />
          <label className="text-fourth" htmlFor="email">
            Email:
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <label className="text-fourth" htmlFor="message">
            Message:
          </label>
          <textarea placeholder="Message" name="message" className="  h-32 " />
          <input
            type="submit"
            className=" rounded-md h-10 border-2 cursor-pointer border-fourth bg-third text-white font-medium"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
