import Home from "@/constants/Home"
import Link from "next/link";
import Image from "next/image";

const footerDetails = Home.topFooter;

interface FooterTopInterface {
  heading: string,
  subheading: string,
  description: string,
  websiteURL: {
    text: string,
    url: string,
  },
  downloadOnImage: {
    appstore: string,
    googleplay: string,
  },

  contactUsSection: {
    title: string,
    description: string,

    /*
    DETAILS BLUEPRINT
      [field: value]
      Address: 998 Toa Payoh North, #02-01, Singapore 318993
      Email: enquiry@moobidesk.com
      Phone: +65 6259 0170
      SMS: +65 8799 6394
      WhatsApp: +65 8799 6394
    */
    details: [
      {
        field: string,
        value: string,
        URL?: string | null,
      },
    ],
  },
};

const FooterTop = () => {

  const heading = footerDetails.heading;
  const subheading = footerDetails.subheading;
  const description = footerDetails.description;
  const websiteURL = footerDetails.websiteURL;
  const downloadOnImage = footerDetails.downloadOnImage;

  const contactUsSection = footerDetails.contactUsSection;

  return (
    <section className="my-12 pt-10 bg-white">
      <div className="2xl:container mx-auto xl:flex xl:flex-row px-6">

        {/* heading + subheading */}
          <div className="max-w-sm sm:max-w-lg xl:mt-6 lg:max-w-xl mx-auto xl:flex xl:flex-col">
            <h1 className="text-2xl mb-6">{heading}</h1>
            <h3 className="mb-4">{subheading}</h3>

          
            <div className="my-auto">
              <div className=" flex flex-col gap-4 max-w-sm sm:max-w-lg lg:max-w-xl lg:hidden mx-auto">

                <p className="text-sm text-sub-text-color  lg:hidden">{description}</p>
                  <Link className="text-blue-500 text-sm mb-6" href={websiteURL.url}>{websiteURL.text}</Link>
                </div>

                <div className=" flex mx-auto max-w-sm sm:max-w-lg lg:max-w-xl">
                  <Image className="w-36" src={downloadOnImage.appstore} alt="Download on App Store" width={300} height={50}/>
                  <Image className="w-36" src={downloadOnImage.googleplay} alt="Download on Google Play" width={300} height={50}/>
                </div>    
            </div>

          </div>
        
        <div className="inline mx-auto">

        {/* description + appstore_playstore */}
          <div className="hidden flex-col gap-4 max-w-sm sm:max-w-lg lg:max-w-xl mx-auto">

            <p className="text-sm text-sub-text-color ">{description}</p>
            <Link className="text-blue-500 text-sm mb-6" href={websiteURL.url}>{websiteURL.text}</Link>
          </div>

          <div className="hidden  mx-auto max-w-sm sm:max-w-lg lg:max-w-xl">
            <Image className="w-36" src={downloadOnImage.appstore} alt="Download on App Store" width={300} height={50}/>
            <Image className="w-36" src={downloadOnImage.googleplay} alt="Download on Google Play" width={300} height={50}/>
          </div>

          <div className='max-w-sm sm:max-w-lg lg:max-w-xl mx-auto'>
            <p className="hidden lg:block mt-6 text-sm text-sub-text-color">{description}</p>
          </div>

          
          {/* contact us section */}
          <div className="my-16 max-w-sm sm:max-w-lg lg:max-w-xl sm:px-6 xl:px-0 mx-auto text-sub-text-color">
            <h1 className="font-medium text-md ">{contactUsSection.title}</h1>
            <h4 className="text-sm my-6">{contactUsSection.description}</h4>

            {contactUsSection.details.map((detail, index) => (
              <div key={index} className="text-sm my-2">
                <span className="font-semibold">{detail.field + ': '}</span>

                {detail.URL ?
                  <Link href={detail.URL} className="text-blue-500">
                    <span>{detail.value}</span>
                  </Link>
                  :
                  <span>{detail.value}</span>
                }

              </div>
            ))}
          </div>
        </div>

        {/* QR whatsapp */}
        <div className="hidden xl:inline xl:mt-6">
          <Image
            className=" w-64 mr-4"
            src={'/home/whatsapp-qr.png'}
            alt="WhatsApp QR"
            width={600} height={600} />
        </div>


      </div>
    </section>
  )
};

export default FooterTop;