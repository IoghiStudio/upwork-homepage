import './WhyUpwork.scss';
import cn from 'classnames';


const whyupworkItems = [
  {
    icon: 'star',
    title: 'Proof of quality',
    text: 'Check any pro’s work samples, client reviews, and identity verification.',
  },
  {
    icon: 'money',
    title: 'No cost until you hire',
    text: 'Interview potential fits for your job, negotiate rates, and only pay for work you approve.',
  },
  {
    icon: 'check',
    title: 'Safe and secure',
    text: 'Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.',
  }
];


export const WhyUpwork = () => {
  return (
    <div className="whyupwork">
      <div className="whyupwork__gray">
        <h2 className="whyupwork__title">
          <div>Why businesses</div>
          <div>turn to Upwork</div>
        </h2>

        <div className="whyupwork__list">
          {whyupworkItems.map(item => {
            const { icon, title, text} = item;

            return (
              <div className="whyupwork__item">
                <div className="whyupwork__icon-container">
                  <div className="whyupwork__icon-bg">
                    <div className={cn(
                      "whyupwork__icon",
                      `whyupwork__icon--${icon}`
                    )}></div>
                  </div>
                </div>

                <div className="whyupwork__info">
                  <h3 className="whyupwork__proof-title">
                    {title}
                  </h3>

                  <div className="whyupwork__proof-text">
                    {text}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="whyupwork__image"></div>

      <div className="whyupwork__green">
        <div className="whyupwork__awards">
          <div className="whyupwork__awards-area">
            <h3 className="whyupwork__awards-maintitle">
              <span>We're</span>
              <span>the world’s work</span>
              <span>marketplace</span>
            </h3>

            <div className="whyupwork__awards-item">
              <div className="whyupwork__awards-icon whyupwork__awards-icon--star"></div>

              <div className="whyupwork__awards-info">
                <div className="whyupwork__awards-title">
                  4.9/5
                </div>

                <div className="whyupwork__awards-text">
                  Clients rate professionals on Upwork
                </div>
              </div>
            </div>

            <div className="whyupwork__awards-item">
              <div className="whyupwork__awards-icon whyupwork__awards-icon--g2"></div>

              <div className="whyupwork__awards-info">
                <div className="whyupwork__awards-title whyupwork__awards-title--second">
                  Award winner
                </div>

                <div className="whyupwork__awards-text">
                  G2’s 2021 Best Software Awards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}