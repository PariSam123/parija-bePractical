import React from "react"
import { NavLink } from "react-router-dom"

function Pnf(){
    return(
        <section id="pnf" className="d-flex align-items-center mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-6 text-black mt-5">Oops! Something went wrong</h1>
                        <h3 className="display-6 text-black">Requested Path Not Found</h3>
                        <h4 className="display-3 text-danger">404 Error</h4>
                        <NavLink to={`/`} className="btn btn-success">Return Home</NavLink>
                    </div>
                </div>
            </div>
        </section> 
        // <div>Pnf</div>
    )
}

export default Pnf