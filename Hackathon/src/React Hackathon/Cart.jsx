import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards'; 
import { Grid } from '@mui/material';

const Cart = () => {
  const { addtoCart } = useSelector((state) => state.addToCart); // Ensure you're accessing the correct part of the state

  return (
    <div>
      <h1>Your Cart</h1>
      <Grid container>
        {addtoCart.length === 0 ? (
          <h2>Your cart is empty</h2>
        ) : (
          addtoCart.map((product, index) => (
            <Grid item lg={3} key={product.id || index} style={{ marginTop: 25 }}>
              <Cards
                product={product}
                title={product.title}
                desc={product.description}
                img={product.image}
                removeCart={true} // Indicate this card is for removing from cart
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Cart;
