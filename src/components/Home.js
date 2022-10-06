import { useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Section from './Section';
import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../features/car/carSlice";
import {selectCars} from "../features/car/carSlice";

const Home = () => {
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(()=>{
    db.collection("cars").onSnapshot((snapshot)=>{
      let tempCars = snapshot.docs.map((doc)=>{
        return {id: doc.id, ...doc.data()}
      })
      dispatch(setCars(tempCars));
    })
  },[])

  return(
    <Container>
      {cars &&
        cars.map((car)=>(
          <Link to={`/detail/` + car.id}>
          <Section
            key={car.id}
            title={car.title}
            description={car.description}
            backgroundImg={car.image}
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
          />
          </Link>
        ))
      
      }
        
        <Section
          title="Lowest Cost Solar Panes in America"
          description="Money-back guarantee"
          backgroundImg="https://serving.photos.photobox.com/188066535599ff68f9f971e179cd027b09fb83c652a03b9c44ce52760b25dc24e0caab61.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="https://serving.photos.photobox.com/61058244e525de651b114146a53630ad471f5f8f240b26ac2990f67f6488ff1c29f10bd6.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Accessories"
          description=""
          backgroundImg="https://serving.photos.photobox.com/7314318212d46675c0222ce18853e708b56bb492141239b193ea2da1cc0e5bc1d593b9f7.jpg"
          leftBtnText="Shop now"
        />
    </Container>
  )
};

export default Home;

const Container = styled.div`
    height: 100vh;
    z-index: 10;
    
`
