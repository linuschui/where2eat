import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import fire from "../../fire";

function AllReviews() {

  // get all reviews from database
  const [reviews, setReviews] = useState([]);
  const db = fire.firestore();
  
  useEffect(() => {
    db.collection('reviews')
    .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setReviews(snapshot.docs.map((doc) => ({
          id : doc.id,
          title : doc.data().title,
          review : doc.data().review,
        })
        ))
      })
  })

  return (
    <div>{reviews.map((review) => (
      <div>
        <h1>{review.title}</h1>
        <h2>{review.review}</h2>
        </div>
     ))}
    </div>
  )
}

export default AllReviews