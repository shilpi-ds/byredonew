import * as React from "react";
//import { svgIcons } from "../images/loc2";
import { formatPhoneNumber } from "react-phone-number-input";
import { Link } from "@yext/pages/components";
const Phone = (props: any) => {
  const { phone } = props;
  const formattedPhone = formatPhoneNumber(phone);
  return (
    <>
      {phone && (
        <div className="icon-row location-phone ">
          <span className="onhighLight icon">{phone}</span>
          <Link
            className="phone-number onhighLight"
            data-ya-track="phone"
            href={`tel:${phone}`}
            rel="noopener noreferrer"
          >
            {formattedPhone}
          </Link>
        </div>
      )}
    </>
  );
};
export default Phone;
