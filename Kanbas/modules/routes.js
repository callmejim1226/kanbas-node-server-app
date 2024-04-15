import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const findAllModulesByCourse = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModuleByCourseId(cid);
    res.send(modules);
  };

  const getNewModuleId = async () => {
    const allModules = await dao.findAllModules();
    const moduleIds = allModules.map((module) => parseInt(module.moduleId.slice(1,2)));
    return (Math.max(...moduleIds)+1)*100;

  }

  const createNewModule = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModuleByCourseId(cid);
    let newModuleId;

    if (modules.length !== 0) {
      const { moduleId } = modules[modules.length-1];
      newModuleId = parseInt(moduleId.slice(1)) + 1;
    } else {
      newModuleId = await getNewModuleId();
    }

    const newModule = {
      ...req.body,
      moduleId: `M${newModuleId}`,
      course: cid
    };
    const status = await dao.createModule(newModule);
    res.json(status);
  }

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  }
  
  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);    
    res.json(status);
  }

  app.get("/api/courses/:cid/modules", findAllModulesByCourse);
  app.post("/api/courses/:cid/modules", createNewModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);
}