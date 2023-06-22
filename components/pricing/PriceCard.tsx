import Pricing from "@/constants/Pricing";
import { currencyList } from "@/constants/Pricing";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import GeneralButton from "../GeneralButton";

const PriceCard = () => {

  // true : yearly
  // false : monthly
  const [pricing, setPricing] = useState(true);
  const [currency, setCurrency] = useState('SGD');

  let price = getPrice(Pricing.SGDMonthlyPrice, pricing, currency, Pricing.section_2.discountPercentage);

  // styling
  const selectorClass = (pricing) ? 'ml-auto' : 'mr-auto';
  const fader = (!pricing) ? 'opacity-50' : '';
  const faderx = (pricing) ? 'opacity-50' : '';

  function handleCurrencyChange(event: ChangeEvent<HTMLSelectElement>) {
    setCurrency(event.target.value);
  } 

  return (

    <>
      <div className="flex flex-col justify-center items-center">
      
        {/* selectors */}
        <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
          {/* pricing toggler  */}
          <div className="flex items-center mb-6 lg:mb-16">
            <div className={`px-2 text-sm mr-2 ${faderx}`}>
              Monthly
            </div>

            <div className="w-14 p-1 rounded-full bg-tertiary flex mr-4"
              onClick={() => setPricing(((pricing) => !pricing))}
              >
              <div className={`transition-all w-7 h-7 bg-white rounded-full ${selectorClass}`}>

              </div>
            </div>

            <div className={`px-2 text-sm ${fader}`}>
              Yearly
            </div>

            <div className={`text-xs px-4 py-3 bg-blue-200 rounded ${fader}`}>
              {`${Pricing.section_2.discountPercentage}% discount`}
            </div>
          </div>

          {/* currency selector */}
          <div className="flex gap-4 items-center mb-10 text-sm lg:mb-16">
            <div>Currency</div>
            
            <select id="to_currency"
              className="p-2"
              defaultValue={'SGD'}
              onChange={(ev) => handleCurrencyChange(ev)}
              >
              <option
                value="AED">Arab Emirates Dirham (AED)</option>
              <option
                value="ARS">Argentina (ARS)</option>
              <option
                value="AUD">Australia Dollar (AUD)</option>
              <option
                value="BGN">Bulgaria (BGN)</option>
              <option
                value="BRL">BRL (Brazil)</option>
              <option
                value="BSD">BSD (Bahamas)</option>
              <option
                value="CAD">Canada (CAD)</option>
              <option
                value="CHF">Switzerland (CHF)</option>
              <option
                value="CLP">Chile (CLP)</option>
              <option
                value="CNY">China (CNY)</option>
              <option
                value="COP">Colombia (COP)</option>
              <option
                value="CZK"> Czechia (CZK)</option>
              <option
                value="DKK">Denmark (DKK)</option>
              <option
                value="DOP">Dominican Republic (DOP)</option>
              <option
                value="EGP">Egypt (EGP)</option>
              <option
                value="EUR">European Union (EUR)</option>
              <option
                value="FJD">Fiji (FJD)</option>
              <option
                value="GBP"> Britain (GBP)</option>
              <option
                value="GTQ">Guatemala (GTQ)</option>
              <option
                value="HKD">Hong Kong (HKD)</option>
              <option
                value="HRK">Croatia (HRK)</option>
              <option
                value="HUF">Hungary (HUF)</option>
              <option
                value="IDR">Indonesian (IDR)</option>
              <option
                value="ILS">Israel (ILS)</option>
              <option
                value="INR">India (INR)</option>
              <option
                value="ISK">Iceland (ISK)</option>
              <option
                value="JPY">Japan (JPY)</option>
              <option
                value="KRW">Korea (KRW)</option>
              <option
                value="KZT">Kazakhstan (KZT)</option>
              <option
                value="MXN">Mexico (MXN)</option>
              <option
                value="MYR">Malaysia (MYR)</option>
              <option
                value="NOK">Norway (NOK)</option>
              <option
                value="NZD">New Zealand (NZD)</option>
              <option
                value="PAB">Panama (PAB)</option>
              <option
                value="PEN">Peru (PEN)</option>
              <option
                value="PHP">Philippine (PHP)</option>
              <option
                value="PKR">Pakistani (PKR)</option>
              <option
                value="PLN">Poland (PLN)</option>
              <option
                value="PYG">Paraguay (PYG)</option>
              <option
                value="RON">Romanian (RON)</option>
              <option
                value="RUB">Russia (RUB)</option>
              <option
                value="SAR">Saudi Arabia (SAR)</option>
              <option
                value="SEK">Sweden (SEK)</option>
              <option
                value="SGD"> Singapore (SGD)</option>
              <option
                value="THB">Thailand (THB)</option>
              <option
                value="TRY">Turkish Republic (TRY)</option>
              <option
                value="TWD">the Republic of China (TWD)</option>
              <option
                value="UAH">Ukraine (UAH)</option>
              <option
                value="USD">The United States (USD)</option>
              <option
                value="UYU">Uruguayan (UYU)</option>
              <option
                value="ZAR">South African rand (ZAR)</option>
            </select>
          </div>

        </div>


        <div className="flex flex-col gap-12 lg:flex-row">

          {/* card-1 */}
          <div className="max-w-sm mx-auto sm:max-w-md border rounded p-5 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="relative text-2xl font-medium text-slate-700">
                Standard
                <div className="absolute h-[3px] mt-1 w-10 bg-slate-700"></div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-slate-800">{`${price} ${currency}`}</div>
                <div className="text-[0.7rem] text-slate-600">3 agents per month</div>
              </div>
            </div>

            <div className="text-sm text-slate-700 max-w-[80%] mb-8">{Pricing.section_2.subheading}</div>

            <div>
              <h1 className="text-slate-700 font-medium mb-6">{Pricing.section_2.plan_1.title}</h1>
              <div className="flex flex-col gap-3 mb-6">
                {Pricing.section_2.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Image
                      src={feature.imageURL}
                      alt="plan icon"
                      className="w-14 pr-8"
                      width={50}
                      height={50}
                    />
                    <div className="text-slate-600 text-sm mr-14">{feature.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className=" mt-auto">
              <GeneralButton>CONTACT US NOW</GeneralButton>
            </div>
          </div>


          {/* card-2 */}
          <div className="max-w-sm mx-auto sm:max-w-md border bg-blue-50 rounded p-5">
            <div className="flex justify-between items-center mb-8">
              <div className="relative text-2xl font-medium text-slate-700">
                Enterprise
                <div className="absolute h-[3px] mt-1 w-10 bg-slate-700"></div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-slate-800">
                  Customised
                </div>
                <div className="text-[0.7rem] text-slate-600">
                  Contact for more info
                </div>
              </div>
            </div>

            <div className="text-sm text-slate-700 max-w-[80%] mb-8">
              {Pricing.section_2.plan_2.subheading}
            </div>

            <div>
              <h1 className="text-slate-700 font-medium mb-6">{Pricing.section_2.plan_2.title}</h1>
              <div className="flex flex-col gap-3 mb-6">
                {Pricing.section_2.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Image
                      src={feature.imageURL}
                      alt="plan icon"
                      className="w-14 pr-8"
                      width={50}
                      height={50}
                    />
                    <div className="text-slate-600 text-sm mr-14">{feature.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <GeneralButton>CONTACT US NOW</GeneralButton>
            </div>
          </div>

        </div>
      </div>

      
    </>
  )
}

function getPrice(price: number, pricing: boolean, currency: string, discountPercentage: number) {
  
  // get the price in currency
  price = (currencyList[currency])

  // if discount then apply it
  if (pricing) {
    price = price * (discountPercentage/100.00);
  }
  return price.toFixed(2);
}


export default PriceCard;