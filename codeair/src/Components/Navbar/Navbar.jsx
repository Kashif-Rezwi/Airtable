import { Box, Button, Container, HStack, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Enterprice } from "./Enterprice"
import { Product } from "./Product"
import { Resources } from "./Resources"
import { Solutions } from "./Solutions"
import "./navbar.css"

export const Navbar = () => {
    return (
        <Container zIndex={"100"} display={"flex"} justifyContent={"space-between"} maxW='100%' bg='white' className="navbar" m={0}>

            <HStack h={"80px"} w={"45%"} justifyContent={"space-between"}>

                <Box w={"120px"} m={"10px"}>
                    <Image src='/Images/codeair_logo.png' alt='logo' />
                </Box>

                <HStack h={"100%"} className="menu" w={"80%"} justifyContent={"space-between"} >

                    <Product />

                    <Solutions />

                    <Text p={"0px 5px"} display={"flex"} alignItems={"center"} justifyContent={"center"} h={"100%"}>
                        <Link>Pricing</Link>
                    </Text>

                    <Enterprice />

                    <Resources />

                </HStack>

            </HStack>

            <Box display={"flex"} alignItems={"center"} w={"55%"} justifyContent={"flex-end"}>

                <Button mr={"20px"}>Contact sales</Button>
                <Button mr={"20px"}>Sign up for free</Button>
                <Button mr={"30px"}>Sign in</Button>

            </Box>

        </Container>
    )
}