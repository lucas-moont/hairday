import { scheduleDays } from "./load"
import { scheduleCancel } from "./schedule-cancel"
const periods = document.querySelectorAll('.period')

periods.forEach(period => {
  period.addEventListener('click', async (e) => {
    if(e.target.classList.contains('cancel-icon')){
      const item = e.target.closest('li')
      let {id} = item.dataset
      id = id.toString()
      if(id){
        const isConfirm = confirm('Tem certeza que deseja cancelar o agendamento?')
        if(isConfirm){
          await scheduleCancel({id})
          await scheduleDays()
        }
      }
    }
  })
})