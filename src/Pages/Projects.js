import React from "react";
import { styled } from "styled-components";

const Projects = () => {
  return (
    <Content>
      <Heading>ZK</Heading>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> Zk-Mask </Emphasize>
            <LinkSpan>
            [
            <StyledLink
              href="https://ethglobal.com/showcase/zkmask-0x1z4"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              link
            </StyledLink>
            ]
            [
            <StyledLink
              href="https://github.com/zkMask"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              code
            </StyledLink>
            ]
            </LinkSpan>
          </Role>
        </Left>

        <Right>
          <div>
            Developed circom circuits for Zk-Mask, a Zk based biometric authentication mobile application, which enables 2 factor authentication for ethereum transactions.
          </div>
        </Right>
      </CareerDiv>
      <Heading>Blockchain</Heading>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> rust-teos </Emphasize>
            <LinkSpan>
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
          </Role>
        </Left>

        <Right>
          <div>
            Developed Bolt 13 Bitcoin-compliant watchtower at Eye of Satoshi in rust, which is used to monitor lightning transactions, coded the development of a non-accountable mode for the watchtower.
          </div>
        </Right>
      </CareerDiv>
    </Content>
  );
};

const Content = styled.div`
  display: block;
`;
const Heading = styled.h2`
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

export default Projects;
