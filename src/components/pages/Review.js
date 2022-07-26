import React, { useState, useEffect } from 'react'
import { Button } from "@material-ui/core"
import fire from '../../fire';
import firebase from "firebase";
import { Link } from "react-router-dom"
import "./Review.css"
import Select from 'react-select';

function Review() {
  // connect to database
  const db = fire.firestore();
  // add review to database
  const [title, setTitle] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [displayName, setDisplayName] = useState("");

  const addReview = (e) => {
    // e.preventDefault();
    db.collection('reviews')
      .add({
        title: title,
        review: reviewText,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        username : firebase.auth().currentUser.uid,
        displayName : displayName,
        rating : rating,
        like: 0,
        dislike: 0
      })
    setTitle([...title, title])
    setReviewText([...reviewText, reviewText]);
    setRating([...rating, rating])
    setDisplayName([...displayName, displayName])
    setTitle(null);
    setReviewText("");
    setRating("");
    setDisplayName("");
  }

  function SubmitButton() {
    if (title && reviewText && rating && displayName){
      return (
        <Button onClick={addReview}>
          SUBMIT REVIEW
        </Button>
      )
    } else {
      return <Button disabled>FILL IN ALL FIELDS</Button>
    };
  };

  const restaurants = [
    { label: "Arise and Shine", value: 1 },
    { label: "Bar Bar Black Sheep", value: 2 },
    { label: "Bistro Box", value: 3 },
    { label: "Bober Tea", value: 4 },
    { label: "Cafe Delight", value: 5 },
    { label: "Central Square", value: 6 },
    { label: "Chop Chop", value: 7 },
    { label: "Deck", value: 8 },
    { label: "E2 Kitchen", value: 9 },
    { label: "Eureka Taste", value: 10 },
    { label: "Fine Food", value: 11 },
    { label: "Flash Coffee", value: 12 },
    { label: "Flavours", value: 13 },
    { label: "Foreword Coffee", value: 14 },
    { label: "Huggs Coffee", value: 15 },
    { label: "Hwang's Korean Restaurant", value: 16 },
    { label: "Jewel Coffee", value: 17 },
    { label: "KOI", value: 18 },
    { label: "Lejomo Cafe", value: 19 },
    { label: "Liang Ban Kung Fu", value: 20 },
    { label: "LiHO Tea", value: 21 },
    { label: "Li Ji Coffeehouse", value: 22 },
    { label: "Maxx Coffee", value: 23 },
    { label: "Nami", value: 24 },
    { label: "Nine Fresh", value: 25 },
    { label: "Pasta Express", value: 26 },
    { label: "PGPR Aircon Canteen", value: 27 },
    { label: "PGPR Non-Aircon Canteen", value: 28 },
    { label: "Prive Grill", value: 29 },
    { label: "Reedz Cafe", value: 30 },
    { label: "Rice & Stuff", value: 31 },
    { label: "Sapore Italian Restaurant", value: 32 },
    { label: "Spinelli Coffee", value: 33 },
    { label: "Starbucks", value: 34 },
    { label: "Supersnacks", value: 35 },
    { label: "Taiwan Ichiban", value: 36 },
    { label: "Techno Edge", value: 37 },
    { label: "The Coffee Hut", value: 38 },
    { label: "The Coffee Roaster", value: 39 },
    { label: "The Royals Bistro", value: 40 },
    { label: "The Spread", value: 41 },
    { label: "The Summit", value: 42 },
    { label: "The Tea Party", value: 43 },
    { label: "Udon Don Bar", value: 44 },
    { label: "Uncle Penyet", value: 45 },
    { label: "Waacow", value: 46 },
  ];

  return (
    <>
    <div className="createReview">
      <div className="crContainer">
      <h1>SUBMIT A REVIEW</h1>
        <div className="inputGp">
          <h2> RESTAURANT </h2>
          {/* <input 
            value={title}
            placeholder="restaurant name" 
            onChange={e => {setTitle(e.target.value)}}
          /> */}
          <Select
            className="select"
            defaultValue={title}
            onChange={setTitle}
            options={restaurants}
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