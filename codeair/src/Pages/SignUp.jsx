import { StarIcon } from '@chakra-ui/icons';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Center,
    Image,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

import { getAuth, sendEmailVerification } from "firebase/auth";

const init = {
    email: "",
    password: ""
}

export const SignUp = () => {

    const [user, setUser] = useState(init)
    const { email, password } = user;
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()
    const { authState, signUp, signInWithGoogle } = useContext(AuthContext)


    const handleHome = () => {
        return navigate("/")
    }

    const handleSignIn = () => {
        return navigate("/sign-in")
    }

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSignUp = (email, password) => {
        setIsError(null)
        signUp(email, password)
            .then((res) => {
                setSuccess(true)

                const auth = getAuth();
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        // ...
                    });

                setTimeout(() => {
                    return navigate("/sign-in")
                }, 2000)
            })
            .catch((err) => {
                setIsError(err.message)
            })
    }


    const handleSubmit = () => {
        handleSignUp(email, password)
    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        setIsLoading(true)
        signInWithGoogle()
            .then((res) => {
                setSuccess(true)
                setIsError(false)
                setTimeout(() => {
                    navigate("/home")
                }, 2000)
            })
            .catch((err) => {
                setIsError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }


    // console.log(authState)

    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={"white"}>
                <Stack spacing={8} mx={'auto'} w={{ base: "lg", md: "500px", lg: "600px" }} py={12} px={6}>

                    <Box>

                        <Box onClick={handleHome} w={"120px"} m={"auto"}>
                            <Image src='/Images/codeair_logo.png' alt='logo' />
                        </Box>

                        <Text m={"15px 0px"} p={"0"} fontWeight={"bold"} textAlign={"left"} fontSize={'4xl'}>Create your free account</Text>

                        {isError && (
                            <Alert status='error' m={"10px 0px 20px"} borderRadius={"8px"}>
                                <AlertIcon />
                                <AlertTitle>{isError}</AlertTitle>
                            </Alert>
                        )}

                        {success && (
                            <Alert status='success' m={"10px 0px 20px"} borderRadius={"8px"}>
                                <AlertIcon />
                                <AlertTitle>Acount Creasted successfully.</AlertTitle>
                                <AlertDescription fontWeight={"500"}>Kindly verify your email!</AlertDescription>
                            </Alert>
                        )}

                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel fontWeight={"bold"}>Work Email</FormLabel>
                                <Input name='email' value={user.email} onChange={handleChnage} type="email" placeholder='name1234@gmail.com' />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel fontWeight={"bold"}>Password</FormLabel>
                                <Input name='password' value={user.password} onChange={handleChnage} type="password" placeholder='name@1234' />
                            </FormControl>
                            <Stack spacing={10}>

                                <Button disabled={isLoading}
                                    onClick={handleSubmit}
                                    bg={'#2d7ff9'}
                                    color={'white'}
                                    _hover={{
                                        bg: '#3f88f5',
                                    }} _active={{
                                        bg: '#0a5edd',
                                    }}>
                                    Create acount
                                </Button>
                            </Stack>
                        </Stack>

                        <Box maxW={"100%"} m={"10px 0px 30px"}>
                            <Text w={"20px"} bg={"white"} m={'auto'} position={"relative"} top={"10px"}>or</Text>
                            <Box m={"auto"} minH={"1px"} bg={"gray"} w={"99%"}></Box>
                        </Box>

                        <Button disabled={isLoading} onClick={handleGoogleSignIn} mb={"10px"} border={"2px"} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                            <Center>
                                <Text>Create account with Google</Text>
                            </Center>
                        </Button>

                        <Text m={"0px 0px 10px"} color={"gray"} fontSize={"13px"}>By creating an account, you agree to the <Link color={"#2d7ff9"} _hover={{ color: "#0a67f1" }} fontWeight={"bold"}>Terms of Service</Link> and <Link color={"#2d7ff9"} _hover={{ color: "#0a67f1" }} fontWeight={"bold"}>Privacy Policy.</Link></Text>

                        <Text m={"0px 0px 10px"} color={"gray"} fontSize={"13px"}>Already have an account? <Link onClick={handleSignIn} color={"#2d7ff9"} _hover={{ color: "#0a67f1" }} fontWeight={"bold"}>Sign in </Link></Text>

                    </Box>

                </Stack>


            </Flex>

            <Box className='signupFooter' h={{ base: "50px", md: "55px", lg: "60px" }}>

                <Box position={"relative"} top={"-5px"} color={"white"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} me={"5px"}>
                    <Text position={"relative"} left={"5px"} top={"5px"} fontSize={"5px"}>
                        <StarIcon />
                    </Text>
                    <Text fontSize={"10px"}>
                        <StarIcon />
                    </Text>
                </Box>
                <Text fontSize={"13px"} color={"white"} fontWeight={"500"}>Sign up today and try the Pro plan for free</Text>
            </Box>

        </>
    );
}