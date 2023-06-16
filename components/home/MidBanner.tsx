import Link from "next/link";
import GeneralButton from "../GeneralButton";

type Props = {
  heading: string,
  buttonText: string,
  link?: string,
};

const MidBanner = (props: Props) => {
  return (
    <section className=' bg-tertiary-dark-blue py-20'>
      <div className='2xl:container mx-auto'>
        <h1 className='text-white font-semibold px-14 text-center  text-2xl sm:text-3xl max-w-5xl mx-auto'>{props.heading}</h1>
        <div className='flex mt-10'>

          {/* if link mentioned, then provide the link */}
          <GeneralButton>
            {
              props.link ?
              <Link href={props.link}>
                {props.buttonText}
              </Link>
              :
              (<>{ props.buttonText }</>)
            }
          </GeneralButton>
        </div>
      </div>
    </section>
  )
}

export default MidBanner;