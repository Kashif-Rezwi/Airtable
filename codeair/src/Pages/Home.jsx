import { Box, Button, Container, Grid, Text, VStack } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import { Navbar } from "../Components/Navbar/Navbar"
import { Register } from "../Components/Navbar/Register"

export const Home = () => {

    const video = useRef(null);

    const attemptPlay = () => {
        video &&
            video.current &&
            video.current.play();
    }

    useEffect(() => {
        attemptPlay()
    }, [])

    return (
        <Container maxW='100%' p={0}>

            <Box position={"sticky"} top={"0"}>
                <Register />
                <Navbar />
            </Box>

            <Box boxSizing="border-Box" w={"100%"} bg={"#ecf6fc"} p={{
                base: "20px",
                md: "30px",
                lg: "60px",
            }}>
                <Grid
                    h={"100%"}
                    templateColumns={{
                        base: "repeat(1,1fr)",
                        md: "repeat(1,1fr)",
                        lg: "repeat(2,1fr)",
                    }}>

                    <Box display={"flex"} alignItems={"center"}>
                        <VStack textAlign={"left"} alignItems={"flex-start"}>

                            <VStack
                                alignItems={"flex-start"}
                                fontSize={"60px"}
                                fontWeight={"bolder"}
                                lineHeight={"70px"}
                                color={"#333333"}>
                                <Text textAlign={"left"}
                                    w={{
                                        base: "100%",
                                        md: "80%",
                                        lg: "330px",
                                    }}>Connect everything. Achieve anything.</Text>
                            </VStack>

                            <Text
                                fontSize={"21px"}
                                lineHeight={"25px"}
                                fontWeight={"bolder"}
                                w={{
                                    base: "100%",
                                    md: "80%",
                                    lg: "500px",
                                }} p={"20px 0px"}>
                                Accelerate work and unlock potential with powerful apps that connect your data, workflows and teams. This is how.
                            </Text>

                            <Button colorScheme={"blue"}>Sign up for free</Button>
                        </VStack>
                    </Box>

                    <Box display={"flex"} alignItems={"center"}>
                        <video src={"/Images/Homepage_vid1.mp4"} width="750" height="500" autoPlay loop>
                        </video>
                    </Box>

                </Grid>
            </Box>

        </Container>
    )
}