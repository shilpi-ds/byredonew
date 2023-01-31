import * as React from "react";


var currentTime = new Date()
var year = currentTime.getFullYear()

type props = {
   ByredoHelp: any;
   ByredoServices: any;
   ByredoLocator: any;
  };
  

  const Footer = (props: any) => {
   const {ByredoHelp, ByredoServices,ByredoLocator } = props;
console.log(ByredoLocator);
   return (
      <>
       <footer className="site-footer">
            <div className="container">
               
               
                  <div className="column">
                       <div className="social-media">
                        <a href="#" target="_blank" title="Facebook" rel="noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="#" target="_blank" title="Instagram" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#" target="_blank" title="Twitter" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                     </div>
                  </div>
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
