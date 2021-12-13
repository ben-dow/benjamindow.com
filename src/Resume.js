import { Link } from "react-router-dom";
import profile from "./img/profile.jpg"


const activities = [
    {
        date: "2016 - 2022",
        name: "RIT Players",
        description: "Heavily involved with the RIT Players, RITs only student run theatre group. While a member, participated in nearly every mainstage production in some capacity, as well as serving as a Director, Tech Director, Marketing Director, Vice President, and Production Manager."
    },
    {
        date: "2016 - 2021",
        name: "RIT Outing Club",
        description: "Long-term member of RIT Outing Club. While a member, served as President and Vice-President of Facilities. Organized and ran a 40-person island camping trip twice. Additionally led weekly hikes and recruitment efforts." 
    },
    {
        date: "2016 - 2022",
        name: "Student Electrician @ Panara Theatre",
        description: "While a student at RIT, worked as a student electrician at the Panara Theatre at the National Technical Institute for the Deaf. While there, increased my knowledge on Lighting Design, Rigging, learned american sign language, and served as lighting designer for a festival for new plays by deaf playwrights."
    },
    {
        date: "2016",
        name: "Eagle Scout",
        description: "Awarded the rank of Eagle Scout by the Boy Scouts of America. Project was a 600ft path through a town easement to provide better access to the schools, removing foot traffic from a major road"
    }
]

const resume = [
    {
        startDate: "05/2021",
        endDate: "07/2021",
        jobTitle: "Software Engineering Co-Op",
        location: "Neustar - Rochester NY",
        description: "Returned to Neustar during Summer of 2021 as an Intern between Semesters.  Worked in a full stack role on customer facing tools for viewing aggregated data."
    },
    {
        startDate: "11/2020",
        endDate: "12/2020",
        jobTitle: "Part-Time Software Engineering Co-Op",
        location: "Neustar - Rochester NY",
        description: "Was asked to return to Neustar part time during the last 2 months of 2020 to help complete a project before the end of the year. Project was a tool to view an aggregated set of data from Neustar's customer and system databases."
    },
    {
        startDate: "08/2019",
        endDate: "12/2019",
        jobTitle: "Software Engineering Co-Op",
        location: "Neustar - Rochester NY",
        description: "Assigned as a front-end developer to a new project for creating and managing job configurations as part of a larger engineer focused application that is internal facing.        "
    },
    {
        startDate: "05/2019",
        endDate: "08/2019",
        jobTitle: "Software Engineering Intern",
        location: "Covetrus - Portland ME",
        description: "Assigned as full stack developer on project to help with production support. Application capabilities include: send and view AWS SQS messages, make SQL queries to database, and view database entities."
    },
    {
        startDate: "08/2018",
        endDate: "12/2018",
        jobTitle: "Intern",
        location: "Vets First Choice - Portland ME",
        description: "Coordinated and led the technical side of implementing the first Intranet for the company. Additional responsibilities included assisting DevOps teams with daily tasks. "
    }
]


export default function Resume() {

    return (
        <div className="flex flex-grow justify-center items-center">

            <div className=" font-mono flex justify-between w-full text-white bg-slate-700 bg-opacity-75 mx-auto  p-10  ">
                <div className="flex flex-col space-y-10 lg:max-w-5xl mx-auto">
                    <div className="justify-between flex">
                        <div>
                            <h3 className="font-mono text-3xl font-light">Benjamin Dow</h3>
                            <h5 className="text-md">Software Engineer</h5>
                        </div>

                        <div>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-4">
                        <div className="w-2/3 ">
                            <div className="font-bold text-xl">Profile</div>
                            <p className="font-light">BS/MS Software Engineering Student at RIT graduating in May 2022. Looking for full time software engineering opportunities. Available September 2022</p>
                        </div>

                        <div className="w-1/3">
                            <div className="font-bold text-xl ">Education</div>
                            <p className="font-light">Rochester Institute of Technology, BS/MS</p>
                            <p className="font-light">Software Engineering, May 2022</p>
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-slate-700"/>

                    <div className="space-y-5">
                        <div className="font-bold text-xl">
                            <div>Technologies and Skills</div>
                            <div className="text-xs font-light">A brief list of tools, technologies and other noteworthy skills I have. This is not a comprehensive list</div>
                        </div>
                        
            
                        <div className="space-y-4">
                            <div className="grid grid-cols-3">
                                <div className="font-bold">Languages and Frameworks</div>
                                <div className="col-span-2 text-sm font-light">Javascript, React, NextJS, TailwindCSS, CDK-Typescript, Java, Spring Framework, Redux, Saga</div>
                            </div>

                            <div className="grid grid-cols-3">
                                <div className="font-bold">Development Tools</div>
                                <div className="col-span-2 text-sm font-light">Git, Github, Gerrit, Jira, Confluence</div>
                            </div>

                            <div className="grid grid-cols-3">
                                <div className="font-bold">Cloud Providers</div>
                                <div className="col-span-2 text-sm font-light">AWS, Heroku</div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-slate-700"/>

                    <div className="space-y-5">
                        <div className="font-bold text-xl">Work Experience</div>


                        <div className="space-y-6">
                            {resume.map(item => {
                                console.log(item)
                                return <Job job={item} />
                            })}
                        </div>

                    </div>

                    <div className="w-full h-0.5 bg-slate-700"/>


                    <div className="space-y-5">
                        <div className="font-bold text-xl">Other Activities, Jobs, and Community Involvement</div>
                        
                        
                        <div className="space-y-6">
                            {activities.map(item => {
                                console.log(item)
                                return <OtherActivities activity={item} />
                            })}
                        </div>
                    
                    
                    </div>
                </div>

            </div>
        </div>
    )
}

function Job(props) {

    return (
        <div className="grid grid-cols-3 gap-2">
            <div className="space-x-4 flex text-lg">
                <div className="font-semibold">{props.job.startDate} - {props.job.endDate} </div>
            </div>

            <div className="col-span-2">
                <div className="block text-lg font-bold">{props.job.jobTitle}</div>
                <div className="block text-sm">{props.job.location}</div>
            </div>

            <div className="space-x-4 col-span-1 flex text-lg">
                <div className="text-sm ml-5 font-bold"></div>
            </div>

            <div className=" col-span-2 flex text-lg">
                <div className="text-sm font-thin">{props.job.description}</div>
            </div>
        </div>
    )
}

function OtherActivities(props){
    return (
        <div className="grid grid-cols-3 gap-2">
            <div className="space-x-4 flex text-lg">
                <div className="font-semibold">{props.activity.date}</div>
            </div>

            <div className="col-span-2">
                <div className="block text-lg font-bold">{props.activity.name}</div>
                <div className="block text-sm">{props.activity.location}</div>
            </div>

            <div className="space-x-4 col-span-1 flex text-lg">
                <div className="text-sm ml-5 font-bold"></div>
            </div>

            <div className=" col-span-2 flex text-lg">
                <div className="text-sm font-thin">{props.activity.description}</div>
            </div>
        </div>
    )

}
