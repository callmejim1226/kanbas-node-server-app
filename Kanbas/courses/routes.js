import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  app.post("/api/courses", async (req, res) => {
    // const { courseId , number } = req.body;

    // if (!courseId || !number) {
    //   res.sendStatus(404);
    //   return;
    // }

    // const course = await dao.findCourseById(courseId);
    // if (course) {
    //   res.status(400).json(
    //     { message: "Course already exist" });
    //   return;
    // }
    const newCourse = await dao.createCourse(req.body);
    res.send(newCourse);
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  });

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    

    if (!course) {
      res.sendStatus(404).send("Course not found");
      return;
    }

    res.send(course);
  });
}
