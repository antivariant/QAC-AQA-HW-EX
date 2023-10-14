package com.antivariantum.mvpexamplejava;

import static org.mockito.Mockito.*;

import android.view.View;

import androidx.test.ext.junit.runners.AndroidJUnit4;

import com.antivariantum.mvpexamplejava.model.datasources.CourseFBDataSource;
import com.antivariantum.mvpexamplejava.model.datasources.CourseMockDataSource;
import com.antivariantum.mvpexamplejava.model.models.Course;
import com.antivariantum.mvpexamplejava.model.repository.CourseRepository;
import com.antivariantum.mvpexamplejava.presenter.CoursePresenter;
import com.antivariantum.mvpexamplejava.view.views.CourseView;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

@RunWith(AndroidJUnit4.class)
public class CoursePresenterTest {

    private CourseView mockView;
    private CoursePresenter presenter;

    @Captor
    private ArgumentCaptor<List<Course>> captor;

    @Before
    public void TestInit(){
        mockView = Mockito.mock(CourseView.class);
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void TestPresenterWithMockData(){
        presenter = new CoursePresenter(new CourseRepository(
                new CourseMockDataSource()), mockView);
        presenter.loadCourses();
        verify(mockView).showCourses(captor.capture());
        List<Course> capturedList = captor.getValue();
        Assert.assertEquals(9, capturedList.size());
    }

    @Test
    public void TestPresenterWithFBData(){
        presenter = new CoursePresenter(new CourseRepository(
                new CourseFBDataSource()), mockView);
        presenter.loadCourses();
        verify(mockView).showCourses(captor.capture());
        List<Course> capturedList = captor.getValue();
        Assert.assertEquals(9, capturedList.size());
    }

}
