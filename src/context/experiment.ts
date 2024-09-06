/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";

import { produce } from "immer";

interface Phase {
  name: string;
  steps: Step[];
}

interface Step {
  name: string;
  repetitions: number;
  items: Item[];
}

export interface Item {
  itemName: string;
  formula: string;
  especificidade: string;
  quantitys: [];
  observation: string;
}

interface ExperimentState {
  experimentName: string;
  experimentType: string;
  inventory: Phase[];
  addExperimentName: (name: string) => void;
  addExperimentType: (type: string) => void;
  addInventoryPhase: (phase: Phase) => void;
  addStepOnPhase: (phaseName: string, step: Step) => void;
  addItemOnStep: (stepName: string, phaseName: string, item: Item) => void;
  editItem: (
    stepName: string,
    phaseName: string,
    itemName: string,
    newItem: Item
  ) => void;
  addItemQuantity: (
    stepName: string,
    phaseName: string,
    itemName: string,
    quantity: any,
    observation: string
  ) => void;
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
    set(
      produce((state: ExperimentState) => {
        state.inventory.push(phase);
      })
    ),
  addStepOnPhase: (phaseName: string, step: Step) =>
    set(
      produce((state: ExperimentState) => {
        const phase = state.inventory.find((p) => p.name === phaseName);
        if (phase) phase.steps.push(step);
      })
    ),
  addItemOnStep: (stepName: string, phaseName: string, item: Item) =>
    set(
      produce((state: ExperimentState) => {
        const phase = state.inventory.find((p) => p.name === phaseName);
        if (phase) {
          const step = phase.steps.find((s) => s.name === stepName);
          if (step) {
            step.items.push(item);
          }
        }
      })
    ),
  editItem: (
    stepName: string,
    phaseName: string,
    itemName: string,
    newItem: Item
  ) =>
    set(
      produce((state: ExperimentState) => {
        const phase = state.inventory.find((p) => p.name === phaseName);
        if (phase) {
          const step = phase.steps.find((s) => s.name === stepName);
          if (step) {
            const itemIndex = step.items.findIndex(
              (i) => i.itemName === itemName
            );
            if (itemIndex !== -1) {
              step.items[itemIndex].itemName = newItem.itemName;
            }
          }
        }
      })
    ),
  addItemQuantity: (
    stepName: string,
    phaseName: string,
    itemName: string,
    quantitys: any,
    observation: string
  ) =>
    set(
      produce((state: ExperimentState) => {
        const phase = state.inventory.find((p) => p.name === phaseName);
        if (phase) {
          const step = phase.steps.find((s) => s.name === stepName);
          if (step) {
            const itemIndex = step.items.findIndex(
              (i) => i.itemName === itemName
            );
            if (itemIndex !== -1) {
              step.items[itemIndex].quantitys = quantitys;
              step.items[itemIndex].observation = observation;
            }
          }
        }
      })
    ),
}));

export default Experiment;
