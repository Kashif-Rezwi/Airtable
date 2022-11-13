import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Button,
    Stack,
    Flex,
    Avatar,
    Text,
    Tag,
} from '@chakra-ui/react';

import { BellIcon, ChatIcon, DeleteIcon, EmailIcon, ExternalLinkIcon, LinkIcon, RepeatIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';




export const NavBtn3 = () => {

    const { authState, SignOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = () => {
        SignOut()
            .then((res) => {
                navigate("/")
            })
            .catch((err) => console.log(err.message))
    }

    // console.log(authState)

    return (

        <Flex justifyContent="center">
            <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                    <Avatar ml={"25px"} mr={"5px"} cursor={"pointer"} border={authState?.emailVerified ? "2px solid #48bb78" : "2px solid orangered"} size={"xs"} bg='black' />
                </PopoverTrigger>
                <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }} >

                    <PopoverBody>
                        <Stack>

                            <Stack pt={"5px"} pb={"6px"} borderBottom={"1px solid #ebecee"}>
                                <Text fontSize={"14px"}>{authState?.email}</Text>
                            </Stack>

                            <Stack position={"relative"} pb={"5px"} borderBottom={"1px solid #ebecee"}>

                                <Tag
                                fontSize={"10px"}
                                fontWeight={"bold"}
                                    position={"absolute"}
                                    left={"62px"}
                                    top={"10px"}
                                    size={'sm'}
                                    bg={authState?.emailVerified ? "#d3ebd5" : "#fed7d7"}
                                    ml={2}
                                    color={authState?.emailVerified ? "#46806f" : "#e53e3e"}>
                                    {authState?.emailVerified? "Verified" : "Not verified"}
                                </Tag>

                                <Stack direction={'row'} textAlign={'left'} spacing={2}>

                                    <Button
                                        h={"25px"}
                                        w="194px"
                                        variant="ghost"

                                        rightIcon={<Avatar size={"2xs"} bg='gray' />}

                                        justifyContent="space-between"
                                        fontWeight="normal"
                                        fontSize="13px">
                                        Account
                                    </Button>

                                </Stack>

                                <Button
                                    h={"25px"}
                                    w="194px"
                                    variant="ghost"
                                    rightIcon={<BellIcon />}
                                    justifyContent="space-between"
                                    fontWeight="normal"
                                    fontSize="13px">
                                    Notification settings
                                </Button>

                            </Stack>

                            <Stack pb={"5px"} borderBottom={"1px solid #ebecee"}>

                                <Button
                                    h={"25px"}
                                    w="194px"
                                    variant="ghost"
                                    rightIcon={<EmailIcon />}
                                    justifyContent="space-between"
                                    fontWeight="normal"
                                    fontSize="13px">
                                    Contact sales
                                </Button>
                                <Button
                                    h={"25px"}
                                    w="194px"
                                    variant="ghost"
                                    rightIcon={<RepeatIcon />}
                                    justifyContent="space-between"
                                    fontWeight="normal"
                                    fontSize="13px">
                                    Upgrade
                                </Button>

                                <Button
                                    h={"25px"}
                                    w="194px"
                                    variant="ghost"
                                    rightIcon={<ChatIcon />}
                                    justifyContent="space-between"
                                    fontWeight="normal"
                                    fontSize="13px">
                                    Tell a friend
                                </Button>

                            </Stack>

                            <Stack pb={"5px"} borderBottom={"1px solid #ebecee"}>

                                <Button
                                    h={"25px"}
                                    w="194px"
                                    variant="ghost"
                                    rightIcon={<LinkIcon />}
                                    justifyContent="space-between"
                                    fontWeight="normal"
                                    fontSize="13px">
                                    Connected accounts
                                </Button>

                            </Stack>

                            <Stack pb={"5px"}>

                                <Button
                                    h={"25px"}
                                    w="194px"
                                    variant="ghost"
                                    rightIcon={<DeleteIcon />}
                                    justifyContent="space-between"
                                    fontWeight="normal"
                                    fontSize="13px">
                                    Trash
                                </Button>
                                <Button
                                    onClick={handleLogOut}
                                    h={"25px"}
                                    w="194px"
                                    variant="ghost"
                                    rightIcon={<ExternalLinkIcon />}
                                    justifyContent="space-between"
                                    fontWeight="normal"
                                    fontSize="13px">
                                    Log out
                                </Button>

                            </Stack>

                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    );
}