import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="container section-blog" id="blog">
      <p className="blog-super-title">BLOG POSTS</p>
      <div className="blog-box">
        <div className="main-blog">
          <p className="main-blog-tag">Ear</p>
          <p className="main-blog-title">EAR WAX</p>
          <p className="main-blog-text">
            Ear wax, also known as cerumen, is a natural substance produced by
            glands in the ear canal. It serves several important purposes.
            Despite its benefits, excessive ear wax buildup can lead to hearing
            problems or discomfort...
          </p>
          <Link to="/earwax" className="main-blog-footer" target="_blank">
            → read full blog ←
          </Link>
        </div>
        <div className="grid grid--2-cols">
          <img
            src="./images/ear/ear-sq-1200.jpg"
            alt="ear wax"
            className="main-blog-img"
          />
          <img
            src="./images/ear/ear-model-sq-1200.jpg"
            alt="ear wax"
            className="main-blog-img"
          />
        </div>
      </div>
      <div className="other-blog grid grid--4-cols">
        <div className="blog-item">
          <div>
            <p className="other-blog-tag">Nose</p>
            <p className="other-blog-title">Allergic Rhinitis</p>
            <p className="other-blog-text">
              How to diagnose and why to treat upper repiratory tract allergies?
              An insight into allergies...
            </p>
            <Link to="/ar" className="other-blog-footer" target="_blank">
              → read full blog ←
            </Link>
          </div>
        </div>
        <div className="blog-item">
          <div>
            <p className="other-blog-tag">Nose</p>
            <p className="other-blog-title">Septoplasty</p>
            <p className="other-blog-text">
              Most frequently asked - Do we need to undergo septoplasty? The
              myths and facts are abound......
            </p>
            <Link
              to="/septoplasty"
              className="other-blog-footer"
              target="_blank"
            >
              → read full blog ←
            </Link>
          </div>
        </div>
        <div className="blog-item">
          <div>
            <p className="other-blog-tag">Throat</p>
            <p className="other-blog-title">Voice Disorders</p>
            <p className="other-blog-text">
              The underrated but one of the most prominent feature of our
              personailty is our voice...{" "}
            </p>
            <Link to="/voice" className="other-blog-footer" target="_blank">
              → read full blog ←
            </Link>
          </div>
        </div>
        <div className="blog-item">
          <div>
            <p className="other-blog-tag">Misc</p>
            <p className="other-blog-title">Endoscopy</p>
            <p className="other-blog-text">
              Types of endoscopies in E.N.T. Why is it done, when to get it
              done, how it is done, what to expect...
            </p>
            <Link className="other-blog-footer" to="/endoscopy" target="_blank">
              → read full blog ←
            </Link>
          </div>
        </div>
      </div>
      <div className="container blog-footer">
        <Link to="/blogpage" className="blog-footer-text" target="_blank">
          Read More Blogs →
        </Link>
      </div>
    </section>
  );
};

export default Blog;
