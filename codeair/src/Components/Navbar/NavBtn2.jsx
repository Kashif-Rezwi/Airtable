import { BellIcon } from '@chakra-ui/icons';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Flex,
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Image
} from '@chakra-ui/react';


export const NavBtn2 = () => {
    return (
        <Flex justifyContent="center">
            <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                    <BellIcon position={"relative"} top={".5px"} p={"2px"} borderRadius={"50%"} border={"1px solid black"} fontSize={"23.8px"} ml={"25px"} />
                </PopoverTrigger>
                <PopoverContent w="300px" _focus={{ boxShadow: 'none' }}>

                    <PopoverBody>

                        <Tabs align='end' w={"100%"} variant='unstyled'>
                            <TabList>
                                <Text w={"50%"} mt={"5px"} textAlign={"left"} fontWeight={"bold"} color={"gray.500"} fontSize={"12px"}>Notifications</Text>
                                <Tab borderRadius={"5px"} w={"70px"} h={"30px"} color={"gray.500"} fontWeight={"bold"} fontSize={"12px"} _selected={{ bg: '#f2f2f2' }}>Tab 1</Tab>
                                <Tab borderRadius={"5px"} w={"70px"} h={"30px"} color={"gray.500"} fontWeight={"bold"} fontSize={"12px"} _selected={{ bg: '#f2f2f2' }}>Tab 2</Tab>
                            </TabList>
                            <TabPanels >
                                <TabPanel textAlign={"center"}>
                                    <Image src={"/Images/notifications_empty_img.png"} m={"auto"} w={"100px"} />
                                    <Text color={"gray.500"} fontWeight={"bold"} fontSize={"11px"}>No new notifications</Text>
                                </TabPanel>
                                <TabPanel textAlign={"center"}>
                                    <Image src={"/Images/notifications_empty_img.png"} m={"auto"} w={"100px"} />
                                    <Text color={"gray.500"} fontWeight={"bold"} fontSize={"11px"}>No new notifications</Text>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    );
}