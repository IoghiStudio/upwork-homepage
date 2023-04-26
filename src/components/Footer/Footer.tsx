import React from 'react';
import './Footer.scss';

const footerLists = [
  {
    title: 'For Clients',
    list: [
      'How to hire',
      'Talent Marketplace',
      'Project Catalog',
      'Talent Scout',
      'Hire an agency',
      'Enterprise',
      'Payroll Services',
      'Direct Contracts',
      'Hire Worldwide',
      'Hire in the USA',
    ],
  },
  {
    title: 'For Talent',
    list: [
      'How to find work',
      'Direct Contracts',
      'Find Freelance Jobs Worldwide',
      'Find Freelance Jobs in the USA'
    ],
  },
  {
    title: 'Resources',
    list: [
      'Help & Support',
      'Success Stories',
      'Upwork Reviews',
      'Resources',
      'Blog',
      'Community',
      'Affilate Program',
      'Free Bussiness tools',
    ],
  },
  {
    title: 'Company',
    list: [
      'About us',
      'Leadership',
      'Investor Relations',
      'Careers',
      'Our Impact',
      'Press',
      'Contact Us',
      'Trust, Safety & Security',
      'Modern Slavery Statement',
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__columns">
          {footerLists.map(footerList => {
            const { title, list} = footerList;

            return (
              <div key={title} className="footer__column">
                <div className="footer__column-title">
                  {title}
                </div>

                <div className="footer__list">
                  {list.map(item => (
                    <div key={item} className="footer__item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="footer__social">
          <div className="footer__social-follow">
            <div className="footer__social-title">
              Follow Us
            </div>

            <div className="footer__icons">
              <div className="footer__icon-container">
                <div className="footer__icon footer__icon--fb"></div>
              </div>

              <div className="footer__icon-container">
                <div className="footer__icon footer__icon--in"></div>
              </div>

              <div className="footer__icon-container">
                <div className="footer__icon footer__icon--twt"></div>
              </div>

              <div className="footer__icon-container">
                <div className="footer__icon footer__icon--yt"></div>
              </div>

              <div className="footer__icon-container">
                <div className="footer__icon footer__icon--ig"></div>
              </div>
            </div>
          </div>

          <div className="footer__social-download">
            <div className="footer__social-title">
              Mobile App
            </div>

            <div className="footer__icons">
              <div className="footer__icon-container">
                <div className="footer__icon footer__icon--apple"></div>
              </div>

              <div className="footer__icon-container">
                <div className="footer__icon footer__icon--android"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-copy">
            © 2015 - 2023 Upwork® Global Inc.
          </div>

          <div className="footer__bottom-text">
            Terms of Service
          </div>

          <div className="footer__bottom-text">
            Privacy Policy
          </div>

          <div className="footer__bottom-text">
            CA Notice at Collection
          </div>
          
          <div className="footer__bottom-text">
            Cookie Settings
          </div>

          <div className="footer__bottom-text">
            Accessibility
          </div>
        </div>
      </div>
    </footer>
  );
}
