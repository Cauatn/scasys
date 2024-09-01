/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";

interface Step {
  name: string;
  repetitions: number;
}

interface Phase {
  name: string;
  steps: Step[];
}

interface ExperimentState {
  experimentName: string;
  experimentType: string;
  inventory: Phase[];
  addExperimentName: (name: string) => void;
  addExperimentType: (type: string) => void;
  addInventoryPhase: (phase: Phase) => void;
  addStepOnPhase: (phaseName: string, step: Step) => void;
}

const Experiment = create<ExperimentState>((set) => ({
  experimentName: "",
  experimentType: "",
  inventory: [],
  addExperimentName: (name: string) =>
    set((_) => ({
      experimentName: name,
    })),
  addExperimentType: (type: string) =>
    set((_) => ({
      experimentType: type,
    })),
  addInventoryPhase: (phase: Phase) =>
    set((state) => ({
      inventory: [...state.inventory, { ...phase, steps: phase.steps || [] }],
    })),
  addStepOnPhase: (phaseName: string, step: Step) =>
    set((state) => ({
      inventory: state.inventory.map((phase) =>
        phase.name === phaseName
          ? { ...phase, steps: [...(phase.steps || []), step] }
          : phase
      ),
    })),
}));

export default Experiment;
