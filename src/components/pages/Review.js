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

  const addReview = (e) => {
    e.preventDefault();
    db.collection('reviews')
      .add({
        title: title,
        review: reviewText,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        user : firebase.auth().currentUser.uid
      })
    setTitle([...title, title])
    setReviewText([...reviewText, reviewText]);
    setTitle("");
    setReviewText("")
  }

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
        <Button
          disabled={!title}
          type="submit"
          onClick={addReview}
        >
          Submit Review
        </Button>
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