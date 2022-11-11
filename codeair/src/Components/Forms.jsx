// The below import defines which components come from formik
import {
  Input,
  Button,
  Box,
  Text,
} from '@chakra-ui/react'

export const Forms = () => {
  return (
    <Box bg={"white"} w={{ base: "100%", md: "75%", lg: "85%" }} m={"auto"} p={"20px 25px"} maxW={"500px"} boxSizing={"border-box"} borderRadius={"15px"}>

      <Box fontWeight={"bold"} fontSize={"13px"} w={"100%"} display={"flex"} justifyContent={"flex-end"} alignItems={"center"} mb={"10px"}>
        <Text p={"20px 0px"} m={"0px 8px"}>Looking for help?</Text>
        <Text p={"20px 0px"} color={"#2d7ff9"} _hover={{ color: "#0a67f1" }}>Message support</Text>
      </Box>

      <hr style={{ marginTop: "20px", height: "1px", backgroundColor: "#ebecee", width: "100%", margin: "auto" }} />

      <Text w={"100%"} fontWeight={"bold"} fontSize={"18px"} textAlign={"left"} p={"20px 0px 10px"} >Ready to chat with sales?</Text>

      <form>

        <Input required variant='filled' placeholder='Work email address' m={"15px 0px"} />
        <Input required variant='filled' placeholder='Full name' m={"15px 0px"} />
        <Input required variant='filled' placeholder='Phone number' m={"15px 0px"} />
        <Input required variant='filled' placeholder='Company name' m={"15px 0px"} />
        <Input required variant='filled' placeholder='Job title or department' m={"15px 0px"} />

        <Button bg={"gray"} m={"15px 0px"} w={"100%"} _hover={{bg:"#8f8b8b"}} _active={{bg:"gray"}} color={"white"}>Next</Button>

      </form>

      <Text p={"0px 0px 10px"} fontSize={"9px"} lineHeight={"12px"} color={"gray"} fontWeight={"bold"} textAlign={"left"}>
        By clicking "Next," you acknowledge that your data will be handled in accordance with <span>Airtable’s Privacy Policy</span> and you authorize Airtable to send you updates about Airtable products, services, and events.
      </Text>

    </Box>
  )
}