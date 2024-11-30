import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector('#date')

export function scheduleDays(){
  const date = selectedDate.value 

  hoursLoad({date})
}