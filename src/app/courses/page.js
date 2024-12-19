import Link from "next/link";
import '../global.css';
import './courses.css';

const Courses =  () => {
    return (
        <div className="text">
            <h2>Select a course to continue: </h2>
            <div className="splitSection" id="buttons">
                <Link href="courses/computing"><button>Computing course</button></Link>
                <Link href="courses/design"><button>Design course</button></Link>
            </div>
        </div>
    )
}

export default Courses;

export const metadata = {
    title: "Courses | Cantor College",
    description: "This page gives info about our design course"
}