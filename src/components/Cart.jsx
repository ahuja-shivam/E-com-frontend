import React from 'react';
import { useCart } from 'react-use-cart';
import { Table, Button, Row, Col, Container } from 'react-bootstrap';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return <h1 className='text-center mt-6'>Your Cart is Empty</h1>;
  }

  return (
    <Container className='py-4'>
      <Row className='justify-content-center'>
        <Col xs={12}>
          <h5>Cart ({totalUniqueItems}) Total items: ({totalItems})</h5>
          <Table bordered hover responsive>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.img} style={{ height: '6rem' }} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>{'\u20B9'}{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <Button variant='primary' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                    <Button variant='primary' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                    <Button variant='danger' onClick={() => removeItem(item.id)}>Remove Item</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs='auto' className='ms-auto'>
          <h2>Total Price: {cartTotal}</h2>
        </Col>
        <Col xs='auto'>
          <Button variant='danger' onClick={() => emptyCart()}>Clear Cart</Button>
          <Button variant='primary' className='m-2'>Buy Now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
