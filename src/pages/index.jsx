import React from 'react'
import {graphql } from 'gatsby'
//import {graphql ,// Link } from 'gatsby'
 
const imageLink = 'http://localhost:8055/assets/'

export default function ({data: {directus} }) {
    

    return <>
        <h1 className='title'> Member </h1>
         {directus.students.map(( student )=> (


          <li>
            <div className="img-container">
            <img
              src={`${imageLink}${student.profile_image.filename_disk}`}
              alt="student"
              width="50" height="50"
              border-radius= "50%"
            />
          </div>


            <div>Student ID: {student.id_number}  </div>
            <div>Name : {student.firstname} {student.lastname} </div>
            <div>Year : {student.year}</div>
            {student.subject.map((course) =>{
                return(<div>
                   
            <div> Course: {course.subjects_id.id_subject} {course.subjects_id.subject_name}  sec : {course.subjects_id.section}</div>
            <div> Teacher : Dr. {course.subjects_id.teacher} </div>
                </div>
                )          
            })}
          </li>
         ))}
    </>
}

export const query = graphql`
    query{
        directus {
            students {
              id
              id_number
              lastname
              firstname
              year
              profile_image{
                filename_disk
              }
              subject {
                subjects_id {
                  id_subject
                  subject_name
                  section
                  teacher
                }
              }
            }
          }
    }
`





// export default function({ data: {allMarkdownRemark}}){
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