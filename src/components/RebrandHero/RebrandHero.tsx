import React from 'react';
import './RebrandHero.scss'

export const RebrandHero = () => {
  return (
    <div className="rebrandhero">
      <div className="rebrandhero__details">
        <div className="rebrandhero__info">
          <h1 className="rebrandhero__title">
            <div>How work</div>
            <div>should work</div>
          </h1>

          <div className="rebrandhero__text">
            <div>Forget the old rules. You can have the best people.</div>
            <div>Right now. Right here.</div>
          </div>

          <div className="rebrandhero__button">
            Get started
          </div>
        </div>

        <div className="rebrandhero__brands">
          <div className="rebrandhero__brands-text">
            Trusted by
          </div>

          <div className="rebrandhero__logos">
            <div
              className="rebrandhero__logo rebrandhero__logo--microsoft"
            ></div>

            <div
              className="rebrandhero__logo rebrandhero__logo--airbnb"
            ></div>

            <div
              className="rebrandhero__logo rebrandhero__logo--bissell"
            ></div>
          </div>
        </div>
      </div>

      <div className="rebrandhero__image"></div>
    </div>
  )
}