
type Props = {
  children: React.ReactNode,
};

const GeneralButton = (props: Props) => {
  return (
    <button className="mx-auto px-4 py-2 rounded-full sm:text-base text-sm text-white bg-button-color hover:bg-button-hover-color">
      {props.children}
    </button>
  )
}

export default GeneralButton;