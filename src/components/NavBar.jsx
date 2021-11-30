import { Nav } from 'react-bootstrap';

const NavBar = () => {
return (
    <div>
    <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Myapp!</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Shop!</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Contact!</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Preguntas Frecuentes!
    </Nav.Link>
  </Nav.Item>
</Nav>
    </div>
)
};
export default NavBar;
