import axios from "axios"

export const createExperiment = async (experimento: {
  autor: string
  autor_id: string
  name_of_experiment: string
  modo_de_calculo: string
}) => {
  try {
    const response = await axios.post(
      `http://localhost:3333/register`,
      experimento,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return response
  } catch (error) {
    return error
  }
}
