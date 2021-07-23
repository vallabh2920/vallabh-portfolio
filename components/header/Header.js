
import React from 'react'
import BasePage from "../../Layout/BasePage"
import Link from 'next/link'

const Header = () => {
    const navlink = [{
        id:1,
        name:"ABOUT",
        link:"#about",
    },
    {
        id:2,
        name:"SKILLS",
        link:"#skills",
    },
    {
        id:3,
        name:"PROJECTS",
        link:"#projects",
    },
    {
        id:4,
        name:"CONTACT",
        link:"#contact",
    }]
    return (
      <BasePage className="py-8">
      <div className="flex justify-between items-center">
      <div><h2 className=" font-bold text-2xl text-fourth">VALLABH INGLE</h2></div>
      <div className="flex space-x-10">
          {
              navlink.map((item) =>{
                  return(<div key={item.id}>
                    <a href={item.link} className="font-medium text-xl text-fourth">{item.name}

                    </a>
                    </div>
                    )
              })
          }
          
      </div>
      </div>
      </BasePage>
    )
}

export default Header
