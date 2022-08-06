import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         WHR2EAT helps you decide where to eat next
        </p>
        <p className='footer-subscription-text'>
        so you are no longer burdened with the difficult task of making a decision!
        </p>
      </section>
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>ABOUT US</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>CONTACT US</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>VIDEOS</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>SOCIAL MEDIA</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div> */}
      {/* <div>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/JJnxXRqBF5U" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link 
              to='/' 
              className='social-logo'
              onClick={toggleHome}
              >
              WHR2EAT
              <i class="fa-solid fa-bowl-rice"></i>
            </Link>
          </div>
            <small class='website-rights'>WHR2EAT © 2022</small>
            
          <div class='social-icons'>
            <Link
              to='/aboutus'
            >
              ABOUT US 
            </Link>

            <Link
              class='social-icon-link-facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <a
              class='social-icon-link-instagram'
              href="https://www.instagram.com/linusfatfauk/"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link-youtube'
              href="https://youtu.be/3T--6qGajfI"
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link-github'
              href="https://github.com/linuschui"
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>
{/*             <Link
              class='social-icon-link-linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
