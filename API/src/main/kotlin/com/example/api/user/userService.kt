package com.example.api.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.stereotype.Service

@Service
class userService {
    @Autowired
    private lateinit var db: JdbcTemplate
    private lateinit var userrepository: userRepository
    fun getUsers(): List<user>{
        return db.query("select * from users") {
                rec, _ -> user(
                    id = rec.getInt("id"),
                    firstname = rec.getString("firstname"),
                    lastname = rec.getString("lastname"),
                    login = rec.getString("login"),
                    email = rec.getString("email"),
                    password = rec.getString("password"),
                    is_admin = rec.getInt("is_admin")
                )}
    }
    fun checkCredentials(): Boolean {
        return true
    }
}