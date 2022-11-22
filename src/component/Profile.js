import React from "react"
export default function Profile(props) {
    return(
        <section id="profile" className="mt-5 profile">
            {/* Section Title */}
            <section className="section-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="display-3 text-teal text-center">Parija Jamatia</h3>
                            <p className="text-justify text-secondary">MERN FullStack Developer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high quality results under strict deadlines.This quality and results-based approach drove me to collaborate with the teams to create a responsive highly scalable web applications. Eager to obtain a challenging position at a prestigious company like a dream version that will expand my learning and build upon my developer skills.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile */}
            <section id="education">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="profile-title">Education</h3>
                            <div className="profile-item pb-0">
                                <h4>B.Tech in Electronics and Communication Engineering.</h4>
                                <h5>Year: 2017</h5>
                                <p>NIT Agartala</p>
                                <p>city: Agartala</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="profile-title">Training</h3>
                            <div className="profile-item pb-0">
                                <h4>MERN FullStack Development</h4>
                                <h5>Year: </h5>
                                <p>Institute name: Be-Practical Solutions</p>
                                <p>Bengaluru</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </section>
    )
}