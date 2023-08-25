import React from 'react';
import Button from 'react-bootstrap/Button'

class DeleteButton extends React.Component {
  render() {
    return(
      <Button 
        variant='dark' className='delete-button'
        onClick={() => this.props.deleteBooks(this.props.book._id)}
      >
        Delete Book
      </Button>
 )}
}

export default DeleteButton;
