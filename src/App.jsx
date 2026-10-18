import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listBook,setListBook] = useState([]);
  const [searchText,SetSeachText] = useState("");
  useEffect(()=>{getDataBooks()},[searchText]);

  const getDataBooks = async ()=>{
    try {
    const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
    setListBook(result.data.items);
    }catch(error){
      console.error(error)
    }
  }

  return <div className="App">{
    <div className="content">
      <h1>Find a Book</h1>
      <input type="text" value={searchText} onChange={(event)=>{SetSeachText(event.target.value); }}/>
      <ul>
        {listBook.map((book)=>(<li key={book.id}>{book.volumeInfo.title}</li>))}
      </ul>
    </div>
    }</div>;
}

export default App;
