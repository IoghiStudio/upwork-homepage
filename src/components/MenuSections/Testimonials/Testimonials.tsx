import { useState } from 'react';
import cn from 'classnames';
import './Testimonials.scss';


const bannersInfo = [
  {
    id: 1,
    background: 'nasdaq',
    logo: 'nasdaq',
    description: '“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”',
    author: 'Josh Machiz, Chief Digital Officer',
    results: [
      {
        title: 'Emmy Winning',
        text: 'Facebook Watch program',
      },
      {
        title: 'Millions',
        text: 'of impressions generated per client per IPO',
      },
    ]
  },
  {
    id: 2,
    logo: 'microsoft',
    background: 'microsoft',
    description: '“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”',
    author: 'Carol Taylor, Director of Content Experience',
    results: [
      {
        title: '50% Faster',
        text: 'launch of projects',
      },
      {
        title: '10,000',
        text: 'projects completed',
      },
    ]
  }
];

export const Testimonials = () => {
  const [bannersToLeft, setBannersToLeft] = useState(true);
  // const [bannerLoading] = useState(false);

  return (
    <div className="testimonials">
      <h2 className="testimonials__title">
        <div>Trusted by leading</div>
        <div>brands and startups</div>
      </h2>

      <div
        className={cn(
          "testimonials__banners",
          {
            "testimonials__banners--toLeft": !bannersToLeft,
          }
        )}
      >
        {bannersInfo.map(banner => {
          const {
            id,
            background,
            logo,
            description,
            author,
            results,
          } = banner;

          return (
            <div
              className={cn(
                "testimonials__banner",
                `testimonials__banner--${background}`,
                {
                  "testimonials__banner--disabled": id === 1 && !bannersToLeft,
                }
              )}
            >
              <div className="testimonials__top">
                <div className={cn(
                  "testimonials__logo",
                  `testimonials__logo--${logo}`
                )}></div>
    
                <div className="testimonials__desc">{description}</div>
                <div className="testimonials__author">{author}</div>
              </div>
    
              <div className="testimonials__bottom">
                <div className="testimonials__text">Results</div>
                <div className="testimonials__divider"></div>
    
                <div className="testimonials__results">
                  {results.map(result => {
                    const { title, text } = result;

                    return (
                      <div className="testimonials__result">
                      <div className="testimonials__result-title">{title}</div>
                      <div className="testimonials__text">{text}</div>
                    </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}

        <div 
          className={cn(
            "testimonials__banner",
            "testimonials__banner--last",
            {
              "testimonials__banner--disabled": bannersToLeft,
            }
          )}>
        </div>
      </div>

      {!bannersToLeft ? (
        <div
          className="testimonials__button"
          onClick={() => setBannersToLeft(true)}
        >
          <div 
            className="testimonials__icon testimonials__icon--left"
          ></div>
        </div>
      ) : (
        <div
          className="testimonials__button testimonials__button--right"
          onClick={() => setBannersToLeft(false)}
        >
          <div 
            className="testimonials__icon"
          ></div>
        </div>
      )}
    </div>
  );
}