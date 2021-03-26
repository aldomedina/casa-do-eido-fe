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

export function getFormattedDDMM(timestamp, lang) {
  const date = new Date(timestamp);
  const dayNum = new Date(timestamp).toLocaleDateString("pt-PT").split("/")[0];
  const dayName = days[lang][date.getDay()];
  const monthName = months[lang][date.getMonth()];
  return `${dayName} — ${dayNum} ${monthName}`;
}

export const days = {
  pt: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
  english: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

export const months = {
  pt: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  english: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};
