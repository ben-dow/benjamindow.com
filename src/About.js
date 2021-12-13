import { Link } from "react-router-dom";
import profile from "./img/profile.jpg"
export default function About() {

    return (
        <div className="flex flex-grow justify-center items-center">

            <div className="flex w-full text-white bg-slate-700 bg-opacity-90 mx-auto items-center xl:justify-evenly sm:justify-between p-10 ">
                <div className="h-full flex items-center flex-col space-y-5 ">
                    <img className="shadow-lg rounded-full w-96 border-none" src={profile}/>
                    <h4 className="font-mono text-2xl font-thin">Benjamin "Benji" Dow</h4>
                </div>
                <div className="space-y-4">
                    <p className="text-base font-light  leading-relaxed max-w-xl">
                    Benjamin "Benji" Dow is a Software Engineer hailing from a small town about 20 minutes north of Portland Maine. 
                    Benji currently attends the Rochester Institute of Technology and will graduate in May of 2022 with both his 
                    Bachelors and Masters in Software Engineering. 
                    </p>

                    <p className="text-base font-light leading-relaxed max-w-xl">
                        Benji is intersted in many different areas of Software Engineering. His particular focus during school and internships has been in full stack
                        web engineering, and more recently Cloud Computing and Architecture. Additionally, Benji is passionate about Open Source Software and 
                        for his Masters Thesis has been researching the effect that roles aside from development have on participation in open source projects. This work entitled 
                        <span className="italic"> Alternative Participation Roles: An exploratory study on roles and activities in open source software beyond code contributions </span>
                        is set to be complete April/May of 2022. 
                    </p>

                    <p className="text-base font-light leading-relaxed max-w-xl">
                        When not programing, Benji is incredibly interested in Technical Theatre and has worked at the Panara Theatre at the National Technical Institute for the Deaf since 2016 as a student electrician. 
                        He also has been an active member of the RIT Players since 2016, serving as a Technical Director, Director, and Vice President during his time. Benji has created lighting designs for a number of plays, musicals,
                        a capella and dance groups. He welcomes theatrical freelance work when he has time!
                    </p>

                    <p className="text-base font-light leading-relaxed max-w-xl">
                       Benji is also an avid Hiker, Backpacker, Climber and all-around outdoorsman. Benji recieved his Eagle Scout Rank from the Boy Scouts of America in 2016. He additionally held his Maine EMT-B license from 2017 to 2020.
                    </p>

                </div>
            </div>
        </div>
    )
}
