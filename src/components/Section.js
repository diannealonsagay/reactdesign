import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';


//apply style to section comp here. styled const below give diffent types to the sections below like div, image, etc
//you can pass data using styled components with the ${}, even in css style like below
const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto; 
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
   
`
//gridtemplaterow splits section group, 300px for the logo and auto for remaining space
const SectionLogo = styled.img`
    align-self: end; 
    width: 128px;
    margin: 0 auto;
`
//divide section title group into 2 columns as well for title and text
//grid template rows below remove space generated between sections that is activated by @media
//media for below changes them to be on top of another for mobile
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 4px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
    @media (max-width: 720px) {
        font-size: 40px;
    }}
`

const SectionText = styled.p`
    color: white;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px; 
    transform: rotate(180deg);
`
// sectiongroup is a style component
// when writing styled components assume every class name is a component

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo}/>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section