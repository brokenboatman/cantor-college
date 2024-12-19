import mysql from "mysql2/promise";

// connect to the database
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });

const fetchCourses = async (query) => {
    try {
        const [rows, fields] = await connection.execute(query);
        return rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch data.");}
};

const fetchCourseDetails = async (id) => {
    try {

        const query = "SELECT * FROM courses WHERE CourseID = ?"; 
        const [rows] = await connection.execute(query, [id]); 
        return rows[0] || null;
    } catch (error) {
      console.error("Database Error:", error); 
      throw new Error("Failed to fetch data.");
    }
  };

export { fetchCourseDetails };

export { fetchCourses };