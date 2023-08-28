import React from "react";
import './BookFormModal.css';
import { Button, Form, Modal } from "react-bootstrap";

class UpdateForm extends React.Component {
  render() {
    return (
      <Modal show={this.props.showUpdateForm}
      onHide={this.props.handleCloseUpdateModal}
      size='lg'
      className="book-form-modal"
      >
        <Form onSubmit={this.props.handleBookUpdate}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.title}/>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.description}/>
          </Form.Group>
          <Form.Select name="status" aria-label="Completed">
            <option>{this.props.book.status}</option>
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>
          <Button type="submit" >Update Book</Button>
        </Form>
      </Modal>
    );
  }
}

export default UpdateForm;
