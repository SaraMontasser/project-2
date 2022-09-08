import React from 'react'
import LogoImg from './img/logo-udemy-inverted.svg'
export default function footer() {
  return (
    <div>
        <footer>
            <div className='top-Companies'>
                <div className='footer-note'>
                    Top companies choose <span > <a href="#" className='udemy-business'>Udemy Business</a></span> to build in-demand career skills.
                </div>
                <div className='companies-icons'>
                    <img alt="Nasdaq" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" />
                    <img alt="Volkswagen" height="44" width="44" src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" />
                    <img alt="Box" height="44" width="67" src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" />
                    <img alt="NetApp" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
                    <img alt="Eventbrite" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" />
                </div>
            </div>
            <div className='lower-part'>
            <ul className='link-column'>
                <li>
                    <a href="#" className='link'>Udemy Bussiness</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Teach on Udemy</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Get the app</a>
                    </li>
                    <li>
                    <a href="#" className='link'>About us</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Contact us</a>
                    </li>
                </ul>
                <ul className='link-column'>
                <li>
                    <a href="#" className='link'>Careers</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Blog</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Help and Support</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Affiliate</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Investors</a>
                    </li>
                </ul>
                <ul className='link-column'>
                <li>
                    <a href="#" className='link'>Terms</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Privacy policy</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Cookie settings</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Sitemap</a>
                    </li>
                    <li>
                    <a href="#" className='link'>Accessibility statement</a>
                    </li>
                </ul>
                <button className='language-button'> <i class="fa fa-globe"></i> English</button>
                <div className='copy-rights'>
                <img src={LogoImg} alt="Udemy" width="91.07142857142857" height="34" className='udemy-logo-inverted'></img>
                <p>© 2022 Udemy, Inc.</p>
                </div>
            </div>
        </footer>
    </div>
  )
}
