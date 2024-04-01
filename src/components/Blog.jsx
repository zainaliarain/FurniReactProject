import React from "react";
import recentImg1 from "../images/post-1.jpg";
// import recentImg2 from "../images/post-1.jpg";
// import recentImg3 from "../images/post-1.jpg";
function Blog() {
  return (
    <div>
      <div className="container">
        <div className="row-mt-5">
          <div className="col-6">
            <h2>Recent Blog</h2>
          </div>
          <div className="col-6">
            <a href="#">View All Posts</a>
          </div>
          <div className="row-mt-5">
            <div className="col-4">
              <div class="card">
                <div class="card-body">
                  <img alt="Post for Recent" src={recentImg1} />
                  <a href="">First Time Home Owner Ideas</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
