import React from "react";

const Thanks: React.FC = () => {
  return (
    <section className="thanks">
      <img src={process.env.PUBLIC_URL + "/images/icon-thank-you.svg"} />
      <div className="content">
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platfor. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </section>
  );
};

export default Thanks;
