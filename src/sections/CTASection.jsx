import React from 'react'
import Button from '../components/Button'

const CTASection = () => {
  return (
    <section className='mt-28 max-lg:mt-16'>
        <div className="container">
            <div className='bg-p3 rounded-[30px] p-20 max-lg:p-10 flex justify-between relative'>
                <div>
                    <h3 className='text-h3 max-lg:text-h3Mob font-medium'>
                        Let’s make things happen
                    </h3>

                    <p className='text-h5 pt-6 pb-10 max-lg:text-pMob'>
                        Contact us today to learn more about how our digital <br/> marketing services can help your business grow and <br/> succeed online.
                    </p>

                    <Button id={2} className=' bg-p2 text-p3 hover:text-p1 transition duration-500'/>
                </div>

                <div className='absolute right-28 top-[-8px] max-lg:hidden'>
                    <img src={`${process.env.PUBLIC_URL}/assets/illustrations/Illustration-2.png`} alt="illustration" />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default CTASection
