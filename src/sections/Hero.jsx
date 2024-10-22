import React from 'react';
import { Element } from 'react-scroll';
import Button from '../components/Button';

import {companyLogosData} from '../constants/index'

const Hero = () => {
  return (
    <section>
      <Element name="About Us">
        <div className="container w-full h-screen flex-col flex items-center justify-center pt-7 relative">
          <div className="flex flex-col-reverse lg:flex-row justify-between w-full items-center md:items-center">
            <div className="md:flex-1 text-center lg:text-left">
              <h1 className="text-left text-h1 font-bold max-lg:text-center max-lg:text-h1Mob">
                Navigating the digital landscape for success
              </h1>

              <p className='py-10 text-h4 max-lg:text-h4Mob'>
              Our digital marketing agency helps businesses grow and 
              succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
              </p>

                <div className="w-full lg:w-auto">
                    <Button 
                      id={1} 
                      className="text-p3 bg-p2 hover:text-p1 transition-colors duration-500 w-full lg:w-auto" 
                    />
                </div>            
              </div>
            <div className="md:flex-1 flex justify-center lg:justify-end w-full">
              <img className="block lg:mx-auto"  src={`${process.env.PUBLIC_URL}/assets/illustrations/Illustration-1.png`} alt="Illustration" />
            </div>
          </div>

          <div className="w-full absolute bottom-5 overflow-x-auto py-6 hide-scrollbar max-lg:bottom-[-100px]">
            <div className="flex space-x-6 justify-between">
              {companyLogosData.map((logoData) => (
                <div key={logoData.id} className="shrink-0">
                  <img 
                    src={logoData.logo} 
                    alt={`Company Logo ${logoData.id}`} 
                    width={124} 
                    height={48} 
                    className="grayscale"
                  />
                </div>
              ))}
            </div>
      </div>
      </div>
      </Element>
    </section>
  );
};

export default Hero;
