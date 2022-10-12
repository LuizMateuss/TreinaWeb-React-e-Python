import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  // const object = useIndex()
  // descontruindo objeto
  const {
    listTeachers,
    name,
    setName,
    email,
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    classDate,
    message,
    setMessage
  } = useIndex()

  return (
    <div>
      <Box sx={{backgroundColor: 'secondary.main'}}>
        <List
          teachers={listTeachers}
          onSelect={(teacher) => setSelectedTeacher(teacher)}
        ></List>
      </Box>

      <Dialog 
          open={selectedTeacher !== null} 
          fullWidth PaperProps={{sx: {p: 5}}}
          onClose={()=>setSelectedTeacher(null)}
        >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label="Digite o nome"
              type="text"
              fullWidth
              onChange={(event)=>setName(event.target.value)}
              value={name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Digite o e-mail"
              type="email"
              fullWidth
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{mt: 5}}>
          <Button onClick={()=>setSelectedTeacher(null)}>Cancelar</Button>
          <Button onClick={()=>classDate()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        message={message} 
        open={message.length>0}
        autoHideDuration={2000}
        onClose={()=>setMessage('')}
      />
    </div>
  )
}

export default Home

/*
O componente Box é usado para estilização, funciona semelhante à uma div

A constante teachers é do tipo Teachers, que está na interface na pasta @types
*/