import { Box, makeStyles, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import studentApi from 'api/studentApi';
import { Student } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

const useStyles = makeStyles((theme) => ({
  back: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const AddEditPage = () => {
  const classes = useStyles();

  const { studentId } = useParams<{ studentId: string }>();
  const isEdit = Boolean(studentId);
  const [student, setStudent] = useState<Student>();

  useEffect(() => {
    if (!studentId) return;

    // IFFE
    (async () => {
      try {
        const data: Student = await studentApi.getById(studentId);
        setStudent(data);
      } catch (error) {
        console.log(`Failed to fetch student details`, error);
      }
    })();
  }, [studentId]);

  const handleStudentFormSubmit = (formValues: Student) => {
    // TODO: Handle submit
  };

  const initialValues: Student = {
    name: '',
    age: '',
    mark: '',
    gender: 'male',
    city: '',
    ...student,
  } as Student;

  return (
    <Box>
      <Link to="/admin/students">
        <Typography variant="caption" className={classes.back}>
          <ChevronLeft /> Back to student list
        </Typography>
      </Link>

      <Typography variant="h5">
        {isEdit ? 'Update student info' : 'Add new student'}
      </Typography>

      {(!isEdit || Boolean(student)) && (
        <Box mt={3}>
          <StudentForm
            initialValues={initialValues}
            onSubmit={handleStudentFormSubmit}
          />
        </Box>
      )}
    </Box>
  );
};

export default AddEditPage;
