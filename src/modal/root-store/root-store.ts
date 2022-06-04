import { types } from "mobx-state-tree";
import { type } from "os";

export const Project = types.model({
  name: types.string,
  language: types.string,
  steps: types.array(types.frozen()),
  runCounter: types.number,
  ttr: types.string, //Time to run
});

export const newProject = types.model({
  name: types.string,
  language: types.string,
  steps: types.array(types.frozen()),
});

export const RootStore = types
  .model({
    firstTimeLaunch: types.optional(types.boolean, true),
    newProject: types.model(),
    projectsList: types.array(Project),
  })
  .actions((self) => {
    return {};
  });
