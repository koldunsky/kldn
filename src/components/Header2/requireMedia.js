import _set from 'lodash/set';
import _map from 'lodash/map';

export default () => {
  const mediaCollection = {};

  function importAllVideos (r) {
    r.keys().forEach((key) => {
      console.info(key.split('/'));
      const name = key.split('/')[1]; // Waving
      const type = key.split('/')[2].split('.')[0]; // desktop.mp4 => desktop
      const path = r(key);
      _set(mediaCollection, `${name}.${type}.video`, path);
    });
  }
  function importAllImages (r) {
    r.keys().forEach((key) => {
      const name = key.split('/')[1]; // Waving
      const type = key.split('/')[2].split('.')[0]; // start.jpg => start
      const path = r(key);
      _set(mediaCollection, `${name}.desktop.${type}`, path);
      _set(mediaCollection, `${name}.phone.${type}`, path);
    });
  }

  importAllVideos(require.context('../../assets/videoBg/', true, /\.mp4$/));
  importAllImages(require.context('../../assets/videoBg/', true, /\.jpg$/));

  const videoArr = _map(mediaCollection, (obj, name) => {
    obj['name'] = name;
    obj['tablet'] = obj['phone']; // Костылья для таблетов, используем то же меда, что и для телефонов
    return obj;
  });
  console.info(videoArr);
  return videoArr;
}
