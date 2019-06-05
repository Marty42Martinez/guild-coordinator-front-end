export const get = (url) => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to perform GET fetch';

      return json;
    });
};
