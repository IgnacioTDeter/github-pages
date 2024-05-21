import wordleImage from './img/wordle.webp';
import  HTMLicon  from './img/htmlicon.webp'
import  CSSicon  from './img/cssicon.webp';
import  JSicon  from './img/jsicon.webp';
import  REACTicon  from './img/reacticon.webp';
import  MYSQLicon from './img/mysqlicon.webp';
import panolImage from './img/panol-imagen.webp'



export function Projects() {


    const projectList = [
        {
            id: 1,
            img: wordleImage,
            text: "Wordle es un juego simple, donde los jugadores intentan adivinar una palabra de cinco letras en seis intentos.",
            languages: [<HTML />, <CSS />, <JavaScript />, <React />],
            title: "Wordle",
            link: <Link linkGithub = "https://github.com/IgnacioTDeter/Proyectos-Web/tree/main/01-wordle" />
        },
        {
            id: 2,
            img: panolImage,
            text: "Plataforma diseñada para gestionar eficientemente el inventario de herramientas, permitiendo realizar pedidos, mantener un inventario actualizado automáticamente y gestionar cuentas de usuario de forma segura. ",
            languages: [<HTML />, <CSS />, <JavaScript />, <MySQL />],
            title: "Sistema de gestion 'Pañol'",
            link: <Link linkGithub = "https://github.com/IgnacioTDeter/Proyecto-Final"  />
        }
    ]


    return (
        <section className="projects-container">
            <h3> Projects </h3>

            {projectList.map(project => (
                <article className="project">
                    <img className="project-img" src={project.img} alt="" />


                    <article>
                        <h1>{project.title}</h1>
                        {project.text ? project.text : null}
                        <div className="dis-flex">
                            {project.languages ? project.languages : null}
                            {project.link}
                        </div>
                    </article>
                </article>

            ))}
        </section>
    )
}


export function Link({linkGithub}) {
    return (
        <div className='no-color-link'>
            <a href={linkGithub}>
                <img style={{ margin: 'auto', padding: '0 1vh 0 1vh' }} src="https://cdn.iconscout.com/icon/free/png-256/free-chain-link-connection-attach-37919.png?f=webp" alt="" />
            </a>
        </div>
    );
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