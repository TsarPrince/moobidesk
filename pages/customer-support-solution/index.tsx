// Components
import CommonNav from "@/components/CommonNav"
import GeneralButton from "@/components/GeneralButton"
import MainBanner from "@/components/MainBanner"
import CustomerSupport from "@/constants/CustomerSupport"
import KeyFeaturePanel from "@/components/KeyFeaturePanel"
import BlueSeparator from "@/components/BlueSeparator"
import InsuranceCard from "@/components/insurance/InsuranceCard"
import MidBanner from "@/components/MidBanner"
import FooterSmall from "@/components/Footer/FooterSmall"

// NextJS utils
import type { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import SEO from "@/components/SEO"

const CustomerSupportPage: NextPage = () => {
  return (
    <>
      <SEO
        description="Modern customer support software solutions that help you grow your business. Moobidesk is an all-in-one customer service & engagement platform that streamlines the help desk support process with modern customer support software solutions."
        title='Customer Support Solution & Software |  Modern Engagement Platform | Moobidesk'
      />
      <CommonNav />

      <MainBanner>

        <Image src={'/black-logo.png'} alt="moobidesk" width={500} height={200} className="w-40 mx-auto mb-10"></Image>
        <h1 className="mb-6 text-center text-3xl sm:max-w-xl px-6 max-w-lg mx-auto font-medium">
          {CustomerSupport.section_1.heading}
        </h1>
        <p className="mb-9 mx-auto px-1 max-w-lg sm:max-w-xl text-center">
          {CustomerSupport.section_1.description}
        </p>

        <div className="flex justify-center gap-6">
          <Link href={'/signup'}>
            <GeneralButton>TRY IT FREE</GeneralButton>
          </Link>
          <Link href={'/request-demo'}>
            <GeneralButton
              twColor="bg-tertiary-dark-blue"
            >CONTACT US</GeneralButton>
          </Link>
        </div>


      </MainBanner>

      {/* SECTION -2  */}
      <section className="bg-gray-200 py-12">
        <div className="2xl:container mx-auto flex flex-col">
          <h1 className=" mb-12 text-center text-3xl text-gray-600">{CustomerSupport.section_2.heading}</h1>
          <div className=" px-4 inline-grid mx-auto gap-y-3 gap-x-4 sm:gap-x-8 grid-cols-2 sm:grid-cols-4 xl:flex xl:justify-evenly">
            {CustomerSupport.section_2.client_images.map((imageURL, index) => (
              <div key={index}
                className=" w-32 h-20"
              >
                <Image
                  src={imageURL}
                  alt={'client image'}
                  width={1000} height={400}
                  className="w-full grayscale hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 3 */}
      <section className="py-14 bg-tertiary px-4 sm:px-0">
        <h1 className="text-white text-center text-2xl max-w-md mx-auto sm:max-w-4xl sm:text-3xl">
          {CustomerSupport.section_3.heading}
        </h1>

        <div className="flex flex-col-reverse gap-4 mt-8 max-w-[60rem] mx-auto">
          <Image
            className=" w-[90%] mx-auto"
            src={'/cussupport/example.png'}
            alt="customer relation image"
            width={1000} height={600} />
          <p className="px-3 sm:text-lg mb-4 text-center text-white">
            {CustomerSupport.section_3.description}
          </p>
        </div>
      </section>


      {/* SECTION 4 */}
      <section className="bg-gray-200 py-10 px-4">
        <div className="2xl:container mx-auto flex flex-col">
          <h1 className="text-center text-gray-600 text-xl mb-6">
            {CustomerSupport.section_4.heading}
          </h1>
          <div className="grid flex-1 px-4 lg:max-w-full grid-cols-6 gap-y-4 lg:flex lg:justify-center justify-items-center lg:gap-6">
            {CustomerSupport.section_4.social_urls.map((social, index) => (
              <div key={index}
                className="border rounded-full flex flex-col items-center"
              >
                <Image
                  src={social.imageURL}
                  alt={social.name}
                  width={400} height={400}
                  className="w-14 h-14"
                />
                <h1 className="text-xs text-gray-700 my-1">{social.name}</h1>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="bg-white py-14 px-2">
        <div className="2xl:container mx-auto text-slate-800">
          <h1 className="mb-8 text-2xl font-medium text-center mx-auto">
            {CustomerSupport.section_5.heading}
          </h1>
          <p className=" mb-12 text-center max-w-md mx-auto text-lg">
            {CustomerSupport.section_5.description}
          </p>

          <div className="gap-20 flex flex-col">
            {CustomerSupport.section_5.panels.map((panel, index) => (
              <KeyFeaturePanel
                key={index}
                {...panel}
                pos_left={Boolean(index % 2)}
                extraLarge={true}
              />
            ))}

          </div>
        </div>
      </section>

      <BlueSeparator>
        {CustomerSupport.section_7.title}
      </BlueSeparator>

      {/* SECTION 6 */}
      <section className=" bg-tertiary-dark-blue">
        <div className="2xl:container mx-auto py-20">
          <h1 className="text-2xl text-center mb-6 text-white font-medium">
            {CustomerSupport.section_8.heading}
          </h1>
          <h2 className="text-lg text-center text-white">
            {CustomerSupport.section_8.subheading}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 pt-16 px-6 justify-center items-center">
            {CustomerSupport.section_6.map((card, index) => (
              <InsuranceCard
                key={index}
                {...card}
              />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 9  WHY ORG CHOOSE MOBIDESK ? */}
      <section className="bg-slate-200 py-14  ">
        <div className="2xl:container mx-auto">
          <h1 className="text-center font-medium text-tertiary-dark-blue text-2xl sm:text-3xl mb-16">
            {CustomerSupport.section_9.heading}
          </h1>

          {/* the 2 blocks design */}
          <div className="py-6 flex flex-col lg:flex-row px-4 relative justify-center items-center">

            {/* light blue block (with moobidesk) */}
            <div className="lg:flex-1 p-16 lg:h-60 max-w-xl text-white  bg-gradient-to-br from-tertiary to-blue-200 relative lg:-top-10 lg:ml-auto">
              <h1 className="font-medium text-3xl mb-4">
                {CustomerSupport.section_9.card_1.heading}
              </h1>
              <div className="h-[2px] bg-white mb-3"></div>
              <p className="text-sm">
                {CustomerSupport.section_9.card_1.description}

              </p>

              <div className="absolute h-20 flex -bottom-10 left-1/2 z-10 -translate-x-1/2 lg:transform-none lg:left-[93%] lg:bottom-16  items-center justify-center w-20 rounded-full bg-white text-tertiary-dark-blue text-4xl " >
                <span>VS</span>
              </div>

            </div>

            {/* dark blue block (with moobidesk) */}
            <div className="lg:flex-1 p-16 lg:h-60 max-w-xl text-white  bg-gradient-to-br from-tertiary-dark-blue to-tertiary lg:mr-auto">
              <h1 className="font-medium text-3xl mb-4">
                {CustomerSupport.section_9.card_2.heading}
              </h1>
              <div className="h-[2px] bg-white mb-3"></div>
              <p className="text-sm">
                {CustomerSupport.section_9.card_2.description}
              </p>
            </div>


          </div>
        </div>
      </section>



      {/* SECTION 10 */}
      <section className="bg-[url('/cussupport/section-bg.png')] py-10 px-2">
        <div className="2xl:contianer mx-auto">

          {/* top part */}
          <div className="flex justify-between max-w-2xl mx-auto">
            <div className="w-max">
              <Image src={'/cussupport/icons/comma-1.png'} alt="''"
                width={200} height={200}
                className="w-20"
              />
            </div>
            <div className="w-max flex justify-center items-center">
              <Image src={'/cussupport/icons/mid-comma.png'} alt="''"
                width={200} height={200}
                className="w-40"
              />
            </div>
            <div className="w-max">
              <Image src={'/cussupport/icons/comma-2.png'} alt="''"
                width={200} height={200}
                className="w-20"
              />

            </div>
          </div>

          {/* description */}
          <div className="p-4 max-w-[48rem] mx-auto">
            <p className="text-center text-lg">
              {CustomerSupport.section_10.description}
            </p>
          </div>

          {/* separator line */}
          <div className="max-w-[20rem] mb-6 mx-auto h-[2px] bg-tertiary"></div>

          {/* owner */}
          <div className="text-gray-700 flex flex-col justify-center items-center mx-auto">
            <span><em>
              {CustomerSupport.section_10.person_name}
            </em></span>
            <span>
              <em>
                {CustomerSupport.section_10.person_title}
              </em>
            </span>
          </div>
        </div>
      </section>

      <MidBanner
        heading={CustomerSupport.midBanner.heading}
        buttonText="TRY IT FREE"
        bg="bg-tertiary"
        link="/signup"
      />

      <FooterSmall />
    </>
  )
}

export default CustomerSupportPage;