import type { NextPage } from 'next';
import Image from 'next/image';

// required components
import Partner from '../../constants/Partner';
import BannerButton from './partnerComponents/BannerButton';
import PartnerCard from './partnerComponents/PartnerCard';
import PartnerExperienceCard from './partnerComponents/PartnerExperienceCard';
import PartnerFooter from './partnerComponents/PartnerFooter';

const PartnerPage: NextPage = () => {
  return (
    <>
      {/* NAVBAR COMPONENT GOES AT TOP / DEFAULT LAYOUT */}


      {/* FLOATING BUTTON */}
      <button className='fixed right-10 z-10 flex items-center gap-2 bottom-12 bg-btn_floating rounded-full px-4 py-2 text-white'>
        <Image src={'/icons/webchat.png'} width={25} height={25} alt='webchat'/>
        Leave us a message</button>

      {/* BANNER SECTION */}
      <div className="bg-[url('/hero-partner.jpg')] h-[40rem] overflow-hidden bg-clip-content bg-cover bg-center">
        <div className=' bg-blue-partner-overlay h-[125%] w-full pt-40'>
          <h1 className='text-center text-3xl sm:text-5xl font-bold text-white'>
            {Partner.heading}
          </h1>
          <div className=' max-w-[50rem] mx-auto  mt-5'>
            <h1 className='text-white text-center sm:text-2xl px-6 sm:mt-10'>
              {Partner.subheading}
            </h1>
          </div>
          <div className='flex'>
            <BannerButton>{ Partner.button.partner }</BannerButton>
          </div>
        </div>
      </div>

      {/* GRAY PORTION OF WEBSITE */}
      <div className='bg-gray-50 pt-16'>

        {/* TOGETHER WE GO FURTHUR SECTION-1 */}
        <section className=''>
          <div className=' mx-auto'>
            <h1 className='text-center text-2xl sm:text-4xl font-bold'>{Partner.section_1.heading}</h1>
            <p className='mx-auto text-center max-w-[55rem] px-6 text-gray-600 mt-8 sm:text-lg'>{Partner.section_1.subheading}</p>
          </div>
          <h2 className='mt-14 font-bold text-center text-lg sm:text-3xl'>{Partner.section_2.heading}</h2>
        </section>

        {/* PARTNERSHIP PROGRAM SECTION-2 */}
        <section className='pb-10 flex'>
          <div className=' mx-auto block xl:flex xl:gap-3 2xl:gap-12 xl:justify-center xl:items-center'>

            {/* todo : LOOP AND MAP ALL THE CARDS cards.map() */}
            {/* DONE ! */}
            {Partner.section_2.cards.map((card) => (
              <PartnerCard
                image={card.image}
                heading={card.heading}
                description={card.description}
                btn_text={card.btn_text}
              />
            ))}
          </div>
        </section>

      </div>

      {/* SECTION-3 ( MOOBIDESK PARTNERSHIP EXPERIENCE) */}
      <section className='pt-16 pb-16'>
        <h1 className='text-2xl sm:text-4xl font-bold text-center'>
          {Partner.section_3.heading}
        </h1>
        <div className=' pt-16 flex flex-col xl:flex-row xl:gap-0 gap-6 xl:px-28 justify-center'>

          {Partner.section_3.cards.map((card) => (
            <PartnerExperienceCard
              image={card.imageURL}
              description={card.description}
              heading={card.heading} />
          ))}

          {/* DONE */}
        {/* todo : LOOP AND MAP ALL THE CARDS cards.map() */}
    
        </div>
      </section>

      {/* END BANNER */}
      <section className='bg-tertiary py-20'>
        <h1 className='text-white font-semibold px-14 text-center  text-2xl sm:text-4xl'>{Partner.endBanner.heading}</h1>
        <div className='flex'>
          <BannerButton>{Partner.button.partner}</BannerButton>
        </div>
      </section>

      {/* PARTNER PAGE (DIFFERENT FOOTER) */}
      <PartnerFooter/>
    </>
  )
}

export default PartnerPage;