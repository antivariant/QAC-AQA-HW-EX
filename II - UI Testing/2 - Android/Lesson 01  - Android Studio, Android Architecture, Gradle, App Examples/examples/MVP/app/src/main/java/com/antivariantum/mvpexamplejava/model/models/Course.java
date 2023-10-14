package com.antivariantum.mvpexamplejava.model.models;

public class Course {
    private String courseName;
    private String courseDescription;
    private Author courseAuthor;
    private Trainer courseTrainer;

    public Course(String courseName, String courseDescription, Author courseAuthor, Trainer courseTrainer) {
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.courseAuthor = courseAuthor;
        this.courseTrainer = courseTrainer;
    }

    public Course() {

    }






    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public Author getCourseAuthor() {
        return courseAuthor;
    }

    public void setCourseAuthor(Author courseAuthor) {
        this.courseAuthor = courseAuthor;
    }

    public Trainer getCourseTrainer() {
        return this.courseTrainer;
    }

    public void setCourseTrainer(Trainer courseTrainer) {
        this.courseTrainer = courseTrainer;
    }
}
