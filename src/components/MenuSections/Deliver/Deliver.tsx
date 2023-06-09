import { useState } from 'react';
import './Deliver.scss';
import cn from 'classnames';

const cardDetails = [
  {
    id: 1,
    titleOne: 'Post a job',
    titleTwo: 'and hire a pro',
    text: 'Talent Marketplace'
  },
  {
    id: 2,
    titleOne: 'Browse and',
    titleTwo: 'buy projects',
    text: 'Project Catalog'
  },
  {
    id: 3,
    titleOne: 'Let us help you find',
    titleTwo: 'the right talent',
    text: 'Product Scout'
  },
]; 

export const Deliver = () => {
  // const [cardOnHover, setCardOnHover] = useState(false);
  const [currentCardId, setCurrentCardId] = useState(0);

  return (
    <div className="deliver">
      <div className="deliver__headline">For clients</div>

      <h2 className="deliver__title">
        <div>Find talent</div>
        <div>your way</div>
      </h2>

      <div className="deliver__subtitle">
        <div>Work with the largest network of independent</div>
        <div>professionals and get things done—from quick </div>
        <div>turnarounds to big transformations.</div>
      </div>

      <div className="deliver__cards">
        {cardDetails.map(card => {
          const {
            id,
            titleOne,
            titleTwo,
            text,
          } = card;

          return (
            <div
              key={id}
              className="deliver__card"
              onMouseEnter={() => setCurrentCardId(id)}
              onMouseLeave={() => setCurrentCardId(0)}
            >
              <div className="deliver__card-title">
                <div>{titleOne}</div>
                <div>{titleTwo}</div>
              </div>

              <div className="deliver__card-name">
                <div className="deliver__card-text">
                  {text}<sup className='deliver__sup'>TM</sup>
                </div>

                <div 
                  className={cn(
                    "deliver__card-icon",
                    {
                      "deliver__card-icon--green": id === currentCardId,
                    }
                  )}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}