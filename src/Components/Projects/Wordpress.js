import React from 'react';
import { Button, Thumbnail } from 'react-bootstrap';
import html from '../../Assets/img/html.png';
import css from '../../Assets/img/css.png';
import js from '../../Assets/img/js.png';
import wordpress from '../../Assets/img/wordpress.png';
import node from '../../Assets/img/node.png';
import redux from '../../Assets/img/redux.png';
import react from '../../Assets/img/react.png';
import icon2 from '../../Assets/img/icon2.png';
import icon3 from '../../Assets/img/icon3.png';

import './Projects.scss';

class Javascript extends React.Component {
  render() {
    return (
      <div className='project-container'>
        <Thumbnail
          className='col'
          src={require('../../Assets/img/nerd.png')}
          alt='242x200'
          onClick={() => {
            if (
              window.confirm(
                'This app has been deployed on Heroku, It will take logner to load for the first time'
              )
            )
              window.open(
                'https://tranquil-headland-39565.herokuapp.com',
                'blank'
              );
          }}
        >
          <div>
            <h3 className='my-h3'>NerdConnector</h3>
            <p className='text-white'>
              A simple social media for programmers. This a MERN Stack App and
              the porpose of this project was to learn more about JWT
              Authentication, MongoDB and Redux
            </p>
          </div>

          <div>
            <img src={react} alt='icon' style={{ width: '35px' }} />
            <img src={icon3} alt='icon' style={{ width: '85px' }} />
            <img src={node} alt='icon' style={{ width: '40px' }} />
            <img src={icon2} alt='icon' style={{ width: '60px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://tranquil-headland-39565.herokuapp.com'
              >
                see the website
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/mfs.png')}
          alt='242x200'
          height='200px'
          onClick={() =>
            window.open('http://www.madefromscratch.london', 'blank')
          }
        >
          <div>
            <h3 className='my-h3'>MadeFromScratch.london</h3>
            <p className='text-white'>
              This is a static HTML,CSS,JS website, Deployed on WordPress
            </p>
          </div>
          <div>
            <img src={html} alt='icon' style={{ width: '35px' }} />
            <img src={css} alt='icon' style={{ width: '35px' }} />
            <img src={js} alt='icon' style={{ width: '35px' }} />
            <img src={wordpress} alt='icon' style={{ width: '32px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='http://www.madefromscratch.london'
              >
                see the website
              </Button>
            </p>
          </div>
        </Thumbnail>
        <Thumbnail
          className='col'
          src={require('../../Assets/img/numeraldesign.png')}
          alt='242x200'
          height='200px'
          onClick={() => window.open('http://www.numeraldesign.co.uk', 'blank')}
        >
          <div>
            <h3 className='my-h3'>Numeraldesign.co.uk</h3>
            <p className='text-white'>
              This is a static HTML,CSS,JS website, Deployed on WordPress
            </p>
          </div>
          <div>
            <img src={html} alt='icon' style={{ width: '35px' }} />
            <img src={css} alt='icon' style={{ width: '35px' }} />
            <img src={js} alt='icon' style={{ width: '35px' }} />
            <img src={wordpress} alt='icon' style={{ width: '32px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='http://www.numeraldesign.co.uk'
              >
                see the website
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/ashori.png')}
          alt='242x200'
          height='200px'
          onClick={() => window.open('http://www.aryanashoori.pro', 'blank')}
        >
          <div>
            <h3 className='my-h3'>portfolio website</h3>
            <p className='text-white'>
              This is a static HTML,CSS,JS website, Deployed on WordPress
            </p>
          </div>
          <div>
            <img src={html} alt='icon' style={{ width: '35px' }} />
            <img src={css} alt='icon' style={{ width: '35px' }} />
            <img src={js} alt='icon' style={{ width: '35px' }} />
            <img src={wordpress} alt='icon' style={{ width: '32px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='http://www.aryanashoori.pro'
              >
                see the website
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/elika.png')}
          alt='242x200'
          height='200px'
          onClick={() => window.open('http://www.lilikastreats.com/', 'blank')}
        >
          <div>
            <h3 className='my-h3'>lilikastreats.com</h3>
            <p className='text-white'>This Website is built on WordPress</p>
          </div>
          <div>
            <img src={html} alt='icon' style={{ width: '35px' }} />
            <img src={css} alt='icon' style={{ width: '35px' }} />
            <img src={js} alt='icon' style={{ width: '35px' }} />
            <img src={wordpress} alt='icon' style={{ width: '32px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='http://www.lilikastreats.com/'
              >
                see the website
              </Button>
            </p>
          </div>
        </Thumbnail>

        <Thumbnail
          className='col'
          src={require('../../Assets/img/body.png')}
          alt='242x200'
          height='200px'
          onClick={() => window.open('http://www.bodiscent.com/', 'blank')}
        >
          <div>
            <h3 className='my-h3'>bodiscent.com</h3>
            <p className='text-white'>This Website is built on WordPress</p>
          </div>
          <div>
            <img src={html} alt='icon' style={{ width: '35px' }} />
            <img src={css} alt='icon' style={{ width: '35px' }} />
            <img src={js} alt='icon' style={{ width: '35px' }} />
            <img src={wordpress} alt='icon' style={{ width: '32px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='http://www.bodiscent.com/'
              >
                see the website
              </Button>
            </p>
          </div>
        </Thumbnail>
        <Thumbnail
          className='col'
          src={require('../../Assets/img/store.png')}
          alt='242x200'
          height='200px'
          onClick={() => {
            if (
              window.confirm(
                'This app has been deployed on Heroku, It will take logner to load for the first time'
              )
            )
              window.open(
                'https://peaceful-hollows-33428.herokuapp.com',
                'blank'
              );
          }}
        >
          <div>
            <h3 className='my-h3'>Store Locatore</h3>

            <p className='text-white'>
              Store locator API that serves GeoJSON data. This a Node JS App and
              the porpose of this project was to learn more about Nodejs,
              GEOJSON and MapBox
            </p>
          </div>
          <div>
            <img src={icon3} alt='icon' style={{ width: '85px' }} />
            <img src={node} alt='icon' style={{ width: '40px' }} />
            <img src={icon2} alt='icon' style={{ width: '60px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://peaceful-hollows-33428.herokuapp.com'
              >
                see the website
              </Button>
            </p>
          </div>
        </Thumbnail>
        <Thumbnail
          className='col'
          src={require('../../Assets/img/e-comm.png')}
          alt='242x200'
          height='200px'
          onClick={() => {
            if (
              window.confirm(
                'This app has been deployed on Heroku, It will take logner to load for the first time'
              )
            )
              window.open(
                'https://limitless-cove-46161.herokuapp.com',
                'blank'
              );
          }}
        >
          <div>
            <h3 className='my-h3'>React E-commerce</h3>

            <p className='text-white'>
              this a React App and the porpose of this project was to learn more
              about Redux/Reduc-saga, Firebase and React Hook
            </p>
          </div>
          <div>
            <img src={react} alt='icon' style={{ width: '35px' }} />
            <img src={redux} alt='icon' style={{ width: '35px' }} />
            <img src={node} alt='icon' style={{ width: '40px' }} />
            <img src={icon2} alt='icon' style={{ width: '60px' }} />
            <p>
              <Button
                bsStyle='info'
                target='blank'
                href='https://limitless-cove-46161.herokuapp.com'
              >
                see the website
              </Button>
            </p>
          </div>
        </Thumbnail>
      </div>
    );
  }
}
export default Javascript;
