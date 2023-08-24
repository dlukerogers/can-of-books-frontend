import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';

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
      console.log("We have an error;", error.response.data);
    }
  };

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
            <Carousel id="bookCarousel" data-bs-theme="dark">
              {this.state.books.length && this.state.books.map((book, idx) => (
                <Carousel.Item id="carouselItem" key={idx}>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=f5f5f5"
                    alt={book.title}
                  />
                  <Carousel.Caption>
                    <h5>{book.title}</h5>
                    <p>{book.description}</p>
                    <p>{book.status}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ) : (
          <h3 id="noDataP">No Books Found :</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
