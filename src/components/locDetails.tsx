import * as React from "react";
import { useState } from 'react';
import Hours from "./locatorPage/Hours";
import OpenClose from "./commons/openClose";

type details = {
  address?: string;
  loc1?: any;
loc2?:any;
phone?:any;
name?:string;
hours?:any;
timezone?:any;
 city?:any;
 postcode?:any;
 addline1?:any;
 addline2?:any; 
 loc3?:any;
};


const locDetails = (props: details) => {
  const { address, loc1 ,loc2,loc3,phone,name,hours,timezone,city,postcode,addline1,addline2} = props;
  console.log(props);
  return (

   
          <div className="add-main-sec">
        

        <div className="icon-row content-col">
          <div className="icon">
            {" "}
            <img className=" " src={loc1} width="20" height="20" alt="mapimage" />
          </div>
          <div className="  address-text notHighlight">
           <div>{name}</div> {addline1}
            <div>{addline2 && <div>{addline2}</div>}</div>
            <div>{city}</div>
            <div>{postcode}</div>
          </div>
        </div>
       
        {phone ? (
          <div className="icon-row">
            <div className="icon">
              {" "}
              <img className=" " src={loc2} width="22" height="22" alt="phonesvg" />
            </div>
            <div className="content-col">
              <a id="address" className=" location-phn" href={`tel:${phone}`}>
                {phone}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
           {hours && (
            <>
            <div className="icon-row">
            <div className="icon">
            {" "}
            <img className=" " src={loc3} width="22" height="22" alt="watch" />
          </div>
                            <div className="openClosestatus detail-page closeing-div">
                            <OpenClose timezone={timezone} hours={hours} />
                          </div> 
                          </div>
                          </>
                          )}

 </div>
 
          
    
      
    
  
  );
};

export default locDetails;


