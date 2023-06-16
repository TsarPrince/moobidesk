
import Home from "@/constants/Home";
import Image from "next/image";
import Link from "next/link";

const socials = Home.footerBottom.socials;
const copyright = Home.footerBottom.copyrightText;
const links = Home.footerBottom.links;

const FooterBottom = (props: any) => {
  return (
    <footer className=" bg-sub-text-color">
      <div className="2xl:container mx-auto flex flex-col justify-center xl:flex-row gap-6 py-8 px-16">

        <div className="hidden xl:flex text-[0.7rem] text-gray-50 gap-8 justify-center">
          {links.map((link, index) => (
            <Link key={index} href={link.url}>{link.text}</Link>
          ))}
        </div>

        {/* socials container */}
        <div className="flex gap-4 mx-auto">
          {socials.map((social) => (
            <Link key={social.link} href={social.link}>
              <Image
                className="w-5 h-5"
                src={social.imageURL}
                alt={social.imageURL}
                key={social.imageURL}
                width={200} height={200}
              />
            </Link>
          ))}
        </div>

        <div>
          <p className="text-[0.7rem] text-gray-50 text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterBottom;