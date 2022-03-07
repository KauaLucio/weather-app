import React, { useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { TiWeatherCloudy } from 'react-icons/ti';
import { Box, Flex, Input, useColorMode } from '@chakra-ui/react';

export default function Header({ setInput, handleSubmit }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex justify="space-between" align="center" px={10} py={4} boxShadow="lg">
      <Box textAlign="center" color="blue.400">
        <TiWeatherCloudy fontSize="60px" />
      </Box>
      <Box>
        <Input onChange={e => setInput(e.target.value)} onKeyPress={handleSubmit} placeholder="Pesquise por Cidade" border="2px solid #fff" />
      </Box>
      <Box>
        <Box fontSize="2xl" cursor="pointer" onClick={toggleColorMode}>
          {colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
        </Box>
      </Box>
    </Flex>
  )
}
