import { BrowserRouter, Routes, Route } from 'react-router'

// Importing all views
import {Blog} from './views/blog'
import {Comments} from './views/comments'
import {Credits} from './views/credits'
import {Game} from './views/game'
import {Main} from './views/main'
import {Resources} from './views/resources'
import {Tools} from './views/tools'
//projects views
import {Desktop} from './views/projects/desktop'
import {Mobile} from './views/projects/mobile'
import {Web} from './views/projects/web'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        {/* views */}
        <Route path="/blog" element={<Blog/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/credits" element={<Credits/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/tools" element={<Tools/>} />
        {/* projects views */}
        <Route path="/projects/desktop" element={<Desktop/>} />
        <Route path="/projects/mobile" element={<Mobile/>} />
        <Route path="/projects/web" element={<Web/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
};