import React from 'react';
import banner from './img/banner.png';
import teddy from './img/teddy.webp';
import heart from './img/heart.webp';
import oneMore from './img/oneMore.webp';
import {motion as m} from 'framer-motion';

function Banner() {
    return (
        <>
            <div className="banner_outer">

                <m.div
                initial={{x:"-100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}
                >
                        <img src={banner} alt="Not found" />

                </m.div>


                <m.div className='second_div_about'
                initial={{x:"100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}
                >

                    <div><h2>About Us</h2></div>
                     <p><q className='testingQuote'> Frank Body is a one stop shop for all your beauty needs. Being a leading cosmetics e-commerce store,  Frank Body aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. The brand is making a conscious effort to bring the power of cosmetics to shoppers with an array of the latest and trendiest products available in the country </q></p>
                </m.div>


            </div>


            <div className="welcomeSection">

                <h2>WELCOME</h2>
                <p>Frank Body gives out radiance, brilliance, and beauty.
We have created an impact which is unparalleled.</p>
            </div>

            <div className="aboutMesection">
                <div>
                    <img src="https://images.app.goo.gl/r99LqjtpqswziUab8" alt="Not found" />
                </div>
                <div>

                    <h3>Join Us.</h3> <br />
                        <p>Connect with us and join us on our mission to give out beauty. 
Beauty that is cruelty-free and mostly vegan.</p>
                </div>
            </div>

            <div className="detail_about">

               <div>
                <img src={teddy} alt="Not found" />
                <h3>CRUELTY FREE.</h3>
                <p>The products are all naturally derived and cruelty-free. Available on your demand.</p>
               </div>





               <div>
                <img src={heart} alt="Not found" />
                <h3>
                VEGAN.
                </h3>
                <p>Most of the products are vegan too. Because living a vegan, cruelty-free life is about more than what you put in your body.</p>
               </div>
               <div>
                <img src={oneMore} alt="Not Found" />
                <h3>AUSTRALIAN IMPORTED.</h3>
                <p>The products are imported from Australia in their best conditions.</p>
               </div>

            </div>
        </>
    );
}

export default Banner;