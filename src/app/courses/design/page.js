import { fetchCourses } from "@/app/lib/db";
import Image from "next/image";
import '../courses.css';

const Design = async() => {
    const courses = await fetchCourses('SELECT * FROM mydb.courses WHERE CourseSubject="Art and design";');
    console.log(courses);
    return (
        <div>
            <div className="splitSection">
                <Image className="image" src="/images/design-2.jpeg" alt="Row of art in frames on a wall" width={800} height={600}/>
                <div className="titleContent">
                    <h1>Design courses</h1>
                    <p>
                    The College is an internationally connected creative community of diverse disciplines housed under one roof.
                     We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
                    </p>
                    <p>The College's art and design courses don't just train you, 
                        they promote alternative ways of thinking, making and communicating; 
                        they provide you with space, tools and inspiration to develop your creative practice and a clear career path.
                         You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative
                          and resourceful approaches that both perceive and create opportunities for better lives.</p>
                    <p>You’ll develop your creative practice whilst interacting with your peers in well-equipped studios,
                         making and digital workshops. At the same time, 
                         you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, 
                         cultural institutions, businesses and organisations.</p>
                </div>
            </div>
            <div className="courseInfo">
                {courses.map((course, index) => (
                    <div key={index} className="courseInfoBox">
                        <h3>{course.CourseTitle}</h3>
                        <p>Type: {course.CourseType}</p>
                        <p>{course.CourseSummary}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Design;

export const metadata = {
    title: "Design Course | Cantor College",
    description: "This page gives info about our design course"
}