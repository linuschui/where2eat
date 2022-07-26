import React, { useState, useEffect } from 'react';
import fire from "../../fire";
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import "./Review.css"
import firebase from "firebase"

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
          title : doc.data().title.label,
          review : doc.data().review,
          user: doc.data().user,
          displayName : doc.data().displayName,
          rating : doc.data().rating.value,
          username: doc.data().username,
          like: doc.data().like,
          dislike: doc.data().dislike
        })
        ))  
      })
  })

  const [isLike, setIsLike] = useState(false);
  const increment = firebase.firestore.FieldValue.increment(1);
  const decrement = firebase.firestore.FieldValue.increment(-1);

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
              <div classsName="postTextContainer">
                {review.review}
              </div>
              <br></br>
              {review.rating == 5 ? (
                <h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                </h4>
              ): (null)}
              {review.rating == 4 ? (
                <h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                </h4>
              ): (null)}
              {review.rating == 3 ? (
                <h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                </h4>
              ): (null)}
              {review.rating == 2 ? (
                <h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                </h4>
              ): (null)}
              {review.rating == 1 ? (
                <h4>
                <i class="fas fa-star"></i>
                </h4>
              ): (null)}
              <br></br>
              {review.displayName === "" ? (
                <h4>anonymous</ h4>
              ) : (
                <h4>@{review.displayName}</h4>
              )}
              <br></br>
              <h4>{review.like} LIKED THIS</h4>
              <Button
                onClick={() => {
                  db.collection('reviews')
                    .doc(review.id)
                    .update({
                      like: increment
                    })
                  setIsLike(true)}
                }
                disabled={isLike}
              >
                LIKE
              </Button>
              <Button
                onClick={() => {
                  db.collection('reviews')
                    .doc(review.id)
                    .update({
                      like: decrement
                    })
                  setIsLike(false)}
                }
                disabled={!isLike}
              >
                UNLIKE
              </Button>
              {review.username === firebase.auth().currentUser.uid ? (
                <Button
                  onClick={e => db.collection('reviews').doc(review.id).delete()}
              >
                DELETE  <i class="fa fa-trash"></i>
              </Button>
              ) : (null)}
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