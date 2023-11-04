import moment from "moment/moment";
import "moment/locale/es";
import { IMAGE_BASE_URL } from "./constants";

export const dateFormat = (dateString) => {
  const date = moment(dateString).locale("es");

  return date.format("D MMM YYYY");
};

export const limitWords = (text, limit) => {
  const words = text.split(" ");

  if (words.length > limit) {
    const truncatedWords = words.slice(0, limit);
    const truncatedText = truncatedWords.join(" ");

    return truncatedText + "...";
  }

  return text;
};

export const imageUrl = (path, width) => {
  if (path) return `${IMAGE_BASE_URL}w${width}/${path}`;
  return `https://placehold.co/${width}x${(width / 2) * 3}?text=^_^`;
};

export const hoursFormat = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  return `${h}h ${m}m`;
}

export const currency = (value) => {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

return formatter.format(value);

}