package com.example.api.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class userController {
    @Autowired
    private lateinit var userservice: userService

    @GetMapping("/login")
    fun checkCredentials(@RequestBody userData: credentials): LoginResponse = userservice.checkCredentials(userData)

    @GetMapping("/getUsers")
    fun getUsers(): List<user> = userservice.getUsers()
}