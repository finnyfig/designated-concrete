import styled from "styled-components";
import Select from "react-select";

export const Title = styled.h3`
text-align: left;
font-size: 16px;
font-weight:500;
line-height: 24px;
margin-top: 0;
`;

export const SelectWrapper = styled.div`
background: white;
border: 1px solid #dfdfdf;
border-radius: 5px;
-moz-border-radius: 6px;
 -webkit-border-radius: 6px;
color: black;
padding: 1.5em;
width: 30%;
margin: 0 auto;
margin-top: 45px;

`;

export const Item = styled.div`
  display: flex;
  justifyContent: center;
  padding: .5rem;

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
`;


export const BarChartWrapper = styled.div`
background: white;
border: 1px solid #dfdfdf;
border-radius: 5px;
color: black;
padding: 1.5em;
width: 30%;
margin: 0 auto;
margin-top: 45px;

`;