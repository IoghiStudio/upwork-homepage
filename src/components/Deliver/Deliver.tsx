import './Deliver.scss';


const cardDetails = [
  {
    titleOne: 'Post a job',
    titleTwo: 'and hire a pro',
    text: 'Talent Marketplace'
  },
  {
    titleOne: 'Browse and',
    titleTwo: 'buy projects',
    text: 'Project Catalog'
  },
    {
    titleOne: 'Let us help you find',
    titleTwo: 'the right talent',
    text: 'Product Scout'
  },
]; 

export const Deliver = () => {
  return (
    <div className="deliver">



      <div className="deliver__cards">
        {cardDetails.map(card => {
          const { 
            titleOne,
            titleTwo,
            text,
          } = card;

          return (
            <div className="deliver__card">
              <div className="deliver__card-title">
                <span>{titleOne}</span>
                <span>{titleTwo}</span>
              </div>

              <div className="deliver__card-name">
                <div className="deliver__card-text">
                  {text}<sup className='deliver__sup'>TM</sup>
                </div>

                <div className="deliver__icon"></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}