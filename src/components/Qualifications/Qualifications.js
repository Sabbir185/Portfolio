import React from 'react';
import { Table } from 'react-bootstrap';

const Qualifications = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-xs-10 col-sm-8 col-md-7 col-lg-7 col-xlg-7">
                    <h4 className="pt-5 pb-4 aboutMe-headerColor"> <span className="aboutMe-mainTitle">Education</span> </h4>
                    <Table striped bordered hover size="sm" variant="dark" style={{color:'#CCD6F6'}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Level</th>
                                <th>Group</th>
                                <th>Grade/CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td colSpan="2">B.Sc. in Computer Science & Engineering</td>
                                <td>3.73/4 (on-going)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>HSC</td>
                                <td>Science</td>
                                <td>A</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>SSC</td>
                                <td>Science</td>
                                <td>A+</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default Qualifications;