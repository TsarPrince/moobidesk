
// ! THE FOOTER FOR THIS PAGE IS DIFFERENT FROM THE HOMEPAGE

import Image from "next/image"
import Partner from "@/constants/Partner"

const PartnerFooter = () => {
  return (
    <div className="py-8 flex items-center px-24 gap-6 xl:gap-12 justify-center xl:flex-row flex-col">
      <span className=" text-xs text-gray-700 xl:order-1 order-3">{Partner.footer.footer_line}</span>
      <div className="flex order-2">
        <Image src={'/images/app-store-logo.png'} alt={'App Store'} width={110} height={0}/>
        <Image src={'/images/google-play-logo.png'} alt={'App Store'} width={110} height={0}/>
      </div>
      <div className="flex items-center order-1 xl:order-3">
        <Image src={'/images/facebook.png'} alt={'facebook'} width={40} height={40}/>
        <Image src={'/images/instagram.png'} alt={'instagram'} width={40} height={40}/>
        <Image src={'/images/linkedin.png'} alt={'linkedin'} width={40} height={40}/>
        <Image src={'/images/youtube.png'} className="w-10 h-7" alt={'youtube'} width={40} height={5}/>
      </div>
    </div>
  )
}

export default PartnerFooter;