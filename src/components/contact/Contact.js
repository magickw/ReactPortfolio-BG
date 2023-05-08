import { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import Zoom from 'react-reveal/Zoom';

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
      .sendForm(
        "service_98gcanw",
        "template_gsxbx5s",
        formRef.current,
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
    <Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} fontSize={'1.5rem'}>
                <Zoom top>
                    <h1>
                        <span
                            style={{
                                background: info.gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Contact Me
                        </span>
                    </h1>
                </Zoom>
            </Box>
      <Grid container display={'flex'} flexDirection={'column'} justifyContent={'center'}>
          <h2>Get in Touch</h2>
        <Grid item xs={12} md={6}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                id="name"
                name="from_name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </label>
            <label htmlFor="email">
              Your Email
              <input
                type="email"
                id="email"
                name="from_email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </label>
            <label htmlFor="message">
              Your Message
              <textarea
                rows={5}
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />
            </label>
            <button type="submit">{loading ? "Sending..." : "Send"}</button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
