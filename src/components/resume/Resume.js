import React from 'react';
import { Box, Button } from '@mui/material';
import { PDFViewer, PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import MyResume from './cv.pdf?raw';
import Style from './Resume.module.scss';

export default function Resume() {
  const PDFViewerComponent = () => (
    <Box display="flex" justifyContent="center">
      <PDFViewer width="70%" height="800">
        <Document file={MyResume} title="myresume" width="100%" height="100%">
          <Page pageNumber={1} />
        </Document>
      </PDFViewer>
    </Box>
  );

  const PDFDownloadLinkComponent = () => (
    <Box display="flex" justifyContent="center" fontSize={{ xs: '2rem', md: '2.5rem' }}>
      <PDFDownloadLink document={<Document file={MyResume}><Page pageNumber={1} /></Document>} fileName="BaofengResume.pdf">
        {({ loading }) => (
          <Button variant="outlined" className={Style.resumeButton} sx={{ borderColor: 'green' }}>
            {loading ? 'Loading document...' : 'Download now!'}
          </Button>
        )}
      </PDFDownloadLink>
    </Box>
  );

  return (
    <Box>
      <PDFDownloadLinkComponent />
      <PDFViewerComponent />
      <PDFDownloadLinkComponent />
    </Box>
  );
};
