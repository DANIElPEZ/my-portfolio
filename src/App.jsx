import { HashRouter as Router, Routes, Route } from 'react-router'
import {Comments} from './views/comments'
import {Game} from './views/game'
import {Main} from './views/main'

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/comments" element={<Comments/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </Router>
    </>
  )
};