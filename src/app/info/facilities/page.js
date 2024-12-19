import Image from "next/image";

const Facilities = () => {
    return (
        <div>
            <div className="splitSection">
                <Image className="image" src="/images/facilities.jpg" alt="Cantor Atrium" width={1090} height={400}/>
                <div className="titleContent">
                        <h1>Facilities</h1>
                    <p>The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.
                    </p>
                    <p>Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.</p>
                </div>
            </div>
            <div className="text">
                <h2>Facilities include:</h2>
                <ul>
                    <li>Wi-Fi technology</li>
                    <li>Pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
                    <li>Specialist faculty facilities</li>
                    <li>A double-height lecture theatre at first and second floor level</li>
                    <li>Dramatic three-storey glass open atrium</li>
                    <li>Meeting rooms</li>
                    <li>Office accommodation</li>
                    <li>Specialist IT facilities</li>
                    <li>Reception desk area</li>
                    <li>Catering outlet</li>
                    <li>Parking for disabled badge holders</li>
                    <li>Cycle racks</li>
                    <li>Gallery</li>
                </ul>
            </div>
        </div>
    )
}

export default Facilities;

export const metadata = {
    title: "Facilities | Cantor College",
    description: "Take a look at our facilities"
}