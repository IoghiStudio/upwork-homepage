import cn from 'classnames';
import './Testimonials.scss';


const bannersInfo = [
  {
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
]

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonials__title">
        <div>Trusted by leading</div>
        <div>brands and startups</div>
      </h2>

      <div className="testimonials__banners">
        {bannersInfo.map(banner => {
          const {
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
                `testimonials__banner--${background}`
              )}
            >
              <div className="testimonials__top">
                <div className={cn(
                  "testimonials__logo",
                  `testimonials__logo--${logo}`
                )}></div>
    
                <div className="testimonials__desc">
                  {description}
                </div>
    
                <div className="testimonials__author">
                  {author}
                </div>
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
      </div>
    </div>
  );
}