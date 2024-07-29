import { login, signup } from './actions'
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'

export default function LoginPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="blue.500"
    >
      <Box
        p={12}  // Aumentar el padding para hacer la caja más grande
        maxWidth="500px"  // Aumentar el maxWidth para hacer la caja más grande
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
      >
        <form>
          <VStack spacing={6}>  // Aumentar el espacio entre los elementos
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" />
            </FormControl>
            <Button colorScheme="blue" type="submit" onClick={login} width="full">
              Log in
            </Button>
            <Button colorScheme="teal" type="button" onClick={signup} width="full">
              Sign up
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  )
}
