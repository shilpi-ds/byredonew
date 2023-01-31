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
  <img src={himage}/>
  </div>
    <div className='text-on-image'>
       <h3> {title} </h3>
       <p> {description} </p>
    </div>
</div>
    </>
  );
};

export default HeaderBanner;

