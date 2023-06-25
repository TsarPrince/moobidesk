//! LANDING PAGE / HOME

import type { NextPage } from 'next'
import Image from 'next/image'

// * as the name of this page component and the export is same
import { default as HomeConstants } from '@/constants/Home'

// components
import FullNavbar from '@/components/home/FullNavbar'
import TopBannerButton from '@/components/home/TopBannerButton'
import StatCard from '@/components/home/StatCard'
import KeyFeaturePanel from '@/components/KeyFeaturePanel'
import BenefitCard from '@/components/BenefitCard'
import FooterBig from '@/components/Footer/FooterBig'
import MidBanner from '@/components/MidBanner'
import SEO from '@/components/SEO'
import Link from 'next/link'
import CommonNav from '@/components/CommonNav'

const seo = {
  title: 'Customer Engagement Solution Singapore | Omnichannel Contact Centre Solution Singapore',
  description: 'Moobidesk is your top choice for Customer Engagement Solutions in Singapore. Find out how we can help you increase customer satisfaction & sales today.'
};

const Home: NextPage = () => {
  return (
    <>

      {/* SEO */}
      <SEO {...seo} />

      {/* TOP-BANNER SECTION */}

      {/* FULL NAVBAR SHOWN WHEN SCREEN SIZE IS LARGE */}
      <FullNavbar />

      <CommonNav
        hideAtXL={true}
      />

      <div className="bg-[url('/hero-homepage.jpg')] text-white bg-cover bg-center pt-20 sm:pt-72 pb-36">
        <h1 className=' text-3xl max-w-[25rem] mx-auto sm:max-w-[60rem] font-medium sm:text-5xl text-white text-center'>{HomeConstants.topBanner.heading}</h1>
        <p className='text-center text-lg mx-auto max-w-[30rem] sm:text-xl sm:max-w-[70rem] my-10'>
          {HomeConstants.topBanner.subheading}
        </p>
        <div className='flex mt-20'>
          <Link className='mx-auto' href={'/'}>
            <TopBannerButton>
              {HomeConstants.topBanner.bannerButton.text}
            </TopBannerButton>
          </Link>
        </div>
      </div>

      {/* TRUSTED BY COMPANIES SECTION */}
      <div className='flex flex-col py-20 lg:flex-row  max-w-7xl mx-auto'>

        {/* heading + subheading */}
        <div className='mx-auto max-w-sm flex flex-col gap-10 lg:my-auto'>
          <h1 className='text-xl text-center font-medium'>{HomeConstants.section_1.heading}</h1>
          <p className='max-w-sm text-center lg:text-left text-sm text-gray-700'>{HomeConstants.section_1.subheading}</p>
        </div>


        <div className=' inline-grid grid-cols-2 lg:grid-cols-3 mx-auto my-8 lg:my-0 gap-x-16 gap-y-6 '>
          {HomeConstants.companyImages.map((imageURL) => (

            // LOGO OF COMPANIES
            <Image className='w-28 filter grayscale'
              key={imageURL}
              src={imageURL}
              alt='feature-icon'
              width={150} height={40} />
          ))}
        </div>
      </div>

      <hr />

      {/* SECTION-3 */}
      {/* SUCCESSFUL BUSINESSES */}
      <section className='py-8'>
        <div>
          <h1 className='text-xl sm:text-3xl max-w-lg font-medium mt-20 sm:max-w-4xl mx-auto text-center'>{HomeConstants.statHeading}</h1>
        </div>
        <div className='flex flex-col my-12 px-12 lg:flex-row gap-10 2xl:container mx-auto lg:gap-4 justify-center items-center'>

          {HomeConstants.statCards.map((statCard, index) => (
            <StatCard
              key={index}
              title={statCard.title}
              imageURL={statCard.imageURL}
              percentage={statCard.percentage} />
          ))}

        </div>
      </section>


      {/* SECTION-4 */}
      <div className="py-24 bg-[url('/home/bg-section-4.jpg')] bg-cover bg-center ">
        <div className='2xl:container mx-auto'>



          {/* heading and subheading and icons */}
          <div className='text-white lg:hidden text-2xl max-w-full px-4 font-medium mx-auto'>
            <h1>{HomeConstants.section_4.heading_1}</h1>
            <h1>{HomeConstants.section_4.heading_2}</h1>
            <p className='text-base font-normal my-10'>{HomeConstants.section_4.subheading}</p>

            {/* icons */}
            <div className='flex'>
              {/* grid which has the home-social-icons */}
              <div className='grid gap-y-4 lg:hidden sm:gap-x-4 gap-4 mx-auto grid-cols-6 max-w-[25rem] justify-items-center '>
                {HomeConstants.section_4.imageURLs.map((imageURL) => (
                  <Image className="w-7 h-7 sm:w-8 sm:h-8"
                    key={imageURL}
                    src={imageURL}
                    alt={'image'}
                    width={30} height={30} />
                ))}
              </div>
            </div>
          </div>


          <section className='w-full overflow-hidden'>


            <div className='p-2 my-8 max-w-[25rem] relative mx-auto lg:max-w-[70%] px-2'>

              {/* the laptop-image */}
              <Image className='lg:w-[90%] lg:max-w-6xl w-full object-contain' src={'/home/img-laptop.png'} alt='laptop-image' width={500} height={200}>
              </Image>

              {/* change heading and subheading position when viewport changes */}
              <div className='text-white lg:block absolute bottom-20 xl:right-16 -right-4 hidden text-2xl lg:text-4xl w-max font-medium mx-auto px-2'>
                <h1 className='w-max-full'>{HomeConstants.section_4.heading_1}</h1>
                <h1>{HomeConstants.section_4.heading_2}</h1>
                <p className='text-base font-normal my-10'>{HomeConstants.section_4.subheading}</p>

                {/* icons */}
                <div className='flex'>
                  {/* grid which has the home-social-icons */}
                  <div className='grid gap-y-4 sm:gap-x-4 mx-auto grid-cols-6 max-w-[20rem]'>
                    {HomeConstants.section_4.imageURLs.map((imageURL) => (
                      <Image className="w-7 h-7 sm:w-8 sm:h-8"
                        key={imageURL}
                        src={imageURL}
                        alt={'image'}
                        width={30} height={30} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          <div className='flex flex-col mt-16 gap-4 px-4 max-w-sm mx-auto text-white text-xs lg:max-w-3xl lg:flex-row lg:gap-10'>
            <div>{HomeConstants.section_4.desc_1}</div>
            <div>{HomeConstants.section_4.desc_2}</div>
          </div>
        </div>
      </div>



      {/* KEY FEATURES SECTION PANEL  */}

      <div className='py-32'>

        <div className='mx-auto max-w-sm sm:max-w-6xl'>
          <h1 className='text-center text-2xl font-medium sm:text-4xl'>{HomeConstants.section_5.heading}</h1>
          <h3 className="text-center mt-8 px-10">{HomeConstants.section_5.subheading}</h3>
        </div>

        <div className='mt-20 flex flex-col px-4 gap-24'>
          {HomeConstants.section_5.panels.map((panel, index) => (
            <KeyFeaturePanel
              key={index}
              pos_left={(index % 2 ? false : true)}
              {...panel}
            />
          ))}
        </div>

      </div>


      {/* MID BANNER */}
      {/* TODO: update link according to the page later */}
      <MidBanner
        heading={HomeConstants.endBanner.heading}
        buttonText={HomeConstants.endBanner.buttonText}
        link='/#contactus'
      />


      {/* BENEFITS OF CUSTOMER ENGAGEMENT SECTION */}
      <section className='bg-white pt-16 pb-16'>
        <div className='2xl:container mx-auto px-2'>

          <h1 className='text-2xl sm:text-3xl px-3 sm:text-center mt-16  lg:max-w-full max-w-[25rem] sm:w-full mx-auto'>
            {HomeConstants.section_6.heading}
          </h1>
          <h3 className=' mt-8 max-w-[25rem] mx-auto sm:w-full sm:text-center text-sm sm:text-base px-4'>{HomeConstants.section_6.subheading}</h3>
          <div className=' pt-16 grid grid-cols-1 xl:grid-cols-3 xl:gap-6 gap-6 xl:px-28 max-w-full'>

            {HomeConstants.section_6.cards.map((card, index) => (
              <BenefitCard
                key={index}
                image={card.imageURL}
                description={card.description}
                heading={card.heading} />
            ))}

          </div>
        </div>
      </section>

      <hr></hr>

      {/* WHY CHOOSE MOBIDESK ? */}

      <section className='bg-white my-16 px-10 overflow-hidden'>
        <div className='2xl:container mx-auto lg:flex'>

          <div className='inline mx-auto lg:px-8 lg:pt-16'>
            <h1 className='text-xl font-medium sm:max-w-[32rem] lg:max-w-[28rem] sm:text-3xl sm:mx-auto'>
              {HomeConstants.section_7.heading}
            </h1>
            <h5 className='text-xs sm:max-w-[32rem] sm:mx-auto lg:max-w-[28rem] mt-5 text-sub-text-color'>{HomeConstants.section_7.subheading_1}</h5>
            <h3 className='text-sm sm:max-w-[32rem] sm:mx-auto lg:max-w-[28rem] mt-2 mb-6'>{HomeConstants.section_7.subheading_2}</h3>
          </div>

          <Image className='w-96 sm:ml-auto relative sm:-right-28 lg:static lg:-mt-8 sm:w-[32rem] lg:w-[50%]' src={HomeConstants.section_7.imageURL} alt='why_choose_image' width={1000} height={1000} />
        </div>
      </section>


      {/* ENDING BANNER */}
      {/* TODO: update link according to the page later */}
      <MidBanner
        heading={HomeConstants.midBanner.heading}
        buttonText={HomeConstants.midBanner.buttonText}
        link='/request-demo'
      />

      {/* Internal link for contact us */}
      <div id='contact-us'>
        <FooterBig />
      </div>
    </>
  )
}

export default Home;
