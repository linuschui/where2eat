import React, { useState, useEffect } from 'react';
import fire from "../../fire";
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import "./Review.css"

function AllReviews() {

  // get all reviews from database
  const [reviews, setReviews] = useState([]);
  const db = fire.firestore();
  
  useEffect(() => {
    db.collection('reviews')
    .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setReviews(snapshot.docs.map((doc) => ({
          
          title : doc.data().title.label,
          review : doc.data().review,
          user: doc.data().user,
          displayName : doc.data().displayName,
          rating : doc.data().rating
        })
        ))  
      })
  })

  return (
    <div className="homePage"> 
      <br></br>
      <h1>SEE WHAT OTHERS ARE SAYING</h1>
      <Button
        component={ Link }
        to='/review'
      >
        WRITE A REVIEW
      </Button> 
      {reviews.map((review) => (
        <div className="post">
          {review.review !== "" ? (
            <>
              <div className="postHeader">
                <div className="title">
                  <h1>{review.title}</h1>
                </div> 
              </div>   
              <div classsName="postTextContainer">{review.review}</div>
              <br></br>
              {review.rating <= 5 && review.rating >= 0 ? (
                <h4>rating : {review.rating}</ h4>
              ) : (
                <h4>rating : unavailable</h4>
              )}
              <br></br>
              {review.displayName === "" ? (
                <h4>anonymous</ h4>
              ) : (
                <h4>@{review.displayName}</ h4>
              )}
            </>
          ) : (
            <></>
          )}
        </div> 
      ))}
    </div>
  )
}

export default AllReviews