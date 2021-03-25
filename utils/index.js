export const renameObjectKeysWithPrefix = (obj, prefix) => {
  const newObj = {};
  Object.keys(obj).map(key => (newObj[prefix + key] = obj[key]));
  return newObj;
};
