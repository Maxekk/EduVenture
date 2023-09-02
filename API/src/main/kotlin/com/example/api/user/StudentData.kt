package com.example.api.user

import jakarta.persistence.Entity
import jakarta.persistence.Id

@Entity
class StudentData(
    @Id
    val id: Int,
    val firstName: String,
    val lastName: String,
    val email: String,
    val login: String
) {}