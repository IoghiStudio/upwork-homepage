import './Category.scss';

const categories = [
  {
    title: 'Development & IT',
    rating: '4.85',
    skills: 1853
  },
  {
    title: 'Design & Creative',
    rating: '4.91',
    skills: 968
  },
  {
    title: 'Sales & Marketing',
    rating: '4.77',
    skills: 392
  },
  {
    title: 'Writing & Translation',
    rating: '4.92',
    skills: 505
  },
  {
    title: 'Admin & Customer Support',
    rating: '4.77',
    skills: 508
  },
  {
    title: 'Finance & Accounting',
    rating: '4.79',
    skills: 214
  },
  {
    title: 'Engineering & Architecture',
    rating: '4.85',
    skills: 650
  },
  {
    title: 'Legal',
    rating: '4.85',
    skills: 133
  },
];

export const Category = () => {
  return (
    <div className="category">
      <h1 className="category__title">
        Browse talent by category
      </h1>

      <div className="category__text">
        Looking for work?&nbsp;

        <span className="category__text-link">
          Browse jobs
        </span>
      </div>

      <div className="category__list">
        {categories.map(category => {
          const { title, rating, skills } = category;

          return (
            <div
              key={title}
              className="category__item"
            >
              <div className="category__item-title">
                {title}
              </div>

              <div className="category__details">
                <div className="category__icon"></div>

                <div className="category__rating">
                  {rating}/5
                </div>

                <div className="category__skills">
                  {skills}&nbsp;skills
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}