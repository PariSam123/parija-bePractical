import React from "react"

const profile_image = "https:cdn-icons-png.flaticon.com/512/3048/3048127.png";

function About(){
    return(
        <section id="aboutSection" className="d-flex align-items-start">
            <div className="container-fluid mt-5">
                <div className="row justify-content-center m-5">
                    {/* Profile Picture card */}
                    <div className="col-md-3">
                        <div className="card">
                            <img src={profile_image} alt='no image' className="card-img-top" />
                            <h4 className="text-center">Parija Jamatia</h4>
                        </div>
                    </div>
                    {/* Profile details card */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-light">
                                <h1 className="text-center text-teal card-title">About Me</h1>
                                <p className="text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-group">
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">DOB</strong>
                                                <span className="text-teal float-end"> 30 Dec 1988</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Email</strong>
                                                <span className="text-teal float-end">parija.jamatia123@gmail.com</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Mobile</strong>
                                                <span className="text-teal float-end">9876543210</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">City</strong>
                                                <span className="text-teal float-end">Bengaluru</span>
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
                                                <span className="text-teal float-end">Something Jamatia</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Father's Name</strong>
                                                <span className="text-teal float-end">Something Jamatia</span>
                                            </li>
                                            <li className="list-group-item m-2">
                                                <strong className="text-secondary">Language Known</strong>
                                                <span className="text-teal float-end">English,Hindi,Bengali</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Skills */}
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <h6 className="display-3 text-teal text-center">Skills</h6>
                                    </div>
                                </div>
                                {/* Skills Details */}
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        {/* <div className="card"> */}
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
                                                <li className="list-group-item mt-3">
                                                    <p>
                                                        <strong className="text-secondary">CSS</strong>
                                                        <strong className="text-teal float-end">80%</strong>
                                                    </p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-teal" style={{width: '80%'}}></div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item mt-3">
                                                    <p>
                                                        <strong className="text-secondary">JavaScript</strong>
                                                        <strong className="text-teal float-end">70%</strong>
                                                    </p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-teal" style={{width: '70%'}}></div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item mt-3">
                                                    <p>
                                                        <strong className="text-secondary">JQuery</strong>
                                                        <strong className="text-teal float-end">85%</strong>
                                                    </p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-teal" style={{width: '85%'}}></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                    <div className="col-md-6">
                                        {/* <div className="card"> */}
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <p>
                                                        <strong className="text-secondary">React</strong>
                                                        <strong className="text-teal float-end">50%</strong>
                                                    </p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-teal" style={{width: '50%'}}></div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item mt-3">
                                                    <p>
                                                        <strong className="text-secondary">BootStrap</strong>
                                                        <strong className="text-teal float-end">90%</strong>
                                                    </p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-teal" style={{width: '90%'}}></div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item mt-3">
                                                    <p>
                                                        <strong className="text-secondary">NodeJs</strong>
                                                        <strong className="text-teal float-end">80%</strong>
                                                    </p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-teal" style={{width: '80%'}}></div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item mt-3">
                                                    <p>
                                                        <strong className="text-secondary">Express Js</strong>
                                                        <strong className="text-teal float-end">10%</strong>
                                                    </p>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-teal" style={{width: '10%'}}></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About