import React, { Component } from 'react';
import Book from '../components/Book/Book';
import { data } from '../data/books';
import styles from './Books.css';
class Books extends Component {
  render() {
    return(
      <div class='row' class="input-group mb-3"style={{ fontSize: 'large', fontWeight: 'bold'}}>

        <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
        <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button </button>
        {
          this.state.books.map((book, i) => {
            return <Book key={i} book={book} />
          })
        }
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { books: data };
    console.log(this.state);
  }
}

export default Books;