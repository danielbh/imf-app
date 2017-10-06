import express from 'express';
import moment from 'moment';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { random } from 'faker';
import { generateFakeEntries } from './scripts/dev/generateFakeEntries';

let data = [
  ...generateFakeEntries(5,  moment().subtract(1, 'weeks'), moment()),
  ...generateFakeEntries(5,  moment().subtract(1, 'months'), moment()),
  ...generateFakeEntries(5,  moment().subtract(3, 'months'), moment()),
  ...generateFakeEntries(5,  moment().subtract(1, 'years'), moment()),
  ...generateFakeEntries(5,  moment().subtract(2, 'years'), moment())
].sort((a, b) => a.date - b.date);

const app = express();
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// This is a development server not meant for production. It is being used as a quick tool for the React
// frontend.
app.get('/api/entries', (req, res) => res.status(200).send(data));

app.post('/api/entries', (req, res) => {
  const { date, duration, weight, bodyFat } = req.body;
  const id = random.uuid();
  data.push({ id, date, duration, weight, bodyFat });
  res.status(200).send({ id });
});

// We use POST instead of DELETE because we are potentially deleting multiple entries.
// https://stackoverflow.com/questions/2421595/restful-way-for-deleting-a-bunch-of-items/2421643#2421643
app.post('/api/entries/delete', (req, res) => {
  data = data.filter(e => !req.body.ids.find(id => id === e.id));
  res.status(200).send({ ids: req.body.ids });
});

app.listen(8081, ()  => console.log('Server listening on port 8081'));