import Image from "next/image";

interface PanelInterface {
  imageURL: string,
  title: string,
  heading: string,
  description: string,
  pos_left: boolean,
};

const KeyFeaturePanel = (props: PanelInterface) => {

  const ordering = (props.pos_left) ? ['lg:order-first', 'lg:order-last'] : ['lg:order-last', 'lg:order-first'];

  return (
    <div className="max-w-sm mx-auto sm:max-w-md flex flex-col lg:flex-row lg:max-w-4xl lg:gap-20 px-2">
      <div className={`${ordering[0]}`}>
        <Image className="w-full" src={props.imageURL} alt={props.heading} width={500} height={500}/>
      </div>
      <div className={`flex flex-col justify-center gap-4 my-10 text-sm text-sub-text-color max-w-md ${ordering[1]}`}>
        <h1 className="font-medium">{props.title}</h1>
        <h1 className="font-semibold">{props.heading}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default KeyFeaturePanel;