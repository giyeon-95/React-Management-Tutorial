import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Customer from "./Customer";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

function MainPage() {
  let [customers, setCusomers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axiosTest();
  }, []);

  const axiosTest = () => {
    axios
      .get("/api/customers")
      .then((value) => {
        let copyData = value.data;
        setCusomers(copyData);
      })
      .catch((err) => console.log(err));
  };

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
            ) : (
              <TableRow>
                <TableCell colSpan='6' align='center'>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
}

export default MainPage;
