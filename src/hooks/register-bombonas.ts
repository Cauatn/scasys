import axios from "axios"

export const register_bombonas = async (bombonas: any) => {
  try {
    const response = await axios
      .post(
        `http://localhost:3333/exp/bombonastage/${localStorage.getItem("experiment_id")}`,
        {
          bombona_stage: bombonas,
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
    return error
  }
}
