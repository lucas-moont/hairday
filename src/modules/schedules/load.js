import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "./show.js";

const selectedDate = document.querySelector('#date')

export async function scheduleDays(){
  const date = selectedDate.value 

  const dailySchedules = await scheduleFetchByDay({date})
  console.log(dailySchedules)

  scheduleShow({dailySchedules})

  hoursLoad({date})
}