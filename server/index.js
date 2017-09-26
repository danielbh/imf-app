import express from 'express';
import moment from 'moment';
import { random } from 'faker';
import { generateFakeEntries } from './scripts/dev/generateFakeEntries';
const app = express();

let data = [
  ...generateFakeEntries(5,  moment().subtract(1, 'weeks'), moment()),
  ...generateFakeEntries(5,  moment().subtract(1, 'months'), moment()),
  ...generateFakeEntries(5,  moment().subtract(3, 'months'), moment()),
  ...generateFakeEntries(5,  moment().subtract(1, 'years'), moment()),
  ...generateFakeEntries(5,  moment().subtract(2, 'years'), moment())
].sort((a, b) => a.date - b.date);

// This is a development server not meant for production. It is being used as a quick tool for the React
// frontend.
app.get('/api/entries', (req, res) => res.status(200).send(data));

app.post('/api/entries/:data', (req, res) => {
  const { date, duration, weight, bodyFat } = req.query;
  const id = random.uuid();
  data.push({ id, date, duration, weight, bodyFat });
  res.status(200).send({ id });
});

app.delete('/api/entries/:id', (req, res) => {
  data = data.filter(e => e.id !== req.params.id);
  res.status(200).send({ id: req.params.id});
});

app.listen(3001, ()  => console.log('Server listening on port 3001'));