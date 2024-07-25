import { createFlickr } from "flickr-sdk";

const { flickr } = createFlickr(import.meta.env.PUBLIC_FLICKR_KEY);

export const getPeopleProfile = async (userId: string) => {
  const { person } = await flickr("flickr.people.getInfo", {
    user_id: userId,
  });

  const profileUrl = `https://farm${person.iconfarm}.staticflickr.com/${person.iconserver}/buddyicons/${userId}_r.jpg`;

  return { person, profileUrl };
};
