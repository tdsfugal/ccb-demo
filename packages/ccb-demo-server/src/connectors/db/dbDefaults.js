import uuid from 'uuid';

export default {
  books: [
    {
      id: uuid(),
      title: "Harry Potter and the Sorcerer's stone",
      author: 'J.K. Rowling',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Alice',
          text: 'A very nice story about wizards.',
        },
        {
          id: uuid(),
          reviewer: 'Bob',
          text: 'My favorite was the butter beer.',
        },
        {
          id: uuid(),
          reviewer: 'Carl',
          text: 'It was scary.',
        },
      ],
    },
    {
      id: uuid(),
      title: 'Jurassic Park',
      author: 'Michael Crichton',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Bob',
          text: 'Dinosaurs frolick amongst the humans on a resort island.',
        },
      ],
    },
    {
      id: uuid(),
      title: 'Dune',
      author: 'Frank Herbert',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Alice',
          text: 'Giant sand worms eat things for fun and profit.',
        },
      ],
    },
    {
      id: uuid(),
      title: 'Foundation',
      author: 'Isaac Asimov',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Carl',
          text: 'The origins of Facebook.',
        },
      ],
    },
    {
      id: uuid(),
      title: 'Second Foundation',
      author: 'Isaac Asimov',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Carl',
          text: 'Facebok becomes profitable',
        },
      ],
    },
    {
      id: uuid(),
      title: 'Foundation and Empire',
      author: 'Isaac Asimov',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Doug',
          text: 'Google buys Facebook',
        },
      ],
    },
    {
      id: uuid(),
      title: 'The Joy of Cooking',
      author: 'Irma S. Rombauer, Marion Rombauer Becker, Ethan Becker',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Bob',
          text: 'The plot is weak, but the flavor development is awesome!',
        },
      ],
    },
    {
      id: uuid(),
      title: 'The Catcher in the Rye',
      author: 'J. D. Salinger',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Doug',
          text: 'The life of a teen as told by a recluse.',
        },
      ],
    },
    {
      id: uuid(),
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Alice',
          text: 'Who knew they would make this into a movie?',
        },
      ],
    },
    {
      id: uuid(),
      title: 'The Sun Also Rises',
      author: 'Earnest Hemmingway',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Bob',
          text:
            'Astronomy, drinking, and fishing, not neccessarily in that order.',
        },
      ],
    },
    {
      id: uuid(),
      title: 'Relativity: The Special and General Theory',
      author: 'Albert Einstein',
      reviews: [
        {
          id: uuid(),
          reviewer: 'Carl',
          text:
            'Einstein brilliantly proves that gravity is the opposite of comedy.',
        },
      ],
    },
  ],
};
