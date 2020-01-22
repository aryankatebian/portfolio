import React from 'react';
import { Button, Thumbnail } from 'react-bootstrap';
import './Projects.scss';
import icon1 from '../../Assets/img/icon1.png';
import icon2 from '../../Assets/img/icon2.png';
import icon3 from '../../Assets/img/icon3.png';
import icon4 from '../../Assets/img/icon4.png';

import html from '../../Assets/img/html.png';
import css from '../../Assets/img/css.png';
import js from '../../Assets/img/js.png';

class Javascript extends React.Component {
  render() {
    return (
      <div className='project-container'>
        <Thumbnail
          className='col'
          src={require('../../Assets/img/url-shortener.png')}
          alt='242x200'
          height='200px'
          onClick={() =>
            window.open(
              'https://github.com/aryankatebian/sending-email-Python-',
              'blank'
            )
          }
        >
          <div>
            <h3 className='my-h3'>Checking Price With Python</h3>
            <p className='text-white'>
              you can check an Amazon item' price with this one-page Python code
              if the price is less than a certain amount you will receive an
              email with the item's link
            </p>
          </div>
          <div>
            <img src={icon1} alt='icon' style={{ width: '35px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://github.com/aryankatebian/sending-email-Python-'
              >
                Github
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/url-shortener.png')}
          alt='242x200'
          height='200px'
          onClick={() =>
            window.open(
              'https://github.com/aryankatebian/URL-shortener-backend',
              'blank'
            )
          }
        >
          <div>
            <h3 className='my-h3'>URL Shortener</h3>
            <p className='text-white'>
              This app gets a long URL and gives back a short URL, all the URLs
              will en saved on a database so next same request won't be
              calculated
            </p>
          </div>
          <div>
            <img
              src={icon2}
              alt='icon2'
              style={{ width: '80px', margin: '0 30px 0 0' }}
            />
            <img src={icon3} alt='icon' style={{ width: '80px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://github.com/aryankatebian/URL-shortener-backend'
              >
                Github
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/vue.jpg')}
          alt='242x200'
          height='200px'
          onClick={() =>
            window.open('https://simple-vuejs-blog.netlify.com/', 'blank')
          }
        >
          <div>
            <h3 className='my-h3'>A Simple Vue JS Blog-post</h3>
          </div>
          <div>
            <img src={icon4} alt='icon' style={{ width: '35px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://simple-vuejs-blog.netlify.com/'
              >
                Netlify
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/weather.png')}
          alt='242x200'
          height='200px'
          onClick={() =>
            window.open('https://mylocation-weather-api.netlify.com', 'blank')
          }
        >
          <div>
            <h3 className='my-h3'>Weather-API</h3>
            <p className='text-white'>
              Checks your location and the Weather in your location , built with
              Vanilla JS
            </p>
          </div>
          <div>
            <img src={js} alt='icon' style={{ width: '50px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://mylocation-weather-api.netlify.com'
              >
                Netlify
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/videoplayer.png')}
          alt='242x200'
          height='200px'
          onClick={() =>
            window.open('https://codepen.io/katebian/pen/oJGVWP', 'blank')
          }
        >
          <div>
            <h3 className='my-h3'>Custom Video Player</h3>
            <p className='text-white'>built with Vanilla JS</p>
          </div>
          <div>
            <img src={html} alt='icon' style={{ width: '35px' }} />
            <img src={css} alt='icon' style={{ width: '35px' }} />
            <img src={js} alt='icon' style={{ width: '35px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://codepen.io/katebian/pen/oJGVWP'
              >
                Code pen
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/stickynav.png')}
          alt='242x200'
          height='200px'
          onClick={() =>
            window.open('https://codepen.io/katebian/pen/MZExQm', 'blank')
          }
        >
          <div>
            <h3 className='my-h3'>Sticky NavBar</h3>
            <p className='text-white'>built with Vanilla JS</p>
          </div>
          <div>
            <img src={html} alt='icon' style={{ width: '35px' }} />
            <img src={css} alt='icon' style={{ width: '35px' }} />
            <img src={js} alt='icon' style={{ width: '35px' }} />

            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://codepen.io/katebian/pen/MZExQm'
              >
                code pen
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/drum.png')}
          alt='242x200'
          height='200px'
          onClick={() =>
            window.open('https://jovial-wozniak-c75c00.netlify.com/', 'blank')
          }
        >
          <div>
            <h3 className='my-h3'>Drum kit</h3>
            <p className='text-white'>built with Vanilla JS</p>
          </div>
          <div>
            <img src={html} alt='icon' style={{ width: '35px' }} />
            <img src={css} alt='icon' style={{ width: '35px' }} />
            <img src={js} alt='icon' style={{ width: '35px' }} />

            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://jovial-wozniak-c75c00.netlify.com/'
              >
                Netlify
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/game.png')}
          alt='242x200'
          height='200px'
          onClick={() =>
            window.open('https://festive-allen-8cceb5.netlify.com', 'blank')
          }
        >
          <div>
            <h3 className='my-h3'>Whack A Mole Game</h3>
            <p className='text-white'>built with Vanilla JS</p>
          </div>
          <div>
            <img src={html} alt='icon' style={{ width: '35px' }} />
            <img src={css} alt='icon' style={{ width: '35px' }} />
            <img src={js} alt='icon' style={{ width: '35px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://festive-allen-8cceb5.netlify.com'
              >
                Netlify
              </Button>
            </p>
          </div>
        </Thumbnail>
      </div>
    );
  }
}
export default Javascript;
