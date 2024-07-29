// providers/ChakraProvider.js
import { ChakraProvider } from '@chakra-ui/react';

export default function Chakra({ children }: { children: any }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
