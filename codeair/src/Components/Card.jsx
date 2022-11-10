import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';

export const Card = () => {
    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '90%' }}
                height={{ sm: '800px', md: '30rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}>
                <Flex flex={1} bg="blue.200" overflow={"hidden"}>
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={
                            '/Images/card_img.jpg'
                        }
                    />
                </Flex>
                <Stack
                    h={"480px"}
                    flex={1}
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    p={"20px"}>

                    <Box w={"100%"} display={"flex"} justifyContent={"flex-start"}>
                        <Image w={"200px"} src={"/Images/BakerHughes-logo.png"} alt="baker_logo" />
                    </Box>

                    <Text textAlign={"left"} fontSize={"20px"} fontWeight={"bold"}>
                        “A business transformation is really just a series of smaller changes rolling out one after the other. It’s about getting the right information to people when they need it. What started as an Airtable calendar very quickly became the solution that we use to manage everything.”

                    </Text>

                    <Box w="100%" textAlign={"left"}>

                        <Text fontWeight={"bold"}>
                            Stephanie Hartgrove
                        </Text>

                        <Text>
                            VP of Global Communications, Baker Hughes
                        </Text>

                    </Box>

                    <Box w="100%" className="register" display={"flex"} justifyContent={"flex-start"} >

                        <Text fontWeight={"500"}
                            fontSize={"18px"}>Watch video</Text>
                        <Text p={"0px 8px"} fontSize={"20px"} fontWeight={"500"}>&#8594;</Text>

                    </Box>

                </Stack>
            </Stack>
        </Center>
    );
}

{/* <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Lindsey James
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            @lindsey_jam3s
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>
            me in your posts
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
} */}