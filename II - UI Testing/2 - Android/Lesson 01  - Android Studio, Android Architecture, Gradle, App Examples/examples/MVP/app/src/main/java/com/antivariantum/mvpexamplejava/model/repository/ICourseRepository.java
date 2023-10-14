package com.antivariantum.mvpexamplejava.model.repository;

import com.antivariantum.mvpexamplejava.model.datasources.ICourseDataSource;
import com.antivariantum.mvpexamplejava.model.models.Course;

import java.util.List;

public interface ICourseRepository {

    void getCourses(Callback<List<Course>> callback);

    interface Callback<T> extends ICourseDataSource.Callback<List<Course>> {
        void onSuccess(T data);

        @Override
        void onSuccess(List<Course> data);

        void onError(Exception e);
    }
}
