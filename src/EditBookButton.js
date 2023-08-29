import React from 'react';
import Button from 'react-bootstrap/Button';
import './EditBookButton.css'; // Import your custom styles for the button

class EditBookButton extends React.Component {
  render() {
    console.log(this.props.book._id)
    return (
      <Button
        variant="secondary"
        className='edit-button'
        onClick={() => this.props.showUpdateForm(this.props.book._id)}
      >
        Edit Book
      </Button>
    );
  }
}

export default EditBookButton;
