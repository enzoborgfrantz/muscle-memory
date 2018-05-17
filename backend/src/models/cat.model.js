import mongoose from 'mongoose';

console.log(mongoose);

const catSchema = mongoose.Schema({
  name: String,
});

// model name, schema, collection
const Cat = mongoose.model('Cat', catSchema, 'Cats');

export default Cat;
