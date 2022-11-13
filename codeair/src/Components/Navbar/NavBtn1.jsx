import { AtSignIcon, AttachmentIcon, CalendarIcon, ChatIcon, CopyIcon, EditIcon, EmailIcon, ExternalLinkIcon, QuestionIcon, StarIcon } from '@chakra-ui/icons';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Button,
    Stack,
    Flex,
    Text,
} from '@chakra-ui/react';


export const NavBtn1 = () => {
    return (
        
        <Flex justifyContent="center">
            <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                    <QuestionIcon cursor={"pointer"} fontSize={"24px"} p={"2px"} borderRadius={"50%"} border={"1px solid black"} />
                </PopoverTrigger>
                <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
                    
                    <PopoverBody>
                        <Stack>
                            <Text textAlign={"left"} fontSize={"12px"} color={"gray"}>Support</Text>
                            <Button
                            h={"25px"}
                                w="194px"
                                variant="ghost"
                                rightIcon={<EditIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="13px">
                                Help center
                            </Button>
                            <Button
                            h={"25px"}
                                w="194px"
                                variant="ghost"
                                rightIcon={<AtSignIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                // colorScheme="red"
                                fontSize="13px">
                                Ask the community
                            </Button>
                            <Button
                            h={"25px"}
                                w="194px"
                                variant="ghost"
                                rightIcon={<ChatIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                // colorScheme="red"
                                fontSize="13px">
                                Message support
                            </Button>
                            <Button
                            h={"25px"}
                                w="194px"
                                variant="ghost"
                                rightIcon={<EmailIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                // colorScheme="red"
                                fontSize="13px">
                                Contact sales
                            </Button>
                        </Stack>

                        <Stack mt={"10px"} fontSize={"12px"}>
                            <Text textAlign={"left"} fontSize={"12px"} color={"gray"}>Education</Text>
                            <Button
                            h={"25px"}
                                w="194px"
                                variant="ghost"
                                rightIcon={<CopyIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="13px">
                                Keyboard shortcuts
                            </Button>
                            <Button
                            h={"25px"}
                                w="194px"
                                variant="ghost"
                                rightIcon={<CalendarIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                // colorScheme="red"
                                fontSize="13px">
                                Webinars
                            </Button>
                            <Button
                            h={"25px"}
                                w="194px"
                                variant="ghost"
                                rightIcon={<ExternalLinkIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                // colorScheme="red"
                                fontSize="13px">
                                What's new
                            </Button>
                            <Button
                            h={"25px"}
                                w="194px"
                                variant="ghost"
                                rightIcon={<AttachmentIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                // colorScheme="red"
                                fontSize="13px">
                                API documentation
                            </Button>
                        </Stack>

                        <Stack mt={"10px"} fontSize={"13px"}>
                            <Text textAlign={"left"} fontSize={"12px"} color={"gray"}>Upgrade</Text>
                        <Button
                        h={"25px"}
                            w="194px"
                            variant="ghost"
                            rightIcon={<StarIcon />}
                            justifyContent="space-between"
                            fontWeight="normal"
                            // colorScheme="red"
                            fontSize="13px">
                            Plans and pricing
                        </Button>
                        </Stack>

                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex >
    );
}