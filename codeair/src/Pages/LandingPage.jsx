import { Box, Container } from "@chakra-ui/react"
import { HomeContent } from "../Components/HomeContent"
import { Navbar2 } from "../Components/Navbar/Navbar2"

export const LandingPage = () => {
    return (
        <>
            <Container maxW='100%' maxH={"100vh"} overflow={"hidden"} p={0}>

                <Navbar2 />

                <Box boxSizing="border-Box" w={"100%"} bg={"#ecf3ff"} >
                    <HomeContent />
                </Box>

            </Container>
        </>
    )
}