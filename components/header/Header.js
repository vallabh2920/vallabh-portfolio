import React, { useState } from "react";
import BasePage from "../../layout/BasePage";

const Header = () => {
  const [nav, setNav] = useState(false);
  const navLink = [
    {
      id: 1,
      name: "About",
      link: "#about",
    },
    {
      id: 2,
      name: "Skills",
      link: "#skills",
    },
    {
      id: 3,
      name: "Projects",
      link: "#projects",
    },
    {
      id: 4,
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <BasePage className="py-6  fixed top-0 left-0 bg-fifth w-full z-30 ">
        <div className="flex justify-between items-center z-10">
          <div className="">
            <a href="#heroSection" className="font-extrabold text-fourth text-3xl tracking-wide hover:underline">
              VALLABH INGLE
            </a>
          </div>
          <div className="flex space-x-10 md:hidden">
            {navLink.map((item) => {
              return (
                <div key={item.id}>
                  <a
                    href={item.link}
                    className="text-xl text-fourth font-medium hover:underline" 
                  >
                    {item.name}
                  </a>
                </div>
              );
            })}
          </div>
          {nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setNav(!nav)}
              className="h-6 w-6 hidden cursor-pointer md:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hidden cursor-pointer md:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setNav(!nav)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
      </BasePage>
      {nav ? (
        <div className="bg-first w-full h-60 fixed z-20 top-24  flex-col justify-evenly  px-7 rounded-3xl text-center hidden  md:flex ">
          {navLink.map((item) => {
            return (
              <div
                key={item.id}
                className="cursor-pointer py-3 rounded-lg hover:bg-second"
              >
                <a
                  href={item.link}
                  className="text-xl text-fourth font-medium underline"
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default Header;