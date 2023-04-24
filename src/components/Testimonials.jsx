import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
      </div>
      <Slider {...settings}>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </Slider>
    </>
  );
}
