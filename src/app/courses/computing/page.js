import { fetchCourses } from "@/app/lib/db";
import Image from "next/image";
import Link from "next/link";
import '../courses.css';

const Computing = async() => {
    const courses = await fetchCourses('SELECT * FROM mydb.courses WHERE CourseSubject="Computing";');
    console.log(courses);
    return (
        <div>
            <div className="splitSection">
                <Image className="image" src="/images/computing-2.jpg" alt="Controller on desk in PC lab" width={899} height={600}/>
                <div className="titleContent">
                    <h1>Computing courses</h1>
                    <p>
                    The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. 
                    At undergraduate level, 
                    there are single BSc Honours Degree courses in Computing, Computer Networks, 
                    Software Engineering and Cyber Security with Forensics amongst others.
                    </p>
                    <p>The College teaches undergraduate and postgraduate courses in a wide range of specialisms, 
                        including computer science, software development, information systems,
                         networking and software engineering. It is at the heart of a passionate computing community,
                          including student societies devoted to games development, 
                        digital forensics and programming.</p>
                    <p>The courses are British Computer Society accredited and are highly relevant to modern industry. 
                        They are designed to prepare students for professional occupations in Computing and related fields.
                         Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.</p>
                </div>
            </div>
            <div className="courseInfo">
                {courses.map((course, index) => (
                    <div key={index} className="courseInfoBox">
                        <h3><Link href={`./${index + 1}`}>{course.CourseTitle}</Link></h3>
                        <p><strong>Type:</strong> {course.CourseType}</p>
                        <p>{course.CourseSummary}</p>
                        <p><strong>Award:</strong> {course.CourseAwardName}
                        <br/><strong>UCAS code:</strong> {course.UcasCode}
                        <br/><strong>UCAS points:</strong> {course.UcasPoints}
                        <br/><strong>Year of entry:</strong> {course.YearOfEntry}
                        <br/><strong>Study length:</strong> {course.StudyLength}
                        <br/><strong>Foundation year:</strong> {course.HasFoundationYear == "true" ? "Yes" : "No"}
                        <br/><strong>Open to applications:</strong> {course.NoLongerRecruiting == "true" ? "No" : "Yes"}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Computing;

export const metadata = {
    title: "Computing Course | Cantor College",
    description: "This page gives info about our computing course"
}