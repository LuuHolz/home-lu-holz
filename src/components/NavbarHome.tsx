import icono from '../assets/icono-circle.png';
import Carrito from './Carrito';
import { Search } from './Search';


const NavbarHome = () => {
  return (
    <div className="container-navbar">
        <div className='container-icon'>
          <img src={ icono } alt="icono" className='image-icono'/>
        </div>

        <Search/>

        <Carrito/>

    </div>
  )
}

export  { NavbarHome }