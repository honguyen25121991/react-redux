import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

export default function FormAddNew(props) {
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address :</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form>
        <Button variant="primary">Create</Button> {"   "}
        <Button variant="danger">Edit</Button>
      </Container>
    </>
  );
}
