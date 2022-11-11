import { Box, Container, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <Container zIndex={"100"} display={"flex"} justifyContent={"center"} alignItems={"center"} maxW='100%' bg='#f0f6ff' m={0} fontSize={{base:"13px", md: "14px", lg: "15px"}} textAlign={"left"} p={"10px"}>

            <Text mr={"15px"} color={"#545a62"} >
                Join our webinar to see how new Airtable features can transform your work
            </Text>

            <Link>
                <Box className="register">
                    <Text fontWeight={"500"} >Register</Text>
                    <span>&#8594;</span>
                </Box>
            </Link>

        </Container>
    )
}