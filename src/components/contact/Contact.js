import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Select from 'react-select';

import {
  Box,
  Grid,
  FormControl,
  TextField,
  Button,
  Paper,
  Typography,
  Divider,
  // Input,
} from "@mui/material";
import { info } from "../../info/Info";
import Zoom from "react-reveal/Zoom";
import Guestbook from "./Guestbook";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Fade from 'react-reveal/Fade';


export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // file: null,
    selectedSourceLang: null,
    selectedTargetLang: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sourceLangOptions = [
    { value: 'en', label: 'English' },
    { value: 'zh-CN', label: 'Chinese (Simplified)' },
    { value: 'zh-TW', label: 'Chinese (Traditional)' },
  ];

  const targetLangOptions = [
    { value: 'en', label: 'English' },
    { value: 'zh-CN', label: 'Chinese (Simplified)' },
    { value: 'zh-TW', label: 'Chinese (Traditional)' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setForm({ ...form, file: e.target.files[0] });
  // };

  const handleSourceLangChange = (selectedOption) => {
    setForm({ ...form, selectedSourceLang: selectedOption });
  };

  const handleTargetLangChange = (selectedOption) => {
    setForm({ ...form, selectedTargetLang: selectedOption });
  };

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
    formData.append("selectedSourceLang", form.selectedSourceLang.value);
    formData.append("selectedTargetLang", form.selectedTargetLang.value);

    // Email validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setLoading(false);
      setMessage("<div>Please enter a valid email address.</div>");
      return;
    }

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
            selectedSourceLang: null,
            selectedTargetLang: null
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
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      py: 8
    }}>
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
        flexDirection="row"
        spacing={5}
        justifyContent="center"
        sx={{
          padding: "60px",
          "@media (min-width: 960px)": {
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "20px",
            paddingBottom: "20px",
          },
        }}
      >
         <Grid item xs={12} md={6}>
           <Fade bottom>
             <Paper elevation={6} sx={{
               p: 4,
               borderRadius: 4,
               boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
               transition: 'box-shadow 0.3s',
               '&:hover': {
                 boxShadow: '0 16px 48px 0 rgba(31, 38, 135, 0.25)'
               },
               background: 'rgba(255,255,255,0.95)'
             }}>
               <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={1}>
                 <MailOutlineIcon color="primary" />
                 <Typography variant="h5" fontWeight="bold" gutterBottom>
                   Get in Touch
                 </Typography>
               </Box>
               <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
                 Ask me something about translation and full-stack development.
               </Typography>
               <Divider sx={{ my: 2, borderColor: 'primary.main' }} />
               <Box component="form" ref={formRef} onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
                 <FormControl>
                    <TextField
                      label="Your Name"
                      type="text"
                      id="name"
                      name="name"
                      variant="outlined"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      fullWidth
                      required
                    />
                    <TextField
                      label="Your Email"
                      type="email"
                      id="email"
                      name="email"
                      variant="outlined"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      fullWidth
                      required
                    />
                    <TextField
                      label="Subject"
                      type="text"
                      id="subject"
                      name="subject"
                      variant="outlined"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      fullWidth
                      required
                    />
                    <Box mt={1} />
                    <label htmlFor="sourceLang" style={{ fontSize: "1.1rem", marginBottom: 4 }}>
                      Source Language
                      <Select
                        id="sourceLang"
                        options={sourceLangOptions}
                        value={form.selectedSourceLang}
                        onChange={handleSourceLangChange}
                        placeholder="Select source language"
                      />
                    </label>
                    <label htmlFor="targetLang" style={{ fontSize: "1.1rem", marginBottom: 4 }}>
                      Target Language
                      <Select
                        id="targetLang"
                        options={targetLangOptions}
                        value={form.selectedTargetLang}
                        onChange={handleTargetLangChange}
                        placeholder="Select target language"
                      />
                    </label>
                    <TextField
                      label="Your Message"
                      id="message"
                      name="message"
                      multiline
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      fullWidth
                      required
                    />
                    <Button variant="contained" type="submit" sx={{ fontSize: "1.1rem", mt: 2, background: info.baseColor, '&:hover': { background: info.baseColor } }} fullWidth>{loading ? "Sending..." : "Send"}</Button>
                    <Box>{message && <div dangerouslySetInnerHTML={{ __html: message }} />}</Box>
                  </FormControl>
               </Box>
             </Paper>
           </Fade>
         </Grid>
         <Grid item xs={12} md={6}>
           <Fade bottom delay={200}>
             <Paper elevation={6} sx={{
               p: 4,
               borderRadius: 4,
               boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
               transition: 'box-shadow 0.3s',
               '&:hover': {
                 boxShadow: '0 16px 48px 0 rgba(31, 38, 135, 0.25)'
               },
               background: 'rgba(255,255,255,0.95)'
             }}>
               <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={1}>
                 <ChatBubbleOutlineIcon color="primary" />
                 <Typography variant="h5" fontWeight="bold" gutterBottom>
                   Guestbook
                 </Typography>
               </Box>
               <Divider sx={{ my: 2, borderColor: 'primary.main' }} />
               <Guestbook />
             </Paper>
           </Fade>
         </Grid>
      </Grid>
    </Box>
  );
}
