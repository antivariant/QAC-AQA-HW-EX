package com.antivariantum.mvpexamplejava.model.models;

public class Author {


    private User user;


    public Author(User user) {
        this.user = user;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}


