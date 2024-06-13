import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Footer from './Footer';

const Media = () => {
  return (
    <>
      <Box 
        bgcolor={{ xs: "yellow", sm: "yellow", md: "red" }} 
        padding={2} 
        width={"100%"} 
        position={"fixed"} 
        top={0} 
        zIndex={1000}
      >
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Box bgcolor={"blue"} width={"50px"} height={"50px"} borderRadius={"100%"} />
          <Stack display={{ xs: "none", sm: "none", md: "flex" }} direction={"row"} gap={10} alignItems={"center"}>
            <Typography>About</Typography>
            <Typography>Location</Typography>
            <Typography>Careers</Typography>
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Button variant="contained">Get Scootin</Button>
          </Stack>
        </Stack>
      </Box>
      <Box paddingTop={"80px"}>
        <Box bgcolor={"blue"} width={"100%"} height={"600px"}></Box>
      </Box>
      <Box>
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 4, md: 20 }} justifyContent={"center"}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Box key={index} bgcolor={"lightseagreen"} width={"200px"} height={"200px"} borderRadius={"100%"} my={{ xs: 4, md: 8 }} alignItems={"center"} justifyContent={"center"}></Box>
          ))}
        </Stack>
      </Box>
      <Box marginY={4}>
        <Stack direction={{ xs: "column", md: "row" }} gap={4} justifyContent={"center"} alignItems={"center"} my={{ xs: 8, md: 12 }}>
          <Typography variant='h5' width={"900px"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, repudiandae doloremque tempore consequuntur totam ducimus deserunt debitis vel veritatis architecto corrupti, itaque sapiente! Nulla eius aliquam hic, beatae adipisci velit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, repudiandae doloremque tempore consequuntur totam ducimus deserunt debitis vel veritatis architecto corrupti, itaque sapiente! Nulla eius aliquam hic, beatae adipisci velit!</Typography>
          <Box bgcolor={"lightseagreen"} width={"200px"} height={"200px"} borderRadius={"100%"}></Box>
        </Stack>
      </Box>
      <Box paddingTop={"80px"} mb={{ xs: 8, md: 20 }}>
        <Grid container spacing={2} padding={2}>
          {Array.from(Array(10).keys()).map((index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://via.placeholder.com/150?text=Image+${index + 1}`}
                  alt={`Image ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Card Title {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default Media;
