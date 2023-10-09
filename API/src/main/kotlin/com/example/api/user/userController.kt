package com.example.api.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
class userController {
    @Autowired
    private lateinit var userservice: userService

    @PostMapping("/login")
    fun checkCredentials(@RequestBody userData: Credentials): LoginResponse = userservice.checkCredentials(userData)

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

    @GetMapping("/getGrades")
    fun getGrades(): List<Grade> = userservice.getGrades()

    @PostMapping("/modStudent")
    fun modStudentData(@RequestBody studentData: StudentData): String = userservice.modStudentData(studentData)

    @PostMapping("/createNewUsr")
    fun createNewUsr(@RequestBody studentData: Student): String = userservice.createNewUsr(studentData)

    @PostMapping("/addGrade")
    fun addGrade(@RequestBody grade: Grade): String = userservice.addGrade(grade)

    @PostMapping("/deleteAnnouncement")
    fun deleteAnnouncement(@RequestBody requestPayload: Map<String, Int>): String = userservice.deleteAnnouncement(requestPayload)

    @PostMapping("deleteStudent")
    fun deleteStudent(@RequestBody requestPayload: Map<String, Int>): String = userservice.deleteStudent(requestPayload)

    @PostMapping("deleteGrade")
    fun deleteGrade(@RequestBody requestPayload: Map<String, Int>): String = userservice.deleteGrade(requestPayload)
}