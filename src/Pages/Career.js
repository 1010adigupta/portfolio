import React from "react";
import { styled } from "styled-components";

const Career = () => {
  return (
    <Content>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> Rust Developer </Emphasize>
          </Role>
          <Year>May 2023 - July 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.summerofbitcoin.org/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
            [
            <StyledLink
              href="https://github.com/talaia-labs/rust-teos/pull/222/files"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              code
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Summer of Bitcoin'23</RightHeader>
          <div class="detail">
          SoB '23 is a global, online summer internship program focused on introducing university students to Bitcoin open-source development.
          Developed Bolt 13 Bitcoin-compliant watchtower at Eye of Satoshi in Rust for lightning transactions.
          </div>
        </Right>
      </CareerDiv>

    </Content>
  );
};
const Content = styled.div`
  display: block;
`;
const CareerDiv = styled.div`
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

export default Career;
