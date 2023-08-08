import React from 'react'
import {
  Stack,
  HStack,
  Center,
  Link,
} from '@chakra-ui/react'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Background from '../components/Background.jsx'

const Contact = () => {
  return (
    <Stack paddingLeft={10} paddingRight={10} paddingTop={4} paddingBottom={4}>
        <Center>
        <HStack spacing={7}>
          <Link href={'mailto:emma.pejko@email.com'} isExternal>
            <EmailIcon />
          </Link>
          <Link href={'https://www.linkedin.com/in/emma-pejko/'} isExternal>
            <LinkedInIcon />
          </Link>
          <Link href={'https://github.com/emmapejko'} isExternal>
            <GitHubIcon />
          </Link>
        </HStack>
        </Center>
        <Background />
    </Stack>
  )
}

export default Contact;