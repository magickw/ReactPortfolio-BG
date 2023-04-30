import React from 'react';
import { Box, Grid } from '@mui/material';
import { PDFViewer, PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import MyResume from '../../assets/cv.pdf';

export default function Resume() {
  const renderPDF = () => {
    return (
      <PDFViewer width="70%" height="800">
        <iframe src={MyResume} title="resume" width="100%" height="100%" />
      </PDFViewer>
    );
  };

  const renderDownloadLink = () => {
    return (
      <PDFDownloadLink document={<Document file={MyResume}><Page pageNumber={1} /></Document>} fileName="MyResume.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    );
  };

  return (
    <Box>
      <Grid container justifyContent="center">
        {renderPDF()}
      </Grid>
      <Box display="flex" justifyContent="center" fontSize={{ xs: '2rem', md: '2.5rem' }}>
        {renderDownloadLink()}
      </Box>
    </Box>
  );
};
