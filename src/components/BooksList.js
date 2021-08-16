import React from 'react'
import BookForm from './BookForm'

const AddBook = () =>{
    const handleOnSubmit = (book) =>{
     console.log(book);
    };
    return(
        <react.fragment>
            <BookForm handleOnSubmit={handleOnSubmit}/>
            </react.fragment>
    );
};
export default AddBook;