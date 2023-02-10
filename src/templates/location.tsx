import * as React from "react";
import Banner from "../components/locationDetail/banner";
import Cta from "../components/commons/cta";
import Contact from "../components/locationDetail/contact";
import ApiCall from "../Apis/ApiCall";
import Nearby from "../components/locationDetail/Nearby";
import { CustomFieldDebuggerReactProvider } from '@yext/custom-field-debugger';
import { JsonLd } from "react-schemaorg";
import Opening from "../components/commons/openClose";
import { nearByLocation } from "../types/nearByLocation";
import Logo from "../images/logo-header.svg"
import offerBanner from "../images/offer-banner.jpg"
import IframeMap from "../components/locationDetail/IframeMap";
import Address from "../components/commons/Address";
import OpenClose from "../components/commons/openClose";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import Nav from "../components/layouts/Nav";
import Menu from "../components/locationDetail/Menu";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
//import PhotoGallery from "../components/locationDetail/PhotoGallery";
import About from "../components/locationDetail/About";
import Breadcrumb from "../components/layouts/Breadcrumb";
import CustomMap from "../components/locationDetail/CustomMap";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import StoreHighlight from "../components/locationDetail/SoreHighlight";

import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../../sites-global/staticData";
import loc1 from "../images/loc1.svg";
import loc2 from "../images/loc2.svg";
import loc3 from "../images/loc3.svg";
import Accordion from "../components/commons/Accordion";
//import PhotoSlider from "../components/locationDetails/PhotoSlider";
import {apikey_for_entity, baseuRL,stagingBaseurl,AnalyticsEnableDebugging,AnalyticsEnableTrackingCookie } from "../../sites-global/global";
import { favicon } from "../../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import FeaturesBrand from "../components/locationDetail/FeaturesBrand";
import { Fade, Slide } from "react-awesome-reveal";
import MgmTimber from "../components/locationDetail/MgmTimber";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";
import GetDirection from "../components/commons/GetDirection";
/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "timezone",
      "description",
            "yextDisplayCoordinate",
            "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "displayCoordinate",
      "cityCoordinate",
      "c_relatedFaqs.question",
      "c_relatedFaqs.answer",
      "c_title",
      "c_image",
      "c_bannerTitle",
      "c_bannerDescription",
      "c_bannerImage",
      "c_headerMenus",
      "c_byradoLogo",
      "c_footerHelpSection",
    "c_servicesFooter",
    "c_footerStoreLocator",
   "photoGallery",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
     entityTypes:['location']

    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
//    var url = "";
//    var name: any = document.name.toLowerCase();
//    var string: any = name.toString();;
//    let result: any = string.replaceAll(" ", "-");
//    document.dm_directoryParents?.map((result: any, i: Number) => {
//      if (i > 0) {
//        url += result.slug + "/"
//      }
//    })
//    if (!document.slug) {
//      url += `${result}.html`;
//    } else {
//      url += `${document.slug.toString()}.html`;
//    }
// return url;
  return document.slug
   ? document.slug
   : document.id.toString();
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document._site.c_metaTitle?document._site.c_metaTitle:`${document.name} Store of Byredo`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${document._site.c_metaDescription?document._site.c_metaDescription:`Find the ${document.name} Byredo Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
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
          rel: "canonical",
          href: `${document._site.c_canonicalURL?document.c_canonicalURL:stagingBaseurl

            }${document.slug?document.slug:`${document.name.toLowerCase()}`}`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${document.c_metaDescription?document.c_metaDescription:`Find the ${document.name} Byredo Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
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
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          href: favicon,
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
          name: "twitter:title",
          content: document.c_metaTitle?document.c_metaTitle:`${document.name} Store of Byredo`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${document.c_metaDescription?document.c_metaDescription:`Find the ${document.name} Byredo Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      /// twitter tag






    ],

  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
 export const transformProps: TransformProps<ExternalApiData> = async (
   data: any
 ) => {

   var location = `${data.document?.yextDisplayCoordinate ? data.document?.yextDisplayCoordinate?.latitude : data.document?.displayCoordinate?.latitude},${data.document?.yextDisplayCoordinate ? data.document?.yextDisplayCoordinate?.longitude : data.document?.displayCoordinate?.longitude}`;

     const url = `${AnswerExperienceConfig.endpoints.verticalSearch}?experienceKey=${AnswerExperienceConfig.experienceKey}&api_key=${AnswerExperienceConfig.apiKey}&v=20220511&version=${AnswerExperienceConfig.experienceVersion}&locale=${AnswerExperienceConfig.locale}&location=${location}&locationRadius=${AnswerExperienceConfig.locationRadius}&verticalKey=${AnswerExperienceConfig.verticalKey}&limit=4&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=true&source=STANDARD`;
  console.log(url)
   const externalApiData = (await fetch(url).then((res: any) =>
     res.json()

   )) as nearByLocation;
   return { ...data, externalApiData };
 };




type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const {
    _site,
    address,
    slug,
    hours,
    mainPhone,
    photoGallery,
    c_banner_image,
    c_canonical,
    description,
    dm_directoryParents,
   
    additionalHoursText,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    cityCoordinate,
    name,
    c_bannerTitle,
    c_bannerDescription,
    c_bannerImage,
    c_headerMenus,
    c_byradoLogo,
    c_footerHelpSection,
    c_servicesFooter,
    c_footerStoreLocator,
    c_relatedFaqs,
    c_title,
    c_image,
  } = document;

 let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];
  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = "";
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }
  document.dm_directoryParents &&
  document.dm_directoryParents.map((i: any, index: any) => {
    if (i.meta.entityType.id == "ce_country") {
      document.dm_directoryParents[index].name =
        document.dm_directoryParents[index].name;
      document.dm_directoryParents[index].slug =
        document.dm_directoryParents[index].slug;

      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
       
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    } else if (i.meta.entityType.id == "ce_region") {
      let url = "";
      document.dm_directoryParents.map((j: any) => {
        if (
          j.meta.entityType.id != "ce_region" &&
          j.meta.entityType.id != "ce_city" &&
          j.meta.entityType.id != "ce_root"
        ) {
          console.log(j, "j");
          url = url  + j.slug;
        }
      });
      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
            url + "/" +
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    } else if (i.meta.entityType.id == "ce_city") {
      let url = "";
      document.dm_directoryParents.map((j: any) => {
        if (
          j.meta.entityType.id != "ce_city" &&
          j.meta.entityType.id != "ce_root"
        ) {
          console.log(j, "j");
          url = url  + "/" + j.slug;
        }
      });
      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
            url +"/" +
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    }
  });

breadcrumbScheme.push({
  "@type": "ListItem",
  position: 4,
  item: {
    "@id": stagingBaseurl + path,
    name: document.name,
  },
});
  let imageurl = photoGallery ? photoGallery.map((element: any) => {
    return element.image.url
  }) : null;
  console.log(document)
  let bannerimage = c_banner_image && c_banner_image.image.url;


  return (

    <>
<PageLayout gdata={_site}>
      <JsonLd<Store>
        item={{
          "@context": "https://schema.org",
          "@type": "DepartmentStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
          description: description,
          image: imageurl,
          telephone: mainPhone,
          url: `${c_canonical?c_canonical:stagingBaseurl}${slug?slug:`${name}`}.html`
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />
     <BreadCrumbs
          name={name}
          address={address}
          parents={dm_directoryParents}
          baseUrl={relativePrefixToRoot}
        ></BreadCrumbs>


<AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging} 
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
   


      <div className="container">
            <div className='banner-text banner-dark-bg justify-center text-center'>
              {/* <h1 className="">{name}</h1> */}
                <div className="openClosestatus detail-page closeing-div">
                  <OpenClose timezone={timezone} hours={hours} />
                </div> 
            </div>
          </div>
          <div className="location-information">
          <div className="address-main-sec">
        {/* <h4 className="box-title">{name?name:"Store Details"}</h4> */}

        <div className="icon-row content-col">
          <div className="icon">
            {" "}
            <img className=" " src={loc1} width="20" height="20" alt="mapimage" />
          </div>
          <div className="  address-text notHighlight">
           <div>{name}</div> {address.line1}
            <div>{address.line2 && <div>{address.line2}</div>}</div>
            <div>{address.city}</div>
            <div>{address.postalCode}</div>
          </div>
        </div>
       
        {mainPhone ? (
          <div className="icon-row">
            <div className="icon">
              {" "}
              <img className=" " src={loc2} width="22" height="22" alt="phonesvg" />
            </div>
            <div className="content-col">
              <a id="address" className=" location-phn" href={`tel:${mainPhone}`}>
                {mainPhone}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
           {hours && (
                            <div className="openClosestatus detail-page closeing-div">
                            <OpenClose timezone={timezone} hours={hours} />
                          </div> 
                          )}
        <ul className="">
          <li className="button-bx direction-button">{displayCoordinate ?
          <GetDirection buttonText={StaticData.getDirection} address={address} latitude={displayCoordinate?.latitude} longitude={displayCoordinate?.longitude} />
          : <GetDirection buttonText={StaticData.getDirection} address={address} latitude={yextDisplayCoordinate?.latitude} longitude={yextDisplayCoordinate?.longitude} />
        }
          </li>
        </ul>
 </div>
 
            {/* <div className="loc-name">{name}</div>
          <Address address={address} />
          <div className="loc-phone">
        <div className="icon-time"> <img className=" " src={loc2} width="20" height="20"
          alt={''} /></div>
          <h4><a href={`tel:${mainPhone}`}>{mainPhone}</a></h4></div> */}
          
       <Contact address={address} 
            hours={hours}  additionalHoursText={additionalHoursText} ></Contact>
           
          {
            hours ?
              <div className="map-sec" id="map_canvas">
                <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
              </div> :
              <div className="map-sec without-hours" id="map_canvas">
                <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
              </div>
          }
        </div>
        <div className="about-content">
                <div className="about-image"><img src={c_image.url} height={500} width={500}/></div>
                <div className="about-data">
                <div className="about-title">{c_title}</div>
                <p className="about-description">{description}</p>
                </div>
              </div>
              <div className="featured">
              <h2>Featured Products</h2>
              <div className="photo-slider">{photoGallery && <PhotoSlider photoGallery={photoGallery}/> }</div>
      </div>
      <div className="faq-content">
        <div className="faq-title">How can we help ?</div>
        <div className="faqs"><section className="faq-container">{c_relatedFaqs && <Accordion content={c_relatedFaqs}/> }</section></div>
        </div>
        {yextDisplayCoordinate || cityCoordinate || displayCoordinate ?
         <div className="nearby-sec">
          <div className="container">
            <div className="sec-title"><h2 className="">{StaticData.NearStoretext}</h2></div>
             <div className="nearby-sec-inner">
              
                 <Nearby externalApiData={externalApiData} /> 
            
            </div> 
          </div>
          
        </div>  : ''}

    
      </AnalyticsScopeProvider>
      </AnalyticsProvider>
     
      </PageLayout>
   </>
  );
};

export default Location;