import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'
export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
             <Heading title={heading}/>
             <div className="row">
              <div className="col-8 mx-auto">
              <p className="lead text-white mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              </div>
              <div className="col-4 ">
              <div class="card bg-dark text-white">
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="image goes here"/>
  <div class="card-body">
    <h5 class="card-title text-success">Just click photos</h5>
    <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/services/">
                    <button className="btn btn-warning btn-block">
                        {heading}
                    </button>
                   </Link>
  </div>
</div>
              </div>
             </div>
            </div>
        </section>
    )
}
