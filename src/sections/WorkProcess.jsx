import React, { useState } from 'react'
import { Element } from 'react-scroll';
import Title from '../components/Title'

const WorkProcess = ({ steps }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }

  return <section className='pt-28'>
    <Element name="Work Proccess">
        <div className="container">
                <div className='mb-20'>
                    <Title sectionId={2}/>
                </div>

                <div className="flex flex-col items-center space-y-8 w-full">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`w-full rounded-2xl border-2 border-gray-300 p-10 max-md:p-5 shadow-dark-bottom transition-all duration-300 ease-in-out ${
                        activeIndex === index ? 'bg-p1' : 'bg-p3'
                        }`}
                    >
                        <div
                        className="flex flex-wrap justify-between items-center cursor-pointer"
                        onClick={() => handleToggle(index)}
                        >
                        {/* Title and Number Container */}
                        <div className="flex items-center space-x-4 text-start w-full max-w-[80%]">
                            <span className="text-h1 max-md:text-h3 font-bold">{step.number}</span>
                            
                            <span className="text-h3 max-md:text-h4Mob font-semibold truncate w-full">
                            {step.title}
                            </span>
                        </div>
                        
                        {/* Button and Icon Container */}
                        <button
                            className={`flex-shrink-0 flex items-center justify-center rounded-full border-1 transition-colors duration-300 ${
                            activeIndex === index ? 'bg-p1' : ''
                            }`}
                            aria-label={activeIndex === index ? 'Collapse section' : 'Expand section'}
                        >
                            <img
                            src={activeIndex === index ? `${process.env.PUBLIC_URL}/assets/icons/minusIcon.png` : `${process.env.PUBLIC_URL}/assets/icons/plusIcon.png`}
                            alt={activeIndex === index ? 'Collapse' : 'Expand'}
                            className="object-contain w-10 h-10 max-md:w-6 max-md:h-6 lg:w-10 lg:h-10"
                            />
                        </button>
                        </div>

                        {/* Content */}
                        <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            activeIndex === index ? 'max-h-[500px] opacity-100 border-t-p2' : 'max-h-0 opacity-0'
                        }`}
                        >
                        <div className={`mt-6 border-t pt-4 text-h5 max-lg:text-pMob text-start font-bold ${activeIndex === index ? 'border-t-p2' : 'border-t-transparent'}`}>
                            {step.description}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
    </Element>
  </section>
}

export default WorkProcess
