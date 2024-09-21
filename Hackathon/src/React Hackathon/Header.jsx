import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/Slices/productSlice';
import Cards from './Cards';
import { Grid } from '@mui/material';
import Header from './Header'; // Ensure Header is imported

const Home = () => {
  const { isLoading, isError, products } = useSelector(state => state.products); // Access the products state correctly
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Header /> {/* Assuming Header is defined elsewhere */}
      <Grid container>
        {isLoading ? <h1>Loading...</h1> : 
         isError ? <h1>Error fetching data...</h1> : 
         products.map((product, index) => (
            <Grid style={{ marginTop: 25 }} key={product.id || index} item lg={3}>
              <Cards 
                product={product} 
                title={product.title} 
                desc={product.description} 
                img={product.image} 
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Home;
