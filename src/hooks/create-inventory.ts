import axios from "axios"

/*
const ExpDataSchema = new mongoose.Schema(
    {
        autor: {
            type: String,
        },
        autor_id: {
            type: String,
        },
        name_of_experiment: {
            type: String,
            required: [true, "É necessário um nome"],
        },
        modo_de_calculo: {
            type: String,
            required: [true, "É necessário um modo de calculo"],
        },
        inventory_stage: [
            {
                name: {
                    type: String,
                },
                etapa: [
                    {
                        type: Array,
                        name: {
                            type: String,
                        },
                        num_of_reps: {
                            type: Number,
                        },
                        elements: [
                            {
                                especifity: {
                                    type: String,
                                },
                                isRecyclable: {
                                    type: Boolean,
                                },
                                isBioDeposited: {
                                    type: Boolean,
                                },
                                isDegradable: [
                                    {
                                        ft: {
                                            type: Number,
                                        },
                                        src: {
                                            type: String,
                                        },
                                    },
                                ],
                                item: {
                                    type: String,
                                },
                                chem_form: {
                                    type: String,
                                },
                                quantity: [
                                    {
                                        type: Array,
                                        value: {
                                            type: Number,
                                        },
                                    },
                                ],
                                unit: {
                                    type: String,
                                },
                                observation: {
                                    type: String,
                                },
                            },
                        ],
                    },
                ],
            },
        ], */

export const createInventory = async (experimento: any) => {
  try {
    const response = await axios
      .post(
        `http://localhost:3333/exp/invetoryStage/${localStorage.getItem("experiment_id")}`,
        {
          inventory_stage: experimento,
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
