import {Nav }from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => (
    <>
   <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link as ={Link} to= '/'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as ={Link} to = '/About'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as ={Link} to ='/contact'>Contact</Nav.Link>
      </Nav.Item>
      
    </Nav>
   </>
)

export default Header