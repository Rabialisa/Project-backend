import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport} from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title="Contact Us - Emart">
      <div className="row contactus">
      <div className="col-md-6">
         <img src="\images\images\images.jpeg" alt="center"/>
          </div>
          <div className="col-md-4">
            <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
            <p className="text-justify mt-2">
              any query and info about product feel free to call any time we 24X7
              available
            </p>
            <p className="mt-3">
              <BiMailSend /> : www.contact@emart.com
            </p>
            <p className="mt-3">
              <BiPhoneCall /> : 03487690
            </p>
            <p className="mt-3">
              <BiSupport /> : 100-007-867 (toll free) 
            </p>
          </div>
        </div>
     
      
    </Layout>
  );
};

export default Contact;
