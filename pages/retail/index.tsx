import GeneralButton from "@/components/GeneralButton";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Retail from "@/constants/Retail";
import KeyFeaturePanel from "@/components/KeyFeaturePanel";
import InsuranceCard from "@/components/insurance/InsuranceCard";
import FooterSmall from "@/components/Footer/FooterSmall";
import CommonNav from "@/components/CommonNav";
import SEO from "@/components/SEO";
import BlueSection from "@/components/BlueSection";

const RetailPage: NextPage = () => {
  return (
    <>

      <SEO
        title="Moobidesk Retail"
        description="Moobidesk integrates all the essential communication touchpoints such as WhatsApp, SMS, Voice, Email, Facebook, Instagram and many more channels into one common interface for you to engage your customers better."
      />
      {/* NAVBAR to be added here*/}
      <CommonNav />

      {/* BANNER SECTION 1 */}
      {/* banner bg-image */}
      <div className="bg-[url('/hero-retail.jpg')] bg-cover bg-center">
        <div className="2xl:container mx-auto px-20 py-16 pb-64">

          {/* banner content */}
          <div className="flex flex-col sm:mt-16 gap-4 sm:gap-6 xl:mx-[7%]">
            <h5 className="text-xs sm:text-sm text-center sm:text-left">{Retail.section_1.cap_heading}</h5>
            <h1 className="text-2xl sm:text-4xl text-center sm:text-left w-max-[60%] sm:max-w-[40rem]">{Retail.section_1.heading}</h1>
            <h3 className="text-center sm:text-xl sm:text-left w-max-[60%] sm:max-w-[40rem]">{Retail.section_1.subheading}</h3>

            {/* 2 banner buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 items-center">

              <Link href={Retail.section_1.buttons[0]?.url}>
                <GeneralButton>
                  {Retail.section_1.buttons[0]?.text}
                </GeneralButton>
              </Link>
              <Link href={Retail.section_1.buttons[1]?.url}>
                <GeneralButton twColor="bg-tertiary-dark-blue">
                  {Retail.section_1.buttons[1]?.text}
                </GeneralButton>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* SECTION 2 BUILD CUSTOMER RELATIONSHIP */}
      <section className="py-14 bg-tertiary px-4 sm:px-0">
        <h1 className="text-white text-center text-2xl max-w-md mx-auto sm:max-w-4xl sm:text-3xl">{Retail.section_2.heading}</h1>

        <div className="flex flex-col sm:flex-col-reverse gap-4 mt-8 max-w-[60rem] mx-auto">
          <Image
            className=" w-[90%] mx-auto"
            src={Retail.section_2.imageURL}
            alt="customer relation image"
            width={1000} height={600} />
          <p className="px-3 sm:text-lg text-center text-white">
            {Retail.section_2.subheading}
          </p>
        </div>
      </section>


      {/* SECTION - 3 ALTERNATING CARDS */}
      <section className="bg-white py-14 px-4 sm:px-0">
        <div className="2xl:container mx-auto">

          <div className="flex flex-col gap-16">
            {Retail.panels.map((panel, index) => (
              <KeyFeaturePanel
                pos_left={(index % 2 ? false : true)}
                key={index}
                {...panel}
                extraLarge={true}
              />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 4 WHY CHOOSE MOBIDESK */}
      <section className=" bg-tertiary-dark-blue">
        <div className="2xl:container mx-auto py-20">
          <h1 className="text-2xl text-center text-white font-medium">{Retail.section_4.heading}</h1>

          <div className="flex flex-col xl:flex-row gap-10 xl:gap-0 xl:justify-evenly  pt-16 px-6 justify-center items-center">
            {Retail.section_4.reasons.map((card, index) => (
              <InsuranceCard
                key={index}
                {...card}
              />
            ))}
          </div>
        </div>
      </section>


      {/* END BANNER DARK BLUE */}
      <BlueSection heading={Retail.section_5.heading}>
        <div className="flex justify-center gap-6">
          <Link href={Retail.section_5.buttons[0]?.url}>
            <GeneralButton>
              {Retail.section_5.buttons[0]?.text}
            </GeneralButton>
          </Link>
          <Link href={Retail.section_5.buttons[1]?.url}>
            <GeneralButton twColor="bg-tertiary-dark-blue">
              {Retail.section_5.buttons[1]?.text}
            </GeneralButton>
          </Link>
        </div>
      </BlueSection>

      <FooterSmall />
    </>
  )
}

export default RetailPage;