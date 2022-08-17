import React from 'react'
import {graphql } from 'gatsby'
 

export default function ({data: {directus} }) {
    

    return <>
        <h1 className='title'> Member in subject </h1>
         {directus.subjects.map((subject)=> (


          <li>
 
            <div>Subject ID: {subject.id_subject}  </div>
            <div>Subject name : {subject.subject_name}  </div>
           <div>Teacher: Dr. {subject.teacher}</div>
            {subject.member.map((member) => 
            (member.students_id && <div style={{marginLeft: '20px'}}>   Name: {member.students_id.firstname}  {member.students_id.lastname} </div>))} {/* check ว่า ถ้าเป็น null ไม่ต้องแสดง */}  
          </li>
         ))}
    </>
}

export const query = graphql`
    query{
        directus {
          subjects {
            id_subject
            subject_name
            teacher
            member {
              students_id {
                firstname
                id_number
                lastname
              }
            }
          }
          }
    }
`


