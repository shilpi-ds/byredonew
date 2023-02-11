export const limit = 3;
export const radius = 500;
export const defaultQuery = "";
export const baseApiUrl = "https://liveapi-sandbox.yext.com/v2/accounts/me";
export const liveAPIKey = "426b3c5ef4e2e2f26b2bae43f419d470";
export const entityTypes = "location";
export const savedFilterId = "1133466060";
export const googleMapsConfig = {
  centerLatitude: 28.9811,
  centerLongitude: 77.7106,
  googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18",
};
export const AnalyticsEnableDebugging = true;
export const AnalyticsEnableTrackingCookie = true;
export const countrySavedFilterId = "dm_stores-directory_address_countrycode";
export const citySavedFilterId = "dm_stores-directory_address_city";
export const stateSavedFilterId = "dm_stores-directory_address_region";
export const rootSavedFilterId = "dm_stores-directory";
export function slugify(slugString:any){
  slugString.toLowerCase().toString();
  slugString = slugString.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/, "");
  slugString = slugString.replaceAll("  ", "-");
  slugString = slugString.replaceAll(" ", "-");
  slugString = slugString.replaceAll("---","-");
  slugString = slugString.replaceAll("--","-");
  slugString = slugString.replaceAll("'","");
  return slugString.toLowerCase();
};
export const defaultTimeZone = "Europe/London";
export const GoogleSearchConsole = { 
  name : "google-site-verification",
  content : "WIqhwAw2ugRAKEYRRqis1ZfUBbnWe_AXSoDltHceCbI"
}
export const AnswerExperienceConfig = {
  experienceKey: "byredo",
  locale: "en_GB",
  apiKey: "aeed4d912d9a2d74d399172c3b724f63",
  verticalKey: "locations",
  experienceVersion: "STAGING",
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",
      geosearch:
"https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch",
  },
};
