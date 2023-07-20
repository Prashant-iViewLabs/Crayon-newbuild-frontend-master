import moment from "moment";
export const convertDatetimeAgo = (value) => {
  return moment.utc(value).local().startOf("seconds").fromNow();
};
export const dateConverter = (value) => {
  return moment(value).format("YYYY-MM-DD");
};

export const dateConverterMonth = (value) => {
  return moment(value).format("DD MMM YYYY");
};

export const convertDOB = (value) => {
  return moment().diff(moment(value), "years");
};
