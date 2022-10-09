import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header/Header'
import { ThemeProvider } from '@mui/material'
import tema from '../src/components/themes/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Header></Header>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

/*
Nesta página são adicionados todos os componentes que aparecerão de forma global no projeto
*/