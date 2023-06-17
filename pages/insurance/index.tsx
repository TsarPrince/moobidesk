import GeneralButton from "@/components/GeneralButton";
import type { NextPage } from "next";
import Image from "next/image";
import Insurance from "@/constants/Insurance";
import KeyFeaturePanel from "@/components/KeyFeaturePanel";
import InsuranceCard from "@/components/insurance/InsuranceCard";
import PartnerFooter from "@/components/partner/PartnerFooter";

const InsurancePage: NextPage = () => {
  return (
    <>
      {/* NAVBAR to be added here*/}
      

      {/* BANNER SECTION 1 */}
      {/* banner bg-image */}
      <div className="bg-[url('/images/insurance/bg-insurance.jpg')] bg-cover bg-center">
        <div className="2xl:container mx-auto px-20 py-16 pb-64">

          {/* banner content */}
          <div className="flex flex-col sm:mt-16 gap-4 sm:gap-6 xl:mx-[7%]">
            <h5 className="text-xs sm:text-sm text-center sm:text-left">INSURANCE</h5>
            <h1 className="text-2xl sm:text-4xl text-center sm:text-left w-max-[60%] sm:max-w-[40rem]">Simplify Complexities of your customer support process</h1>
            <h3 className="text-center sm:text-xl sm:text-left w-max-[60%] sm:max-w-[40rem]">The complete helpdesk that manages everything from general enquiries to insurance claims.</h3>

            {/* 2 banner buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 items-center">

              {/* replace span with link */}
              <span>
                <GeneralButton>TRY IT FREE</GeneralButton>
              </span>
              <span>
                <GeneralButton>CONTACT US</GeneralButton>
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* SECTION 2 BUILD CUSTOMER RELATIONSHIP */}
      <section className="py-14 bg-tertiary px-4 sm:px-0">
        <h1 className="text-white text-center text-2xl max-w-md mx-auto sm:max-w-4xl sm:text-3xl">Build customer relationships that lasts</h1>

        <div className="flex flex-col sm:flex-col-reverse gap-4 mt-8 max-w-[60rem] mx-auto">
          <Image
            className=" w-[90%] mx-auto"
            src={'/insurance/section_2.png'}
            alt="customer relation image"
            width={1000} height={600} />
          <p className="px-3 sm:text-lg text-center text-white">
Customers prioritize trust when engaging insurers and will subconsciously decide how much they are willing to trust your business based on their first interactions which is usually with your customer support team. Hence, many insurance providers are looking for a platform that allows effortless management of communications to maintain quality customer service. With Moobidesk, conversations from all channels are organized in one place – enabling seamless interactions. And customer context can be easily accessed – allowing agents to deliver personalized responses to establish a strong foundation of trust with your customers.
          </p>
        </div>
      </section>


      {/* SECTION - 3 ALTERNATING CARDS */}
      <section className="bg-white py-14 px-4 sm:px-0">
        <div className="2xl:container mx-auto">

          <div className="flex flex-col gap-16">
            {Insurance.panels.map((panel, index) => (
              <KeyFeaturePanel
                pos_left={(index%2 ? false : true)}
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
          <h1 className="text-2xl text-center text-white font-medium">Why choose Moobidesk</h1>

          <div className="flex flex-col xl:flex-row gap-10 xl:gap-0 xl:justify-evenly  pt-16 px-6 justify-center items-center">
            {Insurance.section_4.map((card, index) => (
              <InsuranceCard
              key={index}
                {...card}
              />
            ))}
          </div>
        </div>
      </section>


      {/* END BANNER DARK BLUE */}
      <section className='bg-tertiary py-20'>
        <h1 className='text-white font-semibold px-14 text-center  text-2xl sm:text-4xl'>Get started with moobidesk today!</h1>
        <div className='flex flex-row justify-center gap-6'>
        <button className="mt-10 px-4 py-2 rounded-full sm:text-base text-sm text-white bg-button-color hover:bg-button-hover-color">
          TRY IT FREE
        </button>
        <button className="mt-10 px-4 py-2 rounded-full sm:text-base text-sm text-white bg-tertiary-dark-blue hover:bg-opacity-75">
          CONTACT US
        </button>
        </div>
      </section>

      <PartnerFooter/>
    </>
  )
}

export default InsurancePage;