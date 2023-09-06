import React from 'react';
import '../Styles/_home.scss';
import headerimg from '../Assets/bg.jpg'
import upright from '../Assets/upright.png';
import people from '../Assets/people.jpg';

export default function Home() {
  return (
    <>
        <div className='header_container'>
            <div className='header_content'>
                <h2>Build and Share Interactive Stories on our Platform!</h2>
                <h6>With our Easy-To-Use Tools. You can create immersive stories with multiple endings and branching paths, share your stories with the world and let your audience become part of the adventure. </h6>
                <div className='gaps_btns'>
                   <button className='btn_active'>Join Us</button>
                   <button>Play our Promo Video</button> 
                </div>
            </div>
            <div className='header_img'>
                <img src={headerimg} />
            </div>
        </div>

        <div className='second_container'>
            <div className='gaps_btns smallbox_section'>
                <div className='box_section'>
                <div className='distance'>
                    <button>Learn more</button>
                    <img src={upright} />
                </div>
                <div>
                    <h5>Engaging and immersive Experience</h5>
                    <p>Platforms offers an Engaging and immersive Experience for both the creators and the audience.</p>
                </div>
                </div>

                <div className='box_section'>
                <div className='distance'>
                    <button>Learn more</button>
                    <img src={upright} />
                </div>
                <div>
                    <h5>Engaging and immersive Experience</h5>
                    <p>Platforms offers an Engaging and immersive Experience for both the creators and the audience.</p>
                </div>
                </div>
            </div>

            <div className='bigbox_section'>

            </div>
        </div>
    </>
  )
}
