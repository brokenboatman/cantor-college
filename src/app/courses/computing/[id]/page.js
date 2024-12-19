import { fetchCourseDetails } from "@/app/lib/db";
import '../courses.css';

const CourseDetails = async ({params}) => {
    const {id} = await params;
    console.log(id);
    const course = await fetchCourseDetails(id);
    console.dir(course)
      return (
      <div className='container'>
        <div className="courseInfo">
                <div className="courseInfoBox">
                    <h3>{course.CourseTitle}</h3>
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
            </div>
      </div>
    );
  }
  export default CourseDetails;