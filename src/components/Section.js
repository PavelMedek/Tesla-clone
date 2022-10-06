import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import db from "../firebase";


const Section = ({title, description, leftBtnText, rightBtnText, backgroundImg, range, time, topSpeed, peakPower,}) => {
    const { id } = useParams();
    const [car, setCar] = useState();

    useEffect(()=>{
        db.collection("cars")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setCar(doc.data());
            }
        })
    },[])
  return(
      <Wrap bgImage={backgroundImg}>
        <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    
                    {leftBtnText && 
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    }


                    {range &&
                        <Stats>
                            <h2>{range} mi</h2>
                            <p>Range (est.)</p>
                        </Stats>
                    }
                    {time && 
                        <Stats>
                            <h2>{time} s</h2>
                            <p>0-60 mph*</p>
                        </Stats>
                    }
                    {topSpeed && 
                        <Stats>
                            <h2>{topSpeed} mph</h2>
                            <p>Top Spped</p>
                        </Stats>
                    }
                    {topSpeed && 
                        <Stats>
                            <h2>{peakPower} ph</h2>
                            <p>Peek Power</p>
                        </Stats>
                    }
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                    
                </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>

      </Wrap>
  )
};

export default Section;

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: url("/images/model-s.jpg");
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("${props.bgImage}")`}


`
const ItemText = styled.div`
    z-index: 10;
    padding-top:15vh;
    text-align: center;

`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width:768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform:uppercase;
    font-size: 12px;
    cursor:pointer;
    margin: 8px;

`
const RightButton = styled(LeftButton)`
    background:white;
    opacity: 0.56;
    color: black;
`
const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`
const Stats = styled.div`
    margin-right: 50px;
    h2{
        color:white;
    }
    p{
        color:white;
    }
`


