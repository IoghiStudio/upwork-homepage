import './Enterprise.scss';


export const Enterprise = () => {
  return (
    <div className="enterprise">
      <div className="enterprise__content">
        <div className="enterprise__headline">Enterprise Suite</div>

        <h1 className="enterprise__title">
          <div>This is how</div>
          <div className='enterprise__title--green'>good companies</div>
          <div className='enterprise__title--green'>find good company.</div>  
        </h1>

        <div className="enterprise__subtitle">
          Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.
        </div>

        <div className="enterprise__text">
          <div className="enterprise__text--mt16">
            Access expert talent to fill your skill gaps
          </div>

          <div className="enterprise__text--mt12">
            Control your workflow: hire, classify and pay your talent
          </div>

          <div className="enterprise__text--mt12">
            Partner with Upwork for end-to-end support
          </div>
        </div>

        <div className="enterprise__button">Learn More</div>
      </div>
    </div>
  )
}