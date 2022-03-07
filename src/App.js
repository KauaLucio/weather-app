import React, {useState} from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import axios from 'axios'
import { Heading } from '@chakra-ui/react';


export default function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState();
  const handleSubmit = async (e) => {
    if(e.key === 'Enter' && input !== '') {
      try {
        const {data} = await axios.get(`https://api.weatherapi.com/v1/current.json?key=<your_api_key>&q=${input}&aqi=yes&lang=pt`);
        setResult(data)
      } catch (error) {
        alert('Houve um erro, verifique se escreveu correto o nome da cidade')
      }
    }
  }

  return (
    <>
      <Header setInput={setInput} handleSubmit={handleSubmit} />
      {result ? (
        <MainContent result={result} />
      ): (
        <Heading mt="10" px="5" size="md" textAlign="center" color="blue.400">Pesquise pelo nome de algum país ou cidade para ver os dados</Heading>
      )}
    </>
  )
}
