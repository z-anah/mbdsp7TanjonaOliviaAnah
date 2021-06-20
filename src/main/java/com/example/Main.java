/*
 * Copyright 2002-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.example;

import com.google.gson.Gson;
import com.models.Condition;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RestController
@SpringBootApplication
public class Main {

  @Value("${spring.datasource.url}")
  private String url;

  @Value("${spring.datasource.username}")
  private String username;

  @Value("${spring.datasource.password}")
  private String password;

  @Value("${spring.datasource.driver.class}")
  private String c;

  public static void main(String[] args) {
    SpringApplication.run(Main.class, args);
  }

//  @Autowired
//  private ConditionService cs;

  @RequestMapping("/")
  String index() {
    return "index";
  }

  @RequestMapping("/db")
  String db(Map<String, Object> model) {
    try (Connection connection = dataSource().getConnection()) {
      Statement stmt = connection.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT TITLE FROM CONDITION");

      ArrayList<String> output = new ArrayList<String>();
      while (rs.next()) {
        output.add(rs.getString(1));
      }
      output.add("HI");
      model.put("records", output);
      return "db";
    } catch (Exception e) {
      model.put("message", e.getMessage());
      return "error";
    }
  }

  @GetMapping("/conditions")
  String conditions() throws SQLException {

    try (Connection connection = dataSource().getConnection()) {
      Statement stmt = connection.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT ID, TITLE, TITLE_MLG, DESCRIPTION, DESCRIPTION_MLG FROM CONDITION");

      List<Condition> conditions = new ArrayList<Condition>();
      while (rs.next()) {
        Condition c = new Condition(
                rs.getLong(1),
                rs.getString(2),
                rs.getString(3),
                rs.getString(4),
                rs.getString(5)
        );
        conditions.add(c);
      }
      return new Gson().toJson(conditions);
    } catch (Exception e) {
      throw e;
    }
  }

  @GetMapping("/condition")
  @ResponseBody
  String condition() throws SQLException {

    try (Connection connection = dataSource().getConnection()) {
      Statement stmt = connection.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT ID, TITLE, TITLE_MLG, DESCRIPTION, DESCRIPTION_MLG FROM CONDITION");
      Condition c=null;
      while (rs.next()) {
        c = new Condition(
                rs.getLong(1),
                rs.getString(2),
                rs.getString(3),
                rs.getString(4),
                rs.getString(5)
        );
        return new Gson().toJson(c);
      }
      return new Gson().toJson(c);
    } catch (Exception e) {
      throw e;
    }
  }

  @Bean
  public DataSource dataSource() throws SQLException {
    DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
    dataSourceBuilder.driverClassName(c);
    dataSourceBuilder.url(url);
    dataSourceBuilder.username(username);
    dataSourceBuilder.password(password);
    return dataSourceBuilder.build();
  }

}
