import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import { Stream } from '../routes/Stream'

import { Main } from './Main'
import { Header } from './Header'
import { Player } from './Player'
import { GlobalStyle } from '../styles/GlobalStyles'

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