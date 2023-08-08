import React from 'react'
import {
  Heading,
  Text,
} from '@chakra-ui/react'

const SectionHeading = ({ title }) => {
  return(
    <Heading
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{ base: 'l', sm: 'xl', lg: '2xl' }}
    >
      {/* <Text
        as={'span'}
        position={'relative'}
        _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 2,
            left: 0,
            bg: 'green.200',
            zIndex: -1,
        }}
      > */}
          {title}
      {/* </Text> */}
    </Heading>
  )
}

export default SectionHeading;