import { LockIcon, StarIcon } from '@chakra-ui/icons';
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
    HStack,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


const init = {
    email: "",
    password: ""
}

export const SignIn = () => {

    const [user, setUser] = useState(init)
    const { email, password } = user;
    const navigate = useNavigate();
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false);
    const [reset, setReset] = useState(false);
    const { signIn, signInWithGoogle } = useContext(AuthContext)

    const handleHome = () => {
        return navigate("/")
    }

    const handleSignUp = () => {
        return navigate("/sign-up")
    }

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSignIn = (email, password) => {
        setIsError(null)
        signIn(email, password)
            .then((res) => {
                navigate("/Home")
            })
            .catch((err) => {
                setIsError(err.message)
            })
    }

    const handleSubmit = () => {
        handleSignIn(email, password)
    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        setIsLoading(true)
        signInWithGoogle()
            .then((res) => {
                setSuccess(true)
                setIsError(false)
                setReset(false)

                setTimeout(() => {
                    return navigate("/home");
                }, 2000)
            })
            .catch((err) => {
                setIsError(err.message)
                setReset(false)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const auth = getAuth();
    const handleResetPass = () => {

        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                setReset(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsError(errorMessage)
                // ..
            });
    }

    return (
        <>
            <Flex
                align={'center'}
                justify={'center'}
                boxSizing={"cover"}
                backgroundImage={"/Images/blurred_bgImg.png"}
                backgroundPosition={"center"}>
                <Stack spacing={8} mx={'auto'} w={{ base: "lg", md: "500px", lg: "600px" }} py={12} px={6}>

                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>

                        <Box bg={"#f2f2f2"} onClick={handleHome} w={"120px"} m={"auto"}>
                            <Image src='/Images/codeair_logo.png' alt='logo' />
                        </Box>

                        <HStack justifyContent={"space-between"} >
                            <HStack m={"20px 0px"}>
                                <Text fontSize={"30px"} fontWeight={"bold"}>Sign in</Text>
                                <Text position={"relative"} top={"5px"} fontSize={'12px'} color={"gray"}><LockIcon /></Text>
                            </HStack>

                            <Text color={"gray"} fontWeight={"bold"} fontSize={'14px'}>
                                or <Link color={"#2d7ff9"} _hover={{ color: "#0a67f1" }} onClick={handleSignUp} textDecoration={"underline"}>create an account</Link></Text>
                        </HStack>


                        {isError && (
                            <Alert status='error' m={"10px 0px 20px"} borderRadius={"8px"}>
                                <AlertIcon />
                                <AlertTitle>{isError}</AlertTitle>
                            </Alert>
                        )}

                        {success && (
                            <Alert status='success' m={"10px 0px 20px"} borderRadius={"8px"}>
                                <AlertIcon />
                                <AlertTitle>Sign in successfully.</AlertTitle>
                                <AlertDescription fontWeight={"500"}>Kindly verify your email!</AlertDescription>
                            </Alert>
                        )}

                        {reset && (
                            <Alert status='success' m={"10px 0px 20px"} borderRadius={"8px"}>
                                <AlertIcon />
                                <AlertTitle textAlign={"left"}>Password reset link sent successfully to {email}.</AlertTitle>
                            </Alert>
                        )}

                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel fontWeight={"bold"}>Email</FormLabel>
                                <Input name="email" value={email} onChange={handleChnage} type="email" placeholder='name1234@gmail.com' />
                            </FormControl>
                            <FormControl id="password" textAlign={"left"}>
                                <FormLabel fontWeight={"bold"}>Password</FormLabel>
                                <Input name="password" value={password} onChange={handleChnage} type="password" placeholder='********' />
                                <Link onClick={handleResetPass} color={"#2d7ff9"} _hover={{ color: "#0a67f1" }} textDecoration={"none"} fontWeight={"bold"} fontSize={"13px"}>Forgot password?</Link>
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
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>

                        <Box maxW={"100%"} m={"10px 0px 30px"}>
                            <Text w={"20px"} bg={"white"} m={'auto'} position={"relative"} top={"10px"}>or</Text>
                            <Box m={"auto"} minH={"1px"} bg={"gray"} w={"99%"}></Box>
                        </Box>

                        <Button disabled={isLoading} onClick={handleGoogleSignIn} mb={"10px"} border={"2px"} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                            <Center>
                                <Text>Sign in with Google</Text>
                            </Center>
                        </Button>

                        <Text m={"0px 0px 10px"} color={"gray"} fontSize={"13px"}>By creating an account, you agree to the <Link color={"#2d7ff9"} _hover={{ color: "#0a67f1" }} fontWeight={"bold"}>Terms of Service</Link> and <Link color={"#2d7ff9"} _hover={{ color: "#0a67f1" }} fontWeight={"bold"}>Privacy Policy.</Link></Text>

                    </Box>

                </Stack>

            </Flex>

        </>
    );
}
