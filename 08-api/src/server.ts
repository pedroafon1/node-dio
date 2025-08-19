import { json } from 'body-parser';
import express, {Request, Response} from 'express';
import createApp  from './app';
import app from './app';


const port = process.env.PORT;


app.listen(port, () => {
  console.log(`🔥 Server running at oirt http://localhost: ${port}`)
});