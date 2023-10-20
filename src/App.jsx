
import './App.css'
import Header from './components/Header/Header'

//rtl
import rtlPlugin from "stylis-plugin-rtl";
//dealing styles
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import LANGUAGE from "../src/shared/Language";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

/*---creating cache---*/
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
// Create ltr cache
const cacheLtr = createCache({
  key: "muiltr",
});


const theme = createTheme({
  direction: LANGUAGE.dir,
  typography: {
    fontFamily: "'Cairo', sans-serif",
  },
});


function App() {

  return (
    <>
   <ThemeProvider theme={theme}>
    {/*wrapping cacheProvider*/}
      <CacheProvider value={LANGUAGE.dir === "rtl" ? cacheRtl : cacheLtr}>
      <Box id="app" dir={LANGUAGE.dir}>

      <Header logoLang={LANGUAGE.language === "ar" ? "ar" : "en"}
    /> 

      <Container className="main-container">
            <Routes>
             <Route path="/" element={<Home />} />
            </Routes>
          </Container>

        </Box>
      </CacheProvider>
    </ThemeProvider>
    </>
  )
}

export default App
