import React from 'react';
import Main from "../app/components/main/Main";
import Popular from '../app/components/popular/Populares';
import Destinations from '../app/components/destinations/Destinations';
import Blog from '../app/components/blog/Blog';

const Index = () => {
  return <>
    <Main></Main>
    <Popular></Popular>
    <Destinations></Destinations>
    <Blog></Blog>
    <div className='bg-quaternary/40 w-screen h-screen'></div>
  </>
}

export default Index
