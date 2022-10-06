
import { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Section from './Section';
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {


    const { id } = useParams();
    const [car, setCar] = useState();

    useEffect(()=>{
        db.collection("cars")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setCar(doc.data());
            }else{
                //fsaddfsa
            }
        })
    },[])



    return(
        <>
        {car && (
            <Section
            title={car.title}
            description={car.description}
            backgroundImg={car.image}
            range= {car.range}
            time= {car.time}
            topSpeed= {car.topSpeed}
            peakPower= {car.peakPower}
            rightBtnText="Order Now"
        />
        )}
        
            <Section
                title="All-New Interior"
                backgroundImg="https://serving.photos.photobox.com/3854687917505c227c7b18d00a295b02dd5d34a055c48c8571c0b7d2c5f21d4a2c5544b7.jpg"

            />

        </>
    )
  };


  

export default Detail