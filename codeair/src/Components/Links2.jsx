import {
    Box,
    Container,
    Stack,
    Image,
    Link,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';

import React, { Component } from 'react'
import ReactStoreBadges from 'react-store-badges'

export const Links2 = () => {
    return (
        <Box p={"0px"}
            w={"100%"}
            bg={"#f2f4f7"}
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
                    <Link fontSize={"14px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Security</Link>
                    <Link fontSize={"14px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>API</Link>
                    <Link fontSize={"14px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Sitemap</Link>
                    <Link fontSize={"14px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Privacy</Link>
                    <Link fontSize={"14px"} lineHeight={"15px"} _hover={{ textDecoration: "none" }} fontWeight={"bold"}>Terms</Link>
                </Stack>
 
                <Box
                    as={Stack}
                    maxW={'100%'}
                    direction={{ base: 'column', md: 'row' }}
                    h={"100%"} p={"10px 0px"}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>

                    <Stack direction={'row'} spacing={6} pr={"3px"} color={"#747474"}>

                        <ReactStoreBadges
                            platform={'ios'}
                            url={'#'}
                            locale={'en-us'}
                            maxW={"100px"}
                        />
                        
                        <ReactStoreBadges
                            platform={'android'}
                            url={'#'}
                            locale={'en-us'}
                            maxW={"100px"}
                        />

                    </Stack>
                </Box>

            </Container>
        </Box>
    );
}