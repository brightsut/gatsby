import React from 'react'
import {graphql } from 'gatsby'
 

export default function ({data: {directus} }) {
    

    return <>
        <h1 className='title'> table subject </h1>


         {directus.subjects.map((subject)=> (
                
          <li>
            <div>Subject ID: {subject.id_subject}  </div>
            <div>Subject name : {subject.subject_name}  </div>
           <div>Teacher: Dr. {subject.teacher}</div>
           <div> sec: {subject.section} </div>
            {subject.time.map((times) =>
            <div>
                
            <div style={{marginLeft:'20px'}}> day : {times.time_id.day}</div>    
            <div style={{marginLeft: '20px'}}>   
            start : {times.time_id.start} </div>
            <div style={{marginLeft: '20px'}}> end: {times.time_id.end} </div>
            
            </div>
            )}
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
            section
            member {
              students_id {
                firstname
                id_number
                lastname
              }
            } 
            time {
                time_id {
                  end
                  day
                  start
                }
              }
          }
          }
    }
`


