import * as React from "react";
import emailfoot from "../../images/email-foot.png";
import phonefoot from "../../images/phone-foot.png";
var currentTime = new Date()
var year = currentTime.getFullYear()

type props = {
   customercare: any;
   footemail : any;
   footphone:any;
   ByredoHelp: any;
   ByredoServices: any;
   ByredoLocator: any;
  };
  

  const Footer = (props: any) => {
   const {customercare,footemail,footphone,ByredoHelp, ByredoServices,ByredoLocator } = props;
console.log(ByredoLocator);
   return (
      <>
       <footer className="site-footer">
            <div className="container">
               
               
                  <div className="footer-block">
                  <h4 className="footer-block-title">{customercare}</h4>
                  {/* <div className="list-none">
                  
                  <div className="icon-email"> <a href={footemail.link}><img className=" " src={emailfoot} width="20" height="20"
                alt={''} />{footemail.label}</a></div>
                    <div className="icon-phone"> <img className=" " src={phonefoot} width="20" height="20"
                alt={''} /><a href={`tel:${footphone}`}>{footphone}</a></div>
                     </div>*/}
                     
                 
                  <div className="footer-about">
                    <div className="email-foot"><img className=" " src={emailfoot} width="20" height="20"
                alt={''} />
                    <a href={footemail.link}>{footemail.label}</a>

                    </div>
                    <div className="phone-foot"><img className=" " src={phonefoot} width="20" height="20"
                alt={''} /><a href={`tel:${footphone}`}>{footphone}</a></div>
                  </div> </div> 
                  <div className="footer-block">

               
				  <h4 className="footer-block-title">{ByredoHelp.helpTitle}</h4>
                     <ul className="list-none">
                     {ByredoHelp.helpLinks?.map((e: any) => {
                    return (
                      <>
                        <div className="menu-item">
                          <li><a href={e.link} className="">
                            {e.label}
                          </a></li>
                        </div>
                      </>
                    );
                  })}
                  </ul>
                  </div>
                  <div className="footer-block">
				  <h4 className="footer-block-title">{ByredoServices.servicesTitle}</h4>
                     <ul className="list-none">
                     {ByredoServices.servicesList?.map((e: any) => {
                    return (
                      <>
                        <div className="menu-item">
                          <li>
                            {e}
                          </li>
                        </div>
                      </>
                    );
                  })}
                  </ul>
                  </div>
                  <div className="footer-block">
                  <h4 className="footer-block-title">{ByredoLocator.helpTitle}</h4>
                     <ul className="list-none">
                     {ByredoLocator.helpLinks?.map((e: any) => {
                    return (
                      <>
                        <div className="menu-item">
                          <li><a href={e.link} className="">
                            {e.label}
                          </a></li>
                        </div>
                      </>
                    );
                  })}
                  </ul>
             
                  
                 
               </div>
            </div>




         </footer>
      </>
   );
};

export default Footer;
