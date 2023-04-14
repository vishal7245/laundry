import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Partnered with<br className="sm:block hidden" /> 50+ PGs.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
      Our service is currently available in select sectors of Gurgaon, including sector 10, 37, 45, 44, 21, and 22. We are constantly expanding our service area to cover more locations in other areas also, so keep an eye out for updates on our website.
      </p>

    </div>
  </section>
);

export default Billing;
