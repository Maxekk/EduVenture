package com.example.api.user

import jakarta.persistence.Entity
import java.sql.Date
import jakarta.persistence.Id

@Entity
class Announcement(@Id val id: Int, val title: String,val upload_date: Date ,val content: String) {
}