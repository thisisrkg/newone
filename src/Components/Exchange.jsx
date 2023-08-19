import React, { useState, useEffect } from 'react';
import { Box, Container, HStack } from '@chakra-ui/react';
import axios from 'axios';
import Coinchange from './Coinchange';
import { server } from '../index';
import Loader from './Loader';


const Exchange = () => {
  const [exchange, setExchange] = useState([]);
  const [loading,setloading]=useState(true)

  useEffect(() => {
    try {
      const fetcheach = async () => {
        const data = await axios.get(`${server}/exchanges`);
        setExchange(data.data);
        setloading(false);
      };
      fetcheach();
    } catch (error) {
      console.log('error shown');
      setloading(false);
    }
  }, []);

  return (
    <Container  maxW="container.xl">
    {(loading)?(<Loader/>):  <HStack  wrap={'wrap'} justifyContent={'space-evenly'}>
      {
        exchange.map(coin => (
        <Coinchange key={coin.id} name={coin.name} image={coin.image} rank={coin.trust_score_rank} url={coin.url} />
      ))
      }
    </HStack> }
      
    </Container>
  );
};

export default Exchange;
