package com.example.api.user

import org.apache.catalina.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
class userController {
    @Autowired
    private lateinit var userservice: userService

    @PostMapping("/login")
    fun checkCredentials(@RequestBody userData: credentials): LoginResponse = userservice.checkCredentials(userData)

    @GetMapping("/getUsers")
    fun getAllUsers(): List<user> = userservice.getAllUsers()

    @GetMapping("/getUsrCount")
    fun getUsersCount(): UserCount = userservice.getUsersCount()

    @GetMapping("/getAnnouncements")
    fun getAnnouncements(): List<Announcement> = userservice.getAnnouncements()

    @PostMapping("/addAnnouncement")
    fun addAnnouncement(@RequestBody announcement: Announcement): String = userservice.addAnnouncement(announcement)
}