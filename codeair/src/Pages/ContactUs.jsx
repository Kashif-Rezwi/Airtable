import { ChatIcon, EditIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Container, VStack, Grid, Text, Image } from "@chakra-ui/react"
import { Form } from "react-router-dom"
import { Footer } from "../Components/Footer"
import { Forms } from "../Components/Forms"
import { Links } from "../Components/Links"
import { Links2 } from "../Components/Links2"
import { Navbar } from "../Components/Navbar/Navbar"
import { Register } from "../Components/Navbar/Register"


const FomrImage = [
    { img: "/Images/formPage_img1.jpg", partner: "intuit" },
    { img: "/Images/formPage_img2.jpg", partner: "shopify" },
    { img: "/Images/formPage_img3.jpg", partner: "buzzfeed" },
    { img: "/Images/formPage_img4.jpg", partner: "netflix" },
    { img: "/Images/formPage_img5.jpg", partner: "levis" },
    { img: "/Images/formPage_img6.jpg", partner: "time" },
]

export const ContactUs = () => {
    return (
        <Container maxW='100%' p={0}>

            <Box zIndex={"100"} position={"sticky"} top={"0"}>
                <Register />
                <Navbar />
            </Box>


            <Box boxSizing="border-Box" w={"100%"} bg={"#333333"} p={{
                base: "30px",
                md: "30px",
                lg: "60px 87px",
            }} >

                <Text fontSize={{ base: "40px", md: "50px", lg: "60px" }} lineHeight={{ base: "45px", md: "50px", lg: "60px" }} p={"20px"} fontWeight={"bold"} color={"white"}>Explore how Airtable can work for you.</Text>

                <Grid
                    h={"100%"}
                    templateColumns={{
                        base: "repeat(1,1fr)",
                        md: "repeat(1,1fr)",
                        lg: "repeat(2,1fr)",
                    }}>

                    <Box p={"10px 0px 20px"} display={"flex"} alignItems={"center"}>
                        <Forms />
                    </Box>

                    <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} textAlign={"left"} pb={"20px"} >

                        <Text pl={"15px"} w={"100%"} fontSize={"30px"} fontWeight={"bold"} color={"#999999"}>We power great companies</Text>

                        <Text fontWeight={"bold"} m={"10px 0px"} pl={"15px"} w={"100%"} color={"#666662"}>Airtable has helped 200,000+ organizations build countless workflows across marketing, product development, design, operations, and more.</Text>


                            <Grid w={"100%"} align={"flex=start"}
                                templateColumns={"repeat(3,1fr)"} m={"20px 0px"} >

                                {
                                    FomrImage.map((img) => (
                                        <Image p={"10px 0px"} src={img.img} alt={img.partner} />
                                    ))
                                }


                            </Grid>

                        <Box m={"10px 0px"} position={"relative"} left={{base:"-3px", md:"-17px", lg:"-17px"}} minH={"2px"} bg={"gray"} minW={{base:"93%", sm:"90%",  md:"89%", lg:"89%"}}></Box>

                        <Box p={"10px 16px 5px"} color={"#999999"} fontWeight={"bold"} fontSize={"13px"} w={"100%"} display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                            <ChatIcon />
                            <Text p={"0px 5px"}>Looking for</Text>
                            <Text color={"#2d7ff9"} _hover={{ color: "#0a67f1" }}>support?</Text>
                        </Box>

                        <Box p={"0px 16px"} color={"#999999"} fontWeight={"bold"} fontSize={"13px"} w={"100%"} display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                            <EditIcon />
                            <Text p={"0px 5px"}>Are you a</Text>
                            <Text color={"#2d7ff9"} _hover={{ color: "#0a67f1" }}>non-profit</Text>

                            <Text p={"0px 5px"}>or</Text>
                            <Text color={"#2d7ff9"} _hover={{ color: "#0a67f1" }}>educational institution?</Text>
                        </Box>

                    </Box>

                </Grid>
            </Box>


            <Box p={{ base: "10px 0px", md: "10px", lg: "10px 20px" }} boxSizing="border-Box" w={"100%"} bg={"white"} >
                <Links />
                <hr style={{ marginTop: "25px", height: "2px", backgroundColor: "#ebecee", width: "97%", margin: "auto" }} />
            </Box>

            <Box p={{ base: "10px 0px", md: "10px", lg: "10px 20px" }} boxSizing="border-Box" w={"100%"} bg={"white"} >
                <Footer />
            </Box>

            <Box p={{ base: "5px 0px", md: "0px 10px", lg: "0px 20px" }} boxSizing="border-Box" w={"100%"} bg={"#f2f4f7"}>
                <Links2 />
            </Box>

        </Container>
    )
}