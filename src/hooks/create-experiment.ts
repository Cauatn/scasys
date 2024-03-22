import axios from "axios"

export const createExperiment = async (data: any) => {
  try {
    console.log("data", data)

    const response = await axios
      .post(
        `http://localhost:3333/exp/newExp/${localStorage.getItem("user_id")}`,
        {
          name: data.procedureName,
          calc: data.calculusMethod,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response)
      })

    return response
  } catch (error) {
    console.log(error)
  }
}
