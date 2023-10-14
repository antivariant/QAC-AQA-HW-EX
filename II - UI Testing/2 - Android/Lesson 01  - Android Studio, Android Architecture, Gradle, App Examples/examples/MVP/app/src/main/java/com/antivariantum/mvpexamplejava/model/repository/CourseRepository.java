package com.antivariantum.mvpexamplejava.model.repository;

import com.antivariantum.mvpexamplejava.model.datasources.ICourseDataSource;
import com.antivariantum.mvpexamplejava.model.models.Course;


import java.util.List;

public class CourseRepository implements ICourseRepository {
    private ICourseDataSource datasource;

    public CourseRepository(ICourseDataSource datasource) {
        this.datasource = datasource;
    }

    @Override
    public void getCourses(final Callback<List<Course>> callback) {
        this.datasource.getCourseData(callback);
    }
}
