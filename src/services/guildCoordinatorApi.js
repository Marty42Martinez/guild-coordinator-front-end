import defaultImage from '../assets/honey-bear.png';
import { get, post } from './restMethods';

export const getAllGuilds = () => {
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

export const postGuildToDB = (body) => {
  return post('some.ec2.server.compute.aws', body);
  //NEEDS TO RETURN THE BODY SO WE CAN ADD TO STORE
};
