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
    fun getUsers(): List<user> = userservice.getUsers()
}