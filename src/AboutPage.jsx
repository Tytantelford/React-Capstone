import React from "react";
import "../styles/aboutpage.scss";

function AboutPage() {
  return (
    <div className="about-page">
      <h1>ABOUT</h1>

      <div className="section-wrapper">
        <h2>Capstone Process</h2>
        <p>
          This capstone was hard but kind of fun. It required me to do a lot of
          research and look back on past lessons. I started with my app.jsx, to
          my home page, to my headers then everything else from there
          <a href="https://fakestoreapi.com/docs" target="_blank">
            {" "}
            Fake API store
          </a>
        </p>
        <h2>Challenges and Solutions</h2>
        <p>
          My struggles were remembering everything. We went over so many things
          so I had to google a lot of stuff to remind me. I solved them just by
          time and how everything starts making mores sense the more I practice.
        </p>
        <h2>Favorite Languages</h2>
        <p>
          My favorite language is probably scss and js. It was cool seeing how
          react and javascript worked together and how it uses html too. They
          all tie together so it's hard to pick one. HTML was super simple, but
          it was cool using javascript and react in basically one.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
