package com.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
public class Condition {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "condition_Sequence")
    @SequenceGenerator(name = "condition_Sequence", sequenceName = "CONDITION_SEQ")
    private Long id;

    private String title;
    private String titleMlg;
    private String description;
    private String descriptionMlg;

    public Condition() {
    }

    public Condition(Long id, String title, String titleMlg, String description, String descriptionMlg) {
        this.id = id;
        this.title = title;
        this.titleMlg = titleMlg;
        this.description = description;
        this.descriptionMlg = descriptionMlg;
    }

    @Override
    public String toString() {
        return "Condition{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", titleMlg='" + titleMlg + '\'' +
                ", description='" + description + '\'' +
                ", descriptionMlg='" + descriptionMlg + '\'' +
                '}';
    }
}
