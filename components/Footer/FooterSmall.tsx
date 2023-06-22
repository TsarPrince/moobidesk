
// ! THE FOOTER FOR THIS PAGE IS DIFFERENT FROM THE HOMEPAGE

import Image from "next/image"
import Link from "next/link";
import footer from "@/constants/FooterSmall";

const FooterSmall = () => {
  const { footer_line, links } = footer;
  return (
    <div className="py-8 flex items-center px-24 gap-6 xl:gap-12 justify-center xl:flex-row flex-col">
      <span className="text-center text-xs text-gray-700 xl:order-1 order-3">{footer_line}</span>
      <div className="flex order-2">
        <Link href={links.pageLinks.app_store}>
          <Image src={'/images/app-store-logo.png'} alt={'App Store'} width={110} height={0} />
        </Link>
        <Link href={links.pageLinks.google_play}>
          <Image src={'/images/google-play-logo.png'} alt={'App Store'} width={110} height={0} />
        </Link>
      </div>
      <div className="flex items-center order-1 xl:order-3">
        <Link href={links.socials[0].link}><Image src={'/images/facebook.png'} alt={'facebook'} width={40} height={40} /></Link>
        <Link href={links.socials[1].link}><Image src={'/images/instagram.png'} alt={'instagram'} width={40} height={40} /></Link>
        <Link href={links.socials[3].link}><Image src={'/images/linkedin.png'} alt={'linkedin'} width={40} height={40} /></Link>
        <Link href={links.socials[2].link}><Image src={'/images/youtube.png'} className="w-10 h-7" alt={'youtube'} width={40} height={5} /></Link>
      </div>
    </div>
  )
}

export default FooterSmall;