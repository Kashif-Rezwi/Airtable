import {
    Box,
    Container,
    Stack,
    Image,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Links = () => {
    return (
        <Box p={"0px"}
            w={"100%"}
            bg={"#fbfbfc"}
            overflow={"hidden"} 
            boxSizing={"border-box"}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                m={"0 40px"}
                maxW={"100%"}
                as={Stack}
                py={2}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Stack direction={'row'} spacing={6} justifyContent={"center"} alignItems={"center"} boxSizing={"border-box"}>
                    <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Product</Link>
                    <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Solutions</Link>
                    <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Pricing</Link>
                    <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Enterprise</Link>
                    <Link _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Contact Sales</Link>
                </Stack>

                <Box
                    as={Stack}
                    maxW={'100%'}
                    py={2}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>

                    <Stack direction={'row'} spacing={6}>

                    <Link _hover={{ textDecoration: "none", color: "gray" }} fontWeight={"bold"} fontSize={"25px"}><FaFacebook /></Link>
                    <Link _hover={{ textDecoration: "none", color: "gray" }} fontWeight={"bold"} fontSize={"25px"}><FaLinkedin /></Link>
                    <Link _hover={{ textDecoration: "none", color: "gray" }} fontWeight={"bold"} fontSize={"25px"}><FaTwitter /></Link>
                    <Link _hover={{ textDecoration: "none", color: "gray" }} fontWeight={"bold"} fontSize={"25px"}><FaInstagram /></Link>
                    <Link _hover={{ textDecoration: "none", color: "gray" }} fontWeight={"bold"} fontSize={"25px"}><FaYoutube /></Link>
                        
                    </Stack>
                </Box>

            </Container>
        </Box>
    );
}