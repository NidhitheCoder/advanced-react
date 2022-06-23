import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NavigateItem from '../components/NavigateItem';

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
            <Flex direction="row" w="full">
                <NavigateItem title="Arrow" progress={80} />
                <NavigateItem title="Ideas that make an impact" progress={12} />
                <NavigateItem title="Join our team" progress={12} />
                <NavigateItem title="Case studies and stories" progress={12} />
                <NavigateItem title="Leading through challange" progress={12} />
            </Flex>
            <Link to="/list">ListPage</Link>
        </Flex>
    );
};

export default Homepage;
