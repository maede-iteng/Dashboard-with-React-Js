import React from 'react';
import '../assets/globalStyles/styles/main.css';
import FirstWidget from '../component/Home/FirstWidget';
import SecondWidget from '../component/Home/SecondWidget';
import Card from '../component/Home/Card';
import ThirdWidget from '../component/Home/ThirdWidget';
import TitleOfPages from '../component/TitleOfPages/TitleOfPages';

const Home = () => {
  return (
    <React.Fragment>
      <TitleOfPages
        title="Dashboard"
        welcomeMessage="Welcome to Edunet Dashboard page"
        prevPage="Home"
        currentPage="Dashboard"
        prevPageLink="/home"
        currentPageLink="/home"
      />
      <Card />
      <FirstWidget />
      <SecondWidget />
      <ThirdWidget />
    </React.Fragment>
  );
};
export default Home;
