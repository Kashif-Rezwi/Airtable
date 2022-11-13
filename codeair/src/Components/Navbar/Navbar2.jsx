import { Box, Button, Container, HStack, Image, Stack, Text, UnorderedList } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { NavBtn3 } from "./NavBtn3"
import { NavBtn1 } from "./NavBtn1"
import { NavBtn2 } from "./NavBtn2"

export const Navbar2 = () => {

    const navigate = useNavigate()

    const handleHome = () => {
        return navigate("/home")
    }

    return (
        <Container zIndex={"100"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} maxW='100%' bg='white' className="navbar2" m={0} p={{
            base: "5px 10px",
            md: "8px 30px",
            lg: "10px 30px",
        }}>


            <Box onClick={handleHome} w={"100px"} m={"5px"}>
                <Image src='/Images/codeair_logo.png' alt='logo' />
            </Box>

            <Box p={"5px"} display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
                <NavBtn1/>
                <NavBtn2/>
                <NavBtn3/>
            </Box>

        </Container>
    )
}