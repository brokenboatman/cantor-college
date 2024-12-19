import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="splitSection">
        <div className="mainTitleContent">
          <h1>Unlocking Opportunities, Shaping Futures.</h1>
          <p>At Cantor College, we empower students with knowledge, skills, and experiences to thrive in a rapidly changing world.</p>
        </div>
        <Image className="image" src="/images/cantor-atrium-3.jpg" alt="Cantor Atrium" width={720} height={480} loading="eager"/>
      </div>
      <h1 className="text">Our courses</h1>
      <div className="splitSection" id="courses">
        <div className="courseBox" id="computing">
          <Link href="/courses/computing"><button className="courseButton">Explore Computing</button></Link>
        </div>
        <div className="courseBox" id="design">
        <Link href="/courses/design"><button className="courseButton">Explore Design</button></Link>
        </div>
      </div>
      <h1 className="text">Other links</h1>
      <div className="splitSection" id="buttons">
      <Link href="/info/about" className="otherButton"><button>About Us</button></Link>
      <Link href="/info/business" className="otherButton"><button>Working with businesses</button></Link>
      <Link href="/info/facilities" className="otherButton"><button>Facilities</button></Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Home | Cantor College",
  description: "Welcome to Cantor College"
}