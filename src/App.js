import logo from './logo.svg';
import React, { useState } from 'react';
import Customer from './components/Customer'
import './App.css';

 
 

function App() {

  let [customers, setCustomer] = useState([
    {
      'id'  :  1,
      'image'  :  'https://placeimg.com/64/64/1',  
      'name'  :  '홍길동', 
      'birth' : '961122',
      'gender':  '남자',
      'job' : '학생'
     },
     {
      'id'  :  2,
      'image'  :  'https://placeimg.com/64/64/2',  
      'name'  :  '김주호', 
      'birth' : '950807',
      'gender':  '남자',
      'job' : '프로그래머'
     },
     {
      'id'  :  3,
      'image'  :  'https://placeimg.com/64/64/3',  
      'name'  :  '송상윤', 
      'birth' : '950802',
      'gender':  '남자',
      'job' : '사람'
     },
  ]) ;

  return (
      <div>
        {
          customers.map(e=>{
            console.log(e);
            return (
              <Customer // map 을 사용하면 key값은 지정 해주셔야 합니다.
              key = {e.id} id = {e.id} image = {e.image} name = {e.name } birth = {e.birth} gender= {e.gender} job = {e.job}
              />
            )
          })
        }
      </div>
  );
}

export default App;
