import { Box, Heading, Image, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { server } from '../index';

const Coindata = ({ name, image, symbol, price,id }) => {
  return (
    <Link to={`/coin/${id}` }>
      <VStack
        w={'52'}
        shadow={'lg'}
        p={'8'}
        borderRadius={'lg'}
        transition={'all 0.3s'}
        margin={"4"}
        css={{
          "&:hover":{
            transform:"scale(1.2)"
          }
        }}
      >
        <Image
          src={image}
          w={'10'}
          h={'10'}
          objectFit={'contain'}
          alt={'exchange'}
        />
        <Heading size={'md'} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price? `₹${price}`:"NA"}</Text>
      </VStack>
    </Link>
  );
};

export default Coindata;
