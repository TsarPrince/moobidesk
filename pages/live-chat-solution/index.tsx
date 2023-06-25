import GeneralButton from "@/components/GeneralButton";
import KeyFeaturePanel from "@/components/KeyFeaturePanel";
import MainBanner from "@/components/MainBanner";
import PartnerExperienceCard from "@/components/partner/PartnerExperienceCard";
// import Livechat from "@/constants/Livechat";
import type { NextPage } from "next"
import Link from "next/link";
import Image from "next/image";
import FooterSmall from "@/components/Footer/FooterSmall";
import Question from "@/components/whatsapp/Question";
import CommonNav from "@/components/CommonNav";
import SEO from "@/components/SEO";
import BlueSection from "@/components/BlueSection";

import { useContext } from 'react'
import { AppContext } from 'context/appContext'
import { LiveChatPage } from 'sanity/schema'
import { urlFor } from 'lib/client'

const LiveChatPage: NextPage = () => {
  const { data } = useContext(AppContext)
  let Livechat: LiveChatPage | undefined
  if (data) {
    data.forEach(doc => {
      if (doc._type === 'liveChatPage') {
        Livechat = doc
      }
    })
  }
  return (
    <>
      <SEO
        title="Live Chat Solution Singapore | Live Chat Customer Support for Your Website"
        description="Say More to Customer Growth, Loyalty and Sales with Moobidesk’s Live Chat Solution in Singapore. Moobidesk’s Live Chat Solution in Singapore is Your Ideal Customer Support Tool. Live Chat for Customer-Focused Businesses"
      />

      {/* NAVBAR */}
      <CommonNav />

      <MainBanner bgURL="bg-[url('/livechat/mobile-banner.jpg')] pt-20 bg-cover bg-center lg:bg-[url('/livechat/full-banner.png')]">
        <div className="text-white px-2 max-w-3xl mx-auto lg:mx-0 lg:mr-auto">
          <h1 className="text-3xl text-center mb-6 sm:text-4xl lg:hidden">{Livechat?.section_1?.heading}</h1>
          <h3 className="text-center px-4 mb-12 lg:hidden">{Livechat?.section_1?.subheading}</h3>

          {/* buttons?. */}
          <div className="flex flex-col lg:relative lg:top-80 lg:left-44 pb-48  sm:flex-row items-center lg:justify-start justify-center gap-3 sm:gap-6">
            <Link href={Livechat?.section_1?.buttons?.[0]?.url || '/'}>
              <GeneralButton>
                {Livechat?.section_1?.buttons?.[0]?.text}
              </GeneralButton>
            </Link>
            <Link href={Livechat?.section_1?.buttons?.[1]?.url || '/'}>
              <GeneralButton twColor="bg-tertiary-dark-blue">
                {Livechat?.section_1?.buttons?.[1]?.text}
              </GeneralButton>
            </Link>
          </div>
        </div>
      </MainBanner>

      {/* SECTION 2 */}
      <section className="bg-white py-14">
        <div className="2xl:container mx-auto px-3">
          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-center font-medium mb-6 text-3xl text-slate-700">{Livechat?.section_2?.heading}</h1>
            <h1 className="text-slate-700 text-lg text-center">{Livechat?.section_2?.subheading}</h1>
          </div>
          <div className="mx-auto flex flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 max-w-5xl">
            {Livechat?.section_2?.cards?.map((card, index) => (
              <PartnerExperienceCard
                key={index}
                heading={card.heading}
                description={card.description}
                image={urlFor(card.image).url()}
              />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 3 */}
      <section className="bg-white py-16">
        <div className="2xl:container mx-auto px-4">
          <div className="mx-auto">
            <h1 className="mx-auto mb-12 text-center text-3xl font medium text-slate-700">{Livechat?.section_3?.heading}</h1>
            <h2 className="mx-auto mb-20 text-center text-xl font medium text-slate-700">{Livechat?.section_3?.subheading}</h2>
          </div>
          <div className="flex flex-col gap-16">
            {Livechat?.section_3?.panels?.map((panel, index) => (
              <KeyFeaturePanel

                pos_left={Boolean(index % 2)}
                description={panel.description}
                heading={panel.heading}
                imageURL={urlFor(panel.image).url() || ''}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 4 */}
      <section className="bg-white py-16">
        <div className="2xl:container mx-auto px-4">
          <h1 className="text-2xl text-center mb-6 text-slate-700">{Livechat?.section_4?.heading}</h1>
          <h3 className="text-center text-slate-700  mb-16 text-lg">{Livechat?.section_4?.subheading}</h3>
          <div className="mx-auto justify-items-center max-w-md gap-y-8 lg:max-w-5xl xl:gap-y-8 xl:gap-x-12 grid grid-cols-2 lg:grid-cols-6">
            {Livechat?.section_4?.clients?.map((url, index) => (
              <div key={index}>
                <Image
                  src={urlFor(url).url()}
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
          <h1 className="text-center text-2xl sm:text-3xl mb-6">{Livechat?.section_5?.heading}</h1>
          <h3 className="text-center text-xl mb-12">{Livechat?.section_5?.subheading}</h3>

          <div className="px-6 max-w-4xl mx-auto">
            {Livechat?.section_5?.questions?.map((question, index) => {

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
      <BlueSection
        heading={Livechat?.section_6?.heading}
      >
        <div className="flex justify-center gap-6">
          <Link href={Livechat?.section_6?.buttons?.[0]?.url || '/'}>
            <GeneralButton>
              {Livechat?.section_6?.buttons?.[0]?.text}
            </GeneralButton>
          </Link>
          <Link href={Livechat?.section_6?.buttons?.[1]?.url || '/'}>
            <GeneralButton twColor="bg-tertiary-dark-blue">
              {Livechat?.section_6?.buttons?.[1]?.text}
            </GeneralButton>
          </Link>
        </div>
      </BlueSection>


      {/* SECTION 7 */}
      <FooterSmall />
    </>
  )
}

export default LiveChatPage;