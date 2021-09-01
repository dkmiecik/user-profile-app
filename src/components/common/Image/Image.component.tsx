import styled from 'styled-components';

export const Image = styled.img`
  width: 130px;
  height: 130px;
  object-fit: fill;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const Overlay = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  opacity: 0;
  background: grey;
  z-index: 0;
  top: 0;
  left: 0;
  transition: 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  ${ImageWrapper}:hover & {
    opacity: 1;
    z-index: 999;
    cursor: pointer;
  }
`;

export const OverlayText = styled.p`
  color: white;
  font-size: 14px;
  text-align: center;
`;
