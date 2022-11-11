import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export const Footer = () => {
    return (
        <Box
            bg={"white"}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'100%'} p={"40px 20px"} m={"auto"} >
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={10} fontSize={{base:"13px", md: "14px", lg: "15px"}}>
                    <Stack align={'flex-start'}>

                        <Text mb={"8px"} fontSize={{base:"14px", md: "15px", lg: "16px"}} fontWeight={"bold"}>Popular Templates</Text>
                        <Link href={'#'}>Content Calendar</Link>
                        <Link href={'#'}>Product Roadmap</Link>
                        <Link href={'#'}>Inventory Tracking</Link>
                        <Link href={'#'} textAlign={'left'}>Marketing Campaign Tracking</Link>
                        <Link href={'#'}>Event Planning</Link>
                        <Link href={'#'}>Show more</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text mb={"8px"} fontSize={{base:"14px", md: "15px", lg: "16px"}} fontWeight={"bold"}>Popular Extensions</Text>
                        <Link href={'#'}>Miro</Link>
                        <Link href={'#'}>Jira</Link>
                        <Link href={'#'}>Clearbit</Link>
                        <Link href={'#'}>Loom</Link>
                        <Link href={'#'}>Formstack</Link>
                        <Link href={'#'}>Show more</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text mb={"8px"} fontSize={{base:"14px", md: "15px", lg: "16px"}} fontWeight={"bold"}>Popular Solutions</Text>
                        <Link href={'#'}>Marketing</Link>
                        <Link href={'#'}>Product Operations</Link>
                        <Link href={'#'}>Human Resources</Link>
                        <Link href={'#'}>Sales</Link>
                        <Link href={'#'}>Operations</Link>
                        <Link href={'#'}>Show more</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text mb={"8px"} fontSize={{base:"14px", md: "15px", lg: "16px"}} fontWeight={"bold"}>Learn More</Text>
                        <Stack direction={'row'} textAlign={'left'} spacing={2}>
                            <Link href={'#'}>Webinars</Link>
                            <Tag
                                size={'sm'}
                                bg={"#cce0fe"}
                                ml={2}
                                color={'#5288e0'}>
                                POPULAR
                            </Tag>
                        </Stack>
                        <Stack direction={'row'} textAlign={'left'} spacing={2}>
                            <Link href={'#'}>Demos</Link>
                            <Tag
                                size={'sm'}
                                bg={"#d3ebd5"}
                                ml={2}
                                color={'#46806f'}>
                                NEW
                            </Tag>
                        </Stack>
                        <Link href={'#'}>Guides</Link>
                        <Link href={'#'}>Articles</Link>
                        <Link href={'#'}>Community</Link>
                        <Link href={'#'}>Show more</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text mb={"8px"} fontSize={{base:"14px", md: "15px", lg: "16px"}} fontWeight={"bold"}>Company</Text>
                        <Link href={'#'}>About</Link>
                        <Stack direction={'row'} textAlign={'left'} spacing={2}>
                            <Link href={'#'}>Careers</Link>
                            <Tag
                                size={'sm'}
                                bg={"#cce0fe"}
                                ml={2}
                                color={'#5288e0'}>
                                POPULAR
                            </Tag>
                        </Stack>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Status</Link>
                        <Link href={'#'}>Newsroom</Link>
                    </Stack>

                </SimpleGrid>
            </Container>
        </Box>
    );
}