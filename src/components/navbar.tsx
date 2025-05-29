'use client'
import { ColorModeButton, useColorMode } from '@/components/ui/color-mode'
import { siteConfig } from '@/libs/configs/site.config'
import { Box, Button, Flex, HStack, Link, Stack } from '@chakra-ui/react'
import { useState } from 'react'

import {
  FaBriefcase,
  FaHouse,
  FaRegEnvelopeOpen,
  FaFolderOpen,
  FaPhone,
  FaFile,
} from 'react-icons/fa6'

import { RxCross2 } from 'react-icons/rx'
import { Avatar } from './ui/avatar'
import { MyContainer } from './ui/container'

const pdf = '/resume.pdf'

type NavLink = {
  label: string
  icon: React.ReactNode
  href: string
  external?: boolean
}

const navitems: NavLink[] = [
  {
    label: 'Home',
    icon: <FaHouse />,
    href: '#about',
  },
  {
    label: 'Projects',
    icon: <FaFolderOpen />,
    href: '#projects',
  },
  {
    label: 'Work',
    icon: <FaBriefcase />,
    href: '#work',
  },
  {
    label: 'Contact',
    icon: <FaPhone />,
    href: '#contact',
  },
  {
    label: 'Resume',
    icon: <FaFile />,
    href: pdf,
    external: true,
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleColorMode } = useColorMode()

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }
  return (
    <MyContainer zIndex={1} position={'sticky'} top={3}>
      <Box mb={10} borderWidth="1px" borderColor="gray.subtel" borderRadius="md" bg="bg">
        <Flex
          justifyContent={{
            base: 'space-between',
            md: 'space-between',
          }}
          py={3}
          px={6}
        >
          <HStack gap={4} px={{ base: 3, md: 0 }}>
            <Avatar size={'sm'} name={siteConfig.profile.name} src={siteConfig.profile.avatar} />
            <Button
              variant={'outline'}
              padding={2}
              _hover={{ bg: 'brand.muted' }}
              borderColor={'gray.subtel'}
              hideBelow={'md'}
            >
              {siteConfig.profile.name}
            </Button>
          </HStack>

          <HStack gap={4} hideBelow={'md'}>
            {navitems.map((nav, index) => {
              return (
                <Link
                  key={index}
                  href={nav.href}
                  border={0}
                  p={2}
                  borderRadius={'md'}
                  target={nav.external ? '_blank' : '_self'}
                  _hover={{ bg: 'brand.muted', textDecoration: 'none' }}
                >
                  {nav.icon}
                  {nav.label}
                </Link>
              )
            })}
            <ColorModeButton onClick={toggleColorMode} />
          </HStack>
          <Button
            p={2}
            hideFrom={'md'}
            variant={'outline'}
            padding={2}
            _hover={{ bg: 'brand.muted' }}
            color={'brand'}
            border={0}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RxCross2 /> : <FaRegEnvelopeOpen />}
          </Button>
        </Flex>
        {isMenuOpen && (
          <Box hideFrom={'md'} p={2}>
            <Stack gap={4}>
              {navitems.map((nav, index) => {
                return (
                  <Link
                    key={index}
                    href={nav.href}
                    border={0}
                    color="brand"
                    p={2}
                    target={nav.external ? '_blank' : '_self'}
                    _hover={{ bg: 'brand.muted', textDecoration: 'none' }}
                  >
                    {nav.icon}
                    {nav.label}
                  </Link>
                )
              })}
              <ColorModeButton
                borderWidth={'1px'}
                borderRadius={'md'}
                borderColor={'border'}
                _hover={{ bg: 'brand.muted' }}
              />
            </Stack>
          </Box>
        )}
      </Box>
    </MyContainer>
  )
}
