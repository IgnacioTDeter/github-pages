import React, { useContext, useState } from "react";
import { AboutMePopup } from './AboutMePopup';
import pictureProfile from './img/profile-picture.webp'
import cellphoneContact from './img/telefono.webp'
import linkedinContact from './img/linkedin_.webp'
import githubContact from './img/github.webp'
import gmailContact from './img/gmail.webp'

import { AppContext } from "./App";

export function Grid() {

  const { isClicked, setIsClicked } = useContext(AppContext);



  const gridItems = [
    {
      id: "span-row-3",
      styles: "profile",
      component: <ProfilePicture />
    },
    {
      id: "span-col-3 span-row-3",
      styles: "name-card",
      component: <NameCard />
    },
    {
      id: "span-row-3 ",
      styles: "contact-card",
      component: <ContactLinks />
    },
    {
      id: "span-row-3 span-col-2",
      styles: "about-me-card",
      component: <AboutMe setIsClicked={setIsClicked} />
    },
    {
      id: "span-row-5 ",
      styles: "curriculum",
      component: <Curriculum /> // Cambiado para que coincida con la condición
    },
    { id: "span-row-2 span-col-3", styles: 'my-skills-card', component: <MySkills /> },

  ];


  return (
    <section className='grid-container'>
      {gridItems.map(item => (
        item.styles === "curriculum" ? (
          <Curriculum />
        ) : (
          item.component // renderiza el elemento JSX directamente
        )
      ))}

    </section>
  );

}



 function ProfilePicture() {
  return (
    <article className={`grid-item span-row-3 profile-picture`} fetchpriority="high">
      <img src={pictureProfile} alt="Foto de perfil" />
    </article>
  )

}

 function NameCard() {
  return (
    <article className={`grid-item name-card span-col-3 span-row-3`} >
      <div>
        <h1> Hi, I'm Ignacio Deter </h1>
        <h2> Junior Developer </h2>
      </div>
    </article>


  )
}

 function popUp(setIsClicked){
  setIsClicked(prevState => !prevState);
}


 function AboutMe({ setIsClicked }) {
  return (
    <article
      className={`grid-item about-me-card span-row-3 span-col-2`}
      onClick={() => popUp(setIsClicked)}
    >
      <h1>About Me</h1>
    </article>
  );
}


function ContactLinks() {
  return (
    <article className={`grid-item contact-card span-row-3 `}>
      <article>
        <div>
          <a href="https://github.com/IgnacioTDeter?tab=overview&from=2024-05-01&to=2024-05-08">
            <img src={githubContact} alt="GitHub" />
          </a>
        </div>
        <div>
          <a href="mailto:ignaciotdeter@gmail.com?subject=&body=">
            <img src={gmailContact} alt="Gmail" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ignacio-deter-3368a2266">
            <img src={linkedinContact} alt="LinkedIn" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/5491136069677?text=¡Hola!">
            <img src={cellphoneContact} alt="Teléfono" />
          </a>
        </div>
      </article>
    </article>
  );
}


function MySkills() {
  return (
    <article className={`grid-item my-skills-card span-row-2 span-col-3 `}>
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <img src="https://skillicons.dev/icons?i=git,github,html,css,js,react,mysql,vscode&perline=14" alt="" />
      </div>
    </article>

  );
}


function Curriculum() {

  return (
    <a href="./archivos/Curriculum-ignacio-deter.pdf" download="Curriculum-ignacio-deter" className={`grid-item curriculum span-row-5`}>
      <article>
        <div>
          <h1>Descargar CV</h1>
        </div>
      </article>
    </a>
  );

}

