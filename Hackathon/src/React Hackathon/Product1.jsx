import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/Slices/productSlice';
import Cards from './cards';
import { Grid } from '@mui/material';
import Header from './Header'; // Ensure Header is imported

const Home = () => {
  const { isLoading, isError, products } = useSelector(state => state.productReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Header /> {/* Assuming Header is defined elsewhere */}
      <Grid container>
        {
          isLoading ? <h1>Loading...</h1> : 
          isError ? <h1>Error fetching data...</h1> :  // Error handling for failed data fetch
          products.map((product, index) => {
            return (
              <Grid style={{ marginTop: 25 }} key={product.id || index} item lg={3}>
                <Cards 
                  product={product} 
                  title={product.title} 
                  desc={product.description} 
                  img={product.image}
                />
              </Grid>
            );
          })
        }
      </Grid>
    </>
  )
}

export default Home;
