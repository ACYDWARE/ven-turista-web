import React from 'react';
import Main from "../app/components/main/Main";
import Popular from '../app/components/popular/Populares';
import Destinations from '../app/components/destinations/Destinations';

const Index = () => {
  return <>
    <Main></Main>
    <Popular></Popular>
    <Destinations></Destinations>
    <div className="bg-secondary bg-opacity-30 h-screen">
    </div>
  </>
}

export default Index
