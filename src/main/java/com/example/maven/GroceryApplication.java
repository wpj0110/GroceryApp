package com.example.maven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

//https://stackoverflow.com/questions/51221777/failed-to-configure-a-datasource-url-attribute-is-not-specified-and-no-embedd
//need to add the configuration to add the Database later
//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@SpringBootApplication()
public class GroceryApplication {

	public static void main(String[] args) {
		//MySQL integration with Spring Boot: https://hevodata.com/learn/spring-boot-mysql/
		SpringApplication.run(GroceryApplication.class, args);
	}

}
