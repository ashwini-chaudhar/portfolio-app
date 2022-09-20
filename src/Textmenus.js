import React from "react";
import "./text.css";

export default function Testmonial() {

    const testmonials = [{
        name:"Ashwini",
        text:"I am very passionate about being able to help people in need; my law degree  will help me do this."
    },
    {
        name:"Mansi",
        text:"The staff and support are second to none. They are polished, proficient,accessible to anser any questions at any time."
    },
    {
        name:"Ashish",
        text:"The tutors are very approchable The tutors are very approchable The tutors are very approchable The tutors are very approchable"
    }
];
  return (
    <div className='row mx-5'>
        {testmonials.map((value)=>{
            return <div className='col-lg-4 col-sm-12 col-md-6 my-3'>
                <div className='card show testmonial-card d-flex flex-column'>
                <span className='description'>{value.text}</span>
                { <span className='stars'>🌟🌟🌟🌟🌟</span>}
                <span className='name'>{value.name}</span>

                </div>
            </div>
        })}
    </div>
  )
}