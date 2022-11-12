import { Box, Button, Container, HStack, Image, Stack, Text, UnorderedList } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { Enterprice } from "./Enterprice"
import { Product } from "./Product"
import { Resources } from "./Resources"
import { Solutions } from "./Solutions"
import "./navbar.css"
import { Sidebar } from "./Sidebar"

export const Navbar = () => {

    const navigate = useNavigate()

    const handleContact = () => {
        return navigate("/contact-sales")
    }

    const handleSignUp = () => {
        return navigate("/sign-up")
    }

    const handleSignIn = () => {
        return navigate("/sign-in")
    }

    const handleHome = () => {
        return navigate("/")
    }

    return (
        <Container zIndex={"100"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} maxW='100%' bg='white' className="navbar" m={0} h={"80px"} p={{
            base: "0px 10px",
            md: "0px 30px",
            lg: "0px 30px",
        }}>

            <UnorderedList m={"0"} p={"0"} display={{ base: "none", md: "none", lg: "block" }}>
                <HStack zIndex={"100"} w={"100%"} justifyContent={"space-between"}>

                    <Box onClick={handleHome} w={"120px"} m={"0px  10px 0px 30px"}>
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
            </UnorderedList>

            <UnorderedList m={"0"} p={"0"} display={{ base: "block", md: "block", lg: "none" }}>
                <Box onClick={handleHome} w={"120px"} m={"10px"}>
                    <Image src='/Images/codeair_logo.png' alt='logo' />
                </Box>
            </UnorderedList>

            <UnorderedList m={"0"} p={"0"} display={{ base: "none", md: "none", lg: "block" }}>
                <Box zIndex={"100"} display={"flex"} alignItems={"center"} w={"100%"} justifyContent={"space-between"} p={"10px"}>

                    <Button fontSize={{ base: "12px", md: "13px", lg: "14px" }} colorScheme='gray' variant='outline' mr={"20px"} onClick={handleContact}>Contact sales</Button>

                    <Button onClick={handleSignUp}  fontSize={{ base: "12px", md: "13px", lg: "14px" }} colorScheme={"messenger"} mr={"5px"}>Sign up for free</Button>

                    <Button onClick={handleSignIn} fontSize={{ base: "12px", md: "13px", lg: "14px" }} bg={"white"} color='black' _active={{ color: "blue", bg: "transparent" }} _hover={{ bg: "transparent" }} textDecoration={"none"} mr={"10px"}>Sign in</Button>

                </Box>
            </UnorderedList>

            <UnorderedList m={"0"} p={"0"} display={{ base: "block", md: "block", lg: "none" }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Button minW={"100px"} fontSize={{ base: "12px", md: "13px", lg: "14px" }} colorScheme={"messenger"} mr={"5px"}>Sign up</Button>
                    <Sidebar />
                </Box>
            </UnorderedList>

        </Container>
    )
}