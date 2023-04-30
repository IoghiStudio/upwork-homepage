import './Skills.scss';


const skillsItems = [
  'Data Entry Specialist',
  'Video Editors',
  'Data Analyst',
  'Shopify Developer',
  'Ruby on Rails Developer',
  'Androi Developer',
  'Bookkeeper',
  'Content Writer',
  'Copywriter',
  'Database Administrator',
  'Data Scientist',
  'Front-End Developer',
  'Game Developer',
  'Graphic Designer',
  'IOS Developer',
  'Java Developer',
  'JavaScript Developer',
  'Logo Designer',
  'Mobile App Developer',
  'PHP Developer',
  'Python',
  'Resume Writer',
  'SEO Expert',
  'Social Media Manager',
  'Software Developer',
  'Software Engineer',
  'Techincal Writer',
  'UI Designer',
  'UX Designer',
  'Virtual Assistant',
  'Web Designer',
  'Wordpress Developer',
]


export const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__columns">
        <div className="skills__titles">
          <div className="skills__title skills__title--active">Top skills</div>
          <div className="skills__title">Trending skills</div>
          <div className="skills__title">Top skills in US</div>
          <div className="skills__title">Project Catalog</div>
        </div>

        <div className="skills__column">
          {skillsItems.slice(0, 16).map(item => (
            <div className="skills__item">{item}</div>
          ))}
        </div>

        <div className="skills__column">
          {skillsItems.slice(16).map(item => (
            <div className="skills__item">{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}