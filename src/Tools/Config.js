export const BaseUrl = "http://127.0.0.1:3000";
export const fromDate = (date) => {
  const newTime = new Date(date).toLocaleTimeString().slice(2);
  const newDate = new Date(date).toLocaleDateString().split("/").join("-");
  return newDate + " " + newTime;
};
