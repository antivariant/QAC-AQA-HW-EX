package com.antivariantum.mvpexamplejava.model.models;

public class Trainer {

    User user;

    public Trainer(User user) {
        this.user = user;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }


}
