import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import HeaderBanner from "../commons/HeaderBanner";
import Nav from "./Nav";

type Props = {
    title?: string;
    gdata?: any;
   // global:any;
    children?: React.ReactNode;
};
 
  const PageLayout = ({
    title,
    gdata,
    //global,
    children,
  }: Props) => { //console.log(gdata);
    return (
        <>
        
      <Header ByredoLogo={gdata.c_byradoLogo} ByredoLinks={gdata.c_headerMenus}/>
      <HeaderBanner title={gdata.c_bannerTitle} description={gdata.c_bannerDescription} himage={gdata.c_bannerImage.url} />
                {children}
      <Footer ByredoHelp={gdata.c_footerHelpSection} ByredoServices={gdata.c_servicesFooter} ByredoLocator={gdata.c_footerStoreLocator} customercare={gdata.c_customerCare} footemail={gdata.c_emailAddress} footphone={gdata.mainPhone}/>
        </>
    );
  };

export default PageLayout;
  