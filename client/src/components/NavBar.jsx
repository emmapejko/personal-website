import React from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'end', md: 'start' }} align={'center'}>
          <Link to='/'>
          <Text
            textAlign={useBreakpointValue({ base: 'end', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Emma Pejko
          </Text>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle}/>
      </Collapse>
    </Box>
    <Outlet />
    </>
  )
}

export default NavBar;

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link to={navItem.href}>
              <Text
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Text>
             </Link>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = ({ onToggle }) => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onToggle={onToggle}/>
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, href, onToggle }) => {
  return (
    <Stack spacing={4} onClick={onToggle}>
      <Link to={href}>
      <Box
        py={2}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
      </Box>
      </Link>
    </Stack>
  )
}

const NAV_ITEMS = [
  {
    label: 'Experience',
    href: '/experience',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]
