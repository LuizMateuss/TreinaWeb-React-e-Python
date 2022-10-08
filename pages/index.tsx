import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import Lista from '../src/components/List/List'

const Home: NextPage = () => {

  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Luiz Mateus",
      picture: "https://github.com/luizmateuss.png",
      description: "Aula de música e violão",
      value_hour: 95.36
    },
    {
      id: 2,
      name: "Professor 2",
      picture: "https://github.com/luizmateuss.png",
      description: "Descrição professor 2",
      value_hour: 200
    },
    {
      id: 3,
      name: "Professor 3",
      picture: "https://github.com/luizmateuss.png",
      description: "Descrição professor 3",
      value_hour: 300
    },
    {
      id: 2,
      name: "Professor 2",
      picture: "https://github.com/luizmateuss.png",
      description: "Descrição professor 2",
      value_hour: 200
    }
  ]

  return (
      <Box sx={{backgroundColor: 'secondary.main'}}>
        <Lista teachers={teachers}></Lista>
      </Box>
    )
}

export default Home

/*
O componente Box é usado para estilização, funciona semelhante à uma div

A constante teachers é do tipo Teachers, que está na interface na pasta @types
*/