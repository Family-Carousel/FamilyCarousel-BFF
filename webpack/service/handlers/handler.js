(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handlers/handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dataSources/family/familyAPI.js":
/*!*****************************************!*\
  !*** ./dataSources/family/familyAPI.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  HTTPCache,\n  RESTDataSource\n} = __webpack_require__(/*! apollo-datasource-rest */ \"apollo-datasource-rest\");\n\nconst apiKey = process.env.FAMILY_SERVICE_API_KEY;\nconst familyServiceUrl = process.env.FAMILY_SERVICE_BASE_URL;\nmodule.exports = class familyAPI extends RESTDataSource {\n  constructor() {\n    super();\n    this.HTTPCache = new HTTPCache();\n    this.baseUrl = familyServiceUrl;\n  }\n\n  async willSendRequest(request) {\n    console.log(request);\n    request.headers.set('x-api-key', apiKey);\n  }\n\n  async getAllFamiliesForMemberId(memberId) {\n    try {\n      return await this.get('family/' + {\n        memberId: memberId\n      });\n    } catch (err) {\n      console.error('BFF - Failed to get list of family :', err);\n      throw 'BFF - Failed to get list of family';\n    }\n  }\n\n  async getFamily(id) {\n    try {\n      return await this.get('family/' + id);\n    } catch (err) {\n      console.error('BFF - Failed to get family :', err);\n      throw 'BFF - Failed to get family';\n    }\n  }\n\n  async createFamily(familyData) {\n    try {\n      return await this.post('family', {\n        data: familyData\n      });\n    } catch (err) {\n      console.error('BFF - Failed to create family :', err);\n      throw 'BFF - Failed to create family';\n    }\n  }\n\n  async updateFamily(familyData) {\n    try {\n      return await this.put('family', {\n        data: familyData\n      });\n    } catch (err) {\n      console.error('BFF - Failed to update family :', err);\n      throw 'BFF - Failed to update family';\n    }\n  }\n\n  async deleteFamily(id) {\n    try {\n      return await this.delete('family/' + id);\n    } catch (err) {\n      console.error('BFF - Failed to delete family :', err);\n      throw 'BFF - Failed to delete family';\n    }\n  }\n\n};\n\n//# sourceURL=webpack:///./dataSources/family/familyAPI.js?");

/***/ }),

/***/ "./graphql/resolvers.js":
/*!******************************!*\
  !*** ./graphql/resolvers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  Query: {\n    getFamilyByFamilyId: async (_, {\n      id\n    }, {\n      dataSources\n    }) => {\n      return await dataSources.familyAPI.getFamily(id);\n    },\n    listFamiliesbyMemberId: async (_, {\n      memberId\n    }, {\n      dataSources\n    }) => {\n      return await dataSources.familyAPI.getAllFamiliesForMemberId(memberId);\n    }\n  },\n  Mutation: {\n    createFamily: async (_, {\n      input\n    }, {\n      dataSources\n    }) => {\n      return await dataSources.familyAPI.createFamily(input);\n    },\n    updateFamily: async (_, {\n      input\n    }, {\n      dataSources\n    }) => {\n      return await dataSources.familyAPI.updateFamily(input);\n    },\n    deleteFamily: async (_, {\n      id\n    }, {\n      dataSources\n    }) => {\n      return await dataSources.familyAPI.deleteFamily(id);\n    }\n  }\n};\n\n//# sourceURL=webpack:///./graphql/resolvers.js?");

/***/ }),

/***/ "./graphql/schema.js":
/*!***************************!*\
  !*** ./graphql/schema.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  gql\n} = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n\nconst typeDefs = gql`\n\n    \"Family Template\"\n    type FamilyTemplate {\n        Id: ID!\n        MemberId: ID!\n        Name: String\n        Description: String\n        IsActive: String\n        CreatedBy: String\n        CreatedDateTime: String\n        LastUpdateBy: String\n        LastUpdateDateTime: String\n    }\n\n    type Query {\n        getFamilyByFamilyId(\"Custom String\" id: ID!): FamilyTemplate  \n        listFamiliesbyMemberId(\"Custom String\" MemberId: ID!): [FamilyTemplate]\n    }\n\n    input FamilyInput{\n        FamilyId: ID\n        FamilyName: String\n        FamilyDescription: String\n    }\n\n    type Mutation {\n        createFamily(input: FamilyInput!): FamilyTemplate\n        updateFamily(id: ID!, input: FamilyInput): FamilyTemplate\n        deleteFamily(id: ID!): FamilyTemplate\n    }\n`;\nmodule.exports = {\n  typeDefs: typeDefs\n};\n\n//# sourceURL=webpack:///./graphql/schema.js?");

/***/ }),

/***/ "./handlers/handler.js":
/*!*****************************!*\
  !*** ./handlers/handler.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  ApolloServer\n} = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n\nconst depthLimit = __webpack_require__(/*! graphql-depth-limit */ \"graphql-depth-limit\");\n\nconst {\n  typeDefs\n} = __webpack_require__(/*! ../graphql/schema */ \"./graphql/schema.js\");\n\nconst resolvers = __webpack_require__(/*! ../graphql/resolvers */ \"./graphql/resolvers.js\");\n\nconst familyAPI = __webpack_require__(/*! ../dataSources/family/familyAPI */ \"./dataSources/family/familyAPI.js\");\n\nlet contextMethod = ({\n  event,\n  context\n}) => ({\n  headers: event.headers,\n  functionName: context.functionName,\n  event,\n  context\n});\n\nlet apolloSettings = {\n  typeDefs: typeDefs,\n  resolvers: resolvers,\n  dataSources: () => {\n    return {\n      familyAPI: new familyAPI()\n    };\n  },\n  validationRules: [depthLimit(6)],\n  context: contextMethod\n};\nconst server = new ApolloServer(apolloSettings);\nmodule.exports.graphql = server.createHandler({\n  cors: {\n    origin: '*',\n    credentials: true\n  }\n});\n\n//# sourceURL=webpack:///./handlers/handler.js?");

/***/ }),

/***/ "apollo-datasource-rest":
/*!*****************************************!*\
  !*** external "apollo-datasource-rest" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-datasource-rest\");\n\n//# sourceURL=webpack:///external_%22apollo-datasource-rest%22?");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-lambda\");\n\n//# sourceURL=webpack:///external_%22apollo-server-lambda%22?");

/***/ }),

/***/ "graphql-depth-limit":
/*!**************************************!*\
  !*** external "graphql-depth-limit" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-depth-limit\");\n\n//# sourceURL=webpack:///external_%22graphql-depth-limit%22?");

/***/ })

/******/ })));