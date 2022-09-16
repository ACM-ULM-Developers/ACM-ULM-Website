import React from "react";
import { internsData } from './internsData';
import { developersData } from "./developersData";

export default function AcademicDescription(){

    const interns = internsData.map((intern) => {
        return{
            name: intern.name,
            classification: intern.classification,
            position: intern.position,
            company: intern.company,
            timeInterval: intern.time,
            linkedin: intern.linkedinLink
        }
    })

    const developers = developersData.map((developer) => {
        return{
            name: developer.name,
            classification: developer.classification,
            github: developer.github,
            linkedin: developer.linkedin,
            image: developer.image
        }
    })

    return(
        <div className = "descriptionContainer">
            <section className = "leetcode_description">
                <p className = "leetcode--title">Why LeetCode?</p>
                <p className = "leetcode--body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis mollitia 
                    vel obcaecati tenetur rerum suscipit alias repudiandae laudantium ab. Qui 
                    veniam dolore perspiciatis sapiente itaque, incidunt quam accusamus numquam 
                    natus!

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis mollitia 
                    vel obcaecati tenetur rerum suscipit alias repudiandae laudantium ab. Qui 
                    veniam dolore perspiciatis sapiente itaque, incidunt quam accusamus numquam 
                    natus!
                </p>
            </section>

            <section className = "internship_description">
                <p className = "internship--title">Looking for an Internship?</p>
                <p className = "internship--body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis mollitia 
                    vel obcaecati tenetur rerum suscipit alias repudiandae laudantium ab. Qui 
                    veniam dolore perspiciatis sapiente itaque, incidunt quam accusamus numquam 
                    natus!

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis mollitia 
                    vel obcaecati tenetur rerum suscipit alias repudiandae laudantium ab. Qui 
                    veniam dolore perspiciatis sapiente itaque, incidunt quam accusamus numquam 
                    natus!
                </p>
            </section>

            <section className = "find_internships">
                <p className = "find_internships--title">FIND INTERNSHIPS NOW!!</p>
                <div className = "internship_finder">
                    <div className = "finder_1">
                        Finder 1
                    </div>

                    <div className = "finder_2">
                        Finder 2
                    </div>

                    <div className = "finder_3">
                        Finder 3
                    </div>

                    <div className = "finder_4">
                        Finder 4
                    </div>

                    <div className = "finder_5">
                        Finder 5
                    </div>

                    <div className = "finder_6">
                        Finder 6
                    </div>

                    <div className = "finder_7">
                        Finder 7
                    </div>

                    <div className = "finder_8">
                        Finder 8
                    </div>
                    
                </div>
            </section>

        
            <div className = "interns_ulm">
                <p className = "interns--title">ULM CS INTERNS</p>
                <div className = "interns--container">
                    {interns.map((intern) => {
                        return(
                        <section className = "interns">
                            <div className = "background_cover"></div>
                            <p className = "interns--name">{intern.name}</p>
                            <p className = "interns--classification">{intern.classification}</p>
                            <p className = "interns--position">{intern.position}</p>
                            <p className = "interns--company">{intern.company}</p>
                            <p className = "interns--timeInterval">{intern.timeInterval}</p>
                            <a href = {intern.linkedin}>
                                <button className = "interns--linkedin">View Linkedin</button>
                            </a>
                        </section>
                    )})};
                </div>
            </div>
        

            <div className = "ulm_developers">
                <p className = "ulm_developers--title">
                    ULM ACM DEVELOPERS
                </p>
                
                <div className = "ulm_developers--container">
                    {developers.map((developer) => {
                    return(
                    <section className = "acmDevelopers">
                            <div className = "background_cover"></div>
                            <p className = "developers--name">{developer.name}</p>
                            <p className = "developers--classification">{developer.classification}</p>
                            <p className = "developers--github">{developer.github}</p>
                    </section>
                    )})}
                </div>
            </div>
    </div>
    )
}