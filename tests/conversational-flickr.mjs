// Build-only external Flickr boundary. No credentials or public account reads.
export function createFlickr() {
  return { flickr: async (method, args) => {
    if (method !== 'flickr.people.getInfo') throw new Error('Unexpected build fixture operation');
    return { person: { iconfarm: 0, iconserver: '0', username: { _content: `Fixture ${args.user_id}` }, photos: { count: { _content: '0' } } } };
  } };
}
