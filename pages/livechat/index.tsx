import GeneralButton from "@/components/GeneralButton";
import KeyFeaturePanel from "@/components/KeyFeaturePanel";
import MainBanner from "@/components/MainBanner";
import PartnerExperienceCard from "@/components/partner/PartnerExperienceCard";
import Livechat from "@/constants/Livechat";
import type { NextPage } from "next"
import Link from "next/link";
import Image from "next/image";
import MidBanner from "@/components/MidBanner";
import PartnerFooter from "@/components/partner/PartnerFooter";
import Question from "@/components/whatsapp/Question";

const LiveChatPage: NextPage = () => {
  return (
    <>
      <MainBanner bgURL="bg-[url('/livechat/mobile-banner.jpg')] bg-cover bg-center lg:bg-[url('/livechat/full-banner.png')]">
        <div className="text-white px-2 max-w-3xl mx-auto lg:mx-0 lg:mr-auto">
          <h1 className="text-3xl text-center mb-6 sm:text-4xl lg:hidden">{Livechat.section_1.heading}</h1>
          <h3 className="text-center px-4 mb-12 lg:hidden">{Livechat.section_1.subheading}</h3>

          {/* buttons */}
          <div className="flex flex-col lg:relative lg:top-80 lg:left-44 pb-48  sm:flex-row items-center lg:justify-start justify-center gap-3 sm:gap-6">
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
      <section className="bg-white py-14">
        <div className="2xl:container mx-auto px-3">
          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-center font-medium mb-6 text-3xl text-slate-700">{Livechat.section_2.heading}</h1>
            <h1 className="text-slate-700 text-lg text-center">{Livechat.section_2.subheading}</h1>
          </div>
          <div className="mx-auto flex flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 max-w-5xl">
            {Livechat.section_2.cards.map((card, index) => (
              <PartnerExperienceCard
                key={index}
                {...card} />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 3 */}
      <section className="bg-white py-16">
        <div className="2xl:container mx-auto px-4">
          <div className="mx-auto">
            <h1 className="mx-auto mb-12 text-center text-3xl font medium text-slate-700">{Livechat.section_3.heading}</h1>
            <h2 className="mx-auto mb-20 text-center text-xl font medium text-slate-700">{Livechat.section_3.subheading}</h2>
          </div>
          <div className="flex flex-col gap-16">
            {Livechat.section_3.panels.map((panel, index) => (
              <KeyFeaturePanel
                
                pos_left={Boolean(index % 2)}
                {...panel}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 4 */}
      <section className="bg-white py-16">
        <div className="2xl:container mx-auto px-4">
          <h1 className="text-2xl text-center mb-6 text-slate-700">{Livechat.section_4.heading}</h1>
          <h3 className="text-center text-slate-700  mb-16 text-lg">{Livechat.section_4.subheading}</h3>
          <div className="mx-auto justify-items-center max-w-md gap-y-8 lg:max-w-5xl xl:gap-y-8 xl:gap-x-12 grid grid-cols-2 lg:grid-cols-6">
            {Livechat.section_4.clients.map((url, index) => (
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

      {/* SECTION 5 */}
      <section className=" bg-tertiary-dark-blue py-16">
        <div className="2xl:container mx-auto text-white">
          <h1 className="text-center text-2xl sm:text-3xl mb-6">{Livechat.section_5.heading}</h1>
          <h3 className="text-center text-xl mb-12">{Livechat.section_5.subheading}</h3>

          <div className="px-6 max-w-4xl mx-auto">
            {Livechat.section_5.questions.map((question, index) => {

              return (
                <Question
                  key={index}
                  {...question} />
              );
            })}
          </div>
        </div>
      </section>



      {/* SECTION 6 */}
      <MidBanner
        heading={Livechat.section_6.heading}
        bg="bg-tertiary"
      >
            <Link href={'/signup'} className="ml-auto mr-4">
              <GeneralButton>TRY IT FREE</GeneralButton>
            </Link>
            <Link href={'/'} className="mr-auto ml-4">
              <GeneralButton
                twColor="bg-tertiary-dark-blue"
                >CONTACT US</GeneralButton>
            </Link>
      </MidBanner>


      {/* SECTION 7 */}
      <PartnerFooter/>
    </>
  )
}

export default LiveChatPage;