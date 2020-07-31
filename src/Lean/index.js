import styled from 'styled-components';

export const LeanWrapper = styled.section`
  padding: ${(props) =>
    props.padding ? props.padding : '2rem 2rem 2rem 3rem'};
  perspective: ${(props) =>
    props.perspective ? `${props.perspective}px` : '500px'};
`;

export const Lean = styled.div`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
  max-width: ${(props) => (props.maxWidth ? `${props.width}px` : '100%')};
  max-height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  overflow-x: ${(props) => (props.height ? `scroll` : `visible`)};
  text-align: ${(props) => (props.justify ? 'justify' : 'left')};
  transform: ${(props) => {
    // Default lean back: (rotateX)
    // Default roatation: 25deg
    if (props.rotateX && props.rotateY) {
      return `rotateY(${props.rotateY}deg) rotateX(${props.rotateX}deg)`;
    }
    if (props.rotateY) {
      return `rotateY(${props.rotateY}deg)`;
    }
    return props.rotateX ? `rotateX(${props.rotateX}deg)` : 'rotateX(25deg)';
  }};
`;
