import React, { useState, useEffect } from "react";
import Customer from "./components/Customer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import "./App.css";

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    width: "100%",
    magrinTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

function App() {
  let [customers, setCusomers] = useState([]);

  useEffect(() => {
    axiosTest();
  }, []);

  const axiosTest = () => {
    axios
      .get("/api/customers")
      .then((value) => {
        let copyData = value.data;
        console.log(copyData);
        setCusomers(copyData);
        console.log({ customers });
      })
      .catch((err) => console.log(err));
  };

  const classes = useStyles();

  return (
    <TableContainer style={{ width: "100%" }}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
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
            {customers ? (
              customers.map((e) => {
                console.log(e);
                return (
                  <Customer // map 을 사용하면 key값은 지정 해주셔야 합니다.
                    key={e._id}
                    id={e._id}
                    image={e.image}
                    name={e.name}
                    birth={e.birth}
                    gender={e.gender}
                    job={e.job}
                  />
                );
              })
            ) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                   <CircularProgress />
                </TableCell>
              </TableRow>
            // (
            //   <Box sx={{ display: "flex" }}>
            //     <CircularProgress />
            //   </Box>
            // )
            }
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
}

export default App;
