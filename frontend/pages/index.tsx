import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import Lista from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {

  // const object = useIndex()
  // descontruindo objeto
  const {listTeachers} = useIndex()

  return (
      <Box sx={{backgroundColor: 'secondary.main'}}>
        <Lista teachers={listTeachers}></Lista>
      </Box>
    )
}

export default Home

/*
O componente Box é usado para estilização, funciona semelhante à uma div

A constante teachers é do tipo Teachers, que está na interface na pasta @types
*/