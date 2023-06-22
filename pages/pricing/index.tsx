import MainBanner from "@/components/MainBanner";
import Pricing from "@/constants/Pricing";
import type { NextPage } from "next";
import PriceCard from "@/components/pricing/PriceCard";
import FooterBig from "@/components/Footer/FooterBig";
import MidBanner from "@/components/MidBanner";
import Question from "@/components/whatsapp/Question";
import Image from "next/image";
import CommonNav from "@/components/CommonNav";

const PricingPage: NextPage = () => {
  return (
    <>

      <CommonNav/>
      
      {/* SECTION 1 */}
      <MainBanner
        bgURL="bg-[url('/hero-pricing.png')] bg-cover bg-center sm:bg-[url('/hero-pricing-2.jpg')]">

        <div className="max-w-md px-3 mx-auto mt-28 sm:max-w-2xl sm:mx-0 sm:mr-auto sm:ml-28">
          <h1 className="text-center sm:text-left text-3xl">{Pricing.section_1.heading}</h1>
        </div>
      </MainBanner>


      {/* SECTION 2 */}
      <section className="bg-white py-16">
        <div className="2xl:container mx-auto px-4">
          <PriceCard />
        </div>
      </section>


      {/* SECTION 3 */}
      <section className="bg-white py-16">
        <div className="2xl:container mx-auto px-4">
          <h1 className="text-center mb-10 text-3xl font-medium text-slate-700">{Pricing.section_3.heading}</h1>

          <div className="max-w-5xl mx-auto flex flex-col gap-20 ">
            {Pricing.section_3.tables.map((table, index) => {
              return (
                <div key={index}>

                  {/* first row */}
                  <div className="flex p-4 bg-gray-100 text-slate-700 text-sm border-b border-b-gray-300">
                    <div className=" ">{table.c1}</div>
                    <div className="ml-auto w-28  text-center">{table.c2}</div>
                    <div className="text-center w-28">{table.c3}</div>
                  </div>
                  <div>
                    {table.rows.map((row, index) => {

                      const img_1 = (row.c1) ?
                        (<Image src={'/pricing/check.svg'} alt="✅" width={25} height={25} />) :
                        (<Image src={'/pricing/uncheck.svg'} alt="❌" width={25} height={25} />);

                      const img_2 = (row.c2) ?
                        (<Image src={'/pricing/check.svg'} alt="✅" width={25} height={25} />) :
                        (<Image src={'/pricing/uncheck.svg'} alt="❌" width={25} height={25} />);

                      return (
                        <div key={index} className="text-slate-600">
                          <div className="flex p-4 bg-white text-sm border-b border-b-gray-300">
                            <div className="">{row.name}</div>
                            <div className="ml-auto w-28 flex-shrink-0 flex justify-center">{img_1}</div>
                            <div className=" w-28 flex flex-shring-0 justify-center">{img_2}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* SECTION 4 FAQ */}
      <section className=" bg-tertiary-dark-blue py-16">
        <div className="2xl:container mx-auto text-white">
          <h1 className="text-center text-2xl sm:text-3xl mb-12">
            {Pricing.section_4.heading}
          </h1>

          <div className="px-6 max-w-4xl mx-auto">
            {Pricing.section_4.questions.map((question, index) => {

              return (
                <Question
                  key={index}
                  {...question} />
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <MidBanner
        buttonText="CONTACT US"
        link="/request-demo"
        bg="bg-tertiary"
        heading={Pricing.section_5.heading}
      />

      {/*  */}
      <hr />
      <FooterBig />
    </>
  )
}

export default PricingPage;