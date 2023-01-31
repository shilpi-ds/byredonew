import * as React from "react";
import { useState } from 'react';

const Accordion = ({content }) => {
  const [toggle, setToggle] = useState(null);

  let handleToggle=(id)=>{
    if(toggle===id){
        setToggle(null);
        return false
    }
   setToggle(id)
   
}
  return (

    content.map((item:any,index) => {
        //console.log(index);
         return(
          <>
      
      
    <div className="card" key={index}>
    <div className="card-header" onClick={()=>handleToggle(index)} style={{cursor:"pointer"}}>
     <h1 className="faq-page">{item.question}<span className="faq-sign">{(index===toggle)?'-':'+'}</span></h1></div>
                        {(index===toggle)?<div className="faq-body"><p>{item.answer}</p></div>:''}
                     
                    </div>
                    <hr className="hr-line"/>
                  
          </>
         );
       })
    
  
  );
};

export default Accordion;


