import React from "react";
import { styled } from "styled-components";

const Courses = () => {
  return (
    <Content>
      <Heading>Online Courses</Heading>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize>Udemy</Emphasize>
          </Role>
          <Year>June 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.udemy.com/certificate/UC-90b1468c-d6d7-43e8-a5ec-8cf91626ed57/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              certificate
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Advanced Solidity: Yul and Assembly</RightHeader>
          <div class="detail">
            Learned advanced implementaitons of Yul and Assembly level coding in solidity.
          </div>
        </Right>
      </CareerDiv>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize>Udemy</Emphasize>
          </Role>
          <Year>July 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://www.udemy.com/certificate/UC-9b666840-97a2-4f27-b89f-40f8e6baf2ac/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              certificate
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Advanced Solidity: Understanding and Optimizing Gas costs.</RightHeader>
          <div class="detail">
            Learned Advanced Gas optimzation techniques in solidity.
          </div>
        </Right>
      </CareerDiv>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> UC Berkeley RDI</Emphasize>
          </Role>
          <Year>Feb - May 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://zk-learning.org/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>ZKP MOOC</RightHeader>
          <div class="detail">
            The bootcamp focused on the theoretical aspects of ZK Proofs and
            constructing StyledLink ZK Proof using SNARKs, Polynomial
            Commitments, FRI, encryption algorithms and so much more.
          </div>
        </Right>
      </CareerDiv>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize>0xparc</Emphasize>
          </Role>
          <Year>Feb - March 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://learn.0xparc.org/materials/circom/learning-group-1/intro-zkp/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>Circom Zk Bootcamp</RightHeader>
          <div class="detail">
            Succesfully completed Zk circuit learning and implementaitons in circom language.
          </div>
        </Right>
      </CareerDiv>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> 0xparc </Emphasize>
          </Role>
          <Year>Jan 2023</Year>
          <LinkSpan>
            [
            <StyledLink
              href="https://zkiap.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              site
            </StyledLink>
            ]
          </LinkSpan>
        </Left>
        <Right>
          <RightHeader>
            [MIT IAP 2023] Modern Zero Knowledge Cryptography
          </RightHeader>
          <div class="detail">
            Studied the mathematical foundations of modern zero-knowledge
            protocols (interactive protocols, elliptic curve cryptography,
            pairing-based cryptography, polynomial commitment schemes, zkSNARKs,
            and more) & worked on practical constructions of digital systems
            enabled by ZK primitives
          </div>
        </Right>
      </CareerDiv>
      <Heading>Formal Education</Heading>
      <CareerDiv>
        <Left>
          <Role>
            <Emphasize> Indian Institute of Technology, Roorkee </Emphasize>
          </Role>
          <Year>Dec 2021 - March 2026</Year>
        </Left>
        <Right>
          <RightHeader>BS-MS, Mathematics and Computing</RightHeader>
          <div class="detail">
            Currenlty pursuing BS-MS in Mathematics and Computing, at IIT Roorkee. 
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
const Emphasize = styled.span`
  color: #d7d7d7;
  text-align: right;
  font-weight: 700;
`;
const Role = styled.div``;
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
const Right = styled.div`
  display: block;
`;
const RightHeader = styled.div`
  color: #ffffff;
  font-size: 1.2em;
  margin-bottom: 0.5rem;
  display: block;
`;
const Year = styled.div`
  text-align: right;
  font-weight: 400;
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

export default Courses;
