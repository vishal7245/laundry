import styles from "../style";
import { logo1 } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo1}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to do the laundry, reliable and secure.
        </p>
      </div>

      <div className="flex-[3.5] flex md:flex-row flex-col w-full md:mt-0 mt-10">
  {/* Map */}
  <div className="md:w-1/2">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3507.7818538557112!2d76.98347561507863!3d28.4559916824877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI3JzIxLjYiTiA3NsKwNTknMDguNCJF!5e0!3m2!1sen!2sin!4v1682066845099!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  {/* Contact Section */}
  <div className={`${styles.heading2} text-right md:w-1/2 md:pl-8 mt-10 md:mt-0`}>
    <h1>Contact</h1>
    <p className={`${styles.paragraph}`}>Sahil Yadav: +91 99113 96425</p>
    <p className={`${styles.paragraph}`}>Jayant : +91 70601 21256</p>
    <a href="mailto:info@nivilaundry.com">
      <button
        type="button"
        className={`my-10 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}
      >
        Email Us
      </button>
    </a>
  </div>
</div>



    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white mb-6 md:mb-0">
        Copyright Ⓒ 2023 Nivi. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
