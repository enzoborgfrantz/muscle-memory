import Cat from '../models/cat.model';

export default (request, h) => {
  return new Promise((resolve, reject) => {
    Cat.find((error, cats) => {
      if (error) {
        reject('no cats today');
      }

      resolve(`found ${cats.length} cats`);
    })
  })
};
