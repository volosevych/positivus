import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-28'>
        <div className="footerContainer">
            <div className='bg-p2 py-14 px-16 rounded-t-3xl max-lg:rounded-none'>
                <div className='flex justify-between max-lg:flex-col max-lg:items-center'>
                    <img src={`${process.env.PUBLIC_URL}/assets/header/WhiteLogo.png`} alt="logo" />

                    <div className='flex flex-row space-x-3 max-lg:mt-5'>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/icons/whiteLinkedin.png`} alt="LinkedIn" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/icons/facebook.png`} alt="facebook" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/icons/twitter.png`} alt="twitter" /></a>
                    </div>
                </div>

                <div className='flex justify-between mt-16 max-lg:text-center'>
                    <div className='text-start max-lg:text-center'>
                        <span className='border border-p1 bg-p1 p-1.5 rounded-3xl font-medium'>
                            Contact us:
                        </span>

                        <div className='text-p3 flex flex-col'>
                        <br/> <span>Email: <a href="mailto:info@positivus.com">info@positivus.com</a></span> <br/>

                            <span>Phone: <a href="tel:+5555678901">555-567-8901</a></span> <br/>

                            <span>Address: 1234 Main St <br/> Moonstone City, Stardust State 12345</span>
                        </div>
                    </div>

                    <div className='border border-p4 bg-p4 items-center p-5 rounded-3xl flex flex-row max-lg:hidden'>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required
                                className="p-3 rounded-lg bg-p4 border border-p5"
                                placeholder="Email"
                            />

                            <button className='border border-p1 p-3 rounded-lg ml-5 bg-p1 font-medium hover:bg-p3 transition duration-500'>
                                Subscribe to news
                            </button>
                    </div>
                </div>
                <div className="border-t border-p3 my-14"></div>

                <div className='text-p3 text-start max-lg:text-center max-lg:flex max-lg:flex-col'>
                    <span>
                    © 2023 Positivus. All Rights Reserved.
                    </span>

                    <span className='ml-5 underline cursor-pointer max-lg:mt-5'>Privacy Policy</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
