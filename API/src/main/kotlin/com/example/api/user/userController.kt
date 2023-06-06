package com.example.api.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class userController {
    @Autowired
    private lateinit var userservice: userService

    @GetMapping("/login")
    fun checkCredentials(): Boolean = userservice.checkCredentials()

    @GetMapping("/getUsers")
    fun getUsers(): List<user> = userservice.getUsers()
}