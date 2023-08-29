import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import DeleteButton from './DeleteButton';
import AddBookButton from './AddBookButton';
import BookFormModal from './BookFormModal';
import EditBookButton from './EditBookButton';
import UpdateForm from './UpdateForm';
import bookImg from './img/book.png';
import './BestBooks.css';

let SERVER = process.env.REACT_APP_SERVER;
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBook: false,
      showUpdateBook: false,
      bookToUpdate: null,
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
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
      window.location.reload();
    } catch(error) {
      console.log('We have an error;', error.response.data);
    }
  }

  putBooks = async (bookToUpdate) => {
    try {
      let url = `${SERVER}/books/${bookToUpdate._id}`;
      let updatedBook =  await axios.put(url, bookToUpdate);
      let updatedBooks = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
          ? updatedBook.data
          : existingBook;
      } )
      this.setState({
        books: updatedBooks
      });
    } catch (error) {
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
    this.handleCloseModal();
  }

  showBookForm = () => {
    this.setState ({
      showBook: true
    })
  }

  showUpdateForm = (bookToBeUpdated) => {
    this.setState ({
      bookToUpdate: bookToBeUpdated,
      showUpdateBook: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showBook: false
    });
  }

  handleCloseUpdateModal = () => {
    this.setState({
      showUpdateBook: false
    });
  }

  componentDidMount = async () => {
    this.getBooks();
  }

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
          <div>
          {this.state.books.length ? (
            <Carousel id='bookCarousel' data-bs-theme='dark'>
              {this.state.books.map(book => (
                <Carousel.Item id='carouselItem' key={book._id}>
                  <img className='backgroundImg' src={bookImg} alt='bookBackground'/>
                  <Carousel.Caption>
                    <h5>{book.title}</h5>
                    <p>{book.description}</p>
                    <p id='secondp'>Status: {book.status}</p>
                    <p>{book._id}</p>
                    <DeleteButton className='delete-button'
                      book={book}
                      deleteBooks= {this.deleteBooks}
                      />
                    {this.state.showUpdateBook ? <UpdateForm putBooks={this.putBooks} handleCloseUpdateModal= {this.handleCloseUpdateModal} showUpdateForm={this.showUpdateForm} book={this.state.bookToUpdate}/> : <EditBookButton showUpdateForm={this.showUpdateForm} book={book} />}
                  </Carousel.Caption>
                  
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <h3 id='noDataP'>No Books Found :</h3>
          )}
          {this.state.showBook ? <BookFormModal handleBookSubmit = {this.handleBookSubmit} handleCloseModal= {this.handleCloseModal} showBookForm={this.showBookForm}/> : <AddBookButton showBookForm={this.showBookForm}/>}
        </div>
        <div className='spacer'>.</div>
      </>
    );
  }
}

export default BestBooks;
