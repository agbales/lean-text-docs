import React from 'react';
import './App.css';
import { LeanWrapper, Lean } from './Lean';
import styled from 'styled-components';

const ColorSection = styled.section`
  background-color: ${(props) => props.bgColor};
  padding-right: 50px;
  margin: 10px;
`;

function App() {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const chunk = (text) => text.match(/.{1,30}/g);

  return (
    <div className="App">
      <div class="row">
        <div class="column">
          <h1>Lean Text</h1>
          <p>A React solution for 3D text built with styled components.</p>

          <h1>Default Lean</h1>
          <ColorSection bgColor="#EEDD82">
            <LeanWrapper>
              <Lean>{text}</Lean>
            </LeanWrapper>
          </ColorSection>

          <h1>Subtle Lean</h1>
          <ColorSection bgColor="#ffbe76">
            <LeanWrapper perspective={2000}>
              <Lean>{text}</Lean>
            </LeanWrapper>
          </ColorSection>

          <h1>Rotate Y</h1>
          <ColorSection bgColor="#82EEDD">
            <div style={{ display: 'flex' }}>
              <LeanWrapper>
                <Lean rotateY={25} justify>
                  {text}
                </Lean>
              </LeanWrapper>
              <LeanWrapper>
                <Lean rotateY={-25} justify>
                  {text}
                </Lean>
              </LeanWrapper>
            </div>
          </ColorSection>

          <h1>Rotate Y - Example 2</h1>
          <ColorSection bgColor="#82eea7">
            <div style={{ display: 'flex' }}>
              <LeanWrapper>
                <Lean rotateY={25} justify>
                  {text.substr(0, text.length / 2)}
                </Lean>
              </LeanWrapper>
              <LeanWrapper>
                <Lean rotateY={25} justify>
                  {text.substr(0, text.length / 2)}
                </Lean>
              </LeanWrapper>
            </div>
          </ColorSection>

          <h1>3 - rotate X & Y</h1>
          <ColorSection bgColor="#ee8293">
            <LeanWrapper>
              <Lean rotateX={25} rotateY={-25}>
                {text}
              </Lean>
            </LeanWrapper>
          </ColorSection>

          <h1>4 - Long text (scrollable!)</h1>
          <ColorSection bgColor="#ee82c9">
            <LeanWrapper>
              <Lean rotateX={25} height={350}>
                {text}
                {text}
                {text}
                {text}
                {text}
              </Lean>
            </LeanWrapper>
          </ColorSection>

          <h1>5 - Creative twist ~~~ </h1>
          <ColorSection bgColor="#c9ee82">
            <LeanWrapper perspective={1000}>
              {chunk(text).map((s, i) => (
                <Lean rotateY={10 + i * 1.5}>{s}</Lean>
              ))}
            </LeanWrapper>
          </ColorSection>
        </div>
        <div class="column" style={{ position: 'fixed', top: '0', right: '0' }}>
          <img
            src="https://www.how-to-draw-funny-cartoons.com/image-files/two-point-perspective-6.gif"
            style={{ maxWidth: '500px', margin: '0 auto' }}
          />
          <p>Usage information: {text}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
