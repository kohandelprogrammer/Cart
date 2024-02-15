import { useContext, useEffect } from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../context/Cartcontext';

function ProductItem({ Product }) {
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(Product.id)


    const onAddToCart = () => {
        cart.addItemToCart(Product.id)
    }

    return (
        <Card className='mt-5 card-bg' sm='6'>

            <Card.Body>
                <Card.Img variant='top' src={Product.image}
                    height='200px'
                    style={{ objectFit: 'cover' }} />

                <Card.Title align='right' className='text-light pt-4'>{Product.title}</Card.Title>

                <Card.Text align='right' className='text-light' dir='rtl'>{Product.price}تومان</Card.Text>
                {productQuantity > 0 ? (
                    <>
                        <Form as={Row}><Form.Label column='true' sm='6' className='text-white'>
                            :تعداد{productQuantity}</Form.Label>
                            <Col sm='6'>

                                <Button sm='6' className='mx-2' text-white variant='btn btn-outline-secondary'
                                    onClick={() => cart.addItemToCart(Product.id)}>
                                    +</Button>
                                <Button sm='6' className='mx-2' text-white variant='btn btn-outline-secondary'
                                    onClick={() => cart.removeItemFromCart(Product.id)}>
                                    -</Button>

                            </Col>

                        </Form>
                    </>
                ) : (
                    <Button sm='6' id='add_btn' onClick={onAddToCart}
                        variant='btn btn-outline-secondary' className='text-white btn_add'>
                        افزودن به سبد خرید</Button>
                )
                }


            </Card.Body>
        </Card >
    )
}
export default ProductItem