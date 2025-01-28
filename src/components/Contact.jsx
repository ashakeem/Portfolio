import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#161616] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/9d112101-987f-4076-99ac-bfe0d1d0fbe0"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#c54848] text-gray-300 ">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or email me at{" "}
            <span className="text-[#c54848]">ayomidesuleimanh@gmail.com</span>
          </p>
        </div>

        <input
          className="bg-[#ffffff] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ffffff]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ffffff] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#c54848] hover:border-[#c54848] px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
