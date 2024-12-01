import { apiConfig } from "./api-config";

export async function scheduleNew({id, name, when}){
  try{
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id, name, when})
    })

    alert('Agendamento realizado com sucesso.')
  }catch(e){
    console.log(e)
    alert('Não foi possível agendar. Tente novamente mais tarde.')
  }
}