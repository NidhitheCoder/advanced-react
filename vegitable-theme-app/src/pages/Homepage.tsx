import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Homepage = () => {
    return (
        <Flex
            h="full"
            w="full"
            alignItems="center"
            justifyContent="space-around"
            flexWrap="wrap"
        >
            <Navbar />
            <Link to="/list">ListPage</Link>
        </Flex>
    );
};

export default Homepage;
