import { Row, Col } from 'react-bootstrap'
import ProductItem from '../components/Productitem'
import { productlist } from '../Data/items';

function Shop() {
    return (
        <Row xs={1} md={4} className='g-4'>
            {productlist.map((item) => (

                <Col align='center' key={item.id}>
                    <ProductItem Product={item} />
                </Col>
            ))}


        </Row>
    )


}
export default Shop