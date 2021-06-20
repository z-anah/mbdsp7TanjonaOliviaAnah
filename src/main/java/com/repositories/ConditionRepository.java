package com.repositories;

import com.models.Condition;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConditionRepository extends CrudRepository<Condition, Long> {

    Condition getAll();
}
