import moment from "moment";
import "moment/dist/locale/pt-br";

export function formattedDate(date: string) {
  return moment(date).locale("pt-br").fromNow();
}
