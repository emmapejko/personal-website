import React from "react"
import { ChakraProvider, Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <ChakraProvider>
    <div>
      <p>Emma's Website</p>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>Open drawer
      </Button>
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
    </ChakraProvider>
  )
}

export default App;