import React from "react";
import recentImg1 from "../images/post-1.jpg";
import recentImg2 from "../images/post-2.jpg";
import recentImg3 from "../images/post-3.jpg";
import "./Blog.css";
// import recentImg2 from "../images/post-1.jpg";
// import recentImg3 from "../images/post-1.jpg";
function Blog() {
  const Blog = [
    {
      icon: recentImg1,
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: "Dec 19, 2021",
    },
    {
      icon: recentImg2,
      title: "How To Keep Your Furniture Clean",
      author: "Robert Fox",
      date: "Dec 15, 2021",
    },
    {
      icon: recentImg3,
      title: "Small Space Furniture Apartment Ideas",
      author: "Kristin Watson",
      date: "Dec 12, 2021",
    },
  ];
  return (
    <div>
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="row mb-5 mt-5 ">
          <div className="col-6 mb-5">
            <h2>Recent Blog</h2>
          </div>
          <div className="col-6 card-header">
            <a href="/">View All Posts</a>
          </div>
          <div className="row ">
            {Blog.map((Blog, index) => (
              <div className="col-4" key={index}>
                <div class="card" style={{ border: "none" }}>
                  <div class="card-body">
                    <a href="/link/to/somewhere">
                      <img alt="Post for Recent" src={Blog.icon} />
                    </a>
                    <a href="/link/to/#" style={{ marginTop: "20px" }}>
                      {Blog.title}
                    </a>
                    <div className="cardfooter">
                      <span>
                        by <a href="/link/to/somewhere">{Blog.author}</a>on
                        <a href="/link/to/somewhere">{Blog.date}</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
