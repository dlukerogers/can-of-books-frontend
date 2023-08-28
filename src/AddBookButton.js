import React from 'react';
import Button from 'react-bootstrap/Button';
import './AddBookButton.css'; // Import custom styles for the button

class AddBookButton extends React.Component {
  render() {
    return (
      <Button onClick={this.props.showBookForm} className='add-book-button'>
        Add Book
      </Button>
    );
  }
}

export default AddBookButton;
