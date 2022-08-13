import React, { useState, useEffect } from "react";
import "./Favourites.css";
import fire from "../../fire";
import firebase from "firebase";
import FavouritesTable from './FavouritesTable'
import { Button } from "@material-ui/core";

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [input, setInput] = useState('');
  const db = fire.firestore();

  useEffect(() => {
    db.collection('favourites')
    .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setFavourites(snapshot.docs.map((doc) => ({
          id : doc.id,
          favourite : doc.data().favourite,
          user : doc.data().user
        })
        ))
      })
  })

  const addFavourite = (e) => {
    e.preventDefault();
    db.collection('favourites')
      .add({
        favourite: input,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        user : firebase.auth().currentUser.uid
      })

    setFavourites([...favourites, input]);
    setInput('');
  }

  return (
    <div id="todo-list">
      <h1>whr2eat tomorrow ?</h1>
      <h2>SAVE YOUR FAVOURITES NOW !</h2>
      <form>
        <input 
          value={input} 
          onChange={event => 
          setInput(event.target.value)} 
        />
        <Button 
          disabled={!input} 
          type="submit" 
          onClick={addFavourite}
        >
          <i class="fa-solid fa-plus"></i>
        </Button>
      </form>
      {favourites.map((favourite) => 
        favourite.user === firebase.auth().currentUser.uid && (
        <FavouritesTable favourite={favourite} />
      ))}
    </div>
  )

}

export default Favourites;