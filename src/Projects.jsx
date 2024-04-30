import wordleImage from './img/wordle.webp';
import  HTMLicon  from './img/htmlicon.webp'
import  CSSicon  from './img/cssicon.webp';
import  JSicon  from './img/jsicon.webp';
import  REACTicon  from './img/reacticon.webp';
import  MYSQLicon from './img/mysqlicon.webp';



export function Projects() {


    const projectList = [
        {
            id: 1,
            img: wordleImage,
            text: "Wordle es un juego simple, donde los jugadores intentan adivinar una palabra de cinco letras en seis intentos.",
            languages: [<HTML />, <CSS />, <JavaScript />, <React />],
            title: "Wordle"
        },
        {
            id: 2,
            img: wordleImage,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, alias velit. Consequuntur blanditiis id ea hic vel? Expedita officiis quamLorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, alias velit. Consequuntur blanditiis id ea hic vel? Expedita officiis quamLorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, alias velit. Consequuntur blanditiis id ea hic vel? Expedita officiis quamLorem ipsum  ",
            languages: [<HTML />, <CSS />, <JavaScript />, <MySQL />],
            title: "Sistema de gestion 'Pañol'"
        }
    ]


    return (
        <section className="projects-container">
            <h3> Projects </h3>

            {projectList.map(project => (
                <article className="project">
                    <img className="project-img" src={project.img} alt="pedritooo" />


                    <article>
                        <h1>{project.title}</h1>
                        {project.text ? project.text : null}
                        <div className="dis-flex">
                            {project.languages ? project.languages : null}
                        </div>
                    </article>
                </article>

            ))}
        </section>
    )
}

export function HTML() {
    return (
        <div className="language-container">
            HTML
            <div>
                <img src= {HTMLicon} alt="" />
            </div>
        </div>
    )

}

export function CSS() {
    return (
        <div className="language-container">
            CSS
            <div>
                <img src= {CSSicon} alt="" />
            </div>
        </div>
    )
}

export function JavaScript() {

    return (
        <div className="language-container">
            JavaScript
            <div>
                <img src= {JSicon} alt="" />
            </div>
        </div>
    )

}

export function React() {
    return (
        <div className="language-container">
            React
            <div>
                <img src= {REACTicon} alt="" />
            </div>
        </div>
    )
}

export function MySQL() {

    return (
        <div className="language-container">
            MySQL
            <div>
                <img src= {MYSQLicon} alt="" />
            </div>
        </div>
    )

}