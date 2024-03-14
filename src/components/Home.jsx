import React, { useState, useEffect } from 'react';
import Metadata from './Metadata';
const importImages = (imageName) => import(`../assets/${imageName}.png`);


const Home = () => {

  const images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'icon1', 'icon2', 'icon3', 'rafiki', 'pana', 'icon7', 'icon4', 'icon5', 'icon6', 'greenArrow', 'img7', 'img8', 'img9', 'img10', 'right'];
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const importPromises = images.map(imageName => importImages(imageName));
    Promise.all(importPromises)
      .then(loadedImages => {
        setLoadedImages(loadedImages);
      });
  }, []);


  const fboxData = [
    {
      id: 1,
      img: loadedImages[9] && loadedImages[9].default,
      heading: 'The unseen of spending three years at Pixelgrade',
      dis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.`
    },
    {
      id: 2,
      img: loadedImages[10] && loadedImages[10].default,
      heading: 'How to design your site footer like we did',
      dis: `Donec a eros justo. Fusce egestas tristique ultrices.
       Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. 
       Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. 
       Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
       Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
       Donec consectetur faucibus ipsum id gravida.`
    },
  ];

  const gridData = [
    {
      id: 3,
      img: loadedImages[11] && loadedImages[11].default,
      num: `2,245,341`,
      dis: `Members`,
    },
    {
      id: 4,
      img: loadedImages[12] && loadedImages[12].default,
      num: `2,245,341`,
      dis: `Members`,
    },
    {
      id: 5,
      img: loadedImages[13] && loadedImages[13].default,
      num: `2,245,341`,
      dis: `Members`,
    },
    {
      id: 6,
      img: loadedImages[14] && loadedImages[14].default,
      num: `2,245,341`,
      dis: `Members`,
    },
  ]

  return (
    <>
      <Metadata title="Home Page" />
      <div className='flexcol home' style={{marginTop: '40px'}}>
        <div className="heading">Our clients</div>
        <div className="discription">We have been working with some fortune 500+ clients</div>
        <div className="containerr">
          <div><img src={loadedImages[0] && loadedImages[0].default} alt="" /></div>
          <div><img src={loadedImages[1] && loadedImages[1].default} alt="" /></div>
          <div><img src={loadedImages[2] && loadedImages[2].default} alt="" /></div>
          <div><img src={loadedImages[3] && loadedImages[3].default} alt="" /></div>
          <div><img src={loadedImages[4] && loadedImages[4].default} alt="" /></div>
          <div><img src={loadedImages[5] && loadedImages[5].default} alt="" /></div>
          <div><img src={loadedImages[2] && loadedImages[2].default} alt="" /></div>
        </div>
        <div className="heading">Manage your entire community in a single system</div>
        <div className="discription">Who is Nextcent suitable for?</div>
        <div className="flex containerr2">
          <div className='shadow'>
            <img src={loadedImages[6] && loadedImages[6].default} alt="" />
            <div className="small-heading">Membership organisations</div>
            <div className="discription">Our membership management software provides full automation of membership renewals and payments</div>
          </div>
          <div className='shadow'>
            <img src={loadedImages[7] && loadedImages[7].default} alt="" />
            <div className="small-heading">National associations</div>
            <div className="discription">Our membership management software provides full automation of membership renewals and payments</div>
          </div>
          <div className='shadow'>
            <img src={loadedImages[8] && loadedImages[8].default} alt="" />
            <div className="small-heading">Clubs and groups</div>
            <div className="discription">Our membership management software provides full automation of membership renewals and payments</div>
          </div>
        </div>
      </div>

      {
        fboxData.map((item, index) => (
          <div key={item.id}>
            <div className="flex fbox">
              <div className="left"><img src={item.img} alt="" /></div>
              <div className='right'>
                <div className='senteen'>
                  <div className="heading">{item.heading}</div>
                  <div className="discription">{item.dis}</div>
                </div>
                <a className='button'>Learn more</a>
              </div>
            </div>
            {
              index < fboxData.length - 1 &&
              <div key={`separator-${index}`} className='flex fbox2'>
                <div className="one">
                  <div className="heading">Helping a local <br /><span style={{ color: 'var(--themeClr)' }}>business reinvent itself</span></div>
                  <div className="discription" style={{ color: '#18191F' }}>We reached here with our hard work and dedication</div>
                </div>
                <div className="grid">
                  {
                    gridData.map((item) => (
                      <div className='flex' key={item.id}>
                        <div><img className='gridimg' src={item.img} alt="" /></div>
                        <div className="flexcol" style={{ gap: '0px' }}>
                          <div className="small-heading">{item.num}</div>
                          <div className="discription">{item.dis}</div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            }
          </div>
        ))
      }

      <div className="flex fbox3">
        <div className="left flex"><img src={loadedImages[16] && loadedImages[16].default} alt="" /></div>
        <div className='right'>
          <div className='senteen'>
            <div className="discription">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</div>
            <div className="small-heading" style={{ color: 'var(--themeClr)', marginTop: '10px' }}>Tim Smith</div>
            <div className="discription">British Dragon Boat Racing Association</div>
            <div className="containerr4">
              <div><img src={loadedImages[0] && loadedImages[0].default} alt="" /></div>
              <div><img src={loadedImages[1] && loadedImages[1].default} alt="" /></div>
              <div><img src={loadedImages[2] && loadedImages[2].default} alt="" /></div>
              <div><img src={loadedImages[3] && loadedImages[3].default} alt="" /></div>
              <div><img src={loadedImages[4] && loadedImages[4].default} alt="" /></div>
              <div><img src={loadedImages[5] && loadedImages[5].default} alt="" /></div>
              <div><img src={loadedImages[2] && loadedImages[2].default} alt="" /></div>
              <div className="small-heading flex mac">Meet all customers <img src={loadedImages[15] && loadedImages[15].default} alt="" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className='flexcol home2'>
        <div className="heading">Caring is the new marketing</div>
        <div className="discription">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</div>
        <div className="containerr3">
          <div className='relative'>
            <img src={loadedImages[17] && loadedImages[17].default} alt="" />
            <div class="overlay">
              <div class="overlay-content">
                <div className='discription'>Creating Streamlined Safeguarding Processes with OneRen</div>
                <div className="flex discription" style={{color: 'var(--themeClr)', marginTop: '5px'}}>Read more &nbsp;<img className='arrow' src={loadedImages[15] && loadedImages[15].default}alt="" /></div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img src={loadedImages[18] && loadedImages[18].default} alt="" />
            <div class="overlay">
            <div class="overlay-content">
                <div className='discription'>Creating Streamlined Safeguarding Processes with OneRen</div>
                <div className="flex discription" style={{color: 'var(--themeClr)', marginTop: '5px'}}>Read more &nbsp;<img className='arrow' src={loadedImages[15] && loadedImages[15].default}alt="" /></div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img src={loadedImages[19] && loadedImages[19].default} alt="" />
            <div class="overlay">
            <div class="overlay-content">
                <div className='discription'>Creating Streamlined Safeguarding Processes with OneRen</div>
                <div className="flex discription" style={{color: 'var(--themeClr)', marginTop: '5px'}}>Read more &nbsp;<img className='arrow' src={loadedImages[15] && loadedImages[15].default}alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flexcol fbox2" style={{ gap: '0px', marginTop: '40px' }}>
        <div className="big-heading">Lorem ipsum dolor sit amet consectetuer</div>
        <a className='button' href="">Get a demo  &nbsp; <img src={loadedImages[20] && loadedImages[20].default} alt="" /></a>
      </div>

    </>
  )
};

export default Home;