import type { NextPage } from "next";
import Heading from "./heading";
import Heading2 from "./heading2";
import ProjectSlider from "./project-slider";

interface Props {}

const Projects: NextPage<Props> = () => {
    return (
        <div
            id='projects'
            className='h-screen snap-start grid place-content-center select-none'
        >
        <div>
            <Heading>Projects</Heading>
            <Heading2 color=''>My recent portfolios.</Heading2>
            <ProjectSlider />
        </div>
        </div>
    );
};

export default Projects;
