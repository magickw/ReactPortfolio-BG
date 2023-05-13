import { useState, useRef } from "react";
import emailjs from "emailjs-com";
// import Select from 'react-select';

import {
  Box,
  Grid,
  FormControl,
  TextField,
  Button,
  // Input,
} from "@mui/material";
import { info } from "../../info/Info";
import Zoom from "react-reveal/Zoom";


export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // file: null,
    // selectedSourceLang: null,
    // selectedTargetLang: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // const sourceLangOptions = [
  //   { value: 'en', label: 'English' },
  //   { value: 'zh-CN', label: 'Chinese (Simplified)' },
  //   { value: 'zh-TW', label: 'Chinese (Traditional)' },
  // ];

  // const targetLangOptions = [
  //   { value: 'en', label: 'English' },
  //   { value: 'zh-CN', label: 'Chinese (Simplified)' },
  //   { value: 'zh-TW', label: 'Chinese (Traditional)' },
  // ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setForm({ ...form, file: e.target.files[0] });
  // };

  // const handleSourceLangChange = (selectedOption) => {
  //   setForm({ ...form, selectedSourceLang: selectedOption });
  // };

  // const handleTargetLangChange = (selectedOption) => {
  //   setForm({ ...form, selectedTargetLang: selectedOption });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);
    // if (form.file) {
    //   formData.append("file", form.file);
    // }
    // formData.append("selectedSourceLang", form.selectedSourceLang.value);
    // formData.append("selectedTargetLang", form.selectedTargetLang.value);


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
          setMessage(
            "<div>Thank you. I will get back to you as soon as possible.</div>"
          );

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
            // file: null,
            // selectedSourceLang: null,
            // selectedTargetLang: null
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          setMessage("<div>Something went wrong.</div>");
        }
      );
  };

  return (
    <Box>
      <Box 
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        fontSize={"1.5rem"}
      >
        <Zoom top>
          <h1>
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
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

        md={6}
        sx={{
          padding: "40px",
          "@media (min-width: 960px)": {
            paddingLeft: "100px",
            paddingTop: "20px",
            paddingBottom: "20px",
          },
        }}
      >
        <h1 justifyContent="center" style={{ fontSize: "2rem" }}>
          Get in Touch
        </h1>
        <h1
          justifyContent="center"
          style={{ fontSize: "1rem", marginBottom: "20px" }}
        >
          Ask me something about translation and full-stack development.
        </h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <Grid item >
            <FormControl>
              <label htmlFor="name" style={{ display: "block", fontSize: "1.2rem" }}>
                Your Name
                <TextField
                  type="text"
                  style={{ display: "block", fontSize: "1.2rem" }}
                  id="name"
                  name="name"
                  variant="outlined"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  sx={{
                    "&::placeholder": {
                      color: "yellow",
                    },
                  }}
                />
              </label>
              <label htmlFor="email" style={{ display: "block", fontSize: "1.2rem" }}>
                Your Email
                <TextField
                  type="email"
                  id="email"
                  variant="outlined"
                  style={{ display: "block", fontSize: "1.2rem" }}
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  sx={{
                    "&::placeholder": {
                      color: "yellow",
                    },
                  }}
                />
              </label>
              <label htmlFor="subject" style={{ display: "block", fontSize: "1.2rem" }}>
                Subject
                <TextField
                  type="subject"
                  id="subject"
                  variant="outlined"
                  style={{ display: "block", fontSize: "1.2rem" }}
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  sx={{
                    "&::placeholder": {
                      color: "yellow",
                    },
                  }}
                />
              </label>
              {/* <label htmlFor="file" style={{ display: "block", fontSize: "1.2rem" }}>
                Choose a file to upload, for translation inquiry only.
                <Input
                  id="file"
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  style={{ display: "block", fontSize: "1.2rem" }}
                />
                </label>

            <label htmlFor="sourceLang" style={{ display: "block", fontSize: "1.2rem" }}>
              Source Language
              <Select
                id="sourceLang"
                options={sourceLangOptions}
                value={form.selectedSourceLang}
                onChange={handleSourceLangChange}
                placeholder="Select source language"
              />
            </label>

            <label htmlFor="targetLang" style={{ display: "block", fontSize: "1.2rem" }}>
              Target Language
              <Select
                id="targetLang"
                options={targetLangOptions}
                value={form.selectedTargetLang}
                onChange={handleTargetLangChange}
                placeholder="Select target language"
              />
            </label> */}

              <label htmlFor="message" style={{ display: "block", fontSize: "1.2rem" }}>
                Your Message
                <TextField
                  id="message"
                  name="message"
                  multiline
                  rows={5}
                  style={{ display: "block", height: "100px", fontSize: "1.2rem" }}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                />
              </label>
              <Button variant="contained" type="submit" style={{ fontSize: "1.2rem" }}>{loading ? "Sending..." : "Send"}</Button>
              <Box>{message && <div dangerouslySetInnerHTML={{ __html: message }} />}</Box>
            </FormControl>
          </Grid>
        </form>
      </Grid>

    </Box>
  );
}
