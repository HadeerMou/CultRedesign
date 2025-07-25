import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    inquiryType: "general Inquiry",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="bg-black/90 text-white py-20">
      <h1 className="text-5xl md:text-9xl text-center">
        We'd love to hear from you! Whether you have questions, need more
        information, or are ready to start a project, our team is here to help.
      </h1>
      <div className="grid md:grid-cols-2 gap-10 items-center mt-10 md:mt-30">
        <div className="">
          <img className="md:h-200" src="/assets/contact 1.png" alt="" />
        </div>
        <div className="mx-10 md:ms-20 md:me-50">
          <h2 className="text-3xl md:text-4xl text-red-300 mb-10">
            Get In Touch !
          </h2>
          <form
            className="flex flex-col gap-2 md:gap-4 md:text-2xl"
            id="contact_form"
            action="https://api.web3forms.com/submit"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="flex flex-col gap-3">
              <input
                type="hidden"
                name="access_key"
                value="59e7fa59-55eb-46ee-acca-ae40fc6b8dbb"
              />
              <label class="required" for="name">
                Your name:
              </label>
              <input
                className="bg-white/90 text-black rounded-lg shadow border border-white shadow-white p-2"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span id="name_validation" class="error_message"></span>
            </div>
            <div class="flex flex-col gap-3">
              <label class="required" for="email">
                Your email:
              </label>
              <input
                className="bg-white/90 text-black rounded-lg shadow border border-white shadow-white p-2"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span id="email_validation" class="error_message"></span>
            </div>
            <div className="flex flex-col gap-3">
              <label class="required" for="inquiryType">
                Inquiry Type
              </label>
              <select
                className="bg-white/90 text-black rounded-lg shadow border border-white shadow-white p-2"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="general Inquiry">General Inquiry</option>
                <option value="service Booking">Service Booking</option>
                <option value="partnership">Partenership</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label class="required" for="message">
                Your message:
              </label>
              <textarea
                className="bg-white/90 text-black rounded-lg shadow border border-white shadow-white p-2"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="7"
                cols="md:30"
              ></textarea>
              <span id="message_validation" class="error_message"></span>
            </div>
            <input
              className="bg-yellow-300 hover:opacity-80 transform duration-300 py-3 px-5 w-fit mx-auto text-black rounded-full border border-black shadow shadow-white cursor-pointer text-lg "
              id="submit_button"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
