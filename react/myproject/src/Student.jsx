import React from 'react'
import './student.css'
function Student({data}) {
  return (
    <div className='icard'>

{/*  */}

        { <table>
            <tbody>
                <tr>
                    <td colSpan={2}>
                      {data.college}
                    </td>
                </tr>

                <tr>
                    <td colSpan={2}>
                      {data.pic}
                    </td>
                </tr>
                
                   <tr>
                    <td>Name</td>
                    <td>{data.name}</td>
                    </tr>

                    <tr>
                    <td>Branch</td>
                    <td>{data.branch}</td>
                    </tr>

                    <tr>
                    <td>RollNo.</td>
                    <td>{data.roll}</td>   
                    </tr>

                    <tr>
                    <td>Section:</td>
                    <td>{data.section}</td>
                    </tr>
            </tbody>
        </table> }
    </div>
  )
}
// Student.defaultProps=
// {
//   college:"AKGEC"
// }
export default Student