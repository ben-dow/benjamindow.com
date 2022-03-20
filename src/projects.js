import {
  faGit,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
const _ = require("lodash");
export default function Projects() {
  return (
    <div className="flex  flex-grow overflow-auto h-full bg-slate-700 bg-opacity-80 ">
      <div className="flex w-full h-full  sm:justify-between p-10 text-white ">
        <div className={"w-full space-y-5"}>
          <div className={"text-xl font-medium"}>Projects</div>

          <div className={"gap-5 flex flex-col w-full"}>
            <Project
              title={"WhatsMyTripPlan"}
              type={"Personal Project"}
              description={
                "WhatsMyTripPlan is an application I have been developing over the last several months. " +
                "The goal is to create an easy to use, opinionated application for creating trip plans." +
                " The application is primarily geared towards hiking/camping trips." +
                " I am hoping to have an MVP done by mid-spring 2022. The application is serverless and hosted on AWS using AWS Lambda, S3, CloudFront and DynamoDB as the primary services. "
              }
            />
            <Project
              title={"Face Perception Survey"}
              type={"Freelance Project"}
              description={
                "FacePerceptionSurvey is a project that I took on for a friend of mine working on his Senior Capstone at RIT. " +
                "The website generates a survey for individuals to take based on a JSON file provided to the application. " +
                "This allowed the survey to continuously change and update throughout the capstone process, " +
                "without myself having to go back and make updates."
              }
              github={"https://github.com/ben-dow/FacePerceptionSurvey"}
            />
            <Project
              title={"benjamin-dow.com"}
              type={"Personal Project"}
              description={
                "" +
                "The Website that you are viewing right now! This website is written in React and hosted on AWS S3 and served by CloudFront."
              }
              github={"https://github.com/ben-dow/benjamindow.com"}
            />
            <Project
              title={"Gallery Gateway"}
              type={"Undergraduate Senior Project"}
              description={
                "I participated on this project as part of a team for my Senior Project at RIT. We continued work on a gallery website for the RIT School of Photographic Sciences."
              }
              github={
                "https://github.com/Third-Time-s-the-Charm/gallery-gateway"
              }
            />
            <Project
              title={"Celebrity Face Recognition"}
              type={"Course Project"}
              description={
                "As a part of course work for a Cloud Computing Class, my group created an application that recognized Celebrity faces, and located a Wikipedia article about the celebrities in the photo. The application used Lambda, SQS, S3, Rekognition, and DynamoDB as its primary services."
              }
              github={
                "https://github.com/RIT-cloud-computing/term-project-team-team-4-cloud-warriors"
              }
            />
            <Project
              title={"Alternative Participation Roles"}
              type={"Graduate Thesis"}
              description={
                "This is my thesis for my masters at RIT. The paper will be completed in the spring of 2022 and will be posted here."
              }
              github={
                "https://github.com/ben-dow/AlternativeParticipationRolesDataCollection"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Project(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={
        "w-full bg-slate-700 space-y-3 rounded bg-opacity-90 p-5 shadow hover:bg-opacity-100 cursor-pointer"
      }
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <div>
        <div className={"flex space-x-2  items-baseline"}>
          <div className={"font-medium text-lg"}> {_.get(props, "title")}</div>
          <div className={"font-light text-xs"}> {_.get(props, "type")}</div>
        </div>
        <div>
          <div className={"font-light text-xs"}>
            {_.has(props, "github") ? (
              <a
                className={"hover:underline z-50"}
                href={_.get(props, "github")}
                target="_blank"
              >
                {_.get(props, "github")}
              </a>
            ) : (
              "Code Samples are available upon request"
            )}
          </div>
        </div>
      </div>
      {expanded ? (
        <div className={"font-sans prose text-white "}>
          {_.get(props, "description")}
        </div>
      ) : null}
    </div>
  );
}
