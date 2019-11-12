import React from 'react'

const about=(props)=>{
    return(
        <div id="content_container">
            <table >
                <tbody>
                <tr>
                    <td id="main_heading" colSpan="2">Academic Information</td>
                </tr>
                <tr>
                    <td><b>Matric Science</b></td>
                    <td>{props.matric}</td>
                </tr>
                <tr>
                    <td><b>Pre-Engineering</b></td>
                    <td>{props.fsc}</td>
                </tr>
                <tr>
                    <td><b>BS(Computer Science)</b></td>
                    <td>{props.bs}</td>
                </tr>
                <tr>
                    <td id="main_heading" colSpan="2">Tools</td>
                </tr>
                <tr>
                    <td><b>Android Apps</b></td>
                    <td>{props.java}</td>
                </tr>
                <tr>
                    <td><b>Web Apps</b></td>
                    <td>{props.web}</td>
                </tr>
                <tr>
                    <td><b>Windows Apps</b></td>
                    <td>{props.window}</td>
                </tr>
                <tr>
                    <td><b>D-Apps</b></td>
                    <td>{props.dapp}</td>
                </tr>
                <tr>
                    <td colSpan="2" id="main_heading" colSpan="2">Personal Projects</td>
                </tr>
                <tr>
                    <td colSpan="2" id="project">{props.project1}</td>
                </tr>
                <tr>
                    <td colSpan="2" id="project">{props.project2}</td>
                </tr>
                <tr>
                    <td colSpan="2" id="project">{props.project3}</td>
                </tr>
                <tr>
                    <td colSpan="2" id="project">{props.project4}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default about