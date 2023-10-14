package com.antivariantum.mvpexamplejava.view.views;

import com.antivariantum.mvpexamplejava.model.models.Course;

import java.util.List;

public class CourseView implements ICourseView{
    @Override
    public void showCourses(List<Course> courseList) {

    }

    @Override
    public void showLoading() {

    }

    @Override
    public void showError(Exception e) {

    }


    //    private TextView courseTitleTextView;
//    private TextView courseDescriptionTextView;
//    private TextView courseAuthorTextView;
//    private TextView courseLectorTextView;
//
//
//    @Override
//    public void setCourseTitle(String title) {
//        courseTitleTextView.setText(title);
//    }
//
//    @Override
//    public void setCourseDescription(String description) {
//        courseDescriptionTextView.setText(description);
//    }
//
//    @Override
//    public void setCourseAuthor(String author) {
//        courseAuthorTextView.setText(author);
//    }
//
//    @Override
//    public void setCourseLector(String lector) {
//        courseLectorTextView.setText(lector);
//    }
}
