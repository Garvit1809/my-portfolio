import React from "react";
import styled from "styled-components";
import DrawSvg from "../subComponents/DrawSvg";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";

const Section = styled.div`
  /* border: 1px solid red; */
  position: relative;
  margin-top: 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 200vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 80%;
  height: 100%;
  display: flex;
`;

const ItemContainer = styled.div`
  width: 42%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid black;
`;

const Box = styled.p`
  height: fit-content;
  background-color: #eeedde;
  padding: 1rem;
  position: relative;
  border: 1px solid black;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 2em;
  text-transform: capitalize;
  color: black;
`;

const Text = styled.h3`
  display: block;
  font-size: 0.875em;
  // text-transform: capitalize;
  color: black;
  font-weight: 400;
  margin: 0.5rem 0;
`;

const RoadMapItem = ({ title, subtext }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Experience = () => {
  return (
    <Section>
      <ThemeProvider theme={lightTheme}>
        <LogoComponent theme="light" />
        <PowerButton />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />
        {/* <Title>My Education and Experience</Title> */}
        <Container>
          <SvgContainer>
            <DrawSvg />
          </SvgContainer>
          <Items>
            <Item>&nbsp;</Item>
            <RoadMapItem
              title="Research Intern @ IIIT Hyderabad"
              subtext="I am a research intern, collaborating with esteemed institutions such as IIIT Hyderabad, MNIT Jaipur, and Aligarh Muslim University. My work is primarily focused on a project funded by the Government of India, allowing me to delve into the fascinating field of Automotive Radar. In this project, we utilize the Point Cloud-Based approach that leverages the power of 77 GHz FMCW Radar and Deep Learning for accurate posture classification. Currently, my efforts are directed towards using TinyML to implement this posture classification on embedded hardware, specifically, the Raspberry Pi. The technologies used in this project include FMCW Radar, Python, MATLAB, Deep Learning, TinyML, Raspberry Pi and others."
            />
            <RoadMapItem
              title="Mitacs GRI Intern @ SFU, Canada"
              subtext="I had the opportunity to collaborate on developing the StudyMate website, a platform designed to provide quality homework support for elementary students. During this project, I was responsible for debugging and fixing front-end and back-end bugs hindering the website’s functionality. After successful testing, the website was up and running smoothly. In addition to this, I developed DataShareHub, a full-stack website aimed at sharing and storing datasets. This web application was built using the MERN stack. I also developed a personalized e-learning chatbot model for elementary school children. For this, I used Llama2, an open-source Large Language Model (LLM), and fine-tuned it to meet our specific needs. The technologies I used throughout these projects include MongoDB, Express, ReactJS, NodeJS, Thunder Client, and Large Language Model (LLM)."
            />
            <RoadMapItem
              title="Web Developer @ College Canteen"
              subtext="The College Canteen is an initiative to foster better connections between students and the college. I worked as a Web Developer in this startup. I utilized ReactJS to develop responsive user interface components, ensuring a seamless and engaging user experience. Additionally, I developed an intuitive opportunity posting dashboard for the organization, making it easier for them to share and manage opportunities. The technologies I used include MongoDB, ReactJS, TailwindCSS, and Postman."
            />
          </Items>
        </Container>
      </ThemeProvider>
    </Section>
  );
};

export default Experience;
