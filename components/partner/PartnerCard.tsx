import Image from "next/image"
import { PartnerCardType } from "@/interfaces/PartnerCard";
import BannerButton from "./BannerButton";

const PartnerCard = (props: PartnerCardType) => {
  return (
    <div className="mt-16 lg:max-w-[28rem] relative mx-auto">
      <Image src={props.image} alt="img" className="z-10 rounded-full mx-auto"
        width={130}
        height={130} />
      <div className="px-4 pt-20 -mt-16 z-0 bg-white shadow rounded-md">
        <h2 className="text-center font-semibold text-lg">{props.heading}</h2>
        <p className="text-gray-600 h-[15rem] text-center px-4 mt-6">{props.description}</p>
        <div className="flex pb-12">
          <BannerButton>{props.btn_text}</BannerButton>
        </div>
      </div>
    </div>
  )
}

export default PartnerCard;