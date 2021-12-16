import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import CartWidget from './CartWidget'


const NavBar = () => {
return (
    <div>
    <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Link to="/">Home</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/category/GrafictArt">Grafict Art</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/category/Vintage">Vintage</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/category/Pictures">Pictures</Link>
  </Nav.Item>

  <Nav.Item>
      <Link to= "/cart" >Carrito
      <CartWidget/>
      </Link>
  </Nav.Item>
  </Nav>

</div>
)
};
export default NavBar;
