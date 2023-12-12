import Kalvium from './component/Kalvium'
import Contact from './component/Contact'
import Registration from './component/Registration'
import { Link ,Route , Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className='nav'>
      <Link to="/" className='Link'> Kalvium </Link>
      <Link to="/Contact" className='Link'>Contacts</Link>
      <Link to="/Registration" className='Link'>Registration Form </Link>

      </div>

      <Routes>
        <Route path='/' element = {<Kalvium/>}></Route>
        <Route path='/Contact' element = {<Contact/>}></Route>
        <Route path='/Registration' element = {<Registration/>}></Route>
      </Routes>
    </>
  )
}

export default App
