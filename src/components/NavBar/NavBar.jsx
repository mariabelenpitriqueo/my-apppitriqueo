import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import CartWidget from './CartWidget'


const NavBar = () => {
return (
    <div>
    <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Link to="/Myapp!">Myapp!</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/Shop!">Shop!</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="Contact!">Contact!</Link>
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
