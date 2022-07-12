import { Column, Row } from 'src/components';
import styled, { css } from 'styled-components';

export const DropDownSection = styled.div`
  position: relative;
  padding: 0rem;
  margin: 0rem;
  
`;

export const DropDownContainer = styled(Column)<{isRight: boolean | undefined}>`
  position: absolute;
  top: 3rem;
  ${(props) => 
    props.isRight ?  css`left: -4.3rem;` : css`right: -4.3rem;`
  }
  background: white;
  border-radius: 0.25rem;
  width: 10.87rem;
  padding: 1rem 0.3rem;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));
  z-index: 999;
  padding: 1rem;
  margin-bottom: 1rem;
  &::before{
    content: "";
    position: absolute;
    bottom: 100%;
    ${(props) => 
      props.isRight ?  css`right: 42%;` : css`left: 42%;`
    }
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
  @media (max-width: 1024px) {
    width: 11rem;
    ${(props) => 
      props.isRight ?  css`left: -7rem;` : css`right: -7rem;`
    }
    &::before{
      ${(props) => 
        props.isRight ?  css`right: 19%; ` : css`left: 19%;`
      }
    }
  }
`;

export const DropDownItem = styled(Row)<{
  active?: boolean;
  color?: string;
}>`
cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      background-color: #5657580a;
      color: white;
    `}
  :hover {
    background-color: #5657580a;
    padding: 0rem 0.3rem;
    border-radius: 0.25rem;
  }
  svg > * {
     fill: ${(props) => props.color};
    color: ${(props) => props.color};
  }
  color: ${(props) => props.color};
`;