import defaultImage from '../assets/honey-bear.png';

export const getAllGuilds = () => {
  return Promise.resolve([
    {
      _id: '1a2',
      name: 'Apocalypse',
      image: defaultImage,
      game: 'Dungeons And Dragons'
    },
    {
      _id: '1b2',
      name: 'Something Awesome',
      image: defaultImage,
      game: 'World Of Warcraft'
    },
    {
      _id: '1c2',
      name: 'Ignis Rising',
      image: defaultImage,
      game: 'World Of Warcraft'
    },
    {
      _id: '1d2',
      name: 'Mercenaries with Attitude',
      image: defaultImage,
      game: 'Dungeons And Dragons'
    }
  ]);
};
