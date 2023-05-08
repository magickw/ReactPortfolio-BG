import { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { Box, Grid, FormControl, Input, TextField, Button } from "@mui/material";
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
      <Grid container
        flexDirection="column"
        justifyContent="center"
        xs={12}
        md={6}
        pr={10}
        pl={15}
        pt={5}
      >
        <h1 justifyContent="center"style={{ fontSize: '2rem' }}>Get in Touch</h1>
        <form onSubmit={handleSubmit}>
        <Grid item
          xs={12}
          md={6}
          pr={10}
          pl={10}
          pt={5}>
          <FormControl>
            <label htmlFor="name" style={{ display: "block", fontSize: "1.2rem" }}>
              Your Name
              <Input
                type="text"
                style={{ display: "block", fontSize: "1.2rem" }}
                py={5}
                px={7}
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </label>
            <label htmlFor="email" style={{ display: "block", fontSize: "1.2rem" }}>
              Your Email
              <Input
                type="email"
                id="email"
                style={{ display: "block", fontSize: "1.2rem" }}
                py={5}
                px={7}
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </label>
            <label htmlFor="message" style={{ display: "block", fontSize: "1.2rem" }}>
              Your Message
              <TextField
                rows={5}
                rowsMax={10}
                id="message"
                name="message"
                style={{ display: "block", height: "200px", fontSize: "1.2rem" }}
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />
            </label>
            <Button type="submit" style={{ fontSize: "1.2rem" }}>{loading ? "Sending..." : "Send"}</Button>
          </FormControl>
        </Grid>
        </form>
      </Grid>
      
    </Box>
  );
}
