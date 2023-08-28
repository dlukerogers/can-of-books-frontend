import React from 'react';
import Button from 'react-bootstrap/Button';
import './DeleteButton.css'; // Import your custom styles for the button

class DeleteButton extends React.Component {
  render() {
    return (
      <Button
        
        className='delete-button'
        onClick={() => this.props.deleteBooks(this.props.book._id)}
      >
        Delete Book
      </Button>
    );
  }
}

export default DeleteButton;
