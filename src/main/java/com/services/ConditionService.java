package com.services;

import com.models.Condition;
import com.repositories.ConditionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ConditionService
{
    @Autowired
    private ConditionRepository userRepository;
    public List<Condition> getAll()
    {
        List<Condition> c = new ArrayList<>();
        userRepository.findAll().forEach(c::add);
        return c;
    }
}