import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box 
      bgcolor={"grey.900"} 
      color={"white"} 
      padding={2} 
      textAlign={"center"} 
      position={"fixed"} 
      bottom={0} 
      width={"100%"} 
      zIndex={1000}
    >
      <Typography variant="body2">© 2024 Your Company</Typography>
    </Box>
  );
}

export default Footer;
