const packageJson = require("../package.json");

var tags = {
  Environment: "${self:provider.stage}",

  Owner: "Michael Cavanaugh",

  Subject: "FamilyCarousel-BFF",

  Project: "FamilyCarousel-BFF",

  Keywords: "FamilyCarousel-BFF",

  Source:
    "https://github.com/Family-Carousel/FamilyCarousel-BFF.git",

  SourceType: "serverless"
};

var baseTags = {
  
  environment: "${self:provider.stage}",

  keywords:
    "family carousel graphql ping cors serverless sls lambda apollo",

  project: "Family Carousel GraphQL",

  "source-type": "serverless",

  source: packageJson.repository.url,

  version: packageJson.version,

};

module.exports.tagsStack = () => {
  var tags = JSON.parse(JSON.stringify(baseTags));

  tags.App = "FamilyCarousel";

  return tags;
};

module.exports.tagsGraphQL = () => {
  var tags = JSON.parse(JSON.stringify(baseTags));

  tags.App = "FamilyCarousel-GraphQL";

  return tags;
};

module.exports.cors = () => {
  return {
    origin: "*",

    headers: [
      "Content-Type",

      "X-Amz-Date",

      "Authorization",

      "X-Api-Key",

      "X-Amz-Security-Token",

      "X-Amz-User-Agent"
    ],

    allowCredentials: true
  };
};
