import axios from "axios"
import { useNavigate } from "react-router-dom"

export async function loginUser(formData: any) {
  try {
    console.log("formData", formData)

    const response = await axios
      .post("http://localhost:3333/user/login", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        //salve em localStorage
        localStorage.setItem("user_id", response.data.id)
        localStorage.setItem("token", response.data.token)
      })
    return response
  } catch (error) {
    console.error(error)
  }
}
