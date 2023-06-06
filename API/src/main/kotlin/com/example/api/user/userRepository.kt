package com.example.api.user

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface userRepository : JpaRepository<user, String>{
}