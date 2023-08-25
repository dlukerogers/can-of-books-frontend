import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import DeleteButton from './DeleteButton';
import AddBookButton from './AddBookButton';
import BookFormModal from './BookFormModal';
import './BestBooks.css';

let SERVER = process.env.REACT_APP_SERVER;
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBook: false
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
    console.log(newBook);
    this.postBooks(newBook);
  }

  showBookForm = () => {
    this.setState ({
      showBook: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showBook: false
    });
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
                  <DeleteButton className='delete-button'
                    book={book}
                    deleteBooks={this.deleteBooks}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            {/* <AddBookButton
              handleBookSubmit = {this.handleBookSubmit}
            /> */}
          </div>
        ) : (
          <h3 id='noDataP'>No Books Found :</h3>
        )}
        {this.state.showBook ? <BookFormModal handleBookSubmit = {this.handleBookSubmit} handleCloseModal= {this.handleCloseModal} showBookForm={this.showBookForm}/> : <AddBookButton showBookForm={this.showBookForm}/>}
      </>
    );
  }
}

export default BestBooks;
