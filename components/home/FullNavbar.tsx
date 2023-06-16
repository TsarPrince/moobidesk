
// lib utils
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// components
import GeneralButton from "../GeneralButton";
import DropDownCard from "./DropDownCard";
import Home from "@/constants/Home";
import IndustryDropdownCard from "./IndustryDropdownCard";

const FullNavbar = () => {

  // ! state = false, but might be true while debugging
  const [productsDropdown, setProductsDropdown ] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);


  return (
    <nav className="hidden w-full xl:block absolute top-0 ">

      
      <div className="w-full xl:flex py-8 px-10 text-white 2xl:container mx-auto">

        {/* LOGO */}
        <div className="flex items-center">
          <Image src={'/white-logo.png'} className=" aspect-auto" alt="Moobidesk" height={20} width={190}/>
        </div>


        {/* NAVBAR UL LI */}
        <div className="flex items-center cursor-pointer h-12">
          <ul className="flex h-full items-center justify-center gap-5 ml-10 2xl:ml-20 ">

            {/* products dropdown button */}
            <li className="flex items-center justify-center h-full px-2 relative hover:bg-white hover:text-gray-800"

            // ! below line might be commented for debugging
            onMouseOver={() => setProductsDropdown(true)}
            onMouseOut={() => setProductsDropdown(false)}
            >

            

              <span className="h-full flex items-center justify-center ">Products</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M7 10l5 5 5-5z" fill="white"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>

              {productsDropdown && 
                <div className="absolute top-12 -left-10 p-2 bg-white flex" id="products_dropdown">

                  {/* MAP THE PRODUCT CARDS */}
                  {Home.productDropdownCards.map((card) => (

                    <Link href={card.link}>
                      <DropDownCard
                        key={card.imageURL}
                        imageURL={card.imageURL}
                        heading={card.heading}
                        description={card.description}
                      />
                    </Link>
                  ))}
                </div>
              }
            </li>

            {/* industries dropdown button */}
            <li className="flex items-center justify-center h-full px-2 relative hover:bg-white hover:text-gray-800"
              onMouseOver={() => setIndustriesDropdown(true)}
              onMouseOut={() => setIndustriesDropdown(false)}
              >
              <span>Industries</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M7 10l5 5 5-5z" fill="white"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>

              {industriesDropdown && 
                <div className="absolute top-12 -left-10 bg-white flex flex-col p-2 w-max gap-1" id="industries_dropdown">

                  {/* MAP THE INDUSTRY CARDS */}
                  {Home.industryDropdownCards.map((card) => (
                    <Link href={card.link}>
                      <IndustryDropdownCard
                        key={card.imageURL}
                        imageURL={card.imageURL}
                        heading={card.heading}
                      />
                    </Link>
                  ))}
                    
                </div>
              }
            </li>
            <li>
              <Link href={Home.pageLinks.pricing}>
              </Link>
                <span>Pricing</span>
            </li>
            <li>
              <Link href={Home.pageLinks.partner}>
              </Link>
              <span>Partner</span>
            </li>
            <li>
              <Link href={Home.pageLinks.home}>
              </Link>
              <span>About Us</span>
            </li>
            <li>
              <Link href={Home.pageLinks.home}>
              </Link>
              <span>Blog</span>
            </li>
            <li>
              <Link href={Home.pageLinks.home}>
              </Link>
              <span>Contact Us</span>
            </li>
          </ul>
        </div>

        {/* LOGIN + BUTTON */}
        <div className="ml-auto gap-6 h-12 flex items-center">
          <Link href={'#'} className="mr-0">Login</Link>
          <GeneralButton>TALK TO AN EXPERT</GeneralButton>
        </div>
      </div>
    </nav>
  )
}

export default FullNavbar;