package com.example.api.user

import com.fasterxml.jackson.databind.ObjectMapper
import org.apache.catalina.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam

data class LoginResponse(
        val canLogin: Boolean?,
        val id: Int?,
        val firstname: String?,
        val lastname: String?,
        val email: String?,
        val login: String?,
        val password: String?,
        val is_admin: Int?
)
data class UserCount(val totalStudents: Int, val totalTeachers: Int)

@Service
class userService {
    @Autowired
    private lateinit var db: JdbcTemplate
    private lateinit var userrepository: userRepository
    fun getAllUsers(): List<user>{
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
    fun checkCredentials(@RequestBody userData: credentials ): LoginResponse {
        val users = getAllUsers()
        val matchingUser = users.find { it.login == userData.login && it.password == userData.password }
        if(matchingUser != null){
            return LoginResponse(
                    true,
                    matchingUser.id,
                    matchingUser.firstname,
                    matchingUser.lastname,
                    matchingUser.email,
                    matchingUser.login,
                    matchingUser.password,
                    matchingUser.is_admin
            )
        }
        else {
            return LoginResponse(
                    false,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
            )
        }
    }

    fun getUsersCount(): UserCount {
        val users = getAllUsers()
        val teachers = users.count { it.is_admin == 1 }
        val students = users.count {it.is_admin == 0}
        return UserCount(students,teachers)
    }
}