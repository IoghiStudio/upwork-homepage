import './WhyUpwork.scss';


export const WhyUpwork = () => {
  return (
    <div className="whyupwork">
      <div className="whyupwork__gray">
        <h2 className="whyupwork__title">
          <span>Why businesses</span>
          <span>turn to Upwork</span>
        </h2>

        <div className="whyupwork__list">
          <div className="whyupwork__item">
            <div className="whyupwork__icon-container">
              <div className="whyupwork__icon-bg">
                <div className="whyupwork__icon  whyupwork__icon--star"></div>
              </div>
            </div>

            <div className="whyupwork__info">
              <h3 className="whyupwork__proof-title">
                Proof of quality
              </h3>

              <div className="whyupwork__proof-text">
                Check any pro’s work samples, client reviews, and identity verification.
              </div>
            </div>
          </div>

          <div className="whyupwork__item">
            <div className="whyupwork__icon-container">
              <div className="whyupwork__icon-bg">
                <div className="whyupwork__icon  whyupwork__icon--money"></div>
              </div>
            </div>

            <div className="whyupwork__info">
              <h3 className="whyupwork__proof-title">
                No cost until you hire
              </h3>

              <div className="whyupwork__proof-text">
                Interview potential fits for your job, negotiate rates, and only pay for work you approve.
              </div>
            </div>
          </div>

          <div className="whyupwork__item">
            <div className="whyupwork__icon-container">
              <div className="whyupwork__icon-bg">
                <div className="whyupwork__icon whyupwork__icon--check"></div>
              </div>
            </div>

            <div className="whyupwork__info">
              <h3 className="whyupwork__proof-title">
                Safe and secure
              </h3>

              <div className="whyupwork__proof-text">
                Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.
              </div>
            </div>
          </div>
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