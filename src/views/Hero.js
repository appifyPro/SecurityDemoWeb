import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const Hero = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: [
        "<span style='color: #6a0572'> Made Easy</span>",
        "<span style='color: #007bff'> Accessible</span>",
        "<span style='color: #28a745'> Collaborative</span>",
        "<span style='color: #fd7e14'> Innovative</span>",
        "<span style='color: #dc3545'> Rewarding</span>",
      ],
      autoStart: true,
      loop: true,
      html: true
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 text-center">
          <h1 className="display-1 font-weight-bold">
          Secure your heterogenous web apps <br /> & public APIs 
          <span id="typewriter" className="text-success"></span>
          </h1>
          <p className="lead text-muted text-center display-6 my-2">
          Uncover your security weaknesses 24x7 and get actionable guidance <br/> to fix them - with Beagle Security's AI-driven comprehensive <br/> penetration tests and contextual reports.
          </p>
          <div className="mt-4 d-flex justify-content-center gap-2">
            <button href="/projects" className="btn btn-success btn-lg">
              Sign up
            </button>
            <button href="/about" className="btn btn-outline-secondary btn-lg">
              Product Tour
            </button>
          </div>
        </div>
      </div>
      <div className="card  mt-4 border-light">
      <div className="d-flex justify-content-center h5 card-header p-2 border-light">
      Rated 4.7/5 based on 237 reviews ISO 27001 certified
      </div>
      </div>
    </div>
  );
};

export default Hero;
