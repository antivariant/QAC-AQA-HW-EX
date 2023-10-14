package com.antivariantum.mvpexamplejava.view.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.antivariantum.mvpexamplejava.R;
import com.antivariantum.mvpexamplejava.model.models.Course;

import java.util.ArrayList;
import java.util.List;

public class CoursesAdapter extends RecyclerView.Adapter<CoursesAdapter.CourseViewHolder>{

    private List<Course> courseList;
    private LayoutInflater inflater;

    public CoursesAdapter(Context context) {
        inflater = LayoutInflater.from(context);
        courseList = new ArrayList<>();
    }

    public void setCourseList(List<Course> courseList){
        this.courseList = courseList;
    }

    @NonNull
    @Override
    public CourseViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = inflater.inflate(R.layout.courses_list, parent, false);
        return new CourseViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull CoursesAdapter.CourseViewHolder holder, int position) {
        Course course= courseList.get(position);
        holder.bind(course);
    }

    @Override
    public int getItemCount() {

        return courseList.size();
    }

    static class CourseViewHolder extends RecyclerView.ViewHolder {
        private TextView textViewCourseName;
        private TextView textViewTrainerName;
        private TextView textViewTrainerDescription;
        private TextView textViewCourseDescription;
        private ImageView imageViewTrainer;

        CourseViewHolder(@NonNull View itemView) {
            super(itemView);
            textViewCourseName = itemView.findViewById(R.id.textViewCourseName);
            textViewTrainerName = itemView.findViewById(R.id.textViewTrainerName);
            textViewTrainerDescription = itemView.findViewById(R.id.textViewTrainerDescription);
            textViewCourseDescription = itemView.findViewById(R.id.textViewCourseDescription);
            imageViewTrainer = itemView.findViewById(R.id.imageViewTrainer);
        }

        void bind(Course course) {
            textViewCourseName.setText(course.getCourseName());
            textViewTrainerName.setText(course.getCourseTrainer().getUser().getName());
            textViewTrainerDescription.setText(course.getCourseTrainer().getUser().getDescription());
            textViewCourseDescription.setText(course.getCourseDescription());
            imageViewTrainer.setImageResource(R.drawable.igor_photo);
        }
    }
}

