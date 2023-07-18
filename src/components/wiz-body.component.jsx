import React from "react";

const WizBody = ({ step, subtitle, video }) => {
  return (
    <div className="block">
      <h3 className="subtitle">
        Step {step}: {subtitle}
      </h3>
      <div className="container">
        <p className="block">
          Watch this introductory video on how to approach this section
        </p>
        <div className="container columns is-centered">
          <div className="column is-half is-centered">
            <figure class="image is-16by9">
              <iframe
                class="has-ratio"
                width="320"
                height="180"
                src="https://www.youtube.com/embed/YE7VzlLtp-4"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizBody;
