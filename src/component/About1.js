import React from "react"

const profile_image = "https:cdn-icons-png.flaticon.com/512/3048/3048127.png";

function About(){
    return(
        <section id="aboutSection" className="d-flex align-items-start">
            <div className="container-fluid mt-5">
                {/* About Me */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 text-secondary">About Me</h1>
                    </div>
                </div>
                {/* About me details */}
                <div className="row">
                    <div className="col-md-12 text-secondary">
                        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {/* Profile Picture card */}
                    <div className="col-md-2">
                        <div className="card">
                            <img src={profile_image} alt='no image' className="card-img-top" />
                        </div>
                    </div>
                    {/* Profile details card */}
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h5 className="text-center text-teal card-title">MERN Full stack Developer</h5>
                                <p className="text-justify">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">DOB</strong>
                                                <span className="text-teal float-end"> 30 Dec 1988</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Email</strong>
                                                <span className="text-teal float-end"> 30 Dec 1988</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Mobile</strong>
                                                <span className="text-teal float-end"> 30 Dec 1988</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">City</strong>
                                                <span className="text-teal float-end"> 30 Dec 1988</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Qualification</strong>
                                                <span className="text-teal float-end">B.Tech</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Mother's name</strong>
                                                <span className="text-teal float-end">parija.jamatia1@gmail.com</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Father's Name</strong>
                                                <span className="text-teal float-end"></span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Marital Status</strong>
                                                <span className="text-teal float-end">Not Married</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h3 className="display-3 text-teal text-center">Skills</h3>
                    </div>
                </div>
                {/* Skills Details */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">HTML</strong>
                                            <strong className="text-teal float-end">98%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-teal" style={{width: '98%'}}></div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">CSS</strong>
                                            <strong className="text-teal float-end">80%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-teal" style={{width: '80%'}}></div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">CSS</strong>
                                            <strong className="text-teal float-end">80%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-teal" style={{width: '80%'}}></div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">CSS</strong>
                                            <strong className="text-teal float-end">80%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-teal" style={{width: '80%'}}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <p>
                                            <strong className="text-secondary">HTML</strong>
                                            <strong className="text-teal float-end">98%</strong>
                                        </p>
                                        <div className="progress">
                                            <div className="progress-bar bg-teal" style={{width: '98%'}}></div>
                                        </div>
                                    </li>
                                    <li className="list-group-item"></li>
                                    <li className="list-group-item"></li>
                                    <li className="list-group-item"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About