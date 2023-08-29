import React from 'react';
import Button from 'react-bootstrap/Button';
import './EditBookButton.css'; // Import your custom styles for the button

class EditBookButton extends React.Component {
  render() {
    return (
      <Button
        variant="secondary"
        className='edit-button'
        onClick={() => this.props.showUpdateForm(this.props.book)}
      >
        Edit Book
      </Button>
    );
  }
}

export default EditBookButton;
