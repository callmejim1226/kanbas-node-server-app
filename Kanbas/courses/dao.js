import model from "./model.js";

export const createCourse = (course) => {
  delete course._id
  return model.create(course);
}
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findOne({ courseId });
export const findCourseByCoursename = (coursename) =>  model.findOne({ name: coursename });
export const updateCourse = (courseId, course) =>  model.updateOne({ courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ courseId });