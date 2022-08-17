"use strict";
exports.id = "component---src-pages-subject-jsx";
exports.ids = ["component---src-pages-subject-jsx"];
exports.modules = {

/***/ "./src/pages/subject.jsx?export=default":
/*!**********************************************!*\
  !*** ./src/pages/subject.jsx?export=default ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  data: {
    directus
  }
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, " Member in subject "), directus.subjects.map(subject => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Subject ID: ", subject.id_subject, "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Subject name : ", subject.subject_name, "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Teacher: Dr. ", subject.teacher), subject.member.map(member => member.students_id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginLeft: '20px'
    }
  }, "   Name: ", member.students_id.firstname, "  ", member.students_id.lastname, " ")), " ")));
}
const query = "2045167592";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-subject-jsx.js.map