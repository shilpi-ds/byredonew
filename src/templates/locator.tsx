import * as React from "react";
import "../index.css";
import { GetHeadConfig, GetPath, HeadConfig, Template, TemplateConfig, TemplateProps, TemplateRenderProps } from "@yext/pages";
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import { FilterSearch, VerticalResults, ResultsCount, AppliedFilters, ApplyFiltersButton, LocationBias, Pagination } from "@yext/search-ui-react";
import { Location } from "../types/search/locations";
import MapboxMap from "../components/MapboxMap";
import MapPin from "../components/MapPin";
import LocationCard from "../components/locatorPage/LocationCard";
import PageLayout from "../components/layouts/PageLayout";
import Geocode from "react-geocode";
import UseMyLocation from "../components/locatorPage/UseMyLocation"
import { Address } from "../types/search/locations";
import { useSearchActions } from "@yext/search-headless-react";
import { useEffect } from "react";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {stagingBaseurl, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie} from "../../sites-global/global"
import Newsletter from "../components/locatorPage/Newsletter";
import { favicon } from "../../sites-global/global";
import { JsonLd } from "react-schemaorg";
import { StaticData } from "../../sites-global/staticData";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import HeaderBanner from "../components/commons/HeaderBanner";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";

export const config: TemplateConfig = {
  stream: {
    $id: "Locator",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "name",
      "c_bannerTitle",
      "c_bannerDescription",
      "c_bannerImage",
      "c_headerMenus",
      "c_byradoLogo",
      "c_footerHelpSection",
    "c_servicesFooter",
    "c_footerStoreLocator",

     
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["global-data"]
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return `/index.html`;
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
 return {
   title:`${document.c_metaTitle?document.c_metaTitle:`BYREDO Official Site | Perfumes, Candles &amp; Body Care.`}`,
   charset: "UTF-8",
   viewport: "width=device-width, initial-scale=1",
   tags: [
     {
       type: "meta",
       attributes: {
         name: "description",
         content: `${document.c_metaDescription?document.c_metaDescription:`Shop Byredo’s Collection of Perfumes, Candles, Makeup, Leather And Body Care.Free shipping &amp; Free returns. Complimentary samples.`}`,
       },
     },

     {
       type: "meta",
       attributes: {
         name: "author",
         content: StaticData.Brandname,
       },
     },

     {
       type: "meta",
       attributes: {
         name: "robots",
         content: "noindex, nofollow",
       },
     },
     {
      type: "link",
      attributes: {
        rel: "shortcut icon",
        href: document._site.c_byradoLogo.image.url?document._site.c_byradoLogo.image.url:favicon,
      },
    },

     {
       type: "link",
       attributes: {
         rel: "canonical",
         href: `${
           document._site.c_canonical?document.c_canonical:stagingBaseurl
            
         }`,
       },
     },
 
     {
       type: "meta",
       attributes: {
         property: "og:description",
         content: `${document._site.c_metaDescription?document._site.c_metaDescription:`Shop Byredo’s Collection of Perfumes, Candles, Makeup, Leather And Body Care.Free shipping &amp; Free returns. Complimentary samples.`}`,
       },
     },
     {
       type: "meta",
       attributes: {
         property: "og:title",
         content: `${document._site.c_metaTitle?document._site.c_metaTitle:`BYREDO Official Site | Perfumes, Candles &amp; Body Care.`}`,
       },
     },
     {
       type: "meta",
       attributes: {
         property: "og:image",
         content: favicon,
       },
     },
     {
      type: "meta",
      attributes: {
        name: "twitter:card",
        content: "summary",
      },
    },
    {
      type: "meta",
      attributes: {
        name: "twitter:description",
        content:`${document._site.c_metaDescription?document._site.c_metaDescription:`Shop Byredo’s Collection of Perfumes, Candles, Makeup, Leather And Body Care.Free shipping &amp; Free returns. Complimentary samples.`}`,
      },
    },
    {
      type: "meta",
      attributes: {
        name: "twitter:title",
        content: `${document._site.c_metaTitle?document._site.c_metaTitle:`BYREDO Official Site | Perfumes, Candles &amp; Body Care.`}`,
      },
    },
    {
      type: "meta",
      attributes: {
        name: "twitter:image",
        content: favicon
      },
    },
   
   ],
   
 };
};

const Locator: Template<TemplateRenderProps>= ({
   document,
   __meta,
 }) => {
   const {    
   _site,
   c_bannerTitle,
   c_bannerDescription,
   c_bannerImage,
   c_headerMenus,
   c_byradoLogo,
   c_footerHelpSection,
    c_servicesFooter,
    c_footerStoreLocator
   } = document;
 

  let templateData = { document: document, __meta: __meta };
  const endpoints =  {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",
   
  }
  var Api="AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";  
  return (
    <>
      
    <JsonLd<locator>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MGM ",
          url: stagingBaseurl,
          logo: favicon,
        }}
      />
          <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging} 
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
        <Header ByredoLogo={_site.c_byradoLogo} ByredoLinks={_site.c_headerMenus}/>
        <HeaderBanner title={_site.c_bannerTitle} description={_site.c_bannerDescription} himage={_site.c_bannerImage.url} />
        
        <SearchHeadlessProvider
          experienceKey={AnswerExperienceConfig.experienceKey}
          locale={AnswerExperienceConfig.locale}
          apiKey={AnswerExperienceConfig.apiKey}
          verticalKey={AnswerExperienceConfig.verticalKey}
          experienceVersion="STAGING"
          sessionTrackingEnabled={true}
          endpoints={AnswerExperienceConfig.endpoints}    
        >
          
          <SearchLayout _site={_site}/>
     
        </SearchHeadlessProvider>
      
   
        <Footer ByredoHelp={_site.c_footerHelpSection} ByredoServices={_site.c_servicesFooter} ByredoLocator={_site.c_footerStoreLocator} customercare={_site.c_customerCare} footemail={_site.c_emailAddress} footphone={_site.mainPhone}/>
  
      </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Locator;