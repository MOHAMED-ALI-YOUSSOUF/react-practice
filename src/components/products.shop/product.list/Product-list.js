import { Col, Container, Row } from "react-bootstrap"
import productsData from "../../../assets/data/Product.json";
import ProductCard from "../product-card/ProductCard";

const ProductList = () => {
    console.log(productsData);
    return (
        <Container className="my-5">
            <h1 className="text-center my-5 text-danger">PRODUCTS</h1>
            <Row>
                {
                    productsData.map((product) => (
                        <Col md={6} lg={5} xl={4} key={product.id}>
                            <ProductCard
                                {...product}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default ProductList