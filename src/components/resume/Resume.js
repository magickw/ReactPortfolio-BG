import React from 'react';
import { Box, Button, Alert } from '@mui/material';
import { PDFViewer, PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import MyResume from './Baofeng_Guo_Resume.pdf?raw';
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
            {loading ? 'Loading document...' : 'Download CV'}
          </Button>
        )}
      </PDFDownloadLink>
    </Box>
  );

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
      >
        <Alert
          severity="error"
          sx={{
            width: '50%',
            '@media (max-width: 600px)': {
              width: '90%',
            }
          }}>I am having trouble displaying my resume on the webpage using the react-pdf/renderer npm library. While I work to fix the issue, you can download my CV by clicking <a href='https://github.com/magickw/ReactPortfolio-BG/blob/ca7190bbdd0100814fb0d3e75012bd34cba71a5d/src/components/resume/cv.pdf'>here</a>.</Alert>
      </Box>
      <PDFDownloadLinkComponent />
      <PDFViewerComponent />
      <PDFDownloadLinkComponent />
    </Box>
  );
};

// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import { Box, Button } from '@mui/material';
// import MyResume from './cv.pdf?raw';
// import Style from './Resume.module.scss';
// import * as FileSaver from 'file-saver';

// export default function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [loading, setLoading] = useState(false);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }

//   function onDownloadClick() {
//     setLoading(true);
//     fetch(MyResume)
//       .then(res => res.blob())
//       .then(blob => {
//         FileSaver.saveAs(blob, 'my_resume.pdf');
//         setLoading(false);
//       });
//   }

//   return (
//     <Box>
//       <Box display="flex" justifyContent="center">
//         <Document file={MyResume} onLoadSuccess={onDocumentLoadSuccess}>
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </Box>
//       <Box
//         display="flex"
//         justifyContent="center"
//         fontSize={{ xs: '2rem', md: '2.5rem' }}
//       >
//         <Button
//           variant="outlined"
//           className={Style.resumeButton}
//           sx={{ borderColor: 'green' }}
//           onClick={onDownloadClick}
//         >
//           {loading ? 'Loading document...' : 'Download now!'}
//         </Button>
//       </Box>
//     </Box>
//   );
// }
