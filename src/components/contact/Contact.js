import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Box, Grid } from "@mui/material";
import { FormControl } from '@mui/material';



export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_98gcanw",
        "template_gsxbx5s",
        {
          form_name: form.name,
          to_name: "Baofeng",
          from_email: form.email,
          to_email: "peterguo1983@mail.com",
          message: form.message,
        },
        "bRFNyC96pqXU0fvGI"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >

        <p>Get in touch</p>
        <h3>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=""
        >
          <label className="">
            <span className="">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className=""
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className=""
            />
          </label>
          <label className="flex flex-col">
            <span className="">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className=""
            />
          </label>

          <button
            type="submit"
            className=""
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
    </div>
  );
};
