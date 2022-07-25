import React, { useState, useEffect } from 'react'
import { Button } from "@material-ui/core"
import fire from '../../fire';
import firebase from "firebase";
import { Link } from "react-router-dom"
import "./Review.css"

function Review() {
  // connect to database
  const db = fire.firestore();
  // add review to database
  const [title, setTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [displayName, setDisplayName] = useState("");

  const addReview = (e) => {
    e.preventDefault();
    db.collection('reviews')
      .add({
        title: title,
        review: reviewText,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        username : firebase.auth().currentUser.uid,
        displayName : displayName,
        rating : rating
      })
    setTitle([...title, title])
    setReviewText([...reviewText, reviewText]);
    setRating([...rating, rating])
    setDisplayName([...displayName, displayName])
    setTitle("");
    setReviewText("");
    setRating("");
    setDisplayName("");
  }

  function SubmitButton() {
    if (title && reviewText && rating && displayName){
      return <Button onClick={addReview}>SUBMIT REVIEW</Button>
    } else {
      return <Button disabled>FILL IN ALL FIELDS</Button>
    };
  };

  return (
    <>
    <div className="createReview">
      <div className="crContainer">
      <h1>SUBMIT A REVIEW</h1>
        <div className="inputGp">
          <h2> RESTAURANT </h2>
          <input 
            value={title}
            placeholder="restaurant name" 
            onChange={e => {setTitle(e.target.value)}}
          />
        </div>
        <br></br>
        <div className="inputGp">
          <h2> REVIEW </h2>
          <input 
            value={reviewText}
            placeholder="write a good review!"
            onChange={e => {setReviewText(e.target.value)}}
          />
        </div>
        <br></br>
        <div className="inputGp">
          <h2> RATING </h2>
          <input 
            value={rating}
            placeholder="rate it out of 5!"
            onChange={e => {setRating(e.target.value)}}
          />
        </div>
        <br></br>
        <div className="inputGp">
          <h2> DISPLAY NAME </h2>
          <input 
            value={displayName}
            placeholder="choose a display name!"
            onChange={e => {setDisplayName(e.target.value)}}
          />
        </div>
        <br></br>
        <SubmitButton />
        <Button
          component={ Link }
          to="/allreviews"
        >
          SEE OTHER REVIEWS
        </Button>
      </div>
    </div>
    </>
  )
}

export default Review;