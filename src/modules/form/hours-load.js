import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.querySelector('#hours')

export function hoursLoad({date}) {
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")

    const isHourAvailable = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    

    return {
      hour,
      available: isHourAvailable
    }
  })

  opening.forEach(({hour, available}) => {
    const li = document.createElement('git')
    li.classList.add("hour")
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')

    li.textContent = hour

    hours.append(li)
  })
}
