import React from "react";
const SocialBar = () => {
  return (
    <>
      <div className="social-bar">
        <a
          href="https://www.facebook.com/ElMundoAcuaticoEc"
          className="icon icon-facebook"
          target="_blank"
        ></a>
        <a
          href="https://api.whatsapp.com/send/?phone=5930987054324&text&app_absent=0"
          className="icon icon-whatsapp"
          target="_blank"
        ></a>
        <a
          href="https://www.youtube.com/channel/UC8Gx68tydQsIf-9xAy7tbHA"
          className="icon icon-youtube"
          target="_blank"
        ></a>
        <a
          href="https://www.instagram.com/by_acuaticos/"
          className="icon icon-instagram"
          target="_blank"
        ></a>
      </div>
    </>
  );
};

export default SocialBar;
