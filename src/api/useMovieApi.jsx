import { createContext, useContext, useState } from 'react';

const MovieApi = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setmovies] = useState([
    {
      id: 1,
      title: 'Wonka',
      description: 'Una película romántica dirigida por James Cameron.',
      poster_path: 'https://all.web.img.acsta.net/pictures/23/11/07/21/46/3544403.jpg/r_2500_x',
      genres: ['Romance', 'Drama'],
      year: 1997,
      director: 'James Cameron',
      cast: ['Leonardo DiCaprio', 'Kate Winslet'],
      price: 10.99,
      rentPrice: 4.99,
      trailer: 'https://www.youtube.com/watch?v=otNh9bTjXWg&source_ve_path=MjM4NTE&feature=emb_title'

    },
    {
      id: 2,
      title: 'Silent Night',
      description: 'Un thriller de ciencia ficción dirigido por Christopher Nolan.',
      poster_path: 'https://all.web.img.acsta.net/pictures/23/10/03/21/58/3578263.jpg/r_2500_x',
      genres: ['Ciencia Ficción', 'Thriller'],
      year: 2010,
      director: 'Christopher Nolan',
      cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
      price: 9.99,
      rentPrice: 3.99,
trailer: 'https://www.youtube.com/watch?v=yBnTqn0lBDA&source_ve_path=MjM4NTE&feature=emb_title' 
    },
    {
      id: 3,
      title: 'Animal',
      description: 'Una película de ciencia ficción dirigida por James Cameron.',
      poster_path: 'https://all.web.img.acsta.net/pictures/23/11/06/14/31/4170555.jpg/r_2500_x',
      genres: ['Ciencia Ficción', 'Aventura'],
      year: 2009,
      director: 'James Cameron',
      cast: ['Sam Worthington', 'Zoe Saldana'],
      trailer: 'https://www.youtube.com/watch?v=31gzqRSGqR8',
      price: 19.99,
      rentPrice: 6.99,
      trailer: 'https://www.youtube.com/watch?v=Dydmpfo68DA'
    },  
    {
      id: 4,
      title: 'Sam Bahadur',
      description: 'Una película de ciencia ficción dirigida por James Cameron.',
      poster_path: 'https://all.web.img.acsta.net/pictures/23/11/29/16/35/3193451.jpg/r_2500_x',
      genres: ['Ciencia Ficción', 'Aventura'],
      year: 2009,
      director: 'James Cameron',
      cast: ['Sam Worthington', 'Zoe Saldana'],
      trailer: 'https://www.youtube.com/watch?v=31gzqRSGqR8',
      price: 19.99,
      rentPrice: 6.99,
      trailer: 'https://www.youtube.com/watch?v=6xJptj7AVSA'
    },  
    {
      id: 5,
      title: 'Maestro',
      description: 'Una película de ciencia ficción dirigida por James Cameron.',
      poster_path: 'https://all.web.img.acsta.net/pictures/23/11/15/21/33/2956209.jpg/r_2500_x',
      genres: ['Ciencia Ficción', 'Aventura'],
      year: 2009,
      director: 'James Cameron',
      cast: ['Sam Worthington', 'Zoe Saldana'],
      trailer: 'https://www.youtube.com/watch?v=31gzqRSGqR8',
      price: 19.99,
      rentPrice: 6.99,
      trailer: 'https://www.youtube.com/watch?v=gJP2QblqLA0'
    },  
    {
      id: 6,
      title: 'Radical',
      description: 'Una película de ciencia ficción dirigida por James Cameron.',
      poster_path: 'https://all.web.img.acsta.net/pictures/23/09/20/22/14/2088458.jpg/r_2500_x',
      genres: ['Ciencia Ficción', 'Aventura'],
      year: 2009,
      director: 'James Cameron',
      cast: ['Sam Worthington', 'Zoe Saldana'],
      trailer: 'https://www.youtube.com/watch?v=4CpKulS9h88&t=1s',
      price: 19.99,
      rentPrice: 6.99,
    }, 
    {
      id: 7,
      title: 'Die Hard',
      description: 'Una película de ciencia ficción dirigida por James Cameron.',
      poster_path: 'https://all.web.img.acsta.net/pictures/23/11/14/18/39/3686521.jpg/r_2500_x',
      genres: ['Ciencia Ficción', 'Aventura'],
      year: 2009,
      director: 'James Cameron',
      cast: ['Sam Worthington', 'Zoe Saldana'],
      trailer: 'https://www.youtube.com/watch?v=31gzqRSGqR8',
      price: 19.99,
      rentPrice: 6.99,
      trailer: 'https://www.youtube.com/watch?v=4CpKulS9h88'
    }, 
    {
      id: 8,
      title: 'The Shift',
      description: 'Una película de ciencia ficción dirigida por James Cameron.',
      poster_path: '  https://all.web.img.acsta.net/pictures/23/10/16/15/27/3110151.jpg/r_2500_x',
      genres: ['Ciencia Ficción', 'Aventura'],
      year: 2009,
      director: 'James Cameron',
      cast: ['Sam Worthington', 'Zoe Saldana'],
      trailer: 'https://www.youtube.com/watch?v=31gzqRSGqR8',
      price: 19.99,
      rentPrice: 6.99,
      trailer: 'https://www.youtube.com/watch?v=Tl7rtMiOrvY'
    }, 
    {
      id: 9,
      title: 'Godzilla Minus One',
      description: 'Una película de ciencia ficción dirigida por James Cameron.',
      poster_path: '  https://all.web.img.acsta.net/pictures/23/07/12/02/01/4027142.jpg/r_2500_x',
      genres: ['Ciencia Ficción', 'Aventura'],
      year: 2009,
      director: 'James Cameron',
      cast: ['Sam Worthington', 'Zoe Saldana'],
      trailer: 'https://www.youtube.com/watch?v=31gzqRSGqR8',
      price: 19.99,
      rentPrice: 6.99,
      trailer: 'https://www.youtube.com/watch?v=VvSrHIX5a-0'
    }, 
  ]);


  return (
    <MovieApi.Provider value={{ movies }}>
      {children}
    </MovieApi.Provider>
  );
};

export const useMovieApi = () => {
  return useContext(MovieApi);
};
