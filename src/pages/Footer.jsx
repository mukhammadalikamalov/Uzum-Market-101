import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box bgcolor={"grey.900"} color={"white"} padding={10} textAlign={"center"}>
      <Typography variant="body2">© 2024 Your Company</Typography>
    </Box>
  );
}

export default Footer;
