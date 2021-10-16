import React, { useState } from 'react';
import Customer from './components/Customer'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {withStyles} from '@mui/material/styles';
import TableContainer from "@mui/material/TableContainer";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import './App.css';

const theme = createTheme();

const useStyles  = makeStyles ({
  root : {
    width : '100%' , 
    magrinTop : theme.spacing.unit * 3 , 
    overflowX : 'auto'
  },
  table : {
    minWidth : 1080
  }
});

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

  const classes = useStyles();

  return (
      <TableContainer style={{ width: '100%'  }} >
      <Paper className ={classes.root}>
        <Table className ={classes.table }>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
          {
          customers.map(e=>{
            return (
              <Customer // map 을 사용하면 key값은 지정 해주셔야 합니다.
              key = {e.id} id = {e.id} image = {e.image} name = {e.name } birth = {e.birth} gender= {e.gender} job = {e.job}
              />
            )
          })
        }
          </TableBody>
        </Table>
        
      </Paper>
      </TableContainer>
  );
}

export default App;
