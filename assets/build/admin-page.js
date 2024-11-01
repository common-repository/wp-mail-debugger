/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/entries/admin-page.js":
/*!**************************************!*\
  !*** ./assets/entries/admin-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarFill: () => (/* reexport safe */ _admin_page_api__WEBPACK_IMPORTED_MODULE_6__.SidebarFill),
/* harmony export */   SidebarItem: () => (/* reexport safe */ _admin_page_api__WEBPACK_IMPORTED_MODULE_6__.SidebarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _admin_page_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-page/app.js */ "./assets/entries/admin-page/app.js");
/* harmony import */ var _admin_page_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-page/context */ "./assets/entries/admin-page/context.js");
/* harmony import */ var _admin_page_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-page/api */ "./assets/entries/admin-page/api/index.js");

/**
 * WordPress dependencies
 */



(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.setLocaleData)({
  '': {}
}, 'wp-mail-debugger');

/**
 * Internal dependencies
 */


_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default()(() => {
  const containerEl = document.getElementById('wp-mail-debugger-root');
  const isNetworkAdmin = containerEl.dataset['is-network-admin'] === '1';
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createRoot)(containerEl);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_admin_page_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      isNetworkAdmin
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_admin_page_app_js__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
});


/***/ }),

/***/ "./assets/entries/admin-page/api/index.js":
/*!************************************************!*\
  !*** ./assets/entries/admin-page/api/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarFill: () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_0__.SidebarFill),
/* harmony export */   SidebarItem: () => (/* reexport safe */ _components_sidebar_item__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./assets/entries/admin-page/api/sidebar/index.js");
/* harmony import */ var _components_sidebar_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidebar-item */ "./assets/entries/admin-page/components/sidebar-item/index.js");



/***/ }),

/***/ "./assets/entries/admin-page/api/sidebar/index.js":
/*!********************************************************!*\
  !*** ./assets/entries/admin-page/api/sidebar/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarFill: () => (/* binding */ Fill),
/* harmony export */   SidebarSlot: () => (/* binding */ Slot)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.createSlotFill)('Sidebar');


/***/ }),

/***/ "./assets/entries/admin-page/app.js":
/*!******************************************!*\
  !*** ./assets/entries/admin-page/app.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ "./assets/entries/admin-page/components/header/index.js");
/* harmony import */ var _components_email_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/email-list */ "./assets/entries/admin-page/components/email-list/index.js");
/* harmony import */ var _components_detail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/detail */ "./assets/entries/admin-page/components/detail/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store */ "./assets/entries/admin-page/store/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/style.css");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






function App({
  currentEmail
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SlotFillProvider, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wmd-body', currentEmail ? 'wmd-body--detail' : 'wmd-body--list')
  }, currentEmail ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_detail__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: currentEmail
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_email_list__WEBPACK_IMPORTED_MODULE_7__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__.PluginArea, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => ({
  currentEmail: select(_shared_constants__WEBPACK_IMPORTED_MODULE_9__.ADMIN_PAGE_STORE).getCurrentEmail()
}))])(App));

/***/ }),

/***/ "./assets/entries/admin-page/components/detail-actions/index.js":
/*!**********************************************************************!*\
  !*** ./assets/entries/admin-page/components/detail-actions/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _resend_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resend-action */ "./assets/entries/admin-page/components/resend-action/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/detail-actions/style.css");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function DetailActions({
  viewList,
  email,
  deleteEmail,
  isDeleting
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-detail-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-detail-actions__container--left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isLink: true,
    icon: "arrow-left-alt2",
    onClick: viewList
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Back to Messages', 'wp-mail-debugger'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-detail-actions__container--right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_resend_action__WEBPACK_IMPORTED_MODULE_6__["default"], {
    email: email
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "trash",
    className: "wmd-detail-actions--trash",
    onClick: deleteEmail,
    isBusy: isDeleting
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delete', 'wp-mail-debugger'))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)((select, {
  email
}) => ({
  isDeleting: select(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE).isDeleting(email.uuid)
})), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)((dispatch, {
  email
}) => ({
  viewList: dispatch(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.ADMIN_PAGE_STORE).viewList,
  deleteEmail() {
    return dispatch(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE).deleteEmail(email.uuid).then(() => dispatch(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.ADMIN_PAGE_STORE).viewList());
  }
}))])(DetailActions));

/***/ }),

/***/ "./assets/entries/admin-page/components/detail/index.js":
/*!**************************************************************!*\
  !*** ./assets/entries/admin-page/components/detail/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _detail_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detail-actions */ "./assets/entries/admin-page/components/detail-actions/index.js");
/* harmony import */ var _email_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../email-main */ "./assets/entries/admin-page/components/email-main/index.js");
/* harmony import */ var _email_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../email-sidebar */ "./assets/entries/admin-page/components/email-sidebar/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/detail/style.css");

/**
 * Internal dependencies
 */



/**
 * Internal dependencies
 */





function Detail({
  email
}) {
  return email ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-detail"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_detail_actions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    email: email
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-detail-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_email_main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    email: email
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_email_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    email: email
  }))) : null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)((select, {
  id
}) => ({
  email: select(_shared_constants__WEBPACK_IMPORTED_MODULE_6__.CORE_STORE).getEmail(id)
}))])(Detail));

/***/ }),

/***/ "./assets/entries/admin-page/components/email-list-item/index.js":
/*!***********************************************************************!*\
  !*** ./assets/entries/admin-page/components/email-list-item/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils */ "./assets/entries/shared/utils.js");
/* harmony import */ var _sent_at__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sent-at */ "./assets/entries/admin-page/components/sent-at/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/email-list-item/style.css");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




function EmailListItem({
  email,
  view
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wmd-email-list-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "wmd-email-list-item__subject"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    onClick: view
  }, email.subject)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sent_at__WEBPACK_IMPORTED_MODULE_6__["default"], {
    email: email
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "wmd-email-list-item__to"
  }, email.to.map(_shared_utils__WEBPACK_IMPORTED_MODULE_5__.formatAddress).join(', ')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withDispatch)((dispatch, ownProps) => ({
  view() {
    return dispatch(_shared_constants__WEBPACK_IMPORTED_MODULE_4__.ADMIN_PAGE_STORE).viewEmail(ownProps.email.uuid);
  }
}))])(EmailListItem));

/***/ }),

/***/ "./assets/entries/admin-page/components/email-list/index.js":
/*!******************************************************************!*\
  !*** ./assets/entries/admin-page/components/email-list/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _email_list_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../email-list-item */ "./assets/entries/admin-page/components/email-list-item/index.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search */ "./assets/entries/admin-page/components/search/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context */ "./assets/entries/admin-page/context.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function EmailList() {
  const {
    isNetworkAdmin
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_7__["default"]);
  const queryId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_shared_constants__WEBPACK_IMPORTED_MODULE_6__.ADMIN_PAGE_STORE).getQueryId());
  const {
    emails,
    hasMore
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      emails: (queryId === 'main' ? select(_shared_constants__WEBPACK_IMPORTED_MODULE_6__.ADMIN_PAGE_STORE).getEmails(isNetworkAdmin) : select(_shared_constants__WEBPACK_IMPORTED_MODULE_6__.CORE_STORE).getQueryResults(queryId)) || [],
      hasMore: !!select(_shared_constants__WEBPACK_IMPORTED_MODULE_6__.CORE_STORE).getQueryHeaderLink('main', 'next')
    };
  }, [queryId, isNetworkAdmin]);
  const fetchQueryNextPage = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_shared_constants__WEBPACK_IMPORTED_MODULE_6__.CORE_STORE).fetchQueryNextPage;
  const fetchMore = () => fetchQueryNextPage(queryId);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dataLength: emails.length,
    next: fetchMore,
    hasMore: hasMore
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, emails.map(email => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_email_list_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
    email: email,
    key: email.uuid
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailList);

/***/ }),

/***/ "./assets/entries/admin-page/components/email-main/index.js":
/*!******************************************************************!*\
  !*** ./assets/entries/admin-page/components/email-main/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _email_recipients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../email-recipients */ "./assets/entries/admin-page/components/email-recipients/index.js");
/* harmony import */ var _sent_at__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sent-at */ "./assets/entries/admin-page/components/sent-at/index.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message */ "./assets/entries/admin-page/components/message/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/email-main/style.css");

/**
 * Internal dependencies
 */




function EmailMain({
  email
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    className: "wmd-email-main"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
    className: "wmd-email-main-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "wmd-email-main-header__subject"
  }, email.subject), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sent_at__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "wmd-email-main-header__sent-at",
    email: email
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_email_recipients__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "wmd-email-main-header__recipients",
    email: email
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_message__WEBPACK_IMPORTED_MODULE_3__["default"], {
    email: email
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailMain);

/***/ }),

/***/ "./assets/entries/admin-page/components/email-recipients/index.js":
/*!************************************************************************!*\
  !*** ./assets/entries/admin-page/components/email-recipients/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailRecipients)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils */ "./assets/entries/shared/utils.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/email-recipients/style.css");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function AddressList({
  label,
  addresses
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", null, addresses.map(_shared_utils__WEBPACK_IMPORTED_MODULE_3__.formatAddress).join(', ')));
}
function EmailRecipients({
  email,
  className
}) {
  const to = email.to || [];
  const cc = email.cc || [];
  const bcc = email.bcc || [];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("dl", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wmd-email-recipients', className)
  }, to.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AddressList, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('To:', 'wp-mail-debugger'),
    addresses: to
  }), cc.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AddressList, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cc:', 'wp-mail-debugger'),
    addresses: cc
  }), bcc.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AddressList, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bcc:', 'wp-mail-debugger'),
    addresses: bcc
  }));
}

/***/ }),

/***/ "./assets/entries/admin-page/components/email-sidebar/index.js":
/*!*********************************************************************!*\
  !*** ./assets/entries/admin-page/components/email-sidebar/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_items_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar-items/errors */ "./assets/entries/admin-page/components/sidebar-items/errors/index.js");
/* harmony import */ var _sidebar_items_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar-items/headers */ "./assets/entries/admin-page/components/sidebar-items/headers/index.js");
/* harmony import */ var _api_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/sidebar */ "./assets/entries/admin-page/api/sidebar/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/email-sidebar/style.css");

/**
 * Internal dependencies
 */




function EmailSidebar({
  email
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-email-sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_items_errors__WEBPACK_IMPORTED_MODULE_1__["default"], {
    email: email
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_items_headers__WEBPACK_IMPORTED_MODULE_2__["default"], {
    email: email
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_api_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarSlot, {
    fillProps: {
      email
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailSidebar);

/***/ }),

/***/ "./assets/entries/admin-page/components/header/index.js":
/*!**************************************************************!*\
  !*** ./assets/entries/admin-page/components/header/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings */ "./assets/entries/admin-page/components/settings/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/header/style.css");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function Header({
  queryId,
  refresh,
  isRefreshing,
  emptyInbox,
  isEmptyingInbox,
  numFound
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-header__actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-header__actions-container--left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "update",
    onClick: refresh,
    isBusy: isRefreshing,
    disabled: queryId !== 'main'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Refresh', 'wp-mail-debugger')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "trash",
    onClick: emptyInbox,
    isBusy: isEmptyingInbox
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Empty Inbox', 'wp-mail-debugger'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-header__actions-container--right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings__WEBPACK_IMPORTED_MODULE_6__["default"], null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-header__title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WP Mail Debugger', 'wp-mail-debugger')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wmd-header__title-found-count"
  }, numFound)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => ({
  queryId: select(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.ADMIN_PAGE_STORE).getQueryId(),
  numFound: select(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE).getQueryHeader(select(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.ADMIN_PAGE_STORE).getQueryId(), 'x-wp-total'),
  isRefreshing: select(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE).isQuerying('main'),
  isEmptyingInbox: select(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE).isEmptyingInbox()
})), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withDispatch)(dispatch => ({
  emptyInbox: dispatch(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE).emptyInbox,
  refresh() {
    dispatch(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE).query('main', {
      context: 'embed'
    });
  }
}))])(Header));

/***/ }),

/***/ "./assets/entries/admin-page/components/message/html-tab.js":
/*!******************************************************************!*\
  !*** ./assets/entries/admin-page/components/message/html-tab.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


class HTMLTab extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
    this.onLoad = this.onLoad.bind(this);
    this.onRef = this.onRef.bind(this);
  }
  onLoad() {
    if (this.ref) {
      this.setState({
        height: this.ref.contentWindow.document.body.scrollHeight
      });
      const links = this.ref.contentWindow.document.querySelectorAll('a');
      for (const link of links) {
        link.setAttribute('target', '_blank');
      }
    }
  }
  onRef(ref) {
    this.ref = ref;
    if (this.state.height === 0) {
      const height = ref.contentWindow.document.body.scrollHeight;
      if (height) {
        this.setState({
          height
        });
      }
    }
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wmd-message-tab wmd-message-tab--html"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
      srcDoc: this.props.email.message,
      width: "100%",
      height: this.state.height,
      onLoad: this.onLoad,
      ref: this.onRef,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Message Preview', 'wp-mail-debugger'),
      sandbox: "allow-same-origin allow-top-navigation-by-user-activation allow-popups"
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLTab);

/***/ }),

/***/ "./assets/entries/admin-page/components/message/index.js":
/*!***************************************************************!*\
  !*** ./assets/entries/admin-page/components/message/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _html_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-tab */ "./assets/entries/admin-page/components/message/html-tab.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/message/style.css");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const getTabs = memize__WEBPACK_IMPORTED_MODULE_1___default()(email => {
  const tabs = [];
  if (email.headers['Content-Type'] && email.headers['Content-Type'].includes('text/html')) {
    tabs.push({
      name: 'html',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('HTML', 'wp-mail-debugger'),
      email
    });
  }
  tabs.push({
    name: 'text',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Plain Text', 'wp-mail-debugger'),
    email
  });
  return tabs;
});
function renderTab(tab) {
  if (tab.name === 'html') {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_html_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
      email: tab.email
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-message-tab wmd-message-tab--text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, tab.email.message.trim()));
}
function Message({
  email
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: getTabs(email)
  }, renderTab);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

/***/ }),

/***/ "./assets/entries/admin-page/components/resend-action/index.js":
/*!*********************************************************************!*\
  !*** ./assets/entries/admin-page/components/resend-action/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResendAction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/resend-action/style.css");

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


function ResendAction({
  email
}) {
  const id = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useInstanceId)(ResendAction, 'wmd-resend-action');
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [toEmail, setToEmail] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    settings,
    isSending
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    settings: select(_shared_constants__WEBPACK_IMPORTED_MODULE_6__.CORE_STORE).getSettings(),
    isSending: select(_shared_constants__WEBPACK_IMPORTED_MODULE_6__.CORE_STORE).isSending(email.uuid)
  }), [email.uuid]);
  const {
    sendEmail
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_shared_constants__WEBPACK_IMPORTED_MODULE_6__.CORE_STORE);
  const send = e => {
    e.preventDefault();
    setOpen(false);
    sendEmail(email.uuid, toEmail?.length > 0 ? [toEmail] : []);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: "email",
    className: "wmd-detail-actions--send",
    disabled: settings.capture_mode === 'override' || isSending,
    isBusy: isSending,
    "aria-expanded": open,
    "aria-controls": id,
    onClick: () => setOpen(!open)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resend', 'wp-mail-debugger')), open && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Popover, {
    id: id,
    placement: "bottom-start",
    headerTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resend Email', 'wp-mail-debugger'),
    expandOnMobile: true,
    onClose: () => setOpen(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "wmd-resend",
    onSubmit: send
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: toEmail,
    onChange: next => setToEmail(next.trim()),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Recipient', 'wp-mail-debugger'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Optionally, enter a new email address to send this message to.', 'wp-mail-debugger')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "primary",
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Resend', 'wp-mail-debugger'),
    type: "submit"
  }))));
}

/***/ }),

/***/ "./assets/entries/admin-page/components/search/index.js":
/*!**************************************************************!*\
  !*** ./assets/entries/admin-page/components/search/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context */ "./assets/entries/admin-page/context.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/search/style.css");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function Search() {
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const isSearching = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE).isQuerying('search'));
  const isSearchEnabled = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.ADMIN_PAGE_STORE).isSearchEnabled());
  const {
    query
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE);
  const {
    enableSearch,
    disableSearch
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.ADMIN_PAGE_STORE);
  const {
    isNetworkAdmin
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const search = e => {
    e.preventDefault();
    if (!isSearchEnabled) {
      enableSearch();
    }
    query('search', {
      context: 'embed',
      search: searchTerm,
      global: isNetworkAdmin
    });
  };
  const cancel = () => {
    setSearchTerm('');
    disableSearch();
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "wmd-search",
    onSubmit: search
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: searchTerm,
    onChange: setSearchTerm,
    className: "wmd-search__control",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'LION')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "search",
    type: "submit",
    isBusy: isSearching,
    className: "wmd-search__trigger",
    disabled: searchTerm.length === 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "no-alt",
    className: "wmd-search__trigger",
    onClick: cancel,
    disabled: !isSearchEnabled
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./assets/entries/admin-page/components/sent-at/index.js":
/*!***************************************************************!*\
  !*** ./assets/entries/admin-page/components/sent-at/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SentAt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/sent-at/style.css");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

function SentAt({
  email,
  className
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("time", {
    dateTime: email.sent_at,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wmd-sent-at', className)
  }, (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.dateI18n)('M j g:i a', email.sent_at));
}

/***/ }),

/***/ "./assets/entries/admin-page/components/settings/index.js":
/*!****************************************************************!*\
  !*** ./assets/entries/admin-page/components/settings/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/settings/style.css");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function Settings() {
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const settings = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE).getSettings());
  const {
    updateSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_shared_constants__WEBPACK_IMPORTED_MODULE_5__.CORE_STORE);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "admin-settings",
    className: "wmd-header__actions--settings",
    onClick: () => setOpen(!open)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings', 'wp-mail-debugger')), open && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    placement: "bottom-start",
    headerTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Edit Settings', 'wp-mail-debugger'),
    expandOnMobile: true,
    onClose: () => setOpen(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wmd-settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Capture Mode', 'wp-mail-debugger'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Filter wp_mail()', 'wp-mail-debugger'),
      value: 'filter'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Override wp_mail()', 'wp-mail-debugger'),
      value: 'override'
    }],
    selected: settings.capture_mode,
    onChange: captureMode => updateSetting('capture_mode', captureMode),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('How should WP Mail Debugger capture emails. By letting the original mail through and adding filters, or completely overriding wp_mail().', 'wp-mail-debugger')
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./assets/entries/admin-page/components/sidebar-item/index.js":
/*!********************************************************************!*\
  !*** ./assets/entries/admin-page/components/sidebar-item/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SidebarItem({
  title,
  slug,
  children
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    className: `wmd-email-sidebar-item wmd-email-sidebar-item--${slug}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, title), children);
}

/***/ }),

/***/ "./assets/entries/admin-page/components/sidebar-items/errors/index.js":
/*!****************************************************************************!*\
  !*** ./assets/entries/admin-page/components/sidebar-items/errors/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Errors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidebar-item */ "./assets/entries/admin-page/components/sidebar-item/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/sidebar-items/errors/style.css");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function Errors({
  email
}) {
  if (!email.meta.errors?.length) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Errors', 'wp-mail-debugger'),
    slug: "errors"
  }, email.meta.errors.map((message, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    key: i,
    status: "error",
    isDismissible: false
  }, message)));
}

/***/ }),

/***/ "./assets/entries/admin-page/components/sidebar-items/headers/index.js":
/*!*****************************************************************************!*\
  !*** ./assets/entries/admin-page/components/sidebar-items/headers/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Headers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sidebar_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sidebar-item */ "./assets/entries/admin-page/components/sidebar-item/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./assets/entries/admin-page/components/sidebar-items/headers/style.css");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function Headers({
  email
}) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(email.headers)) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Headers', 'wp-mail-debugger'),
    slug: "headers"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("dl", null, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(email.headers, (value, header) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    key: header
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", null, `${header}:`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", null, value)))));
}

/***/ }),

/***/ "./assets/entries/admin-page/context.js":
/*!**********************************************!*\
  !*** ./assets/entries/admin-page/context.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const Context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isNetworkAdmin: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

/***/ }),

/***/ "./assets/entries/admin-page/store/actions.js":
/*!****************************************************!*\
  !*** ./assets/entries/admin-page/store/actions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DISABLE_SEARCH: () => (/* binding */ DISABLE_SEARCH),
/* harmony export */   ENABLE_SEARCH: () => (/* binding */ ENABLE_SEARCH),
/* harmony export */   VIEW_EMAIL: () => (/* binding */ VIEW_EMAIL),
/* harmony export */   VIEW_LIST: () => (/* binding */ VIEW_LIST),
/* harmony export */   disableSearch: () => (/* binding */ disableSearch),
/* harmony export */   enableSearch: () => (/* binding */ enableSearch),
/* harmony export */   viewEmail: () => (/* binding */ viewEmail),
/* harmony export */   viewList: () => (/* binding */ viewList)
/* harmony export */ });
function viewEmail(id) {
  return {
    type: VIEW_EMAIL,
    id
  };
}
function viewList() {
  return {
    type: VIEW_LIST
  };
}
function enableSearch() {
  return {
    type: ENABLE_SEARCH
  };
}
function disableSearch() {
  return {
    type: DISABLE_SEARCH
  };
}
const VIEW_EMAIL = 'VIEW_EMAIL';
const VIEW_LIST = 'VIEW_LIST';
const ENABLE_SEARCH = 'ENABLE_SEARCH';
const DISABLE_SEARCH = 'DISABLE_SEARCH';

/***/ }),

/***/ "./assets/entries/admin-page/store/index.js":
/*!**************************************************!*\
  !*** ./assets/entries/admin-page/store/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants */ "./assets/entries/shared/constants.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./assets/entries/admin-page/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./assets/entries/admin-page/store/selectors.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers */ "./assets/entries/admin-page/store/resolvers.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer */ "./assets/entries/admin-page/store/reducer.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_shared_constants__WEBPACK_IMPORTED_MODULE_2__.ADMIN_PAGE_STORE, {
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  controls: _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__.controls,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_5__,
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_6__["default"]
}));

/***/ }),

/***/ "./assets/entries/admin-page/store/reducer.js":
/*!****************************************************!*\
  !*** ./assets/entries/admin-page/store/reducer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./assets/entries/admin-page/store/actions.js");
/**
 * Internal dependencies
 */

const DEFAULT_STATE = {
  currentEmail: '',
  searchEnabled: false
};
function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.VIEW_EMAIL:
      return {
        ...state,
        currentEmail: action.id
      };
    case _actions__WEBPACK_IMPORTED_MODULE_0__.VIEW_LIST:
      return {
        ...state,
        currentEmail: ''
      };
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ENABLE_SEARCH:
      return {
        ...state,
        searchEnabled: true
      };
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DISABLE_SEARCH:
      return {
        ...state,
        searchEnabled: false
      };
    default:
      return DEFAULT_STATE;
  }
}

/***/ }),

/***/ "./assets/entries/admin-page/store/resolvers.js":
/*!******************************************************!*\
  !*** ./assets/entries/admin-page/store/resolvers.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEmails: () => (/* binding */ getEmails)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./assets/entries/shared/constants.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

function* getEmails(isNetworkAdmin) {
  yield _wordpress_data__WEBPACK_IMPORTED_MODULE_0__.controls.dispatch(_shared_constants__WEBPACK_IMPORTED_MODULE_1__.CORE_STORE, 'query', 'main', {
    context: 'embed',
    global: isNetworkAdmin
  });
}

/***/ }),

/***/ "./assets/entries/admin-page/store/selectors.js":
/*!******************************************************!*\
  !*** ./assets/entries/admin-page/store/selectors.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentEmail: () => (/* binding */ getCurrentEmail),
/* harmony export */   getEmails: () => (/* binding */ getEmails),
/* harmony export */   getQueryId: () => (/* binding */ getQueryId),
/* harmony export */   getSearchTerm: () => (/* binding */ getSearchTerm),
/* harmony export */   isSearchEnabled: () => (/* binding */ isSearchEnabled)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./assets/entries/shared/constants.js");
/**
 * WordPress dependencies
 */



/**
 * Get the currently being viewed email.
 *
 * @param {Object} state The state object.
 * @return {string} The email id. Empty string if on list view.
 */
function getCurrentEmail(state) {
  return state.currentEmail;
}

/**
 * Get the search term.
 *
 * @param {Object} state The state object.
 * @return {string} The search term. Empty string if no search.
 */
function getSearchTerm(state) {
  return state.searchTerm;
}

/**
 * Checks if the search view is enabled.
 *
 * @param {Object} state The state object.
 * @return {boolean} Whether search is enabled.
 */
function isSearchEnabled(state) {
  return state.searchEnabled;
}

/**
 * Get the active query id.
 *
 * @param {Object} state The state object.
 * @return {string} Query id.
 */
function getQueryId(state) {
  if (isSearchEnabled(state)) {
    return 'search';
  }
  return 'main';
}

/**
 * Get the emails for the main application view.
 *
 * @return {Array<Object>} List of email objects.
 */
const getEmails = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => select(_shared_constants__WEBPACK_IMPORTED_MODULE_1__.CORE_STORE).getQueryResults('main'));

/***/ }),

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

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/***/ ((module) => {

module.exports = function memize( fn, options ) {
	var size = 0,
		maxSize, head, tail;

	if ( options && options.maxSize ) {
		maxSize = options.maxSize;
	}

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				head.prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args )
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === maxSize ) {
			tail = tail.prev;
			tail.next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	return memoized;
};


/***/ }),

/***/ "./assets/entries/admin-page/components/detail-actions/style.css":
/*!***********************************************************************!*\
  !*** ./assets/entries/admin-page/components/detail-actions/style.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/detail/style.css":
/*!***************************************************************!*\
  !*** ./assets/entries/admin-page/components/detail/style.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/email-list-item/style.css":
/*!************************************************************************!*\
  !*** ./assets/entries/admin-page/components/email-list-item/style.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/email-main/style.css":
/*!*******************************************************************!*\
  !*** ./assets/entries/admin-page/components/email-main/style.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/email-recipients/style.css":
/*!*************************************************************************!*\
  !*** ./assets/entries/admin-page/components/email-recipients/style.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/email-sidebar/style.css":
/*!**********************************************************************!*\
  !*** ./assets/entries/admin-page/components/email-sidebar/style.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/header/style.css":
/*!***************************************************************!*\
  !*** ./assets/entries/admin-page/components/header/style.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/message/style.css":
/*!****************************************************************!*\
  !*** ./assets/entries/admin-page/components/message/style.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/resend-action/style.css":
/*!**********************************************************************!*\
  !*** ./assets/entries/admin-page/components/resend-action/style.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/search/style.css":
/*!***************************************************************!*\
  !*** ./assets/entries/admin-page/components/search/style.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/sent-at/style.css":
/*!****************************************************************!*\
  !*** ./assets/entries/admin-page/components/sent-at/style.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/settings/style.css":
/*!*****************************************************************!*\
  !*** ./assets/entries/admin-page/components/settings/style.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/sidebar-items/errors/style.css":
/*!*****************************************************************************!*\
  !*** ./assets/entries/admin-page/components/sidebar-items/errors/style.css ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/components/sidebar-items/headers/style.css":
/*!******************************************************************************!*\
  !*** ./assets/entries/admin-page/components/sidebar-items/headers/style.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/entries/admin-page/style.css":
/*!*********************************************!*\
  !*** ./assets/entries/admin-page/style.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-infinite-scroll-component/dist/index.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-infinite-scroll-component/dist/index.es.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

var ThresholdUnits = {
    Pixel: 'Pixel',
    Percent: 'Percent',
};
var defaultThreshold = {
    unit: ThresholdUnits.Percent,
    value: 0.8,
};
function parseThreshold(scrollThreshold) {
    if (typeof scrollThreshold === 'number') {
        return {
            unit: ThresholdUnits.Percent,
            value: scrollThreshold * 100,
        };
    }
    if (typeof scrollThreshold === 'string') {
        if (scrollThreshold.match(/^(\d*(\.\d+)?)px$/)) {
            return {
                unit: ThresholdUnits.Pixel,
                value: parseFloat(scrollThreshold),
            };
        }
        if (scrollThreshold.match(/^(\d*(\.\d+)?)%$/)) {
            return {
                unit: ThresholdUnits.Percent,
                value: parseFloat(scrollThreshold),
            };
        }
        console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...');
        return defaultThreshold;
    }
    console.warn('scrollThreshold should be string or number');
    return defaultThreshold;
}

var InfiniteScroll = /** @class */ (function (_super) {
    __extends(InfiniteScroll, _super);
    function InfiniteScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.lastScrollTop = 0;
        _this.actionTriggered = false;
        // variables to keep track of pull down behaviour
        _this.startY = 0;
        _this.currentY = 0;
        _this.dragging = false;
        // will be populated in componentDidMount
        // based on the height of the pull down element
        _this.maxPullDownDistance = 0;
        _this.getScrollableTarget = function () {
            if (_this.props.scrollableTarget instanceof HTMLElement)
                return _this.props.scrollableTarget;
            if (typeof _this.props.scrollableTarget === 'string') {
                return document.getElementById(_this.props.scrollableTarget);
            }
            if (_this.props.scrollableTarget === null) {
                console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      ");
            }
            return null;
        };
        _this.onStart = function (evt) {
            if (_this.lastScrollTop)
                return;
            _this.dragging = true;
            if (evt instanceof MouseEvent) {
                _this.startY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.startY = evt.touches[0].pageY;
            }
            _this.currentY = _this.startY;
            if (_this._infScroll) {
                _this._infScroll.style.willChange = 'transform';
                _this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
            }
        };
        _this.onMove = function (evt) {
            if (!_this.dragging)
                return;
            if (evt instanceof MouseEvent) {
                _this.currentY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.currentY = evt.touches[0].pageY;
            }
            // user is scrolling down to up
            if (_this.currentY < _this.startY)
                return;
            if (_this.currentY - _this.startY >=
                Number(_this.props.pullDownToRefreshThreshold)) {
                _this.setState({
                    pullToRefreshThresholdBreached: true,
                });
            }
            // so you can drag upto 1.5 times of the maxPullDownDistance
            if (_this.currentY - _this.startY > _this.maxPullDownDistance * 1.5)
                return;
            if (_this._infScroll) {
                _this._infScroll.style.overflow = 'visible';
                _this._infScroll.style.transform = "translate3d(0px, " + (_this.currentY -
                    _this.startY) + "px, 0px)";
            }
        };
        _this.onEnd = function () {
            _this.startY = 0;
            _this.currentY = 0;
            _this.dragging = false;
            if (_this.state.pullToRefreshThresholdBreached) {
                _this.props.refreshFunction && _this.props.refreshFunction();
            }
            requestAnimationFrame(function () {
                // this._infScroll
                if (_this._infScroll) {
                    _this._infScroll.style.overflow = 'auto';
                    _this._infScroll.style.transform = 'none';
                    _this._infScroll.style.willChange = 'none';
                }
            });
        };
        _this.onScrollListener = function (event) {
            if (typeof _this.props.onScroll === 'function') {
                // Execute this callback in next tick so that it does not affect the
                // functionality of the library.
                setTimeout(function () { return _this.props.onScroll && _this.props.onScroll(event); }, 0);
            }
            var target = _this.props.height || _this._scrollableNode
                ? event.target
                : document.documentElement.scrollTop
                    ? document.documentElement
                    : document.body;
            // return immediately if the action has already been triggered,
            // prevents multiple triggers.
            if (_this.actionTriggered)
                return;
            var atBottom = _this.isElementAtBottom(target, _this.props.scrollThreshold);
            // call the `next` function in the props to trigger the next data fetch
            if (atBottom && _this.props.hasMore) {
                _this.actionTriggered = true;
                _this.setState({ showLoader: true });
                _this.props.next && _this.props.next();
            }
            _this.lastScrollTop = target.scrollTop;
        };
        _this.state = {
            showLoader: false,
            pullToRefreshThresholdBreached: false,
        };
        _this.throttledOnScrollListener = throttle(150, _this.onScrollListener).bind(_this);
        _this.onStart = _this.onStart.bind(_this);
        _this.onMove = _this.onMove.bind(_this);
        _this.onEnd = _this.onEnd.bind(_this);
        return _this;
    }
    InfiniteScroll.prototype.componentDidMount = function () {
        if (typeof this.props.dataLength === 'undefined') {
            throw new Error("mandatory prop \"dataLength\" is missing. The prop is needed" +
                " when loading more content. Check README.md for usage");
        }
        this._scrollableNode = this.getScrollableTarget();
        this.el = this.props.height
            ? this._infScroll
            : this._scrollableNode || window;
        if (this.el) {
            this.el.addEventListener('scroll', this
                .throttledOnScrollListener);
        }
        if (typeof this.props.initialScrollY === 'number' &&
            this.el &&
            this.el instanceof HTMLElement &&
            this.el.scrollHeight > this.props.initialScrollY) {
            this.el.scrollTo(0, this.props.initialScrollY);
        }
        if (this.props.pullDownToRefresh && this.el) {
            this.el.addEventListener('touchstart', this.onStart);
            this.el.addEventListener('touchmove', this.onMove);
            this.el.addEventListener('touchend', this.onEnd);
            this.el.addEventListener('mousedown', this.onStart);
            this.el.addEventListener('mousemove', this.onMove);
            this.el.addEventListener('mouseup', this.onEnd);
            // get BCR of pullDown element to position it above
            this.maxPullDownDistance =
                (this._pullDown &&
                    this._pullDown.firstChild &&
                    this._pullDown.firstChild.getBoundingClientRect()
                        .height) ||
                    0;
            this.forceUpdate();
            if (typeof this.props.refreshFunction !== 'function') {
                throw new Error("Mandatory prop \"refreshFunction\" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage'");
            }
        }
    };
    InfiniteScroll.prototype.componentWillUnmount = function () {
        if (this.el) {
            this.el.removeEventListener('scroll', this
                .throttledOnScrollListener);
            if (this.props.pullDownToRefresh) {
                this.el.removeEventListener('touchstart', this.onStart);
                this.el.removeEventListener('touchmove', this.onMove);
                this.el.removeEventListener('touchend', this.onEnd);
                this.el.removeEventListener('mousedown', this.onStart);
                this.el.removeEventListener('mousemove', this.onMove);
                this.el.removeEventListener('mouseup', this.onEnd);
            }
        }
    };
    InfiniteScroll.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        // do nothing when dataLength and key are unchanged
        if (this.props.key === props.key &&
            this.props.dataLength === props.dataLength)
            return;
        this.actionTriggered = false;
        // update state when new data was sent in
        this.setState({
            showLoader: false,
            pullToRefreshThresholdBreached: false,
        });
    };
    InfiniteScroll.prototype.isElementAtBottom = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop + clientHeight >= target.scrollHeight - threshold.value);
        }
        return (target.scrollTop + clientHeight >=
            (threshold.value / 100) * target.scrollHeight);
    };
    InfiniteScroll.prototype.render = function () {
        var _this = this;
        var style = __assign({ height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' }, this.props.style);
        var hasChildren = this.props.hasChildren ||
            !!(this.props.children &&
                this.props.children instanceof Array &&
                this.props.children.length);
        // because heighted infiniteScroll visualy breaks
        // on drag down as overflow becomes visible
        var outerDivStyle = this.props.pullDownToRefresh && this.props.height
            ? { overflow: 'auto' }
            : {};
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: outerDivStyle, className: "infinite-scroll-component__outerdiv" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "infinite-scroll-component " + (this.props.className || ''), ref: function (infScroll) { return (_this._infScroll = infScroll); }, style: style },
                this.props.pullDownToRefresh && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { position: 'relative' }, ref: function (pullDown) { return (_this._pullDown = pullDown); } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: -1 * this.maxPullDownDistance,
                        } }, this.state.pullToRefreshThresholdBreached
                        ? this.props.releaseToRefreshContent
                        : this.props.pullDownToRefreshContent))),
                this.props.children,
                !this.state.showLoader &&
                    !hasChildren &&
                    this.props.hasMore &&
                    this.props.loader,
                this.state.showLoader && this.props.hasMore && this.props.loader,
                !this.props.hasMore && this.props.endMessage)));
    };
    return InfiniteScroll;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteScroll);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

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

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"admin-page": 0,
/******/ 			"./style-admin-page": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwp_mail_debugger"] = globalThis["webpackChunkwp_mail_debugger"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-admin-page"], () => (__webpack_require__("./assets/entries/admin-page.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=admin-page.js.map