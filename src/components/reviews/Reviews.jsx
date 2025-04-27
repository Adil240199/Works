import React, { useState } from "react";
import review from "./Review.module.scss";
import user from "../../images/user.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Состояние для текущего слайда
  const totalSlides = 4; // Количество отзывов

  const settings = {
    dots: true, // Показывать индикаторы
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость прокрутки
    slidesToShow: 1, // Количество отображаемых слайдов
    slidesToScroll: 1, // Количество прокручиваемых слайдов
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Обновляем текущий слайд
    },
    responsive: [
      {
        breakpoint: 768, // Адаптация под мобильные устройства
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Адаптация под планшеты
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const progressWidth = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className={review.mainBlockReview} id="review">
      <div className={review.blockReview}>
        <h5 className={review.h5_tablet}>Отзывы</h5>
        <Slider {...settings} className={review.Testimonials}>
          <div className={review.Testimonial}>
            <div className={review.top_feed}>
              <img className={review.userImg} src={user} alt="user" />
              <div className={review.head_feed}>
                <p className={review.h7}>Michael John</p>
                <p className={review.text_feed}>Local Austria · Today</p>
              </div>
            </div>
            <p className={review.text}>
              The best online zoo I’ve met. My son is delighted to watch
              gorillas...
            </p>
          </div>
          <div className={review.Testimonial + " " + review.Oscar}>
            <div className={review.top_feed}>
              <img className={review.userImg} src={user} alt="user" />
              <div className={review.head_feed}>
                <p className={review.h7}>Oskar Samborsky</p>
                <p className={review.text_feed}>Local Austria · Yesterday</p>
              </div>
            </div>
            <p className={review.text}>
              The best online zoo I’ve met. My son loves watching gorillas...
            </p>
          </div>
          <div className={review.Testimonial}>
            <div className={review.top_feed}>
              <img className={review.userImg} src={user} alt="user" />
              <div className={review.head_feed}>
                <p className={review.h7}>Fredericka Michelin</p>
                <p className={review.text_feed}>Local Austria · Yesterday</p>
              </div>
            </div>
            <p className={review.text}>
              The best online zoo I’ve met. My son loves to watch...
            </p>
          </div>
          <div className={review.Testimonial}>
            <div className={review.top_feed}>
              <img className={review.userImg} src={user} alt="user" />
              <div className={review.head_feed}>
                <p className={review.h7}>Mila Riksha</p>
                <p className={review.text_feed}>Local Austria · Yesterday</p>
              </div>
            </div>
            <p className={review.text}>
              My son loves watching gorillas. Online zoo is a great way to...
            </p>
          </div>
        </Slider>
        <div
          className={
            review.progress_bar + " " + review.blue + " " + review.stripes
          }
        >
          <span style={{ width: `${progressWidth}%` }}></span>
        </div>
        <button className={review.feedback}>Оставить отзыв</button>
      </div>
    </div>
  );
};

export default Review;
