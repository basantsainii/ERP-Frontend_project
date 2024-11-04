import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/auth/components/Login"
import Home from './pages/Home/HOme'
import Root from './pages/Root'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/login" element={<Login/>}></Route>
      <Route element={<Root />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
