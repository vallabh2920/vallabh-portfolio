import React from 'react'

const Contact = () => {
    return (
        <div>
            <h2 className="text-fourth font-extrabold text-4xl tracking-wider ">Contact me</h2>
            <div className="flex justify-evenly mb-24 ">
           <div className="">
               <img src="/img/contact.svg" className="px-11  w-photo">
               </img>
               </div> 
           <div className="bg-first flex justify-start flex-col p-6 w-80 rounded-lg">
               <input type="text" placeholder="Name" ></input>
               <input type="text" placeholder="Email" className="mt-6"></input>
               <textarea placeholder="Message" className=" mt-6 h-32"></textarea>
               <input type="submit" className="mt-6 rounded-md h-10 border-2 border-fourth bg-third text-white"></input>
           </div>
           </div>
        </div>
    )
}

export default Contact
