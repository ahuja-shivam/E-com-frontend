import React from 'react';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';

const Login = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="outline-primary ms-auto" onClick={handleShow}>
        <span className='fa fa-sign-in me-1'></span>Login
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="primary w-100 mb-4">
            <span className='fa fa-google me-2'></span> Sign in with Google
          </Button>
          <Button variant="primary w-100 mb-4">
            <span className='fa fa-facebook me-2'></span> Sign in with Facebook
          </Button>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="outline-primary w-100 mt-5" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
