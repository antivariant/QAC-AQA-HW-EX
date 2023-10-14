package com.antivariantum.mvpexamplejava.view.activities;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import com.antivariantum.mvpexamplejava.R;
import com.antivariantum.mvpexamplejava.model.datasources.CourseMockDataSource;
import com.antivariantum.mvpexamplejava.model.models.Course;
import com.antivariantum.mvpexamplejava.model.repository.CourseRepository;
import com.antivariantum.mvpexamplejava.presenter.CoursePresenter;
import com.antivariantum.mvpexamplejava.view.adapters.CoursesAdapter;
import com.antivariantum.mvpexamplejava.view.views.CourseView;
import com.antivariantum.mvpexamplejava.view.views.ICourseView;

import java.util.List;

public class MainActivity extends AppCompatActivity implements ICourseView {

    private RecyclerView recyclerViewCourses;
    private CoursesAdapter coursesAdapter;
    private CoursePresenter coursePresenter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        recyclerViewCourses = findViewById(R.id.recyclerViewCourses);
        recyclerViewCourses.setLayoutManager(new LinearLayoutManager(this));
        coursesAdapter = new CoursesAdapter(this);
        recyclerViewCourses.setAdapter(coursesAdapter);
        coursePresenter = new CoursePresenter(
                new CourseRepository(new CourseMockDataSource()),
                new CourseView());

        coursePresenter.loadCourses();

    }

    @Override
    public void showCourses(List<Course> courseList) {
        coursesAdapter.setCourseList(courseList);
        coursesAdapter.notifyDataSetChanged();
    }

    @Override
    public void showLoading() {

    }

    @Override
    public void showError(Exception e) {

    }
}