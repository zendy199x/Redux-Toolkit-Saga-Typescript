import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import { Student } from 'models';
import React from 'react';

const useStyles = makeStyles({
  table: {},
});

interface StudentRankingListProps {
  studentList: Student[];
}

const StudentRankingList = ({ studentList }: StudentRankingListProps) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Mark</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {studentList.map((student, idx) => (
            <TableRow key={student.id}>
              <TableCell align="center">{idx + 1}</TableCell>
              <TableCell align="left">{student.name}</TableCell>
              <TableCell align="right">{student.mark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentRankingList;
