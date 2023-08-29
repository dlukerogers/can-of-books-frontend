import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import './BookFormModal.css';

class UpdateForm extends React.Component {
  render() {
    console.log(this.props.book.title);
    return (
      <Modal show={this.props.showUpdateForm}
      onHide={this.props.handleCloseUpdateModal}
      size='lg'
      >
        <Form onSubmit={this.props.handleBookUpdate} className="modal-content">
          <Form.Group controlId="title" className="form-group">
            <Form.Label className="form-label">Title</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.title} className="form-control"/>
          </Form.Group>
          <Form.Group controlId="description" className="form-group">
            <Form.Label className="form-label">Description</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.description} className="form-control"/>
          </Form.Group>
          <Form.Select name="status" aria-label="Completed" className="form-select">
            <option>{this.props.book.status}</option>
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>
          <Button type="submit" className="form-submit-button">Update Book</Button>
        </Form>
      </Modal>
    );
  }
}

export default UpdateForm;
