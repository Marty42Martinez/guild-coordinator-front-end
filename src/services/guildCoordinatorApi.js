import defaultImage from '../assets/honey-bear.png';
import { get } from './restMethods';

export const getGuildList = () => {
  return get('some.ec2.server.compute.aws')
    .then(json => ({
      list: json.map(guild => ({
        _id: guild._id,
        name: guild.name,
        image: guild.image || defaultImage,
        game: guild.game
      }))
    }));
};
