import CommonNav from '@/components/CommonNav'
import FooterSmall from '@/components/Footer/FooterSmall'
import SEO from '@/components/SEO'
import DemoForm from '@/components/requestDemo/DemoForm'
// import requestDemo from '@/constants/ReqDemo'
import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

import { useContext } from 'react'
import { AppContext } from 'context/appContext'
import { RequestDemoPage } from 'sanity/schema'
import { urlFor } from 'lib/client'

const RequestDemo: NextPage = () => {
  const { data } = useContext(AppContext)
  let requestDemo: RequestDemoPage | undefined
  if (data) {
    data.forEach(doc => {
      if (doc._type === 'requestDemoPage') {
        requestDemo = doc
      }
    })
  }
  return (
    <>

      <SEO
        title='Moobidesk Request Demo'
        description='Moobidesk integrates all the essential communication touchpoints such as WhatsApp, SMS, Voice, Email, Facebook, Instagram and many more channels into one common interface for you to engage your customers better.'
      />
      {/* NAVBAR */}
      <CommonNav />

      {/* SECTION 1 BANNER */}
      <section className=' py-24 relative'>
        <Image
          className='absolute -top-36 -left-36 -z-10'
          src={'/hero-demo.png'}
          alt={''}
          width={400} height={400}
        />
        <div className='2xl:container mx-auto z-0'>
          <div className='mx-auto mt-24'>
            <h1 className='text-center text-4xl mb-8 font-medium'>{requestDemo?.section_1?.heading}</h1>
            <h3 className='text-center text-xl text-slate-600'>{requestDemo?.section_1?.subheading}</h3>
          </div>
        </div>
      </section>

      <section className='mb-16'>
        <div className='2xl:container mx-auto'>
          <div className='flex flex-col justify-center items-center xl:flex-row-reverse gap-12'>
            <DemoForm />
            <div className='flex flex-col my-4 items-center'>

              <div className='max-w-md p-4 mb-12 border rounded'>
                <h1 className='mb-6 text-lg text-slate-800'>{requestDemo?.section_2?.portion_1?.heading}</h1>
                <div className='flex flex-col gap-4'>
                  {requestDemo?.section_2?.portion_1?.sections?.map((card, index) => (
                    <div key={index} className='text-slate-700 flex items-center gap-6'>
                      <Image src={urlFor(card?.image).url()}
                        alt='icon'
                        width={20} height={20}
                      />
                      <span className='text-sm'>{card?.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h1 className='text-lg mb-6'>{requestDemo?.section_2?.portion_2?.heading}</h1>
                <div className='grid grid-cols-3 max-w-md  gap-4'>
                  {requestDemo?.section_2?.portion_2?.urls?.map((url, index) => (
                    <Image
                      className='border'
                      key={index}
                      src={urlFor(url).url()}
                      alt='client'
                      width={100} height={50}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <FooterSmall />
    </>
  )
}

export default RequestDemo;