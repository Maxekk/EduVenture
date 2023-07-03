package com.example.api.user

data class LoginResponse(
    val canLogin: Boolean?,
    val id: Int?,
    val firstname: String?,
    val lastname: String?,
    val email: String?,
    val login: String?,
    val password: String?,
    val is_admin: Int?
)