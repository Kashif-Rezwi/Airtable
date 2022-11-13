import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, Stack, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();

  const handleSignIn = () => {
    return navigate("/sign-in")
}

  return (
    <>

      <UnorderedList m={"0"} p={"10px"} display={{ base: "block", md: "block", lg: "none" }}>
        <Text display={"flex"} justifyContent={"center"} alignItems={"center"} fontSize={"40px"} onClick={onOpen}><HamburgerIcon /></Text>

        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"md"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>

              <Box w={"100px"} m={"5px 0px"}>
                <Image src='/Images/codeair_logo.png' alt='logo' />
              </Box>

            </DrawerHeader>
            <DrawerBody>
              <Stack>
                <Stack w={"100%"}>

                  <Button
                    w="100%"
                    variant="ghost"
                    // rightIcon={<EditIcon />}
                    justifyContent="space-between"
                    fontWeight="bold"
                    color={"gray.700"}
                    fontSize="16px">
                    Help center
                  </Button>
                  <Button
                    w="100%"
                    variant="ghost"
                    // rightIcon={<AtSignIcon />}
                    justifyContent="space-between"
                    fontWeight="bold"
                    color={"gray.700"}
                    // colorScheme="red"
                    fontSize="16px">
                    Ask the community
                  </Button>
                  <Button
                    w="100%"
                    variant="ghost"
                    // rightIcon={<ChatIcon />}
                    justifyContent="space-between"
                    fontWeight="bold"
                    color={"gray.700"}
                    // colorScheme="red"
                    fontSize="16px">
                    Message support
                  </Button>
                  <Button
                    w="100%"
                    variant="ghost"
                    // rightIcon={<EmailIcon />}
                    justifyContent="space-between"
                    fontWeight="bold"
                    color={"gray.700"}
                    // colorScheme="red"
                    fontSize="16px">
                    Contact sales
                  </Button>
                  <Button
                    w="100%"
                    variant="ghost"
                    // rightIcon={<EditIcon />}
                    justifyContent="space-between"
                    fontWeight="bold"
                    color={"gray.700"}
                    fontSize="16px">
                    Help center
                  </Button>
                  <Button
                    w="100%"
                    variant="ghost"
                    // rightIcon={<AtSignIcon />}
                    justifyContent="space-between"
                    fontWeight="bold"
                    color={"gray.700"}
                    // colorScheme="red"
                    fontSize="16px">
                    Ask the community
                  </Button>
                  <Button
                    w="100%"
                    variant="ghost"
                    // rightIcon={<ChatIcon />}
                    justifyContent="space-between"
                    fontWeight="bold"
                    color={"gray.700"}
                    // colorScheme="red"
                    fontSize="16px">
                    Message support
                  </Button>
                  <Button
                    w="100%"
                    variant="ghost"
                    // rightIcon={<EmailIcon />}
                    justifyContent="space-between"
                    fontWeight="bold"
                    color={"gray.700"}
                    // colorScheme="red"
                    fontSize="16px">
                    Contact sales
                  </Button>
                  <Button onClick={handleSignIn}  fontSize={{ base: "12px", md: "13px", lg: "14px" }} w="100%" colorScheme={"messenger"} >Sign in</Button>
                </Stack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </UnorderedList>
    </>
  )
}