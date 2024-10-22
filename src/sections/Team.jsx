import React from 'react';
import { Element } from 'react-scroll';

import Title from '../components/Title';
import Button from '../components/Button';
import { team } from '../constants';

const Team = () => {
  return <section className='pt-28 '>
    <div className="container">
    <Element name='Team'>
        <div className='mb-20'>
            <Title sectionId={3}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map(({ id, name, title, experience, photo }) => (
              <div key={id} className="border border-p2 p-10 rounded-3xl shadow-dark-bottom">
                  <div className='flex items-center relative'>
                      <img src={photo} alt="" />
                      <div className='absolute bottom-0 left-36 text-start max-md:text-[18px] max-md:left-32'>
                          <h3 className='font-bold text-h4 max-lg:text-h4Mob'>{name}</h3>
                          <h4 className='text-h5 max-lg:text-pMob font-medium'>{title}</h4>
                      </div>
                      
                      <div className='absolute right-0 top-0'>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/icons/greenLinkedin.svg`} alt="linkedIn" /></a>
                      </div>
                  </div>

                  <div className="h-px bg-p2 my-7"></div>

                  <div className='text-start text-h5 max-lg:text-pMob font-medium'>
                      {experience}
                  </div>
              </div>
          ))}
        </div>
        <div className='flex justify-end max-md:justify-center mt-14'>
          <Button className='px-16 bg-p2 text-p3 hover:text-p1 transition-colors duration-500 max-md:px-28' id={4}/>
        </div>
    </Element>
    </div>
  </section>
}

export default Team
