import React from 'react'

const Education = () => {
    const educationData = [
        {
          id: 1,
          year: "2015-2016",
          college: "C.K.T. School ",
          university: "SSC",
          grade: "79.00%",
          degree: "",
        },
        {
          id: 2,
          year: "2016-2018",
          college: "C.K.T. jr. College ",
          university: "HSC",
          grade: "69.00% ",
          degree: "Information technology",
        },
        {
          id: 3,
          year: "2018-present",
          college:"Mahatma Education Society's Pillai HOC College Of Education And Research",
          university: "Mumbai University",
          grade: "6.6 CGPA",
          degree: "Information technology - Persuing",
        },
      ];
    return (
        <div>
            <h2 className="m-8 text-fourth font-extrabold text-3xl tracking-wider">Education
            </h2>
            {educationData.map((item) => {
        return (
          <div className="bg-first p-11 flex items-center w-full  my-3  rounded-xl" key={item.id}>
            
              <img src="./img/calendar.svg" alt="" className=" mr-52 ml-10 "/>
              
            
            <div className=" w-card mx-6">
            <p className=" text-fourth font-normal" > {item.year}</p>
            <h2 className="text-2xl text-fourth font-bold "> {item.college} </h2>
            <h3 className=" text-fourth font-semibold text-lg "> {item.university} </h3>
            <h3 className=" text-fourth font-medium text-lg ">{item.degree} </h3>
            <p className=" text-fourth font-medium text-lg"> {item.grade}</p>
            </div>
          </div>
        );
      })}
        </div>
    )
}

export default Education
