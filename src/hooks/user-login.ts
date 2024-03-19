import axios from "axios"

export async function loginUser(formData: any) {
  try {
    console.log("formData", formData)

    const response = await axios.post(
      "http://localhost:3333/user/login",
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
