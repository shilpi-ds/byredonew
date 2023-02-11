import * as React from "react";
import Cta from "./cta";


type Banner = {
  title?: string;
  description?: string;
himage?:any;
  
};



const HeaderBanner = (props: Banner) => {
  const { title, description ,himage} = props;

  return (
    <>
     <div className = "head-text">
  <div className = "head-image">
  <img src={himage} alt=""/>
  </div>
    <div className='text-on-image'>
       <h1> {title} </h1>
       <p> {description} </p>
    </div>
</div>
    </>
  );
};

export default HeaderBanner;

