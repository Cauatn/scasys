import { create } from "zustand";

const Experiment = create((set) => ({
  experimentName: "",
  experimentType: "",
  iventory: [],
  addExperimentName: (name: string) =>
    set((_) => ({
      experimentName: name,
    })),
  addExperimentType: (type: string) =>
    set((_) => ({
      experimentType: type,
    })),
}));

export default Experiment;
