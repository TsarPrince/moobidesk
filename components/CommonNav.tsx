import Image from "next/image";
import { useState } from "react";
import Navbar from "@/constants/Navbar";

const CommonNav = ({ hideAtXL } : { hideAtXL: boolean }) => {
  
  const [showMenu, setShowMenu] = useState(false);
  const showMenuClass = (showMenu ? 'right-0' : '-right-0');

  const menuWidth = (showMenu ? 'w-full' : 'w-0 overflow-hidden');

  const hiderClass = (hideAtXL) ? 'xl:hidden' : '';

  return (

    <>
    <nav className={`${hiderClass} sticky z-20 top-0 bg-white shadow-lg overflow-x-hidden`}>

      <div className="2xl:container mx-auto p-7 flex">


        {/* logo div */}
        <div className="w-max flex ">
          <Image className="w-36 mx-auto my-auto" src={'/black-logo.png'} alt="moobidesk" width={1000} height={200} />
        </div>


        {/* <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M7 10l5 5 5-5z" fill="white"></path><path d="M0 0h24v24H0z" fill="none"></path></svg> */}

        {/* when vp > xl */}
        <div className="hidden xl:flex">

        </div>

        {/* when vp < xl */}

        {/* hamburger div */}
        <div className=" flex xl:hidden ml-auto"
          // onClick={() => setShowMenu((true))}
        >
            <HamburgerMenu
              setShowMenu={setShowMenu}
            />
        </div>



        </div>
        


        
      </nav>

        <div className="sticky top-[4.8rem] z-50">
          <MenuPopup
          showMenuClass={showMenuClass}
          menuWidth={menuWidth}
          />

        </div>
      
    </>
  )
}


type MenuPopupProps = {
  showMenuClass: string,
  menuWidth: string,
};

const MenuPopup = (props: MenuPopupProps) => {

  const [showProducts, setShowProducts] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

  return (
    <>
      {/* MENU POPUP */}
      <div className={`bg-white transition-all top-0 duration-300  absolute ${props.showMenuClass} ${props.menuWidth} flex flex-col`}>
        
        {/* MENU */}
        <div className=" z-30 p-4 bg-slate-100">

          <div className="py-2 flex px-4 my-2"
            onClick={() => setShowProducts(((showProducts) => !showProducts))}
          >
            <h1 className="flex cursor-pointer hover:text-blue-500 transition-all">{Navbar.dropdown_links[0].name}
              <svg className=" hover:fill-blue-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M7 10l5 5 5-5z" fill="currentcolor"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
            </h1>

          </div>
          {showProducts &&
            <>
            <div className="ml-4 border-l-2 pl-6 flex flex-col gap-6 mt-4 mb-6 text-sub-text-color">
              {Navbar.dropdown_links[0].dropdown.map((bar, index) => (
                  <div key={bar.title} className="relative after:content-['']after:w-4 after:h-2 after:block after-bg-gray-400">

                    <span className="absolute my-auto h-[0.125rem] w-4 top-4 -left-6 bg-gray-300"></span>

                    <h2 className="">{bar.title}</h2>
                    <h2 className="text-xs max-w-xl">{bar.description}</h2>
                  </div>
              ))}
            </div>  
            </>
          }

          <div className="py-2 flex px-4 my-2"
            onClick={() => setShowIndustries(((showIndustries) => !showIndustries))}
          >
            <h1 className="flex cursor-pointer hover:text-blue-500 transition-all">{Navbar.dropdown_links[1].name}
              <svg className=" hover:fill-blue-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M7 10l5 5 5-5z" fill="currentcolor"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
            </h1>
          </div>

          {showIndustries &&
            <>
            <div className="ml-4 pl-6 flex flex-col border-l-2 gap-6 mt-4 mb-6 text-sub-text-color">
              {Navbar.dropdown_links[1].dropdown.map((bar, index) => (
                  <div key={index} className="relative after:content-['']after:w-4 after:h-2 after:block after-bg-gray-400">

                    <span className="absolute my-auto h-[0.125rem] w-4 top-3 -left-6 bg-gray-300"></span>

                    <h2 className="">{bar.title}</h2>
                  </div>
              ))}
            </div>  
            </>
          }
                
          
                {Navbar.links.map((link, index) => (
                    <div key={index} className="py-2 flex px-4 my-2">
                      <h1 className="cursor-pointer hover:text-blue-400 transition-all">{link.name}</h1>
                    </div>
                ))}
          </div>
      </div>
    </>
  );
}


const HamburgerMenu = ({ setShowMenu } : { setShowMenu: (value: boolean) => void}) => {

  const [show, setShow] = useState(false);

  const menuTopLineClass = (show) ? "rotate-45 translate-y-[0.57rem]" : "";
  const menuBottomLineClass = (show) ? "-rotate-45 -translate-y-[0.57rem]" : "";
  const menuMiddleLineClass = (!show) ? 'opacity-100' : 'opacity-0';
  return (
    <>
      <span className="w-8 h-[22.6px] bg-white flex justify-between flex-col"
        onClick={() => {
          setShow(((show) => !show))
          setShowMenu((!show));
        }}
      >
        <span className={`transition-all h-1 bg-black rounded ${menuTopLineClass}`}></span>
        {<span className={`transition-all h-1 bg-black rounded ${menuMiddleLineClass}`}></span>}
        <span className={`transition-all h-1 bg-black rounded ${menuBottomLineClass}`}></span>
      </span>
    </>
  );
}

export default CommonNav;