import { useState } from 'react';
import './HowToHire.scss'

export const HowToHire = () => {
  return (
    <div className="howtohire">
      <div className="howtohire__anim"></div>

      <div className="howtohire__details">
        <h2 className="howtohire__title">
          Up your work game, it's free.
        </h2>

        <ul className="howtohire__list">
          <li className='howtohire__item'>
            <div className="howtohire__icon howtohire__icon--notes"></div>
            <div className="howtohire__list-details">
              <h5 className="howtohire__list-title">
                No cost to join.
              </h5>

              <div className="howtohire__list-text">
                Register and browse professionals, explore projects, or even book a consultation.
              </div>
            </div>
          </li>

          <li className='howtohire__item'>
            <div className="howtohire__icon howtohire__icon--pin"></div>
            <div className="howtohire__list-details">
              <h5 className="howtohire__list-title">
                Post a job and hire top talent.
              </h5>

              <div className="howtohire__list-text">
              Finding talent doesn’t have to be a chore. Post a job or we can search for you!
              </div>
            </div>
          </li>

          <li className='howtohire__item'>
            <div className="howtohire__icon howtohire__icon--star"></div>
            <div className="howtohire__list-details">
              <h5 className="howtohire__list-title">
                Work with the best—without breaking the bank.
              </h5>

              <div className="howtohire__list-text">
                Upwork makes it affordable to up your work and take advantage of low transaction rates.
              </div>
            </div>
          </li>
        </ul>

        <div className="howtohire__buttons">
          <div
            className="howtohire__button howtohire__button--sign"
          >
            Sign up for free
          </div>
          
          <div
            className="howtohire__button howtohire__button--learn"
          >
            Learn how to hire
          </div>
        </div>
      </div>
    </div>
  )
}