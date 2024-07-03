import React, { useState } from "react";
import Image from "next/image";
import ContextLayout from "../../layouts/ContextLayout";
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!formData.email) {
      alert("Email is required.");
      return;
    }

    // Replace with your EmailJS service ID and template ID
    const serviceId = 'service_8owf4tc';
    const templateId = 'template_qgxwyzq';

    // Send email
    emailjs
    .send(serviceId, templateId, formData, {
      publicKey: 'aNuTyeKHNG6XNR3Ta',
    })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        console.log('FAILED...', err);
      },
    );

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="mb-20 text-2xl font-bold opacity-100">
      Get in Touch! Have questions or comments? we’d love to hear from you
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

        <div className="flex items-center border-b border-black">  <label className="mr-2 font-semibold">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="placeholder-black bg-transparent focus:outline-none focus:border-none"
          />
        </div>

        <div className="flex items-center border-b border-black">  <label className="mr-2 font-semibold">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="placeholder-black bg-transparent focus:outline-none focus:border-none"
          />
        </div>

        <div className="flex items-center border-b border-black">  <label className="mr-2 font-semibold">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="placeholder-black bg-transparent focus:outline-none focus:border-none"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="placeholder-black w-80 h-48 border border-black bg-transparent"
        />
        <button type="submit" className="underline">Send</button>
      </form>
    </div>
  );
}

const Index = () => {
  return (
    <ContextLayout>
      <div className="bg-repeat bg-[url('/assets/plant-1.jpg')]">
        <div className="flex justify-center items-center">
          <GetInTouch />
          {/* <div className="ml-10 mr-10">

          </div> */}
        </div>
      </div>
    </ContextLayout>
  )
};

export default Index;
