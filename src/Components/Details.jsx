import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from "react-icons/fa6"
import Loading from './Loading';
import { ImMan } from "react-icons/im";

function Details() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className='flex flex-col align-middle justify-center items-center'>
      <h2 className=' text-2xl font-extrabold p-2 m-4'>{product.title}</h2>
      <img className='border-4 p-4' src={product.image} alt={product.title} width="250" />
      
      <p className='font-bold text-2xl'>Price: ${product.price}</p>
      <div className='flex p-4'>
      <p className='font-bold text-2xl'>{product.rating.count} Reviews</p>
      <ImMan size={30}/>
      </div>
      <div className='flex  justify-center align-middle items-center'>
      <p className='font-bold text-2xl'>Ratings {product.rating.rate} </p>
      
      

      <FaStar size={20} className=' text-yellow-500 ' /> 
      </div>
      
      
      <p className='font-bold text-xl m-8 '> Description:<span className='font-semibold text-lg text-gray-700'> {product.description}</span></p>
      
    </div>
    </div>
  );
}

export default Details;
