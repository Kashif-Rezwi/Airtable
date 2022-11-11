import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    
    <UnorderedList m={"0"} p={"10px"} display={{base: "block", md: "block", lg:"none"}}>
      <Text display={"flex"} justifyContent={"center"} alignItems={"center"} fontSize={"40px"} onClick={onOpen}><HamburgerIcon/></Text>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>{`drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </UnorderedList>
    </>
  )
}