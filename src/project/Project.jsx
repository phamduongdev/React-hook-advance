import Login from "./Login";
import './Project.scss';
import 'nprogress/nprogress.css';
import Lesson17 from "./chapter3/Lesson17";
import Lesson18 from "./chapter3/Lesson18";
import Lesson19 from "./chapter3/Lesson19";
// import Lesson26 from "./chapter4/lesson26/Lesson26";

const Project = (props) => {
    return (
        <div className="project">
            {/* <Login /> */}
            {/* <Lesson17 /> */}
            {/* <Lesson18 /> */}
            <Lesson19 />
            {/* <Lesson26 /> */}
        </div>
    );
};

export default Project;