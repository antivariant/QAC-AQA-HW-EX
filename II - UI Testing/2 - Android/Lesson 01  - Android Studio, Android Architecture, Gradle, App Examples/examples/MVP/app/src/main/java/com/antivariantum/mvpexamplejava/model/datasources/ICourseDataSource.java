package com.antivariantum.mvpexamplejava.model.datasources;

import com.antivariantum.mvpexamplejava.model.models.Course;

import java.util.List;

public interface ICourseDataSource {

    void getCourseData(Callback<List<Course>> callback);

    interface Callback<T>{
        void onSuccess(List<Course> data);
        void onError(Exception e);
    }
}
