import React from 'react';
import Main from "../app/components/main/Main";
import Popular from '../app/components/popular/Populares';
import Destinations from '../app/components/destinations/Destinations';
import Blog from '../app/components/blog/Blog';
import Banner from '../app/components/banner/Banner'

const Index = () => {
  return <>
    <Main></Main>
    <Popular></Popular>
    <Banner></Banner>
    <Destinations></Destinations>
    <Blog></Blog>
  </>
}

export default Index
