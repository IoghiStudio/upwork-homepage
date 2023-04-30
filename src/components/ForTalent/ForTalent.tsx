import './ForTalent.scss';

export const ForTalent = () => {
  return (
    <div className="fortalent">
      <div className="fortalent__image"></div>

      <div className="fortalent__content">
        <div className="fortalent__info">
          <div className="fortalent__headline">For talent</div>

          <h3 className="fortalent__title">
            <span>Find great</span>
            <span>work</span>
          </h3>

          <div className="fortalent__text">
            <span>Meet clients you’re excited to work with and take</span>
            <span>your career or business to new heights.</span>
          </div>
        </div>

        <div className="fortalent__divider"></div>

        <div className="fortalent__footer">
          <div className="fortalent__list">
            <div className="fortalent__item">
              Find opportunities for every stage of your freelance career
            </div>

            <div className="fortalent__item">
              Control when, where, and how you work
            </div>

            <div className="fortalent__item">
              Explore different ways to earn
            </div>
          </div>

          <div className="fortalent__button">Find opportunities</div>
        </div>
      </div>
    </div>
  )
}