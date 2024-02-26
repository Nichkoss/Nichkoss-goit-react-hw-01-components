import styled from 'styled-components';

export const StatSection = styled.section`
  max-width: 400px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0px 0px 4px 4px;
  background: #fff;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;

export const Title = styled.h2`
  color: #4f2ee8;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.36px;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 1px solid #f4f4fd;
  background: #fff;

  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;

export const StatItem = styled.li`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  background: ${getRandomHexColor};
`;

export const Label = styled.span`
  color: #434455;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.32px;
`;

export const Percentage = styled.span`
  color: #434455;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.32px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
