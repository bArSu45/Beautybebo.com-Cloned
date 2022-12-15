import { Button, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack } from '@chakra-ui/react'
import React from 'react'
import {  FaSearch } from "react-icons/fa";
import {  ChevronDownIcon } from '@chakra-ui/icons'

const Navinput = () => {
  return (
    <>

  <InputGroup width="650px" >
    <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    width="20rem"
    color="grey"
  >
    All Categories <ChevronDownIcon />
  </MenuButton>
  <MenuList color="grey">
    <MenuItem>New File</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open...</MenuItem>
    <MenuItem>Save File</MenuItem>
  </MenuList>
</Menu>
  <Input
    size="lg"
    focusBorderColor="pink.400"
    color="grey"
    placeholder='Enter Your Search Here'
  />
  <InputRightElement width='3rem' height="3rem">
    <Button h='2.5rem' size='sm' color="white" bg="#dd0285"  _hover={{
    background: "white",
    color: "#dd0285",
  }}>
    <FaSearch/>
    </Button>
  </InputRightElement>
</InputGroup>
    </>
  )
}

export default Navinput