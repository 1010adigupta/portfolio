import React from "react";
import { styled } from "styled-components";

const Home = () => {
  return (
    <Content>
      <AboutMe>About Me</AboutMe>
      <Pic>
        <Image src="pfp.jpg" alt="profilepic" />
        <figcaption>
          <small> Nah, that's not me </small>
        </figcaption>
      </Pic>
      <Para>
        I&rsquo;m a blockchain research engineer, having proficiency in rust, solidity and related frameworks
        <br />
        <br />
       Currently doing research in MEV, Sequencing, Zk, and low level EVM functionalities.
        <br />
        <br />
        Feel free to browse through my projects, research papers and reading resources.
        <br />
        <br />
        
      </Para>
      <Contact>Contact</Contact>
      <Links>
        [
        <StyledLink
          href="mailto:1010adigupta@gmail.com"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Mail
        </StyledLink>
        ] [
        <StyledLink
          href="https://twitter.com/darex_1010"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Twitter
        </StyledLink>
        ] [
        <StyledLink
          href="https://github.com/1010adigupta"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          GitHub
        </StyledLink>
        ] [
        <StyledLink
          href="https://www.linkedin.com/in/aditya-gupta-905a61239/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          LinkedIn
        </StyledLink>
        ]
      </Links>
    </Content>
  );
};
const Content = styled.div`
  display: block;
  color: #9a9a9a;
`;
const AboutMe = styled.h2`
  font-family: Lato, Arial, sans-serif;
  font-weight: 400;
  color: #ffffff;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Pic = styled.figure`
  padding: 0.25rem;
  margin: 0 0;
  float: right;
  max-width: 185px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
`;
const Image = styled.img`
  width: auto;
  height: 140px;
  margin-left: auto;
  margin-right: auto;
  width: 185px;
  aspect-ratio: auto 185 / 185;
  overflow-clip-margin: content-box;
  overflow: clip;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #1bd207;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Para = styled.p``;
const Contact = styled.h2`
  font-family: Lato, Arial, sans-serif;
  font-weight: 400;
  color: #ffffff;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Links = styled.span``;

export default Home;
