package com.example.api.user

import jakarta.persistence.Id
import jakarta.persistence.Entity

@Entity
class Grade(
   @Id
   val id: Int,
   val student_id: Int,
   val course: String,
   val grade_value: Int
)