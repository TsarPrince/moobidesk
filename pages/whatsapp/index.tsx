import BlueSection from "@/components/BlueSection"
import GeneralButton from "@/components/GeneralButton"
import KeyFeaturePanel from "@/components/KeyFeaturePanel"
import MainBanner from "@/components/MainBanner"
import MidBanner from "@/components/MidBanner"
import PartnerExperienceCard from "@/components/partner/PartnerExperienceCard"
import FooterSmall from "@/components/Footer/FooterSmall"
import Question from "@/components/whatsapp/Question"
import TabularSection from "@/components/whatsapp/TabularSection"
import Whatsapp from "@/constants/Whatsapp"
import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import CommonNav from "@/components/CommonNav"
import PhoneDisplay from "@/components/whatsapp/PhoneDisplay"



const WhatsappPage: NextPage = () => {
  return (
    <>
      
      {/* Navbar */}
      <CommonNav/>

      {/* SECTION 1 */}
      <MainBanner
        bgURL="md:bg-[url('/hero-whatsapp.jpg')] bg-[url('/hero-whatsapp-mobile.jpg')] bg-center bg-cover -mt-6"
      >
        <div className="max-w-2xl lg:pl-16 lg:mt-24">
          <h1 className="text-center text-white px-2 mx-auto mb-8 text-3xl lg:mx-0 lg:text-4xl lg:text-left font-medium max-w-xl">{Whatsapp.section_1.heading}</h1>
          <p className="text-center text-white mb-12 mx-auto max-w-xl lg:mx-0 lg:text-lg lg:text-left">
            {Whatsapp.section_1.subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3 sm:gap-6">
            <Link href={'/signup'}>
              <GeneralButton>TRY IT FREE</GeneralButton>
            </Link>
            <Link href={'/'}>
              <GeneralButton
                twColor="bg-tertiary-dark-blue"
              >CONTACT US</GeneralButton>
            </Link>
          </div>
        </div>
      </MainBanner>

      {/* SECTION 2 */}
      <MidBanner
        bg="bg-tertiary"
        heading={Whatsapp.section_2.heading}
        description={Whatsapp.section_2.description}
      />


      {/* SECTION 3  */}
      <section className="bg-gray-100 py-16 ">
        <div className="2xl:container mx-auto px-4">
          <div>
            <h1 className="text-center mx-auto text-3xl mb-6 max-w-5xl text-gray-700 font-medium">
              {Whatsapp.section_3.heading}
            </h1>
            <p className=" text-gray-700 mb-12 text-center mx-auto text-xl">
              {Whatsapp.section_3.subheading}
            </p>
          </div>

          <div className="xl:grid xl:grid-cols-3 gap-8 flex flex-col">
            {Whatsapp.section_3.cards.map((card, index) => (
              <PartnerExperienceCard
                key={index}
                {...card}
              />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 4 */}
      <section className="bg-white py-16">
        <div className="2xl:container mx-auto px-4">
          <div className="mx-auto">
            <h1 className="mx-auto mb-20 text-center text-3xl font medium text-slate-700">{Whatsapp.section_4.heading}</h1>
          </div>
          <div className="flex flex-col gap-16">
            {Whatsapp.section_4.panels.map((panel, index) => (
              <KeyFeaturePanel
                pos_left={Boolean(index % 2)}
                {...panel}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 5 LETS CCOMPARE */}
      <section className="bg-gray-50 py-16">
        <div className="2xl:container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-center mx-auto mb-4 text-3xl font-medium text-slate-700">
              {Whatsapp.section_5.heading}
            </h1>
            <h3 className="text-slate-700 text-lg text-center mx-auto">
              {Whatsapp.section_5.subheading}
            </h3>
          </div>
          <TabularSection
            {...Whatsapp.section_5.tabular}
          />
        </div>
      </section>

      {/* SECTION 6 */}
      <PhoneDisplay/>


      {/* SECTION 7 CLIENTS WE SERVE */}
      <section className="bg-white py-16">
        <div className="2xl:container mx-auto px-4">
          <h1 className="text-2xl text-center mb-12 text-slate-700">{Whatsapp.section_7.heading}</h1>
          <div className="mx-auto justify-items-center max-w-md gap-y-8 lg:max-w-5xl xl:gap-y-8 xl:gap-x-12 grid grid-cols-2 lg:grid-cols-6">
            {Whatsapp.section_7.clients.map((url, index) => (
              <div key={index}>
                <Image
                  src={url}
                  alt="client-image"
                  width={135} height={135} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section className=" bg-tertiary-dark-blue py-16">
        <div className="2xl:container mx-auto text-white">
          <h1 className="text-center text-2xl sm:text-3xl mb-6">{Whatsapp.section_8.heading}</h1>
          <h3 className="text-center text-sm sm:text-base mb-12">{Whatsapp.section_8.subheading}</h3>

          <div className="px-6 max-w-4xl mx-auto">
            {Whatsapp.section_8.questions.map((question, index) => {

              return (
                <Question
                  key={index}
                  {...question} />
              );
            })}
          </div>
        </div>
      </section>


      {/* SECTION 9 */}
      <BlueSection heading="Ready to transform your business?">
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
      </BlueSection>


      {/* SECTION 10 */}
      <FooterSmall />
    </>
  )
}

export default WhatsappPage;