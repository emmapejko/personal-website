import React from 'react'
import {
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react'

import Background from '../components/Background.jsx'

const Home = () => {
  return(
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            align={'center'}
            >
            Emma Pejko
          </Heading>
          <Text
            fontSize={{ base: 'md', sm: 'md', lg: 'lg' }}
            align={'center'}
          >
             {'Hi there! I\'m a software developer based in San Diego, CA. I have professional experience developing multiple'}
          </Text>
        </Stack>
        <Background />
      </Stack>
  )
}

export default Home

const description = ''