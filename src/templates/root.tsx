import * as React from "react";
//import Footer from "../components/layouts/footer";
//import Header from "../components/layouts/header";
//import Banner from "../components/locationDetails/banner";

import Header from "../components/layouts/header";
import HeaderBanner from "../components/commons/HeaderBanner";
import Footer from "../components/layouts/footer";
import "../index.css";
// import bannerImage from "../images/app-bg.png";
// import favicon from "../images/favicon-live.png";
import { JsonLd } from "react-schemaorg";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import {
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
  rootSavedFilterId,
} from "../config/answersHeadlessConfig";

import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

// import Logo from "../images/logo.svg";
// import bannerImage from "../images/app-bg.png";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "root",
   
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "description",
      "c_image",
      "c_bannerTitle",
      "c_bannerDescription",
      "c_bannerImage",
      "c_headerMenus",
      "c_byradoLogo",
      "c_footerHelpSection",
    "c_servicesFooter",
    "c_footerStoreLocator",
   
    ],
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  currentUrl = document.slug + ".html";
  return document.meta.locale + "/" + document.slug + ".html";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Root: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
}) => {
  const { description, dm_directoryParents, dm_directoryChildren } = document;

  const { name, slug, c_globalData } = document;
  let templateData = { document: document, __meta: __meta };
  return (
    <>
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={"city"}>
          {document._site.c_header && document._site.c_bannerTop ? (
            <>
              <Header
                header={document._site.c_header}
                c_bannerTop={document._site.c_bannerTop}
              />
            </>
          ) : (
            <></>
          )}

<Header ByredoLogo={document._site.c_byradoLogo} ByredoLinks={document._site.c_headerMenus}/>
        <HeaderBanner title={document._site.c_bannerTitle} description={document._site.c_bannerDescription} himage={document._site.c_bannerImage.url} />

          {dm_directoryChildren ? (
            <>
              <div className="directory-root py-5 lg:py-[60px]">
                <div className="container">
                  <div className="flex flex-wrap -mx-4">
                    {dm_directoryChildren.map((child: any) => {
                      return (
                        <>
                          <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4">
                            <a
                              href={slug + "/" + child.slug + ".html"}
                              key={child.slug}
                              className="hover:text-red"
                            >
                              {child.name} {child.dm_directoryChildrenCount}
                            </a>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

        {document._site.c_footerHelpSection &&
          document._site.c_servicesFooter &&
          document._site.c_footerStoreLocator &&
          document._site.c_customerCare &&
          document._site.mainPhone ? (
            <>
               <Footer ByredoHelp={document._site.c_footerHelpSection} ByredoServices={document._site.c_servicesFooter} ByredoLocator={document._site.c_footerStoreLocator} customercare={document._site.c_customerCare} footemail={document._site.c_emailAddress} footphone={document._site.mainPhone}/>
   
            </>
          ) : (
            <></>
          )} 
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Root;
