// ContentContainer.js
import React from "react";

const ContentContainer = ({
    clockIcon
  }) => {
  return (
    <div className="main-content">
      <div className="background-design"></div>
      <div className="content-container">
        <div className="background-container">
          <div className="timer-container">
            <div className="timer_icon">
              <img src={clockIcon} alt="not clock" />
            </div>
            <div className="timer_count">
              <h5>15 Minutes</h5>
            </div>
          </div>
          <h1 className="title">
            The Big Five: Your Gateway to Greater Discoveries!
          </h1>
          <div className="intro">
            <p>
              Before we embark on this thrilling journey to uncover your unique
              career path, we need to get to know you a little better. And what
              better way than through the 'Big Five Personality Assessment'?
            </p>
            <p>
              The Big Five is a well-respected psychological model that helps us
              understand your unique personality traits. No, we're not
              mind-readers (though that would be cool), we simply use science to
              help you discover the best career paths suited to your
              personality.
            </p>
            <p>
              This isn't a test, so there are no right or wrong answers. Just be
              honest, because the more truthful you are, the more accurate your
              career matches will be. And don't worry, we value your privacy and
              your responses will be kept confidential. This introspective
              journey will take about 15 minutes of your time. So, grab a snack,
              settle into your favorite chair, and get ready to dive deep into
              the fascinating world of you!
            </p>
            <button className="proceed-button">Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
