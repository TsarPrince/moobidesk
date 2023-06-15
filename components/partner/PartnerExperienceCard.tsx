import Image from "next/image";
import { PartnerCardType } from "@/constants/Partner";

const PartnerExperienceCard = (props: PartnerCardType) => {
  return (

    // todo : remove the border class, border only for debgugging
    <div className="px-8 block xl:inline-block pb-6 max-w-[24rem] mx-auto">
      <Image alt={'dedicated-support'} height={50} width={50} src={props.image} />
      <h2 className="font-bold text-lg mt-4">{props.heading}</h2>
      <p className="mt-6 text-gray-600">{props.description}</p>
    </div>
  )
}

export default PartnerExperienceCard;