package com.example.api.user
import jakarta.persistence.Entity
import jakarta.persistence.Id

@Entity
class User(
    @Id
    val id: Int,
    val firstName: String,
    val lastName: String,
    val email: String,
    val login: String,
    val password: String,
    val is_admin: Int
    ) {}