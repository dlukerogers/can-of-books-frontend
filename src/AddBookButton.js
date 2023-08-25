import React from 'react';
import Button from 'react-bootstrap/Button';

class AddBookButton extends React.Component {
  render () {
    return (
      <Button onClick={this.props.showBookForm}>Add Book</Button>

    )
  }
} 

export default AddBookButton;

            // <BookFormModal
            //   handleBookSubmit = {this.handleBookSubmit}
            // />
