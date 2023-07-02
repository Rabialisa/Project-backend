import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title="About us - Emart">
      
      <div>
            <h1 className="text-center">Online Shopping in Bangladesh </h1> <br/>  
            <br/>
            <br/>
            <h4 className="bg-dark p-2 text-white text-center">Order Now from emart.com.bd</h4>
            <br/>
           
            
            <p className="text-justify mt-2 text-center">
              any query and info about product feel free to call any time we 24X7
              available
            </p>
            <br/>
            <p className="text-justify mt-2 text-center">•  <b>emart </b> brings you wide variety of products with great offers and fast delivery.
            <br/>
• <b> emart </b> brings you groceries, tech products, fashion, home decor and so much more.</p>
            
      </div>
        
     
    </Layout>
  );
};

export default About;
