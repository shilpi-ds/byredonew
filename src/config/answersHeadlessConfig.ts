export const limit = 3;
export const radius = 1500;
export const defaultQuery = "";
export const baseApiUrl = "https://liveapi-sandbox.yext.com/v2/accounts/me";
export const liveAPIKey = "426b3c5ef4e2e2f26b2bae43f419d470";
export const entityTypes = "location";
export const savedFilterId = "1133466060";
export const googleMapsConfig = {
  centerLatitude: 51.509865,
  centerLongitude: -0.118092,
  googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18",
};

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
  },
};
