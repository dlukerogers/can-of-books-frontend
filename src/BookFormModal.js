import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import './BookFormModal.css';

class BookFormModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.showBookForm}
      onHide={this.props.handleCloseModal}
      size='lg'
      >
        <Form onSubmit={this.props.handleBookSubmit} className="modal-content">
          <Form.Group controlId="title" className="form-group">
            <Form.Label className="form-label">Title</Form.Label>
            <Form.Control className="form-control" type="text" />
          </Form.Group>
          <Form.Group controlId="description" className="form-group">
            <Form.Label className="form-label">Description</Form.Label>
            <Form.Control type="text" className="form-control" />
          </Form.Group>
          <Form.Select name="status" aria-label="Completed" className="form-select">
            <option>Choose a status</option>
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>
          <Button type="submit" className="form-submit-button" >Add Book</Button>
        </Form>
      </Modal>
    );
  }
}

export default BookFormModal;
