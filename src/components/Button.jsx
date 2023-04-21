import React from "react";

const Button = ({ styles }) => (
  <a href="https://api.whatsapp.com/send/?phone=9205043720&text&type=phone_number&app_absent=0"><button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  Get Started
</button></a>
);

export default Button;
