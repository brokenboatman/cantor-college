import MyNavbar from "./Components/MyNavbar";
import "./global.css"
import Link from "next/link";
import Contact from "./Components/Contact";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MyNavbar></MyNavbar>
        <div>{children}</div>
        <footer>
          <Contact></Contact>
          <div className="footerLinks">
              <li><Link href="/learning-resources" className="linkItem">Learning Resources</Link></li>
              <li><Link href="/courses/computing" className="linkItem">Computing Course</Link></li>
              <li><Link href="/courses/design" className="linkItem">Design Course</Link></li>
            </div>
            <div className="footerLinks">
              <li><Link href="/info/about" className="linkItem">About Us</Link></li>
              <li><Link href="/info/business" className="linkItem">Working with businesses</Link></li>
              <li><Link href="/info/facilities" className="linkItem">Facilities</Link></li>
            </div>
        </footer>
      </body>
    </html>
  );
}