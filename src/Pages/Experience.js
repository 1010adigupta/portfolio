import React from "react";
import { styled } from "styled-components";

const Experience = () => {
  return (
    <Content>
      <ExperienceDiv>
        <Left>
          <Role>
            <Emphasize> Title of the Company </Emphasize>
          </Role>
          <Year>May 2023 - July 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.google.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Position in the Company</RightHeader>
          <div class="detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </div>
        </Right>
      </ExperienceDiv>
      <ExperienceDiv>
        <Left>
          <Role>
            <Emphasize> Title of the Company </Emphasize>
          </Role>
          <Year>May 2023 - July 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.google.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Position in the Company</RightHeader>
          <div class="detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </div>
        </Right>
      </ExperienceDiv>
      <ExperienceDiv>
        <Left>
          <Role>
            <Emphasize> Title of the Company </Emphasize>
          </Role>
          <Year>May 2023 - July 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.google.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Position in the Company</RightHeader>
          <div class="detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </div>
        </Right>
      </ExperienceDiv>
      <ExperienceDiv>
        <Left>
          <Role>
            <Emphasize> Title of the Company </Emphasize>
          </Role>
          <Year>May 2023 - July 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.google.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Position in the Company</RightHeader>
          <div class="detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </div>
        </Right>
      </ExperienceDiv>
    </Content>
  );
};
const Content = styled.div`
  display: block;
`;
const ExperienceDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;
const Left = styled.div`
  width: 160px;
  flex-shrink: 0;
  margin-right: 20px;
  padding-top: 3px;
  text-align: right;
  font-weight: 700;
`;

const Year = styled.div`
  text-align: right;
  font-weight: 400;
  display: block;
`;
const Right = styled.div`
  display: block;
`;
const Role = styled.div`
  display: block;
`;
const Emphasize = styled.span`
  color: #d7d7d7;
  text-align: right;
  font-weight: 700;
`;
const LinkSpan = styled.div`
  font-style: normal;
  font-size: 0.8em;
  font-weight: 200;
  text-align: right;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #1bd207;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const RightHeader = styled.div`
  color: #ffffff;
  font-size: 1.2em;
  margin-bottom: 0.5rem;
  display: block;
`;

const Accomplishments = styled.div`
  font-style: normal;
  font-size: 0.8em;
  font-weight: 200;
  color: #464646;
  margin-top: 0.5rem;
`;

export default Experience;
