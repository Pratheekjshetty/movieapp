import React, { useEffect } from 'react'
import Layout from '../../Layout/Layout'
import Head from '../../Components/Head/Head'
import about from '../../Assets/About2.jpg'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="About Us"/>
        <div className='xl:py-20 py-10 px-4'>
          <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Welcome to our Flickster
              </h3>
              <div className='mt-3 text-sm leading-8 text-text'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eveniet vitae eius deleniti aspernatur voluptates ipsum molestias repudiandae saepe soluta, consectetur maxime ut nemo, sunt tenetur voluptatum ullam. Quidem, omnis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet voluptate velit reprehenderit cum ratione soluta amet beatae debitis, consequuntur aut vero expedita ea officia, provident officiis architecto voluptatem minus.</p>
              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold'>10K</span>
                  <h4 className='text-lg font-semibold my-2'>Listed Movies</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem odit, assumenda sapiente officia nemo ipsum ducimus alias. Accusamus tempore accusantium iusto, neque officiis nihil nobis rem consequatur.
                  </p>
                </div>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold'>8K</span>
                  <h4 className='text-lg font-semibold my-2'>Lovely Users</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo laboriosam similique, velit harum quas maxime quis necessitatibus quia dicta magnam fugit debitis molestias incidunt asperiores, est consequuntur iste et.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-10 lg:mt-0'>
              <img src={about} alt="aboutus" className='w-full xl:block hidden h-header rounded-lg object-cover '/>
            </div>
          </div> 
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs