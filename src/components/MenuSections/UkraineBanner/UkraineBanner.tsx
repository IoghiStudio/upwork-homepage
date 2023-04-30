import './UkraineBanner.scss';

export const UkraineBanner = () => {
  return (
    <div className="ukraine">
      <div className="ukraine__details">
        <div className="ukraine__info">
          <h2 className="ukraine__title">
            We support Ukraine
          </h2>

          <div className="ukraine__text">
            We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you.
          </div>
        </div>

        <div className="ukraine__button">
          Learn More
        </div>
      </div>

      <div className="ukraine__image"></div>
    </div>
  )
}