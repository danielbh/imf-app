import express from 'express';
import moment from 'moment';
import { generateFakeEntries } from './scripts/dev/generateFakeEntries';
const app = express();

let data = [
  ...generateFakeEntries(5,  moment().subtract(1, 'weeks'), moment()),
  ...generateFakeEntries(5,  moment().subtract(1, 'months'), moment()),
  ...generateFakeEntries(5,  moment().subtract(3, 'months'), moment()),
  ...generateFakeEntries(5,  moment().subtract(1, 'years'), moment()),
  ...generateFakeEntries(5,  moment().subtract(2, 'years'), moment())
].sort((a, b) => a.date - b.date);

app.get('/api/entries', (req, res) => {
  res.send(data)
});

app.post('/api/entries', (req, res) => {

});

app.delete('/api/entries/:id', (req, res) => {
  data = data.filter(e => e.id !== req.params.id);
  res.send(`DELETED entry with id ${req.params.id}`);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001')
});