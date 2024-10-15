import React from 'react';
import Main from "../app/components/main/Main";
import Popular from '../app/components/popular/Populares';

const Index = () => {
  return <>
    <Main></Main>
    <Popular></Popular>
    <div className="bg-primary bg-opacity-30 h-screen flex items-center justify-center">
      <h1>Welcome</h1>
    </div>
    <div className="bg-secondary bg-opacity-30 h-screen">
    </div>
  </>
}

export default Index
