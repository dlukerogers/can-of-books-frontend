import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';
import {Button, Container, Form} from 'react-bootstrap';
import DeleteButton from './DeleteButton';

let SERVER = process.env.REACT_APP_SERVER;
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data,
      });
    } catch (error) {
      console.log('We have an error;', error.response.data);
    }
  };

  postBooks = async (newBook) => {
    try{
      let url = `${SERVER}/books`;
      let createdBook = await axios.post(url, newBook);
      console.log(createdBook.data);
      // this.getBooks();
      this.setState({
        books: [...this.state.books, createdBook.data]
      });
    } catch(error) {
      console.log('We have an error;', error.response.data);
    }
  }
  
  deleteBooks = async (id) => {
    try {
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url);
      // this.getBooks();
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch(error) {
      console.log('We have an error;', error.response.data);
    }
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    };
    this.postBooks(newBook);
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <div>
            <Carousel id='bookCarousel' data-bs-theme='dark'>
              {this.state.books.length && this.state.books.map(book => (
                <Carousel.Item id='carouselItem' key={book._id}>
                  <img
                    className='d-block w-100'
                    src='holder.js/800x400?text=First slide&bg=f5f5f5'
                    alt={book.title}
                  />
                  <Carousel.Caption>
                    <h5>{book.title}</h5>
                    <p>{book.description}</p>
                    <p>{book.status}</p>
                  </Carousel.Caption>
                  <DeleteButton
                    books={this.state.books}
                    deleteBooks={this.deleteBooks}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <Container className="mt-5">
              <Form onSubmit={this.handleBookSubmit}>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Select name="status" aria-label="Completed">
                  <option>Choose a status</option>
                  <option value="Not started">Not started</option>
                  <option value="In progress">In progress</option>
                  <option value="Completed">Completed</option>
                </Form.Select>
                <Button type="submit">Add Book</Button>
              </Form>
            </Container>
          </div>
        ) : (
          <h3 id='noDataP'>No Books Found :</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
