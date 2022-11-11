import { Badge, Box, Button, Center, Container, Grid, HStack, Image, Text, Tabs, TabList, TabPanels, Tab, TabPanel, VStack } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import { Card } from "../Components/Card"
import { Footer } from "../Components/Footer"
import { Links } from "../Components/Links"
import { Links2 } from "../Components/Links2"
import { Navbar } from "../Components/Navbar/Navbar"
import { Register } from "../Components/Navbar/Register"

const partners = [
    { img: "/Images/partners1.jpg", partner: "colehaan" },
    { img: "/Images/partners2.jpg", partner: "medium" },
    { img: "/Images/partners3.jpg", partner: "expedia" },
    { img: "/Images/partners4.jpg", partner: "netflix" },
    { img: "/Images/partners5.jpg", partner: "time" },
    { img: "/Images/partners6.jpg", partner: "shopify" },
]

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

            <Box zIndex={"100"} position={"sticky"} top={"0"}>
                <Register />
                <Navbar />
            </Box>

            <Box boxSizing="border-Box" w={"100%"} bg={"#ecf6fc"} p={{
                base: "30px",
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

                            <button className="signupFree">Sign up for free</button>
                        </VStack>
                    </Box>

                    <Box display={"flex"} alignItems={"center"}>
                        <video src={"/Images/Homepage_vid1.mp4"} width="750" height="500" autoPlay loop>
                        </video>
                    </Box>

                </Grid>
            </Box>

            <Box boxSizing="border-Box" w={"100%"} bg={"#f2f4f7"} p={{
                base: "10px 20px",
                md: "20px 30px",
                lg: "20px 60px",
            }}>
                <Grid templateColumns={{
                    base: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                    lg: "repeat(6,1fr)",
                }} >
                    {
                        partners.map((img) => (
                            <Image m={"auto"} p={"10px 15px"} src={img.img} alt={img.partner} />
                        ))
                    }
                </Grid>

            </Box>

            <Box boxSizing="border-Box" bg={"#fbfbfc"} p={{
                base: "20px",
                md: "30px",
                lg: "60px",
            }} color={"#333333"} >


                <Text p={"10px 0px"}
                    lineHeight={{
                        base: "40px",
                        md: "50px",
                        lg: "70px",
                    }}
                    fontSize={{
                        base: "30px",
                        md: "40px",
                        lg: "60px",
                    }}
                    fontWeight={"bolder"}
                    w={{
                        base: "100%",
                        md: "80%",
                        lg: "600px",
                    }} m={"auto"}>
                    Create solutions that mirror your business
                </Text>
                <Text p={"10px 0px"}
                    fontWeight={"500"}
                    fontSize={"20px"}
                    lineHeight={"25px"}
                    w={{
                        base: "100%",
                        md: "80%",
                        lg: "600px",
                    }} m={"auto"}>
                    Move work forward faster with no-code apps that perfectly match your team’s agility and scale.</Text>


            </Box>

            <Box boxSizing="border-Box" w={"100%"} bg={"#faf2f4"} p={"30px"}>
                <Grid
                    h={"100%"}
                    templateColumns={{
                        base: "repeat(1,1fr)",
                        md: "repeat(1,1fr)",
                        lg: "repeat(2,1fr)",
                    }} m={"auto"}>

                    <Box display={"flex"} alignItems={"center"}>
                        <VStack textAlign={"left"} alignItems={"flex-start"} p={{
                            base: "30px",
                            md: "30px",
                            lg: "60px",
                        }} >

                            <VStack
                                alignItems={"flex-start"}
                                fontSize={"45px"}
                                lineHeight={"55px"}
                                fontWeight={"bolder"}
                                color={"#333333"}>
                                <Text textAlign={"left"}
                                    w={{
                                        base: "100%",
                                        md: "80%",
                                        lg: "330px",
                                    }}>Unite every stream of work</Text>
                            </VStack>

                            <Text
                                fontSize={"20px"}
                                lineHeight={"25px"}
                                fontWeight={"500"}
                                w={{
                                    base: "100%",
                                    md: "80%",
                                    lg: "500px",
                                }} p={"20px 0px"}>
                                Create a single source of truth that’s tailored precisely to how your teams work. Include everything you need, nothing you don’t.
                            </Text>

                            <Box className="register">
                                <Text fontWeight={"500"}
                                    fontSize={"18px"}>Explore the product</Text>
                                <Text p={"0px 8px"} fontSize={"18px"} fontWeight={"500"}>&#8594;</Text>
                            </Box>

                        </VStack>
                    </Box>

                    <Box display={"flex"} alignItems={"center"} p={"30px"} >
                        <video src={"/Images/Homepage_vid2.mp4"} width="750" height="500" autoPlay loop>
                        </video>
                    </Box>

                </Grid>
            </Box >

            <Box boxSizing="border-Box" w={"100%"} bg={"#faf2f4"} p={{
                base: "30px",
                md: "30px",
                lg: "60px",
            }} >
                <Grid
                    h={"100%"}
                    templateColumns={{
                        base: "repeat(1,1fr)",
                        md: "repeat(1,1fr)",
                        lg: "repeat(2,1fr)",
                    }} >


                    <Box display={"flex"} alignItems={"center"} >
                        <video src={"/Images/Homepage_vid3.mp4"} width="750" height="500" autoPlay loop>
                        </video>
                    </Box>

                    <Box display={"flex"} justifyContent={"flex-end"} p={"30px"} alignItems={"center"}>
                        <VStack textAlign={"left"} alignItems={"flex-start"}>

                            <Text fontSize={"45px"}
                                lineHeight={"55px"}
                                fontWeight={"bolder"}
                                color={"#333333"}
                                w={{
                                    base: "100%",
                                    md: "80%",
                                    lg: "330px",
                                }}>
                                <button className="new">
                                    NEW
                                </button> <br />
                                Interface with work in a new way</Text>

                            <Text
                                fontSize={"20px"}
                                lineHeight={"25px"}
                                fontWeight={"500"}
                                w={{
                                    base: "100%",
                                    md: "80%",
                                    lg: "500px",
                                }} p={"20px 0px"}>
                                Create custom interfaces that give each and every teammate the relevant information they need, and a simple way to take action.
                            </Text>

                            <Box className="register">
                                <Text fontWeight={"500"}
                                    fontSize={"18px"}>Learn more about Interface Designer</Text>
                                <Text p={"0px 8px"} fontSize={"18px"} fontWeight={"500"}>&#8594;</Text>
                            </Box>

                        </VStack>
                    </Box>

                </Grid>
            </Box >

            <Box boxSizing="border-Box" w={"100%"} bg={"#faf2f4"} p={{
                base: "30px",
                md: "30px",
                lg: "60px",
            }} >
                <Grid
                    h={"100%"}
                    templateColumns={{
                        base: "repeat(1,1fr)",
                        md: "repeat(1,1fr)",
                        lg: "repeat(2,1fr)",
                    }} >


                    <Box display={"flex"} alignItems={"center"}>

                        <Text textAlign={"left"}
                            lineHeight={{
                                base: "40px",
                                md: "50px",
                                lg: "60px",
                            }}
                            fontSize={{
                                base: "30px",
                                md: "40px",
                                lg: "60px",
                            }}
                            fontWeight={"bolder"}
                            w={{
                                base: "100%",
                                md: "80%",
                                lg: "500px",
                            }} p={"20px 0px"}>
                            Bring all your data together
                        </Text>

                    </Box>

                    <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
                        <VStack textAlign={"left"} alignItems={"flex-start"}>

                            <Text
                                fontSize={"18px"}
                                lineHeight={"25px"}
                                fontWeight={"500"}
                                w={{
                                    base: "100%",
                                    md: "80%",
                                    lg: "100%",
                                }} p={"20px 0px"}>
                                All your information. Always up to date. At your fingertips. Keep everything in sync across your organization.
                            </Text>

                            <Box className="register">
                                <Text fontWeight={"500"}
                                    fontSize={"18px"}>Learn about Sync</Text>
                                <Text p={"0px 8px"} fontSize={"20px"} fontWeight={"500"}>&#8594;</Text>
                            </Box>

                        </VStack>
                    </Box>

                </Grid>
            </Box>

            <Box boxSizing="border-Box" w={"100%"} bg={"#faf2f4"} p={{
                base: "30px",
                md: "30px",
                lg: "100px",
            }} >
                <Image src={"Images/homepage_img1.jpg"} alt={"homepage_img1"} />
            </Box>

            <Box boxSizing="border-Box" w={"100%"} bg={"#fbfbfc"} p={{
                base: "30px",
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
                        <VStack textAlign={"left"} alignItems={"flex-start"} p={"30px 30px 50px 30px"} >

                            <VStack
                                alignItems={"flex-start"}
                                fontSize={"45px"}
                                lineHeight={"55px"}
                                fontWeight={"bolder"}
                                color={"#333333"}>
                                <Text textAlign={"left"}
                                    w={{
                                        base: "100%",
                                        md: "80%",
                                        lg: "330px",
                                    }}>Unite every stream of work</Text>
                            </VStack>

                            <Text
                                fontSize={"20px"}
                                lineHeight={"25px"}
                                fontWeight={"500"}
                                w={{
                                    base: "100%",
                                    md: "80%",
                                    lg: "500px",
                                }} p={"20px 0px"}>
                                Create a single source of truth that’s tailored precisely to how your teams work. Include everything you need, nothing you don’t.
                            </Text>

                            <Box className="register">
                                <Text fontWeight={"500"}
                                    fontSize={"18px"}>Explore the product</Text>
                                <Text p={"0px 8px"} fontSize={"18px"} fontWeight={"500"}>&#8594;</Text>
                            </Box>

                        </VStack>
                    </Box>

                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

                        <Tabs variant='soft-rounded' >
                            <TabList display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
                                <Tab _selected={{ color: 'white', bg: '#468eff' }} fontSize={{ base: "13px", md: "14px", lg: "15px" }}>See value fast</Tab>
                                <Tab _selected={{ color: 'white', bg: '#9a67f0' }} fontSize={{ base: "13px", md: "14px", lg: "15px" }}>Gain perspective</Tab>
                                <Tab _selected={{ color: 'white', bg: '#c1214d' }} fontSize={{ base: "13px", md: "14px", lg: "15px" }}>Use templates</Tab>
                            </TabList>

                            <TabPanels className="videos">
                                <TabPanel>
                                    <video src={"/Images/Homepage_vid4.mp4"} width="750" height="500" autoPlay loop>
                                    </video>
                                </TabPanel>
                                <TabPanel>
                                    <video src={"/Images/Homepage_vid5.mp4"} width="750" height="500" autoPlay loop>
                                    </video>
                                </TabPanel>
                                <TabPanel>
                                    <video src={"/Images/Homepage_vid6.mp4"} width="750" height="500" autoPlay loop>
                                    </video>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                        <Box boxSizing="border-Box" w={"100%"} p={"10px"} >
                            <Grid display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                h={"100%"}
                                templateColumns={{
                                    base: "repeat(1,1fr)",
                                    md: "repeat(1,1fr)",
                                    lg: "repeat(2,1fr)",
                                }} >

                                <Box>

                                    <Text
                                        fontSize={"15px"}
                                        fontWeight={"500"}
                                        w={"100%"} p={"20px 5px"}
                                        textAlign={"left"}>

                                        Not sure where to begin? We’ve got you covered with a library of templates pre-built for popular use cases.
                                    </Text>
                                </Box>

                                <Box>
                                    <Button fontSize={"14px"}>Explore templates</Button>
                                </Box>

                            </Grid>
                        </Box>

                    </Box>

                </Grid>
            </Box>

            <Box boxSizing="border-Box" w={"100%"} bg={"#fbfbfc"} p={{
                base: "30px",
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

                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

                        <Tabs variant='soft-rounded' >
                            <TabList display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
                                <Tab _selected={{ color: 'white', bg: '#9b67f0' }} fontSize={{ base: "13px", md: "14px", lg: "15px" }}>See value fast</Tab>
                                <Tab _selected={{ color: 'white', bg: '#2c7ff9' }} fontSize={{ base: "13px", md: "14px", lg: "15px" }}>Gain perspective</Tab>
                                <Tab _selected={{ color: 'black', bg: '#e3d5f8' }} fontSize={{ base: "13px", md: "14px", lg: "15px" }}>Use templates</Tab>
                            </TabList>

                            <TabPanels className="images">
                                <TabPanel>
                                    <Image src={"/Images/homepage_img2.jpg"} alt={""} />
                                </TabPanel>
                                <TabPanel>
                                    <Image src={"/Images/homepage_img3.jpg"} alt={""} />
                                </TabPanel>
                                <TabPanel>
                                    <Image src={"/Images/homepage_img4.jpg"} alt={""} />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                        <Box boxSizing="border-Box" w={"100%"} p={"10px"} >
                            <Grid display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                h={"100%"}
                                templateColumns={{
                                    base: "repeat(1,1fr)",
                                    md: "repeat(1,1fr)",
                                    lg: "repeat(2,1fr)",
                                }} >

                                <Box>

                                    <Text
                                        fontSize={"15px"}
                                        fontWeight={"500"}
                                        w={"100%"} p={"20px 5px"}
                                        textAlign={"left"}>

                                        Take work to the next level with pre-built extensions.
                                    </Text>
                                </Box>

                                <Box>
                                    <Button fontSize={"14px"}>Explore Marketplace</Button>
                                </Box>

                            </Grid>
                        </Box>

                    </Box>

                    <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
                        <VStack textAlign={"left"} alignItems={"flex-start"}>

                            <Text fontSize={"45px"}
                                lineHeight={"55px"}
                                fontWeight={"bolder"}
                                color={"#333333"}
                                w={{
                                    base: "100%",
                                    md: "80%",
                                    lg: "330px",
                                }}>
                                Transform how teams work at scale</Text>

                            <Text
                                fontSize={"20px"}
                                lineHeight={"25px"}
                                fontWeight={"500"}
                                w={{
                                    base: "100%",
                                    md: "80%",
                                    lg: "500px",
                                }} p={"20px 0px"}>
                                Discover deep integrations, advanced extensibility, expert support—everything your organization needs to reach new heights.
                            </Text>

                        </VStack>
                    </Box>

                </Grid>
            </Box>

            <Box boxSizing="border-Box" w={"100%"} bg={"#faf5e8"}
                p={{
                    base: "30px",
                    md: "30px",
                    lg: "40px 140px 0px 140px",
                }}>
                <Grid
                    templateColumns={{
                        base: "repeat(1,1fr)",
                        md: "repeat(1,1fr)",
                        lg: "repeat(2,1fr)",
                    }}>


                    <Box display={"flex"} alignItems={"center"}>

                        <Text textAlign={"left"}
                            lineHeight={{
                                base: "40px",
                                md: "50px",
                                lg: "60px",
                            }}
                            fontSize={{
                                base: "30px",
                                md: "40px",
                                lg: "50px",
                            }}
                            fontWeight={"bolder"}
                            w={{
                                base: "100%",
                                md: "80%",
                                lg: "400px",
                            }} p={"20px 0px"}>
                            Trusted by teams from all industries
                        </Text>

                    </Box>

                    <Box display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"}>
                        <VStack textAlign={"left"} pb={"20px"}>

                            <Box className="register">
                                <Text fontWeight={"500"}
                                    fontSize={"18px"}>Read all customer stories</Text>
                                <Text p={"0px 8px"} fontSize={"20px"} fontWeight={"500"}>&#8594;</Text>
                            </Box>

                        </VStack>
                    </Box>

                </Grid>


            </Box>


            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} boxSizing="border-Box" w={"100%"} bg={"#faf5e8"}
                p={{
                    base: "30px 40px",
                    md: "30px 60px",
                    lg: "20px 80px 40px 80px",
                }}>
                <Card />
            </Box>

            <Box boxSizing="border-Box" bg={"white"} p={{
                base: "20px",
                md: "30px",
                lg: "60px",
            }} color={"#333333"} >


                <Text
                    lineHeight={{
                        base: "40px",
                        md: "50px",
                        lg: "70px",
                    }}
                    fontSize={{
                        base: "30px",
                        md: "40px",
                        lg: "60px",
                    }}
                    fontWeight={"bolder"}
                    w={{
                        base: "100%",
                        md: "80%",
                        lg: "700px",
                    }} m={"auto"} p={"20px 0px 30px 0px"}>
                    300,000+ innovative companies use Airtable every day. Join them.
                </Text>

                <button className="signupFree">Sign up for free</button>

                <Text p={"5px"}
                    fontWeight={"bold"}
                    fontSize={"18px"} m={"auto"}>
                    No credit card needed
                </Text>

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

        </Container >
    )
}