const { scheduleDays } = require("../schedules/load.js")

const selectedDate = document.querySelector('#date')

selectedDate.addEventListener('change', () => scheduleDays())