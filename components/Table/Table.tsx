import React from "react";
import styled from "styled-components";
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    backgroundColor: "#000",
  },
});

const TableContainerEl = styled.div`
  margin-top: 4em;
`;

export interface TableData {
  head: {
    keys: string[];
  };
  body: {
    values: string[][];
  };
  tableTitle: string;
}

interface TableProps {
  data: TableData;
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <TableContainerEl>
      <h3>{data.tableTitle || "Table title not specified"}</h3>

      <TableContainer component={Paper}>
        <Table className={classes.table} size="medium">
          <TableHead>
            <TableRow>
              {data.head.keys.map((headElement: string, index) => {
                return (
                  <StyledTableCell key={index} style={{ fontWeight: "bold" }}>
                    {headElement}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.body.values.map((row, index) => (
              <StyledTableRow key={index}>
                {row.map((value: string, index) => {
                  return (
                    <TableCell align="left" key={index}>
                      {value}
                    </TableCell>
                  );
                })}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableContainerEl>
  );
};

export default TableComponent;
