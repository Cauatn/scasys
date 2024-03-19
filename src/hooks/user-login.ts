import axios from "axios"

export async function loginUser(formData: any) {
  try {
    const response = await axios.post(
      "http://localhost:3333/user/login",
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    localStorage.setItem("user", JSON.stringify(response.data))
  } catch (error) {
    console.error(error)
  }
}
