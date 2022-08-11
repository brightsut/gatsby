"use strict";
exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2332);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//import {graphql ,// Link } from 'gatsby'
const imageLink='http://localhost:8055/assets/';/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({data:{directus}}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"title"}," Member "),directus.students.map(student=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"img-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:`${imageLink}${student.profile_image.filename_disk}`,alt:"student",width:"50",height:"50","border-radius":"50%"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,"Student ID: ",student.id_number,"  "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,"Name : ",student.firstname," ",student.lastname," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,"Year : ",student.year),student.subject.map(course=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null," Course: ",course.subjects_id.id_subject," ",course.subjects_id.subject_name,"  sec : ",course.subjects_id.section),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null," Teacher : Dr. ",course.subjects_id.teacher," "));}))));}const query="4045041455";// export default function({ data: {allMarkdownRemark}}){
//    // console.log(data)
//     return <>
//         <h1 className="title"> Home </h1>
//         {allMarkdownRemark.nodes.map(( {id , frontmatter })=> {
//             return <p key={id}>
//                <Link to= {frontmatter.path}>{frontmatter.title}</Link> 
//             </p>
//         })}
//     </>
// }
// export const query = graphql`
//     query{
//         allMarkdownRemark{
//             nodes{
//                 id
//                 frontmatter{
//                     title
//                     path
//                 }
//             }
//         }
//     }
// `

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jsx.js.map