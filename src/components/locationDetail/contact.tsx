import * as React from "react";
import Cta from "../commons/cta";
import Hours from "../commons/hours";
import woodtexture from "../../images/wood-texture.jpg";
import mapimage from "../../images/loc1.svg";
import Phonesvg from "../../images/loc2.svg";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import { StaticData } from "../../../sites-global/staticData";
import Holidayhours from "./Holdayhours";
import Model from "./Model";
import CustomMap from "./CustomMap";

const Contact = (props: any) => {
  const {
    address,
    name,
    phone,
    latitude,
    longitude,
    hours,
    c_specific_day,
    additionalHoursText,
    yextDisplayCoordinate,
    c_storeInfoHeading,
    c_getDirectionsCTAText
  } = props;
  
  return (
    <>
        {hours && typeof hours.monday != "undefined" ? (
        <div className="hours">
          <div className="hours-sec">
            <div className="title-with-link-1">
              <h4 className="box-title">{"Store Opening Hours"}</h4>
            </div>
            <div className="hours-div mb-5 md:mb-1 flex flex-col">
              {hours.holidayHours && typeof hours.reopenDate == "undefined" ? (
                <>
               
                  <Model
                    name={StaticData.Holdiay}
                    holidayHours={hours.holidayHours}
                    c_specific_day={c_specific_day}
                  />
                </>
              ) : (
                ""
              )}

              {/* <div className="title-with-link-1">
        <h4 className="box-title">{"Store Hours"}</h4>        
      </div> */}
              {hours && (
                <Hours
                  title={"Store Opening Hours"}
                  additionalHoursText={additionalHoursText}
                  hours={hours}
                  c_specific_day={c_specific_day}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Contact;
