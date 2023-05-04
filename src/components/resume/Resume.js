import React, { useState, useEffect } from "react";
import { Box, Button } from '@mui/material';
import MyResume from './Baofeng_Guo_Resume.pdf?raw';
import { FaDownload } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import Style from './Resume.module.scss';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Resume() {
  const [width, setWidth] = useState(1200);
  

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          href={MyResume}
          target="_blank"
          variant="outlined"
          className={Style.resumeButton}
          sx={{ borderColor: 'green' }}
        >
          <FaDownload />
          &nbsp;Download CV
        </Button>
      </Box>

      <Box display="flex" justifyContent="center">
        <Document file={MyResume} style={{ position: "relative" }}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Box>
    </Box>
  );
}

