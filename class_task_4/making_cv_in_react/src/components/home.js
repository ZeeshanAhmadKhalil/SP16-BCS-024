import React from 'react'

const home=(props)=>{
    return(
        <div id="content_container">
            <table >
                <tbody>
                <tr>
                    <td><b>Address</b></td>
                    <td>{props.address}</td>
                </tr>
                <tr>
                    <td><b>Permanent Address</b></td>
                    <td>{props.permanent_address}</td>
                </tr>
                <tr>
                    <td><b>Contact No</b></td>
                    <td>{props.contact_no}</td>
                </tr>
                <tr>
                    <td id="main_heading" colSpan="2">Personal Information</td>
                </tr>
                <tr>
                    <td><b>Father Name</b></td>
                    <td>{props.father_name}</td>
                </tr>
                <tr>
                    <td><b>Date Of Birth</b></td>
                    <td>{props.DOB}</td>
                </tr>
                <tr>
                    <td><b>Relegion</b></td>
                    <td>{props.relegion}</td>
                </tr>
                <tr>
                    <td><b>Domicile</b></td>
                    <td>{props.domicile}</td>
                </tr>
                <tr>
                    <td><b>CNIC</b></td>
                    <td>{props.cnic}</td>
                </tr>
                <tr>
                    <td><b>Nationality</b></td>
                    <td>{props.nationality}</td>
                </tr>
                <tr>
                    <td><b>Sex</b></td>
                    <td>{props.sex}</td>
                </tr>
                <tr>
                    <td><b>Status</b></td>
                    <td>{props.status}</td>
                </tr>
                <tr>
                    <td id="main_heading" colSpan="2">Languages</td>
                </tr>
                <tr>
                    <td><b>Mother Tongue</b></td>
                    <td>{props.mother_tongue}</td>
                </tr>
                <tr>
                    <td><b>Native Tongue</b></td>
                    <td>{props.native_tongue}</td>
                </tr>
                </tbody>
            </table>
            
        </div>
    )
}
export default home