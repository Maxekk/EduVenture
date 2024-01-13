package com.example.api.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.dao.DataAccessException
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestBody

@Service
class UserService @Autowired constructor(
        private val db: JdbcTemplate,
        private val userRepository: userRepository
){
    fun getAllUsers(): List<com.example.api.user.User>{
        return db.query("select * from users") {
                res, _ ->
            User(
                id = res.getInt("id"),
                firstName = res.getString("firstname"),
                lastName = res.getString("lastname"),
                login = res.getString("login"),
                email = res.getString("email"),
                password = res.getString("password"),
                is_admin = res.getInt("is_admin")
            )
        }
    }

    fun modStudentData(@RequestBody studentData: StudentData): String {
        try{
            val updateQuery = "UPDATE users " +
                    "SET " +
                    "  firstName = '${studentData.firstName}', " +
                    "  lastName = '${studentData.lastName}', " +
                    "  email = '${studentData.email}', " +
                    "  login = '${studentData.login}' " +
                    "WHERE " +
                    "  id = ${studentData.id}"
            db.update(updateQuery)
            return "User data moded sucesfully"
        }
        catch (e: DataAccessException){
            return "Something went wrong: $e"
        }
    }

    fun createNewUsr(@RequestBody user: User): String {
        return try{
            val insertQuery = "INSERT INTO users (firstname,lastname,email,login,password,is_admin) VALUES (?,?,?,?,?,?)"
            db.update(insertQuery,user.firstName,user.lastName,user.email,user.login,user.password, user.is_admin)
            "Student created succesfully"
        } catch (e: DataAccessException){
            "Sorry something went wrong"
        }
    }


    fun getAllStudents(): List<Student>{
        return db.query("select * from users where is_admin=0") {
                res, _ -> Student(
                    id = res.getInt("id"),
                    firstname = res.getString("firstname"),
                    lastname = res.getString("lastname"),
                    login = res.getString("login"),
                    email = res.getString("email"),
                    password = res.getString("password"),
                    is_admin = res.getBoolean("is_admin")
                )}
    }

    fun checkCredentials(@RequestBody userData: Credentials ): LoginResponse {
        val users = getAllUsers()
        val matchingUser = users.find { it.login == userData.login && it.password == userData.password }
        if(matchingUser != null){
            return LoginResponse(
                    true,
                    matchingUser.id,
                    matchingUser.firstName,
                    matchingUser.lastName,
                    matchingUser.email,
                    matchingUser.login,
                    matchingUser.password,
                    matchingUser.is_admin
            )
        }
        else {
            return LoginResponse(
                    false,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
            )
        }
    }

    fun getUsersCount(): UserCount {
        val users = getAllUsers()
        val teachers = users.count { it.is_admin == 1 }
        val students = users.count {it.is_admin == 0}
        return UserCount(students,teachers)
    }

    fun getAnnouncements(): List<Announcement> {
        return db.query("select * from announcements") { res, _ -> Announcement(
            id = res.getInt("id"),
            title = res.getString("title"),
            content = res.getString("content"),
            upload_date = res.getDate("upload_date")
        )}
    }

    fun addAnnouncement(announcement: Announcement): String {
        val insertQuery = "INSERT INTO announcements (title, upload_date, content) VALUES (?, ?, ?)"
        db.update(insertQuery, announcement.title, announcement.upload_date, announcement.content)
        return "Announcement added successfully."
    }

    fun getGrades(): List<Grade> {
        return db.query("select * from grades") {
                res, _ -> Grade(
            id = res.getInt("id"),
            student_id = res.getInt("student_id"),
            course = res.getString("course"),
            grade_value = res.getInt("grade_value")
        )}
    }

    fun addGrade(grade: Grade): String {
        try {
            val insertQuery = "INSERT INTO grades (student_id, course, grade_value) VALUES (?, ?, ?)"
            db.update(insertQuery, grade.student_id, grade.course, grade.grade_value)
            return "Grade added successfully"
        }
        catch (e: DataAccessException) {
            return "Could not add the grade"
        }
    }

    fun deleteAnnouncement(@RequestBody requestPayload: Map<String, Int>): String {
        val id = requestPayload["id"]
        return if (id != null) {
            try {
                val deleteQuery = "DELETE FROM announcements WHERE announcements.id = $id"
                db.update(deleteQuery)
                "Announcement with ID $id deleted successfully"
            } catch (e: DataAccessException) {
                "An error occurred while deleting the announcement: ${e.message}"
            }
        } else {
            "Invalid request payload"
        }
    }

    fun deleteStudent(@RequestBody requestPayload: Map<String, Int>): String {
        val id = requestPayload["id"]
        return if (id != null) {
            try {
                val deleteStudentQuery = "DELETE FROM users WHERE users.id = $id"
                val deleteAssociatedGradesQuery = "DELETE FROM grades WHERE student_id = $id"

                db.update(deleteAssociatedGradesQuery)
                db.update(deleteStudentQuery)

                "User with ID $id deleted successfully"
            } catch (e: DataAccessException) {
                "An error occurred while deleting the student: ${e.message}"
            }
        } else {
            "Invalid request payload"
        }
    }

    fun deleteGrade(@RequestBody requestPayload: Map<String, Int>): String {
        val id = requestPayload["id"]
        return if (id != null) {
            try {
                val deleteGradeQuery = "DELETE FROM grades WHERE id = $id"
                db.update(deleteGradeQuery)
                "Grade with ID $id deleted successfully"
            } catch (e: DataAccessException) {
                "An error occurred while deleting grade: ${e.message}"
            }
        } else {
            "Invalid request payload"
        }
    }
}