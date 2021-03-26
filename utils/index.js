export const renameObjectKeysWithPrefix = (obj, prefix) => {
  const newObj = {};
  Object.keys(obj).map(key => (newObj[prefix + key] = obj[key]));
  return newObj;
};

export function getMD(timestamp) {
  const date = new Date(timestamp).toLocaleDateString("pt-PT").split("/");
  const day = date[0];
  const month = date[1];
  return month + "/" + day;
}
