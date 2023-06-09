import { Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

type ShoppingCartProps = {
	isOpen: Boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
	const { closeCart } = useShoppingCart()
	return (
		<Offcanvas show={isOpen} onHide={closeCart} placement="end">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>
					Your Cart
				</Offcanvas.Title>
			</Offcanvas.Header>
		</Offcanvas>
	)
}
