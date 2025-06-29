"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: any,
  calories: any,
  fat: any,
  carbs: any,
  protein: any
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("- 1 davidkim205/Rhea-72b-v0.5", 81.22, 79.78, 91.15, 77.95),
  createData(" 2 MTSAIR/MultiVerse_70B", 237, 9.0, 37, 4.3),
  createData("3 SF-Foundation/Ein-72B-v0.11", 262, 16.0, 24, 6.0),
  createData("4 abacusai/Smaug-72B-v0.1", 305, 3.7, 67, 4.3),
  createData("5 ibivibiv/alpaca-dragon-72b-v1", 356, 16.0, 49, 3.9),
  createData("6 mistralai/Mixtral-8x22B-Instruct-v0.1", 159, 6.0, 24, 4.0),
  createData("7 moreh/MoMo-72B-lora-1.8.7-DPO", 237, 9.0, 37, 4.3),
  createData("8 cloudyu/TomGrc_FusionNet_34Bx2_MoE_", 262, 16.0, 24, 6.0),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell># Model Name</StyledTableCell>
            <StyledTableCell align="right">Average</StyledTableCell>
            <StyledTableCell align="right">ARC</StyledTableCell>
            <StyledTableCell align="right">HellaSwag</StyledTableCell>
            <StyledTableCell align="right">MMLU</StyledTableCell>
            <StyledTableCell align="right">TruthfulQA</StyledTableCell>
            <StyledTableCell align="right">Winogrande</StyledTableCell>
            <StyledTableCell align="right">GSM8K</StyledTableCell>
            <StyledTableCell align="right">Usage</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow
              key={row.name}
              className={index % 2 === 0 ? "odd-rows" : "even-rows"}
            >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
