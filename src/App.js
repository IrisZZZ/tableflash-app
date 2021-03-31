import React, { Component } from 'react';
import {Layout} from 'antd';
import Header from './component/Header'
import FoodCard from './component/FoodCard'
import CardList from './component/CardList'
import './static/css/index.css'
import Footer from './component/Footer';
function App(){
    return<div className="app" >
    <Layout className= "page">
      <Header/>
      
      <Layout.Content>
        <div className='wrap'>
        <CardList />
        </div>
      </Layout.Content>
      <Footer/>
    </Layout>

    </div>
}
export default App;