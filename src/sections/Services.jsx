import React from 'react';
import { Element } from 'react-scroll';
import { services } from '../constants/index';
import Title from '../components/Title';

const Services = () => {
  return (
    <Element name="Services">
      <section className='full-screen-section'>
        <div className="container ">
          <Title sectionId={0} />

          <div>
            <div className="grid grid-cols-2 gap-10 w-full mt-20 max-lg:flex max-lg:flex-col">
            {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-14 max-lg:p-12 rounded-[30px] ${service.bgColor} shadow-dark-bottom relative flex flex-col justify-between h-full`}
                >
                  <div className='flex flex-col lg:flex-row justify-between'>
                    <div className="flex items-start flex-col space-y-24">
                      <span className="text-h3 font-medium max-md:text-h3Mob">
                        {service.title.split(/(<br>)/g).map((word, index) => (
                          <React.Fragment key={index}>
                            {word === '<br>' ? (
                              <br className="leading-none" />
                            ) : (
                              <span className={`inline-block p-1.5 ${service.bgText}`}>
                                {word}
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </span>

                      <button className={`${service.textColor} flex flex-row items-center space-x-4 max-lg:hidden`}>
                        <img src={service.btn[0].icon} alt="arrow" />

                        <span className='max-lg:hidden'>
                          {service.btn[0].text}
                        </span>
                      </button>
                    </div>

                    <div className='flex justify-between flex-row max-lg:pt-7'>
                    <button className={`${service.textColor} flex items-end lg:hidden`}>
                        <img src={service.btn[0].icon} alt="arrow" />

                        <span className='max-lg:hidden'>
                          {service.btn[0].text}
                        </span>
                      </button>
                      <img 
                        className='object-contain max-w-full h-auto max-lg:w-[165px] max-lg:h-[129px] max-lg:flex max-lg:items-end max-lg:object-right' 
                        src={service.image} 
                        alt={service.title} 
                      />
                    </div>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Services;
