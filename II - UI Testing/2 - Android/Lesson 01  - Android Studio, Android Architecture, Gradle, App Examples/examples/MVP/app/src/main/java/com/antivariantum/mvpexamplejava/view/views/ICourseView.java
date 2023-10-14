package com.antivariantum.mvpexamplejava.view.views;

import com.antivariantum.mvpexamplejava.model.models.Course;

import java.util.List;

public interface ICourseView {
//    void setCourseTitle(String title);
//    void setCourseDescription(String description);
//    void setCourseAuthor(String author);
//    void setCourseLector(String lector);

    void showCourses(List<Course> courseList);
    void showLoading();
    void showError(Exception e);

}
