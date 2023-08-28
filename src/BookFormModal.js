import React from "react";
import './BookFormModal.css';
import { Button, Form, Modal } from "react-bootstrap";

class BookFormModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.showBookForm}
      onHide={this.props.handleCloseModal}
      size='lg'
      className="book-form-modal"
      >
        <Form onSubmit={this.props.handleBookSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Select name="status" aria-label="Completed">
            <option>Choose a status</option>
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>
          <Button type="submit" >Add Book</Button>
        </Form>
      </Modal>
    );
  }
}

export default BookFormModal;
