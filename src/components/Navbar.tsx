import { Navbar as NavbarBs, Nav, Container, Button } from 'react-bootstrap'
import cart from '../assets/shopping-cart.png'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
	const { openCart, cartQuantity } = useShoppingCart();

	return (
		<NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
			<Container>
				<Nav className="me-auto">
					<Nav.Link to="/" as={NavLink}><img src={cart} width="50"/></Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link to="/about" as={NavLink}>About</Nav.Link>
				</Nav>
				{cartQuantity > 0 &&
				(<Button
					onClick={openCart}
					style={{ paddingLeft: 10, paddingRight: 10, marginLeft: 10, position: "relative" }}
					variant="outline-primary">Checkout
					<div
						style={{
							color: "white",
							width: "1.5rem",
							height: "1.5rem",
							position: "absolute",
							bottom: 0,
							right: 0,
							transform: "translate(40%, 40%)",}}className="rounded-circle bg-danger d-flex justify-content-center">
						{cartQuantity}
					</div>
				</Button>)}
			</Container>

		</NavbarBs>
	)
}
