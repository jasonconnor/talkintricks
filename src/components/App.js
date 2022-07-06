import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Main } from './layout/Main'
import { Header } from './layout/Header'
import { GlobalStyle } from '../styles/GlobalStyles'

import { Home } from '../routes/Home'
import { Stream } from '../routes/Stream'

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stream' element={<Stream />} />
          <Route path='/shop' element={<Stream />} />
        </Routes>
      </Main>
    </Router>
  )
}