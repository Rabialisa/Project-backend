import React from 'react';
import Layout from '../components/Layout/Layout';


const HomePage = () => {
  return (
    <Layout>
      
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    <img src="\images\images\e-commerce-website.png"/>
      
      <h1 style={{ paddingLeft: '40px' }}>Welcome to Emart</h1>
      
      </div>
        
    </Layout>
  );
}

export default HomePage;
