import React, { useState } from 'react'
import { ButtonFAV2 } from "../ButtonFAV2";
import fire from "../../fire";

function FavouritesTable(props) {
  const db = fire.firestore();
  const [editing, setEditing] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [input, setInput] = useState();
  
  const updateFavourite = () => {
    db.collection('favourites').doc(props.favourite.id).set({
      favourite: input
    }, {merge: true})
    setEditing(false);
  }

  function toggleComplete(id) {
    let updatedFavourites = [...favourites].map((favourite) => {
      if (favourite.id === id) {
        favourite.completed = !favourite.completed;
      }
      return favourite;
    });
    setFavourites(updatedFavourites);
  }
  return (
    <div key={props.favourite.id} className='todo-input'>
      <div className="todo-text">  
        <input
          type="checkbox"
          id="completed"
          checked={props.favourite.completed}
          onChange={() => toggleComplete(props.favourite.id)}
        />
        {props.favourite.id === editing ? (
          <input
            placeholder={props.favourite.favourite}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />  
        ) : (
          <div>{props.favourite.favourite}</div>
        )}
        </div>
        <div className="todo-actions">
          {props.favourite.id === editing ? (
          <ButtonFAV2
            className='btns'
            buttonStyle='btn--outline' 
            onClick={updateFavourite}
          >
            CHANGE <i class="fa-solid fa-arrows-rotate"></i>
          </ButtonFAV2>  
          ) : (
          <ButtonFAV2 
            className='btns'
            buttonStyle='btn--outline' 
            onClick={() => setEditing(props.favourite.id)}
          >
            EDIT <i class="fa-solid fa-pen"></i>
          </ButtonFAV2>
          )}
          <ButtonFAV2
            className='btns'
            buttonStyle='btn--outline'
            onClick={e => db.collection('favourites').doc(props.favourite.id).delete()}
          >
            DELETE <i class="fa fa-trash"></i>
          </ButtonFAV2>
          </div>   
        </div> 
  )
}

export default FavouritesTable