import {
    Box,
    Container,
    Stack,
    Image,
    Link,
    useColorModeValue,
    UnorderedList,
} from '@chakra-ui/react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Links = () => {
    return (
        <Box p={"0px"}
            w={"100%"}
            bg={"white"}
            boxSizing={"border-box"}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                maxW={"100%"}
                as={Stack}
                py={2}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                alignItems={"center"}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center', lg: "center" }}>

                <Stack direction={'row'} spacing={{ base: "4", md: "5.5", lg: "6" }} justifyContent={"center"} alignItems={"center"} boxSizing={"border-box"} >

                    <UnorderedList m={"0"} p={"0"} display={{ base: "none", md: "block", lg: "block" }}>
                        <Box w={{ base: "70px", md: "100px", lg: "100px" }} boxSizing={"border-box"}>
                            <Image src='/Images/codeair_logo.png' alt='logo' />
                        </Box>
                    </UnorderedList>

                    <Link fontSize={"14px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Product</Link>
                    <Link fontSize={"14px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Solutions</Link>
                    <Link fontSize={"14px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Pricing</Link>
                    <Link fontSize={"14px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Enterprise</Link>
                    <Link fontSize={"14px"} lineHeight={"15px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Contact Sales</Link>
                </Stack>

                <Box
                    as={Stack}
                    maxW={'100%'}
                    direction={{ base: 'column', md: 'row' }}
                    h={"100%"} p={"10px 0px"}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>

                    <Stack direction={'row'} spacing={6} pr={"3px"} color={"#747474"} h={"100%"}>

                        <Link _hover={{ textDecoration: "none", color: "#8f8f8f" }} fontWeight={"bold"} fontSize={"20px"}><FaFacebook /></Link>
                        <Link _hover={{ textDecoration: "none", color: "#8f8f8f" }} fontWeight={"bold"} fontSize={"20px"}><FaLinkedin /></Link>
                        <Link _hover={{ textDecoration: "none", color: "#8f8f8f" }} fontWeight={"bold"} fontSize={"20px"}><FaTwitter /></Link>
                        <Link _hover={{ textDecoration: "none", color: "#8f8f8f" }} fontWeight={"bold"} fontSize={"20px"}><FaInstagram /></Link>
                        <Link _hover={{ textDecoration: "none", color: "#8f8f8f" }} fontWeight={"bold"} fontSize={"20px"}><FaYoutube /></Link>

                    </Stack>
                </Box>

            </Container>
        </Box>
    );
}