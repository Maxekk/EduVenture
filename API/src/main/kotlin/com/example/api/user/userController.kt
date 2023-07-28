package com.example.api.user

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
    fun getAllUsers(): List<com.example.api.user.User> = userservice.getAllUsers()

    @GetMapping("/getStudents")
    fun getAllStudents(): List<Student> = userservice.getAllStudents()

    @GetMapping("/getUsrCount")
    fun getUsersCount(): UserCount = userservice.getUsersCount()

    @GetMapping("/getAnnouncements")
    fun getAnnouncements(): List<Announcement> = userservice.getAnnouncements()

    @PostMapping("/addAnnouncement")
    fun addAnnouncement(@RequestBody announcement: Announcement): String = userservice.addAnnouncement(announcement)
}