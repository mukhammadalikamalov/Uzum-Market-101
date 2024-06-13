import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import GetGoods from "../../hooks/getGoods";

const BagModal = ({ item }) => {
  const { bagGoods } = GetGoods();
  const myProd = bagGoods && bagGoods.find((good) => +good.prod_id === +item.id);

  const handleRemove = (id) => {
    // Add your remove functionality here
    console.log(`Remove item with id: ${id}`);
  };

  return (
    <Box sx={{ backgroundColor: 'white', padding: '10px', boxShadow: 3 }}>
      {item && (
        <Link to={`/product?id=${item.id}`} style={{ textDecoration: 'none' }}>
          <Card sx={{ display: 'flex', backgroundColor: 'white', margin: '0', boxShadow: 0, alignItems: 'center', borderBottom: '1px solid #e0e0e0', padding: '5px 0' }}>
            <CardMedia
              component="img"
              sx={{ width: 100, height: 80 }}
              image={item.media[0]}
              alt={item.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <CardContent sx={{ flex: '1 0 auto', padding: '0 10px' }}>
                <Typography variant="body2" noWrap>
                  {item.title.slice(0, 40)}...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price -
                    Math.floor((item.price * item.salePercentage) / 100)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " "}
                  руб X {myProd && myProd.num}
                </Typography>
              </CardContent>
            </Box>
            <IconButton edge="end" onClick={() => handleRemove(item.id)} sx={{ marginRight: '10px' }}>
              <DeleteIcon />
            </IconButton>
          </Card>
        </Link>
      )}
    </Box>
  );
};

export default BagModal;
