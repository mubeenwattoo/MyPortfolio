import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import mine from "../assets/my 2.jpg";
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={mine}
          alt="Founder"
        />

        <h2>Mobeen Ahmad</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/c/Academind" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://web.facebook.com/mobeen.wattoo.146" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://github.com/mobeenwattoo" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;