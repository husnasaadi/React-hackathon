import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addtoCart, removeSingleCart } from '../store/Slices/addtoCartSlice';

export default function Cards({ title = "Product", img, desc = "", product, removeCart }) {
  const dispatch = useDispatch();

  // Fallback if img or desc is missing
  const imageSrc = img || "https://via.placeholder.com/160"; 
  const description = desc ? desc.slice(0, 99) : "No description available."; // Default description

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={imageSrc} // Using fallback image if img is undefined
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {removeCart ? (
          <Button
            onClick={() => dispatch(removeSingleCart(product))}
            size="small"
            variant="contained"
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={() => dispatch(addtoCart(product))}
            size="small"
            variant="contained"
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
