import React from 'react';
import  review from "./Review.module.scss"
const Review = () => {
  return (
    <div className={review.mainBlockReview}>
     <div className={review.blockReview}>
      <h5 className={review.h5_tablet}>Отзывы</h5>
      <div className={review.Testimonials}>
        <div className={review.Testimonial}>
          <div className={review.top_feed}>
            <img className={review.userImg}  src="images/user.png" alt="user" />
            <div className={review.head_feed}>
              <p className={review.h7}>Michael John</p>
              <p className={review.text_feed}>Local Austria · Today</p>
            </div>
          </div>
          <p className={review.text}>
            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online 
            <br /> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
          </p>
        </div>
        <div className={review.Testimonial+' '+review.Oscar}>
          <div className={review.top_feed}>
            <img className={review.userImg} src="images/user.png" alt="user" />
            <div className={review.head_feed}>
              <p className={review.h7}>Oskar Samborsky</p>
              <p className={review.text_feed}>Local Austria · Yesterday</p>
            </div>
          </div>
          <p className={review.text}>
            Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
            <br /> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zo
          </p>
        </div>
        <div className={review.Testimonial}>
          <div className={review.top_feed}>
            <img className={review.userImg} src="images/user.png" alt="user" />
            <div className={review.head_feed}>
              <p className={review.h7}>Fredericka Michelin</p>
              <p className={review.text_feed}>Local Austria · Yesterday</p>
            </div>
          </div>
          <p className={review.text}>
            The best online zoo I’ve met. My son delighted very much ljves to watch goui
            <br /> The best online zoo I’ve met. My son delighted very much ljves to
          </p>
        </div>
        <div className={review.Testimonial}>
          <div className={review.top_feed}>
            <img className={review.userImg} src="images/user.png" alt="user" />
            <div className={review.head_feed}>
              <p className={review.h7}>Mila Riksha</p>
              <p className={review.text_feed}>Local Austria · Yesterday</p>
            </div>
          </div>
          <p className={review.text}>
            My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best onlin
            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
          </p>
        </div>
      </div>
      <div className={review.progress_bar+' '+review.blue+' '+review.stripes}>
        <span></span>
      </div>
      {/* <progress class="line" value="23" max="100"></progress> */}
      <button className={review.feedback}>Оставить отзыв</button>
    </div>
  </div>
    );
  
};

export default Review;
