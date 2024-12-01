import dayjs from 'dayjs'
import { scheduleNew } from '../../services/schedule-new.js'

const form = document.querySelector('form')
const selectedDate = document.querySelector('#date')
const clientName = document.querySelector('#client')

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday

selectedDate.min = inputToday

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  try{
    const name = clientName.value.trim()

    if(!name){
      return alert('Informe o nome do cliente.')
    }

    const hourSelected = document.querySelector('.hour-selected')
    
    if(!hourSelected) {
      return alert('Selecione um horário.')
    }

    const [hour] = hourSelected.innerText.split(':')

    const when = dayjs(hourSelected.value).add(hour, "hour")

    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when
    })
    
  }catch (e) {
    alert('Não foi possível realizar o agendamento')
    console.log(e)
  }
})