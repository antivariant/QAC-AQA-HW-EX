package com.antivariantum.mvpexamplejava.model.datasources;

import com.antivariantum.mvpexamplejava.model.models.Course;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.List;

public class CourseFBDataSource implements ICourseDataSource {
    private CollectionReference coursesCollection;

    public CourseFBDataSource() {
        FirebaseFirestore db = FirebaseFirestore.getInstance();
        coursesCollection = db.collection("courses");
    }


    @Override
    public void getCourseData(Callback<List<Course>> callback) {
        coursesCollection.get().addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                List<Course> courses = new ArrayList<>();
                QuerySnapshot querySnapshot = task.getResult();
                if (querySnapshot != null) {
                    for (Course course : querySnapshot.toObjects(Course.class)) {
                        courses.add(course);
                    }
                }
                callback.onSuccess(courses);
            } else {
                callback.onError(task.getException());
            }
        });

    }
}
