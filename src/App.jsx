import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Error from './pages/Error'
import Trendings from './pages/Trendings'
import SingleProductPage from './pages/SingleProductPage'
import Footer from './components/Footer'
import Cart from './pages/Cart'

function App() {

  return (
  

    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/home' element={ <Home/>}/>
        <Route path='/contact' element={ <Contact/>}/>
        <Route path='/shop' element={ <Shop/>}/>
        <Route path='/trending' element={ <Trendings/>}/>
        <Route path='/cart' element={ <Cart/>}/>
        <Route path='/singleproduct/:id' element={ <SingleProductPage/>}/>
        <Route path='*' element={ <Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
