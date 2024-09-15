
type SmallRectangleAbout = {
    title: string,
    year: string,
    course: string,
    school: string,
    secondYear: string,
    secondCourse: string,
    SecondSchool: string
}


function SmallRectangleAbout({ title, year, course, school, secondYear, secondCourse, SecondSchool }: SmallRectangleAbout) {

    return (
        <div className="containerRectangle">
            <h3>{title}</h3>
            <p className="yearText">{year}</p>
            <p className="courseText">{course}</p>
            <p className="schoolText">{school}</p>
            <p className="yearText">{secondYear}</p>
            <p className="courseText">{secondCourse}</p>
            <p className="schoolText">{SecondSchool}</p>
        </div>
    )

}

export default SmallRectangleAbout