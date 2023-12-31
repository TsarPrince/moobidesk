import type { NextPage } from 'next';
import Image from 'next/image';

// import Partner from '@/constants/Partner';
import BannerButton from '@/components/partner/BannerButton';
import PartnerCard from '@/components/partner/PartnerCard';
import PartnerExperienceCard from '@/components/partner/PartnerExperienceCard';
import FooterSmall from '@/components/Footer/FooterSmall';
import SEO from '@/components/SEO';

import CommonNav from '@/components/CommonNav';
import Link from 'next/link';

import { useContext } from 'react'
import { AppContext } from 'context/appContext'
import { PartnerPage } from 'sanity/schema'
import { urlFor } from 'lib/client'

const PartnerPage: NextPage = () => {
  const { data } = useContext(AppContext)
  let Partner: PartnerPage | undefined
  if (data) {
    data.forEach(doc => {
      if (doc._type === 'partnerPage') {
        Partner = doc
      }
    })
  }
  return (
    <>
      <SEO
        title='Moobidesk Partner'
        description='Moobidesk integrates all the essential communication touchpoints such as WhatsApp, SMS, Voice, Email, Facebook, Instagram and many more channels into one common interface for you to engage your customers better.'
      />

      {/* navbar */}
      <CommonNav hideAtXL={false} />

      {/* FLOATING BUTTON */}
      {/* to be removed */}
      <button className='fixed right-10 z-10 flex items-center gap-2 bottom-12 bg-btn_floating rounded-full px-4 py-2 text-white'>
        <Image src={'/icons/webchat.png'} width={25} height={25} alt='webchat' />
        Leave us a message</button>

      {/* BANNER SECTION */}
      <div className="bg-[url('/hero-partner.jpg')] h-[40rem] overflow-hidden bg-clip-content bg-cover bg-center">
        <div className=' bg-blue-partner-overlay h-[125%] w-full pt-40'>
          <h1 className='text-center text-3xl sm:text-5xl font-bold text-white'>
            {Partner?.heading}
          </h1>
          <div className=' max-w-[50rem] mx-auto  mt-5'>
            <h1 className='text-white text-center sm:text-2xl px-6 sm:mt-10'>
              {Partner?.subheading}
            </h1>
          </div>
          <div className='flex'>
            <Link href={'/request-demo'} className='mx-auto'>
              <BannerButton>{Partner?.button?.partner}</BannerButton>
            </Link>
          </div>
        </div>
      </div>

      {/* GRAY PORTION OF WEBSITE */}
      <div className='bg-gray-50 pt-16'>

        {/* TOGETHER WE GO FURTHUR SECTION-1 */}
        <section className=''>
          <div className=' mx-auto'>
            <h1 className='text-center text-2xl sm:text-4xl font-bold'>{Partner?.section_1?.heading}</h1>
            <p className='mx-auto text-center max-w-[55rem] px-6 text-gray-600 mt-8 sm:text-lg'>{Partner?.section_1?.subheading}</p>
          </div>
          <h2 className='mt-14 font-bold text-center text-lg sm:text-3xl'>{Partner?.section_2?.heading}</h2>
        </section>

        {/* PARTNERSHIP PROGRAM SECTION-2 */}
        <section className='pb-10 flex'>
          <div className=' mx-auto block xl:flex xl:gap-3 2xl:gap-12 xl:justify-center xl:items-center'>

            {/* todo : LOOP AND MAP ALL THE CARDS cards.map() */}
            {/* DONE ! */}
            {Partner?.section_2?.cards?.map((card, index) => (
              <PartnerCard
                key={index}
                image={urlFor(card.image).url()}
                heading={card.heading || ''}
                description={card.description || ''}
                btn_text={card.btn_text}
              />
            ))}
          </div>
        </section>

      </div>

      {/* SECTION-3 ( MOOBIDESK PARTNERSHIP EXPERIENCE) */}
      <section className='bg-white pt-16 pb-16'>
        <div className='2xl:container mx-auto'>

          <h1 className='text-2xl sm:text-4xl font-bold text-center'>
            {Partner?.section_3?.heading}
          </h1>
          <div className=' pt-16 flex flex-col xl:flex-row xl:gap-0 gap-6 xl:px-28 justify-center'>

            {Partner?.section_3?.cards?.map((card, index) => (
              <PartnerExperienceCard
                key={index}
                image={urlFor(card.image).url()}
                description={card.description || ''}
                heading={card.heading || ''} />
            ))}

            {/* DONE */}
            {/* todo : LOOP AND MAP ALL THE CARDS cards.map() */}

          </div>
        </div>
      </section>

      {/* END BANNER */}
      <section className='bg-tertiary py-20'>
        <h1 className='text-white font-semibold px-14 text-center  text-2xl sm:text-4xl'>{Partner?.endBanner?.heading}</h1>
        <div className='flex'>
          <Link href={'/request-demo'} className='mx-auto'>
            <BannerButton>{Partner?.button?.partner}</BannerButton>
          </Link>
        </div>
      </section>

      {/* PARTNER PAGE (DIFFERENT FOOTER) */}
      <FooterSmall />
    </>
  )
}

export default PartnerPage;