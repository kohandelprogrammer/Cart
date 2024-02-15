import { useState } from 'react'
import { Navbar as NavbarBs, Button, Modal, ModalBody } from 'react-bootstrap';

import { BsCart } from 'react-icons/bs'
import CartIcon from '../icons/CartIcon';

function Navbar() {
    const [showModal, setShowModal] = useState(false)
    const handelShow = () => { setShowModal(true) }
    const handelClose = () => { setShowModal(false) }
    return (
        <>
            <NavbarBs className='border-bottom border-secondary'>
                <NavbarBs.Collapse className='justify-content-end'>
                    <Button onClick={handelShow} variant='btn btn-outline-secondary' className='text-white'>
                        {/* <BsCart className='mx-2'></BsCart> */}
                        <CartIcon />

                        سبد خرید
                    </Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={showModal} onHide={handelClose} contentClassName='card-bg' dir='rtl'>
                <Modal.Header closeButton closeVariant='white'>
                    <Modal.Title>سبد خرید</Modal.Title>
                    <ModalBody>محصول</ModalBody>
                </Modal.Header>
            </Modal >
        </>
    )
}
export default Navbar