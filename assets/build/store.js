/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/entries/shared/constants.js":
/*!********************************************!*\
  !*** ./assets/entries/shared/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_PAGE_STORE: () => (/* binding */ ADMIN_PAGE_STORE),
/* harmony export */   CORE_STORE: () => (/* binding */ CORE_STORE),
/* harmony export */   SETTING_PREFIX: () => (/* binding */ SETTING_PREFIX)
/* harmony export */ });
const CORE_STORE = 'wp-mail-debugger/core';
const ADMIN_PAGE_STORE = 'wp-mail-debugger/admin-page';
const SETTING_PREFIX = 'wp_mail_debugger_';

/***/ }),

/***/ "./assets/entries/shared/controls.js":
/*!*******************************************!*\
  !*** ./assets/entries/shared/controls.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseFetchResponse: () => (/* binding */ parseFetchResponse)
/* harmony export */ });
/**
 * Parses the fetch response.
 *
 * @param {Response} response The response object from apiFetch.
 * @return {{response: *, type: string}} Data control.
 */
function parseFetchResponse(response) {
  return {
    type: 'PARSE_FETCH_RESPONSE',
    response
  };
}

/**
 * Parse the fetch response into an object with data and headers.
 *
 * @param {Response} response The response object from apiFetch.
 * @return {Promise<*>} Parsed response object.
 */
async function PARSE_FETCH_RESPONSE({
  response
}) {
  return await response.json();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  PARSE_FETCH_RESPONSE
});

/***/ }),

/***/ "./assets/entries/shared/utils.js":
/*!****************************************!*\
  !*** ./assets/entries/shared/utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterSettings: () => (/* binding */ filterSettings),
/* harmony export */   formatAddress: () => (/* binding */ formatAddress)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/entries/shared/constants.js");


/**
 * Format an address.
 *
 * @param {Object} address
 * @param {string} address.email
 * @param {string} address.name
 *
 * @return {string} The formatted address.
 */
function formatAddress(address) {
  if (address.name) {
    return address.name + ' <' + address.email + '>';
  }
  return address.email;
}

/**
 * Filter the list of settings to only our settings. Stripping the prefix.
 *
 * @param {Object} settings The raw settings.
 * @return {Object} The filtered settings.
 */
function filterSettings(settings) {
  const filtered = {};
  for (const setting in settings) {
    if (!settings.hasOwnProperty(setting)) {
      continue;
    }
    if (setting.startsWith(_constants__WEBPACK_IMPORTED_MODULE_0__.SETTING_PREFIX)) {
      const trimmed = setting.substr(_constants__WEBPACK_IMPORTED_MODULE_0__.SETTING_PREFIX.length);
      filtered[trimmed] = settings[setting];
    }
  }
  return filtered;
}

/***/ }),

/***/ "./assets/entries/store/actions.js":
/*!*****************************************!*\
  !*** ./assets/entries/store/actions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FAILED_DELETE_EMAIL: () => (/* binding */ FAILED_DELETE_EMAIL),
/* harmony export */   FAILED_EMPTY_INBOX: () => (/* binding */ FAILED_EMPTY_INBOX),
/* harmony export */   FAILED_FETCH_EMAIL: () => (/* binding */ FAILED_FETCH_EMAIL),
/* harmony export */   FAILED_QUERY: () => (/* binding */ FAILED_QUERY),
/* harmony export */   FAILED_SEND_EMAIL: () => (/* binding */ FAILED_SEND_EMAIL),
/* harmony export */   FINISH_DELETE_EMAIL: () => (/* binding */ FINISH_DELETE_EMAIL),
/* harmony export */   FINISH_EMPTY_INBOX: () => (/* binding */ FINISH_EMPTY_INBOX),
/* harmony export */   FINISH_FETCH_EMAIL: () => (/* binding */ FINISH_FETCH_EMAIL),
/* harmony export */   FINISH_QUERY: () => (/* binding */ FINISH_QUERY),
/* harmony export */   FINISH_SEND_EMAIL: () => (/* binding */ FINISH_SEND_EMAIL),
/* harmony export */   RECEIVE_EMAIL: () => (/* binding */ RECEIVE_EMAIL),
/* harmony export */   RECEIVE_QUERY: () => (/* binding */ RECEIVE_QUERY),
/* harmony export */   RECEIVE_SETTINGS: () => (/* binding */ RECEIVE_SETTINGS),
/* harmony export */   START_DELETE_EMAIL: () => (/* binding */ START_DELETE_EMAIL),
/* harmony export */   START_EMPTY_INBOX: () => (/* binding */ START_EMPTY_INBOX),
/* harmony export */   START_FETCH_EMAIL: () => (/* binding */ START_FETCH_EMAIL),
/* harmony export */   START_QUERY: () => (/* binding */ START_QUERY),
/* harmony export */   START_SEND_EMAIL: () => (/* binding */ START_SEND_EMAIL),
/* harmony export */   deleteEmail: () => (/* binding */ deleteEmail),
/* harmony export */   emptyInbox: () => (/* binding */ emptyInbox),
/* harmony export */   fetchEmail: () => (/* binding */ fetchEmail),
/* harmony export */   fetchQueryNextPage: () => (/* binding */ fetchQueryNextPage),
/* harmony export */   query: () => (/* binding */ query),
/* harmony export */   receiveEmail: () => (/* binding */ receiveEmail),
/* harmony export */   receiveQuery: () => (/* binding */ receiveQuery),
/* harmony export */   receiveSettings: () => (/* binding */ receiveSettings),
/* harmony export */   sendEmail: () => (/* binding */ sendEmail),
/* harmony export */   updateSetting: () => (/* binding */ updateSetting)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _shared_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/controls */ "./assets/entries/shared/controls.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/utils */ "./assets/entries/shared/utils.js");
/**
 * WordPress dependencies
 */




/**
 * WordPress dependencies
 */



function* query(queryId, queryParams) {
  let response, items;
  yield {
    type: START_QUERY,
    queryId,
    queryParams
  };
  try {
    response = yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.apiFetch)({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)('wp-mail-debugger/v1/emails', queryParams),
      parse: false
    });
    items = yield (0,_shared_controls__WEBPACK_IMPORTED_MODULE_4__.parseFetchResponse)(response);
  } catch (error) {
    yield {
      type: FAILED_QUERY,
      queryId,
      queryParams,
      error
    };
    return error;
  }
  yield receiveQuery(queryId, queryParams.context || 'view', response, items, 'replace');
  yield {
    type: FINISH_QUERY,
    queryId,
    queryParams,
    response
  };
  return response;
}
function* fetchQueryNextPage(queryId, mode = 'append') {
  const link = yield _wordpress_data__WEBPACK_IMPORTED_MODULE_0__.controls.select(_shared_constants__WEBPACK_IMPORTED_MODULE_3__.CORE_STORE, 'getQueryHeaderLink', queryId, 'next');
  if (!link) {
    return [];
  }
  let response, items;
  yield {
    type: START_QUERY,
    queryId
  };
  try {
    response = yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.apiFetch)({
      url: link.link,
      parse: false
    });
    items = yield (0,_shared_controls__WEBPACK_IMPORTED_MODULE_4__.parseFetchResponse)(response);
  } catch (error) {
    yield {
      type: FAILED_QUERY,
      queryId,
      error
    };
    return error;
  }
  const context = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.getQueryArg)(link.link, 'context') || 'view';
  yield receiveQuery(queryId, context, response, items, mode);
  yield {
    type: FINISH_QUERY,
    queryId,
    response
  };
  return response;
}
function* fetchEmail(id, context = 'view') {
  let email;
  yield {
    type: START_FETCH_EMAIL,
    id
  };
  try {
    email = yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.apiFetch)({
      path: `wp-mail-debugger/v1/emails/${id}?context=${context}`
    });
  } catch (error) {
    yield {
      type: FAILED_FETCH_EMAIL,
      id,
      error
    };
    return error;
  }
  yield receiveEmail(email, context);
  yield {
    type: FINISH_FETCH_EMAIL,
    id,
    email
  };
}
function* sendEmail(id, to) {
  yield {
    type: START_SEND_EMAIL,
    id
  };
  try {
    yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.apiFetch)({
      path: `wp-mail-debugger/v1/emails/${id}/send`,
      method: 'POST',
      data: {
        to
      }
    });
  } catch (error) {
    yield {
      type: FAILED_SEND_EMAIL,
      id,
      error
    };
    return error;
  }
  yield {
    type: FINISH_SEND_EMAIL,
    id
  };
  yield _wordpress_data__WEBPACK_IMPORTED_MODULE_0__.controls.dispatch(_shared_constants__WEBPACK_IMPORTED_MODULE_3__.CORE_STORE, 'query', 'main', {
    context: 'embed'
  });
}
function* deleteEmail(id) {
  yield {
    type: START_DELETE_EMAIL,
    id
  };
  try {
    yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.apiFetch)({
      path: `wp-mail-debugger/v1/emails/${id}`,
      method: 'DELETE'
    });
  } catch (error) {
    yield {
      type: FAILED_DELETE_EMAIL,
      error
    };
    return error;
  }
  yield {
    type: FINISH_DELETE_EMAIL,
    id
  };
}
function* emptyInbox() {
  yield {
    type: START_EMPTY_INBOX
  };
  try {
    yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.apiFetch)({
      path: 'wp-mail-debugger/v1/emails',
      method: 'DELETE'
    });
  } catch (error) {
    yield {
      type: FAILED_EMPTY_INBOX,
      error
    };
    return error;
  }
  yield {
    type: FINISH_EMPTY_INBOX
  };
}
function* updateSetting(setting, value) {
  const settings = yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.apiFetch)({
    path: 'wp/v2/settings',
    method: 'PUT',
    data: {
      [_shared_constants__WEBPACK_IMPORTED_MODULE_3__.SETTING_PREFIX + setting]: value
    }
  });
  const filtered = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_5__.filterSettings)(settings);
  yield receiveSettings(filtered);
}
function receiveQuery(queryId, context, response, items, mode) {
  return {
    type: RECEIVE_QUERY,
    queryId,
    context,
    response,
    items,
    mode
  };
}
function receiveEmail(email, context) {
  return {
    type: RECEIVE_EMAIL,
    email,
    context
  };
}
function receiveSettings(settings) {
  return {
    type: RECEIVE_SETTINGS,
    settings
  };
}
const RECEIVE_QUERY = 'RECEIVE_QUERY';
const RECEIVE_EMAIL = 'RECEIVE_EMAIL';
const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS';
const START_QUERY = 'START_QUERY';
const FINISH_QUERY = 'FINISH_QUERY';
const FAILED_QUERY = 'FAILED_QUERY';
const START_DELETE_EMAIL = 'START_DELETE_EMAIL';
const FINISH_DELETE_EMAIL = 'FINISH_DELETE_EMAIL';
const FAILED_DELETE_EMAIL = 'FAILED_DELETE_EMAIL';
const START_EMPTY_INBOX = 'START_EMPTY_INBOX';
const FINISH_EMPTY_INBOX = 'FINISH_EMPTY_INBOX';
const FAILED_EMPTY_INBOX = 'FAILED_EMPTY_INBOX';
const START_FETCH_EMAIL = 'START_FETCH_EMAIL';
const FINISH_FETCH_EMAIL = 'FINISH_FETCH_EMAIL';
const FAILED_FETCH_EMAIL = 'FAILED_FETCH_EMAIL';
const START_SEND_EMAIL = 'START_SEND_EMAIL';
const FINISH_SEND_EMAIL = 'FINISH_SEND_EMAIL';
const FAILED_SEND_EMAIL = 'FAILED_SEND_EMAIL';

/***/ }),

/***/ "./assets/entries/store/reducer.js":
/*!*****************************************!*\
  !*** ./assets/entries/store/reducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var li__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! li */ "./node_modules/li/lib/index.js");
/* harmony import */ var li__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(li__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./assets/entries/store/actions.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const DEFAULT_STATE = {
  // Object of email ids to their full object
  byId: {},
  // Query details
  queries: {},
  // List of query ids being queried
  querying: [],
  // List of email ids of items that are being fetched
  fetching: [],
  // List of email ids of items that are being deleted
  deleting: [],
  // List of email ids of items that are being sent
  sending: [],
  // Is the inbox currently being updated
  emptyingInbox: false,
  // Settings object
  settings: {}
};
function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_QUERY:
      return {
        ...state,
        queries: {
          ...state.queries,
          [action.queryId]: {
            ids: action.mode === 'replace' ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(action.items, 'uuid') : [...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(state, ['queries', action.queryId, 'ids'], []), ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(action.items, 'uuid')],
            headers: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.fromPairs)(Array.from(action.response.headers.entries())),
            links: (0,li__WEBPACK_IMPORTED_MODULE_1__.parse)(action.response.headers.get('link'), {
              extended: true
            }).map(link => ({
              ...link,
              rel: link.rel[0]
            }))
          }
        },
        byId: {
          ...state.byId,
          ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.fromPairs)(action.items.filter(({
            uuid
          }) => {
            if (!state.byId[uuid]) {
              return true;
            }
            return state.byId[uuid].context === 'embed' || state.byId[uuid].context === action.context;
          }).map(email => [email.uuid, {
            context: action.context,
            email
          }]))
        }
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.START_QUERY:
      return {
        ...state,
        querying: [...state.querying, action.queryId]
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FINISH_QUERY:
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FAILED_QUERY:
      return {
        ...state,
        querying: state.querying.filter(queryId => queryId !== action.queryId)
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_EMAIL:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.email.uuid]: {
            context: action.context,
            email: action.email
          }
        }
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.START_FETCH_EMAIL:
      return {
        ...state,
        fetching: [...state.fetching, action.id]
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FINISH_FETCH_EMAIL:
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FAILED_FETCH_EMAIL:
      return {
        ...state,
        fetching: state.fetching.filter(id => id !== action.id)
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.START_SEND_EMAIL:
      return {
        ...state,
        sending: [...state.sending, action.id]
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FINISH_SEND_EMAIL:
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FAILED_SEND_EMAIL:
      return {
        ...state,
        sending: state.sending.filter(id => id !== action.id)
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.START_DELETE_EMAIL:
      return {
        ...state,
        deleting: [...state.deleting, action.id]
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FINISH_DELETE_EMAIL:
      return {
        ...state,
        deleting: state.deleting.filter(id => id !== action.id),
        byId: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(state.byId, [action.id])
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FAILED_DELETE_EMAIL:
      return {
        ...state,
        deleting: state.deleting.filter(id => id !== action.id)
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.START_EMPTY_INBOX:
      return {
        ...state,
        emptyingInbox: true
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FINISH_EMPTY_INBOX:
      return {
        ...state,
        emptyingInbox: false,
        queries: {},
        byId: {}
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.FAILED_EMPTY_INBOX:
      return {
        ...state,
        emptyingInbox: false
      };
    case _actions__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_SETTINGS:
      return {
        ...state,
        settings: {
          ...action.settings
        }
      };
    default:
      return state;
  }
}

/***/ }),

/***/ "./assets/entries/store/resolvers.js":
/*!*******************************************!*\
  !*** ./assets/entries/store/resolvers.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEmail: () => (/* binding */ getEmail),
/* harmony export */   getSettings: () => (/* binding */ getSettings)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./assets/entries/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./assets/entries/store/selectors.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils */ "./assets/entries/shared/utils.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const getEmail = {
  *fulfill(id, context = 'view') {
    yield* (0,_actions__WEBPACK_IMPORTED_MODULE_2__.fetchEmail)(id, context);
  },
  isFulfilled(state, id, context = 'view') {
    return !!(0,_selectors__WEBPACK_IMPORTED_MODULE_3__.getEmail)(state, id, context);
  }
};
const getSettings = {
  *fulfill() {
    const settings = yield (0,_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.apiFetch)({
      path: 'wp/v2/settings'
    });
    const filtered = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_4__.filterSettings)(settings);
    yield (0,_actions__WEBPACK_IMPORTED_MODULE_2__.receiveSettings)(filtered);
  },
  isFulfilled(state) {
    return !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(state.settings);
  }
};

/***/ }),

/***/ "./assets/entries/store/selectors.js":
/*!*******************************************!*\
  !*** ./assets/entries/store/selectors.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEmail: () => (/* binding */ getEmail),
/* harmony export */   getQueryHeader: () => (/* binding */ getQueryHeader),
/* harmony export */   getQueryHeaderLink: () => (/* binding */ getQueryHeaderLink),
/* harmony export */   getQueryResults: () => (/* binding */ getQueryResults),
/* harmony export */   getSettings: () => (/* binding */ getSettings),
/* harmony export */   isDeleting: () => (/* binding */ isDeleting),
/* harmony export */   isEmptyingInbox: () => (/* binding */ isEmptyingInbox),
/* harmony export */   isFetching: () => (/* binding */ isFetching),
/* harmony export */   isQuerying: () => (/* binding */ isQuerying),
/* harmony export */   isSending: () => (/* binding */ isSending)
/* harmony export */ });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */



/**
 * Gets the items returned by a query.
 *
 * @param {Object} state   State object.
 * @param {string} queryId Query id.
 * @return {Array<Object>}
 */
const getQueryResults = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, queryId) => {
  const ids = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state, ['queries', queryId, 'ids'], []);
  const byId = state.byId;
  const length = ids.length;
  const items = new Array(length);
  let index = -1;
  while (++index < length) {
    const entry = byId[ids[index]];
    if (entry) {
      items[index] = entry.email;
    }
  }
  return items;
}, (state, queryId) => [state.queries[queryId], state.byId]);

/**
 * Gets the link header from a query result.
 *
 * @param {Object} state   State object.
 * @param {string} queryId Query id.
 * @param {string} rel     Rel to search for.
 * @return {{link: string, rel: string}} Link object or undefined if not found.
 */
function getQueryHeaderLink(state, queryId, rel) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state, ['queries', queryId, 'links'], []), {
    rel
  });
}

/**
 * Get a response header from a query.
 *
 * @param {Object} state   State object.
 * @param {string} queryId Query id.
 * @param {string} header  Normalized header name.
 * @return {string|undefined} The header value, or undefined if it does not exist.
 */
function getQueryHeader(state, queryId, header) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(state, ['queries', queryId, 'headers', header]);
}

/**
 * Get an email object.
 *
 * @param {Object} state   The state object.
 * @param {string} id      The email id.
 * @param {string} context The context to request the item with. Defaults to view.
 * @return {Object|undefined} The email object or undefined if it could not be found.
 */
function getEmail(state, id, context = 'view') {
  const entry = state.byId[id];
  if (!entry || entry.context !== context) {
    return undefined;
  }
  return entry.email;
}

/**
 * Get the plugin's settings.
 *
 * @param {Object} state The state object.
 * @return {Object} The settings object.
 */
function getSettings(state) {
  return state.settings;
}

/**
 * Checks if a query is in progress.
 *
 * @param {Object} state   The state object.
 * @param {string} queryId The query id.
 * @return {boolean} Whether the query is in progress.
 */
function isQuerying(state, queryId) {
  return state.querying.includes(queryId);
}

/**
 * Checks if an email is being fetched.
 *
 * @param {Object} state The state object.
 * @param {string} id    The email id.
 * @return {boolean} Whether the query is in progress.
 */
function isFetching(state, id) {
  return state.fetching.includes(id);
}

/**
 * Checks if an email is being sent.
 * @param {Object} state The state object.
 * @param {string} id    The email id
 * @return {boolean} Whether the email is being sent.
 */
function isSending(state, id) {
  return state.sending.includes(id);
}

/**
 * Checks if an email is being deleted.
 *
 * @param {Object} state The state object.
 * @param {string} id    The email id.
 * @return {boolean} Whether the query is in progress.
 */
function isDeleting(state, id) {
  return state.deleting.includes(id);
}

/**
 * Checks if the inbox is being emptied.
 *
 * @param {Object} state The state object.
 * @return {boolean} Whether the query is in progress.
 */
function isEmptyingInbox(state) {
  return state.emptyingInbox;
}

/***/ }),

/***/ "./node_modules/li/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/li/lib/index.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, definition, context) {

  //try CommonJS, then AMD (require.js), then use global.

  if ( true && module.exports) module.exports = definition();
  else if (typeof context['define'] == 'function' && context['define']['amd']) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else context[name] = definition();

})('li', function () {
  // compile regular expressions ahead of time for efficiency
  var relsRegExp = /^;\s*([^"=]+)=(?:"([^"]+)"|([^";,]+)(?:[;,]|$))/;
  var sourceRegExp = /^<([^>]*)>/;
  var delimiterRegExp = /^\s*,\s*/;

  return {
    parse: function (linksHeader, options) {
      var match;
      var source;
      var rels;
      var extended = options && options.extended || false;
      var links = [];

      while (linksHeader) {
        linksHeader = linksHeader.trim();

        // Parse `<link>`
        source = sourceRegExp.exec(linksHeader);
        if (!source) break;

        var current = {
          link: source[1]
        };

        // Move cursor
        linksHeader = linksHeader.slice(source[0].length);

        // Parse `; attr=relation` and `; attr="relation"`

        var nextDelimiter = linksHeader.match(delimiterRegExp);
        while(linksHeader && (!nextDelimiter || nextDelimiter.index > 0)) {
          match = relsRegExp.exec(linksHeader);
          if (!match) break;

          // Move cursor
          linksHeader = linksHeader.slice(match[0].length);
          nextDelimiter = linksHeader.match(delimiterRegExp);


          if (match[1] === 'rel' || match[1] === 'rev') {
            // Add either quoted rel or unquoted rel
            rels = (match[2] || match[3]).split(/\s+/);
            current[match[1]] = rels;
          } else {
            current[match[1]] = match[2] || match[3];
          }
        }

        links.push(current);
        // Move cursor
        linksHeader = linksHeader.replace(delimiterRegExp, '');
      }

      if (!extended) {
        return links.reduce(function(result, currentLink) {
          if (currentLink.rel) {
            currentLink.rel.forEach(function(rel) {
              result[rel] = currentLink.link;
            });
          }
          return result;
        }, {});
      }

      return links;
    },
    stringify: function (params) {
      var grouped = Object.keys(params).reduce(function(grouped, key) {
        grouped[params[key]] = grouped[params[key]] || [];
        grouped[params[key]].push(key);
        return grouped;
      }, {});

      var entries = Object.keys(grouped).reduce(function(result, link) {
        return result.concat('<' + link + '>; rel="' + grouped[link].join(' ') + '"');
      }, []);

      return entries.join(', ');
    }
  };

}, this);


/***/ }),

/***/ "./node_modules/rememo/es/rememo.js":
/*!******************************************!*\
  !*** ./node_modules/rememo/es/rememo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
}


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/data-controls":
/*!**************************************!*\
  !*** external ["wp","dataControls"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["dataControls"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./assets/entries/store.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducer */ "./assets/entries/store/reducer.js");
/* harmony import */ var _shared_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/controls */ "./assets/entries/shared/controls.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions */ "./assets/entries/store/actions.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/selectors */ "./assets/entries/store/selectors.js");
/* harmony import */ var _store_resolvers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/resolvers */ "./assets/entries/store/resolvers.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/constants */ "./assets/entries/shared/constants.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_shared_constants__WEBPACK_IMPORTED_MODULE_7__.CORE_STORE, {
  controls: {
    ..._shared_controls__WEBPACK_IMPORTED_MODULE_3__["default"],
    ..._wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.controls
  },
  actions: _store_actions__WEBPACK_IMPORTED_MODULE_4__,
  selectors: _store_selectors__WEBPACK_IMPORTED_MODULE_5__,
  resolvers: _store_resolvers__WEBPACK_IMPORTED_MODULE_6__,
  reducer: _store_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
}));
})();

/******/ })()
;
//# sourceMappingURL=store.js.map