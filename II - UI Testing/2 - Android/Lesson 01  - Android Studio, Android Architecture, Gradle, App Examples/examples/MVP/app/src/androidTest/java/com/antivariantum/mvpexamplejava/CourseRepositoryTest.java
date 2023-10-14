package com.antivariantum.mvpexamplejava;

import static org.junit.Assert.fail;

import androidx.test.ext.junit.runners.AndroidJUnit4;

import com.antivariantum.mvpexamplejava.model.datasources.CourseFBDataSource;
import com.antivariantum.mvpexamplejava.model.datasources.CourseMockDataSource;
import com.antivariantum.mvpexamplejava.model.models.Course;
import com.antivariantum.mvpexamplejava.model.repository.CourseRepository;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.List;

@RunWith(AndroidJUnit4.class)
public class CourseRepositoryTest {

    @Test
    public void RepositoryMockDataTest() {
        CourseRepository repo=new CourseRepository(new CourseMockDataSource());
        repo.getCourses(new CourseRepository.Callback<List<Course>>() {
            @Override
            public void onSuccess(List<Course> data) {
                Assert.assertEquals(9, data.size());
            }

            @Override
            public void onError(Exception e) {
                fail(e.getMessage());
            }
        });
    }

    @Test
    public void RepositoryFBDataTest() {
        CourseRepository repo=new CourseRepository(new CourseFBDataSource());
        repo.getCourses(new CourseRepository.Callback<List<Course>>() {
            @Override
            public void onSuccess(List<Course> data) {
                Assert.assertEquals(2, data.size());
            }

            @Override
            public void onError(Exception e) {
                fail(e.getMessage());
            }
        });
    }



}
