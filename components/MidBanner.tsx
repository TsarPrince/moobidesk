import Link from "next/link";
import GeneralButton from "./GeneralButton";

type Props = {
  heading: string,
  buttonText: string,
  link?: string,
  bg?: string,
};

const MidBanner = (props: Props) => {

  let bg = ((props.bg) ? props.bg : 'bg-tertiary-dark-blue')

  return (
    <section className={` ${bg} py-20`}>
      <div className='2xl:container mx-auto'>
        <h1 className='text-white font-semibold px-14 text-center  text-2xl sm:text-3xl max-w-5xl mx-auto'>{props.heading}</h1>
        <div className='flex mt-10'>

          {/* if link mentioned, then provide the link */}
            {
              props.link ?
              <Link href={props.link} className="mx-auto">
                <GeneralButton>
                  {props.buttonText}
                </GeneralButton>
              </Link>
              :
              (<GeneralButton>
                {props.buttonText}
              </GeneralButton>)
            }
        </div>
      </div>
    </section>
  )
}

export default MidBanner;