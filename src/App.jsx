import React from 'react';
//import ReactDOM from 'react-dom';
import Card from "./Card";
import './index.css';
import Sdata from './Sdata';


const App=()=>(
  <>
    <h1 className="heading_style">List of top 6 Netflix Series</h1>
    
    {/* <Card 
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />  
    <Card 
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    /> 
    <Card 
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />  */}
    {/* {Sdata.map(function ncard(val){ */}
    {Sdata.map((val,index)=>{
      console.log(index);
      return(
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
    })}
  </>
);
export default App;