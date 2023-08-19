import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack
      bgColor="#0d1117"
      pl="20px"
      gap="50px"
      fontSize={18}
      fontFamily={'cursive'}
      color={'white'}
      h="60px"
      as="nav"
      p={4}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
    >
      <Link to={'/'}>Home</Link>
      <Link to={'/exchange'}>Exchange</Link>
      <Link to={'/coins'}>Coins</Link>
    </HStack>
  );
};

export default Header;
