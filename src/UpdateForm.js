import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import './BookFormModal.css';

class UpdateForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.putBooks(book);
    this.props.handleCloseUpdateModal();
  }

  render() {
    return (
      <Modal show={this.props.showUpdateForm}
      onHide={this.props.handleCloseUpdateModal}
      size='lg'
      >
        <Form onSubmit={this.handleSubmit} className="modal-content">
          <Form.Group controlId="title" className="form-group">
            <Form.Label className="form-label">Title</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.title} defaultValue={this.props.book.title} className="form-control"/>
          </Form.Group>
          <Form.Group controlId="description" className="form-group">
            <Form.Label className="form-label">Description</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.description} defaultValue={this.props.book.description} className="form-control"/>
          </Form.Group>
          <Form.Group controlId="status" className="form-group">
            <Form.Select name="status" aria-label="Completed" className="form-select">
              <option>{this.props.book.status}</option>
              <option value="Not started">Not started</option>
              <option value="In progress">In progress</option>
              <option value="Completed">Completed</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" className="form-submit-button">Update Book</Button>
        </Form>
      </Modal>
    );
  }
}

export default UpdateForm;
