import React ,{useState} from 'react'
import {Form ,Button } from 'react-bootstrap'
import {v4 as uuidv4 } from 'uuid'

const BookForm = (props) =>{
  
const [book ,setBook] =useState({
            bookName:props.book ? props.book.bookName : '',
            author:props.book ? props.book.author : '',
            quantity: props.book ? props.book.quantity: '',
            price: props.Book  ? props.book.price: '',
            date: props.book  ? props.book.date : '',
        });
const [errorMsg,setErrorMsg]=useState('');
const {bookName, author, price ,quantity } = book;

const handleOnSubmit = (event) =>{
    event.preventDefault();
    const values = [bookName ,author,price,quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
        const value = `${field}`.trim();
        return value !== '' && value !=='0';
    });
    if(allFieldsFilled){
        const book = {
            id: uuidv4(),
            bookName,
            author,
            price,
            quantity,
            date:new Date()
        };
        props.handleOnSubmit(book);
    }
    else{
        errorMsg = 'Please fill out the field.';
    }
    setErrorMsg(errorMsg);
};
  const handleInputChange = (event) =>{
      const {name, value } = event.target;
      switch (name) {
          case 'quantity':
              if (value === '' || parseInt(value) === +value){
                  setBook((prevState) => ({
                      ...prevState, [name]:value
                  }));
              }
              break;
      }
  }  
}