package com.example.api.user

import com.fasterxml.jackson.databind.ObjectMapper
import org.apache.catalina.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam


@Service
class userService {
    @Autowired
    private lateinit var db: JdbcTemplate
    private lateinit var userrepository: userRepository
    fun getAllUsers(): List<user>{
        return db.query("select * from users") {
                res, _ -> user(
                    id = res.getInt("id"),
                    firstname = res.getString("firstname"),
                    lastname = res.getString("lastname"),
                    login = res.getString("login"),
                    email = res.getString("email"),
                    password = res.getString("password"),
                    is_admin = res.getInt("is_admin")
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

    fun getAnnouncements(): List<Announcement> {
        return db.query("select * from announcements") { res, _ -> Announcement(
            id = res.getInt("id"),
            title = res.getString("title"),
            content = res.getString("content"),
            upload_date = res.getDate("upload_date")
        )}
    }

    fun addAnnouncement(announcement: Announcement): String {
        val insertQuery = "INSERT INTO announcements (title, upload_date, content) VALUES (?, ?, ?)"
        db.update(insertQuery, announcement.title, announcement.upload_date, announcement.content)
        return "Announcement added successfully."
    }
}