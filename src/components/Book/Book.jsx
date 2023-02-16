import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    return(
      <div className='col-3'>
        <div className="card" style={{ width: '18rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.book.name}</h5>
            <p className="card-text">
              información sobre el libro.
            </p>
            <a href="#" className="btn btn-primary">agregar al carrito</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;