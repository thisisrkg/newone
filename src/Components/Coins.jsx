import React, { useState, useEffect } from 'react';
import { Box, Container, HStack, Button } from '@chakra-ui/react';
import axios from 'axios';
import Coindata from './Coindata';
import { server } from '../index';
import Loader from './Loader';
import Error from './Error';

const Coins = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [currency, setCurrency] = useState('inr');
  const [errors, seterrors] = useState(false);

  const changepage = page => {
    setpage(page);
    setloading(true);
  };
  const btn = new Array(130).fill(1);

  useEffect(() => {
    try {
      const fetcoin = async () => {
        const data = await axios.get(
          `${server}/coins/markets?vs_currency=inr&page=${page}`
        );
        console.log(data);
        setExchange(data.data);
        setloading(false);
      };
      fetcoin();
    } catch (error) {
      setloading(false);
      seterrors(true);
    }
  }, [page]);
 
 
  return (
    
    <Container maxW="container.xl">
 
      {loading ? ( 
        <Loader />
      ) : (
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {exchange.map(coin => (
            <Coindata
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              id={coin.id}
            />
          ))}
        </HStack>
      )}
      <HStack w={'full'} overflow={'auto'} p={'8'}>
        {btn.map((item, index) => (
          <Button
            bgColor={'blackAlpha.900'}
            color={'white'}
            onClick={() => changepage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Container>
  );
};

export default Coins;
