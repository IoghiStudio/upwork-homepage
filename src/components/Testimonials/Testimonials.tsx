import './Testimonials.scss';

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonials__title">
        <span>Trusted by leading</span>
        <span>brands and startups</span>
      </h2>

      <div className="testimonials__banners">
        <div
          className="testimonials__banner testimonials__banner--nasdaq"
        >
          <div className="testimonials__top">
            <div className="testimonials__logo testimonials__logo--nasdaq"></div>

            <div className="testimonials__desc">
              “Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”
            </div>

            <div className="testimonials__author">
              Josh Machiz, Chief Digital Officer
            </div>
          </div>

          <div className="testimonials__bottom">
            <div className="testimonials__text">Results</div>
            <div className="testimonials__divider"></div>

            <div className="testimonials__results">
              <div className="testimonials__result">
                <div className="testimonials__result-title">Emmy Winning</div>
                <div className="testimonials__text">Facebook Watch program</div>
              </div>

              <div className="testimonials__result">
                <div className="testimonials__result-title">Millions</div>
                <div className="testimonials__text">of impressions generated per client per IPO</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="testimonials__banner testimonials__banner--microsoft"
        >
          <div className="testimonials__top">
            <div className="testimonials__logo testimonials__logo--microsoft"></div>

          
            <div className="testimonials__desc">
              “One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”
            </div>

            <div className="testimonials__author">
            Carol Taylor, Director of Content Experience
            </div>
          </div>

          <div className="testimonials__bottom">
            <div className="testimonials__text">Results</div>
            <div className="testimonials__divider"></div>

            <div className="testimonials__results">
              <div className="testimonials__result">
                <div className="testimonials__result-title">50% Faster</div>
                <div className="testimonials__text">launch of projects</div>
              </div>

              <div className="testimonials__result">
                <div className="testimonials__result-title">10,000</div>
                <div className="testimonials__text">projects completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}