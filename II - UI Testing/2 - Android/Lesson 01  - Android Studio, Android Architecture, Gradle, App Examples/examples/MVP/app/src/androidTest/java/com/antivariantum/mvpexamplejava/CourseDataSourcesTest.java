package com.antivariantum.mvpexamplejava;

import androidx.test.ext.junit.runners.AndroidJUnit4;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.junit.Assert.*;

import android.util.Log;

import com.antivariantum.mvpexamplejava.model.datasources.CourseFBDataSource;
import com.antivariantum.mvpexamplejava.model.datasources.CourseMockDataSource;
import com.antivariantum.mvpexamplejava.model.models.Course;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.List;

/**
 * Instrumented test, which will execute on an Android device.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
public class CourseDataSourcesTest {


    @Test
    public void testCourseMockData(){
        CourseMockDataSource datasource = new CourseMockDataSource();
        datasource.getCourseData(new CourseMockDataSource.Callback<List<Course>>() {
            @Override
            public void onSuccess(List<Course> data) {
                Assert.assertEquals(9,data.size());
            }

            @Override
            public void onError(Exception e) {
                fail(e.getMessage());
            }
        });
    }


    @Test
    public void testFirebaseConnection(){
        Log.d("Test", "Start Firebase Testing");

        FirebaseFirestore firestore = FirebaseFirestore.getInstance();

        firestore
                .collection("courses")
                .get()
                .addOnSuccessListener(queryDocumentSnapshots -> {
                    Log.d("Test","Connection to Firestore successful!");
                })
                .addOnFailureListener(e -> {
                    Log.d("Test", "Connection to Firestore failed");
                    fail("Connection to Firestore failed: " + e.getMessage());
                });

        Log.d("Test", "Finishing Firebase Testing");
    }


    @Test
    public void testFirebaseData(){
        FirebaseFirestore.getInstance().clearPersistence();
        CourseFBDataSource datasource = new CourseFBDataSource();
        datasource.getCourseData(new CourseFBDataSource.Callback<List<Course>>() {
            @Override
            public void onSuccess(List<Course> data) {
                Log.d("Test", "size= "+data.size());
                Assert.assertEquals(3,data.size());
            }

            @Override
            public void onError(Exception e) {
                Log.d("Test", "Error:"+ e.getMessage());
                fail(e.getMessage());
            }
        });

    }
}
