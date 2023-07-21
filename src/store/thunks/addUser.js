import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://192.168.1.62:3001/users', {
    name: faker.person.fullName(),
  });

  return response.data;
});

export { addUser };
