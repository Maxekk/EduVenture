package com.example.api.user

import jakarta.persistence.Id

class Student(
    @Id
    val id: Int,
    val firstname: String,
    val lastname: String,
    val email: String,
    val login: String,
    val password: String,
    val is_admin: Boolean
) {}