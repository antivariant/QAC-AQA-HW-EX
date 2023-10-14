package com.antivariantum.mvpexamplejava.presenter;

import com.antivariantum.mvpexamplejava.model.models.Course;
import com.antivariantum.mvpexamplejava.model.repository.ICourseRepository;
import com.antivariantum.mvpexamplejava.view.views.CourseView;

import java.util.List;

public class CoursePresenter implements ICoursePresenter {

    private ICourseRepository courseRepository;
    private CourseView courseView;

    public CoursePresenter(ICourseRepository courseRepository, CourseView courseView) {
        this.courseRepository = courseRepository;
        this.courseView = courseView;
    }


    @Override
    public void loadCourses() {
        courseRepository.getCourses(new ICourseRepository.Callback<List<Course>>() {
            @Override
            public void onSuccess(List<Course> data) {
                courseView.showCourses(data);
            }

            @Override
            public void onError(Exception e) {
                courseView.showError(e);
            }
        });
    }
}
