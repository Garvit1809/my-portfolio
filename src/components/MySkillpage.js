import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 6rem;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  /* background-color: ${(props) => props.theme.body}; */
  padding: 2rem;
  width: 30vw;
  /* height: 60vh; */
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    padding-left: 1rem;
    line-height: 1.4;
  }
  ul {
    padding-left: 2rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkillpage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <PowerButton />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />

        <Main>
          <Description>
            <strong>Programming languages</strong>
            <p>Python, C++, MATLAB, 8085 Programming, LATEX</p>
          </Description>
          <Description>
            <strong>Data</strong>
            <p>Data Collection, Feature Extraction, Analysis & Interpretation</p>
          </Description>
          <Description>
            <strong>IOT</strong>
            <p>Raspberry Pi, FMCW Radar, FPGA, Arduino</p>
          </Description>
          <Description>
            <strong>Softwares</strong>
            <p>VS Code, Colab, Jupyter, Arduino IDE</p>
          </Description>
        </Main>

        <Main>
          <Description>
            <strong>Machine Learning</strong>
            <p>
              SVM, MLP, Binary Tree, Regression models & other models
            </p>
          </Description>
          <Description>
            <strong>Deep Learning</strong>
            <p>DNN, CNN, Bi-LSTM, YOLO, Open CV& other DL model.</p>
          </Description>
          <Description>
            <strong>Libraries </strong>
            <p>NumPy, TensorFlow, Pandas, Seaborn, Scikit-Learn</p>
          </Description>
          <Description>
            <strong>Soft Skills</strong>
            <p>Dedicated & Passionate, Excellent Communicator, Team Worker, Writing</p>
          </Description>
        </Main>
      </Box>
      <BigTitle text="SKILLS" top="78%" left="47%" />
    </ThemeProvider>
  );
};

export default MySkillpage;
