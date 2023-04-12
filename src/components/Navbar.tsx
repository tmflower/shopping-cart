import { Navbar as NavbarBs, Nav, Container } from 'react-bootstrap'
import cart from '../assets/shopping-cart.png'
import { NavLink } from 'react-router-dom'

export function Navbar() {
	return (
		<NavbarBs className="bg-white shadow-sm mb-3">
			<Container>
				<Nav>
					<Nav.Link to="/" as={NavLink}><img src={cart} width="50"/></Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link to="/about" as={NavLink}>About</Nav.Link>
				</Nav>
			</Container>

		</NavbarBs>
	)
}
