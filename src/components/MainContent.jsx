import React from 'react'
import { Box, Text, Flex, Heading } from '@chakra-ui/react'
import { GiWorld } from 'react-icons/gi'
import { RiMapPinFill, RiWindyFill } from 'react-icons/ri'
import { AiFillClockCircle } from 'react-icons/ai'
import { BsCloudsFill, BsThermometerHalf, BsFillSunFill } from 'react-icons/bs'
import { WiHumidity } from 'react-icons/wi'

import dayjs from 'dayjs'

export default function MainContent({ result }) {
  return (
    <Box pt="5">
      <Flex align="center" fontSize="2xl" color="blue.400" mb="3" py="3" px="5">
        <GiWorld fontSize="36px" />
        <Text fontWeight="medium" ml="2">{result?.location?.country} - {result?.location?.name} - {result?.location?.region} </Text>
      </Flex>
      <Flex>
        <Box py="3" px="5" width="50%">
          <Box mb="5">
            <Heading as="h2" size="lg" color="blue.400" mb="5">Coordenadas:</Heading>
            <Flex align="center" mb="3">
              <RiMapPinFill fontSize="20px" />
              <Text ml="2"><strong>Latitude:</strong> {result?.location?.lat} </Text>
            </Flex>
            <Flex align="center" mb="3">
              <RiMapPinFill fontSize="20px" />
              <Text ml="2"><strong>Longitude:</strong> {result?.location?.lon} </Text>
            </Flex>
          </Box>
          <Box mb="5" width="50%">
            <Heading as="h2" size="lg" color="blue.400" mb="5">Informações sobre Horário:</Heading>
            <Flex align="center" mb="3">
              <AiFillClockCircle fontSize="20px" />
              <Text ml="2"><strong>Fuso Horário:</strong> {result?.location?.tz_id} </Text>
            </Flex>
            <Flex align="center" mb="3">
              <AiFillClockCircle fontSize="20px" />
              <Text ml="2"><strong>Horário da busca:</strong> {dayjs(result?.location?.localtime).format('DD/MM/YYYY HH:mm')} </Text>
            </Flex>
          </Box>
        </Box>
        <Box py="3" px="5">
          <Box >
            <Heading as="h2" size="lg" color="blue.400" mb="5">Informações sobre o clima:</Heading>
            <Box>
              <Flex align="center" mb="3">
                <BsCloudsFill fontSize="20px" />
                <Text ml="2"><strong>Condições do céu:</strong> {result?.current?.condition?.text}</Text>
              </Flex>
              <Flex align="center" mb="3">
                <BsFillSunFill fontSize="20px" />
                <Text ml="2"><strong>Temperatura Atual:</strong> {result?.current?.temp_c} ºC | {result?.current?.temp_f} F</Text>
              </Flex>
              <Flex align="center" mb="3">
                <BsThermometerHalf fontSize="20px" />
                <Text ml="2"><strong>Sensação termica:</strong> {result?.current?.feelslike_c} ºC | {result?.current?.feelslike_f} F</Text>
              </Flex>
              <Flex align="center" mb="3">
                <RiWindyFill fontSize="20px" />
                <Text ml="2"><strong>Velocidade dos ventos:</strong> {result?.current?.wind_kph} (KPH) | {result?.current?.wind_mph} (MPH)</Text>
              </Flex>
              <Flex align="center" mb="3">
                <WiHumidity fontSize="20px" />
                <Text ml="2"><strong>Humidade:</strong> {result?.current?.humidity}%</Text>
              </Flex>
              <Flex align="center" mb="3">
                <AiFillClockCircle fontSize="20px" />
                <Text ml="2"><strong>Última atualização:</strong> {dayjs(result?.current?.last_updated).format('DD/MM/YYYY HH:mm')}</Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
