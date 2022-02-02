import type { NextPage } from 'next';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 35px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 35px;
`;

const H1 = styled.h1`
  font-family: MajorMonoDisplay;
  margin-bottom: 16px;
`;

const Title = styled.p`
  font-family: Roboto;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 20px;
`;

const Video = styled.video`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Hero: NextPage = () => {
  return (
    <Container>
      <TextContainer>
        <H1>FERAS AHMAD</H1>
        <Title>front-end developer</Title>
      </TextContainer>
      <Video />
    </Container>
  );
};

export default Hero;
