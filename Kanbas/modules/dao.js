import model from "./model.js";

export const createModule = (module) => {
  delete module._id
  return model.create(module);
}
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findOne({moduleId});
export const findModuleByCourseId = (courseId) =>  model.find({course: {$eq:courseId}});
export const updateModule = (moduleId, module) =>  model.updateOne({ moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ moduleId });