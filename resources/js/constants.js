const language = 'en';
const year = new Date().getFullYear() - 2020;
const translations  = {
    en: {
        presentationHi: "Hello,",
        presentationIam: "I am",
        presentationProfession: "Backend Developer | Sofware developer | Full Stack developer",
        aboutMeLink: "About Me",
        aboutMeTitle: "About Me",
        aboutMeBg: "A",
        aboutMeItem1: "Third place in the Comunity Fest and Code 2021",
        aboutMeItem2: "Actually I'm Studing software analysis and development",
        aboutMeItem3: "I live in Cali - Colombia",
        aboutMeResume1: `Passionate programmer with over ${year} years of experience in software development, 
            both in corporate environments and freelance projects. 
            My dedication to teamwork is reflected in my track record of leading successful projects, 
            where I have demonstrated exceptional problem-solving skills, time management, and adaptability to dynamic environments.`,
        aboutMeResume2: `My proactive approach and ability to take initiative have allowed me to excel in challenging situations, 
            while my ability to collaborate effectively has contributed to the overall success of the teams I have worked with. 
            In addition to my experience in companies, 
            my work as a freelancer has not only strengthened my technical skills but also enhanced my soft skills, 
            such as effective communication and empathy.`,
        aboutMeResume3: `I am a passionate self-learner, always eager to learn and evolve. 
            My ability to gather requirements and work under agile methodologies, 
            especially SCRUM, has been crucial in the timely delivery of projects. 
            My experience spans various technologies, including PHP (Laravel), 
            JavaScript (Angular, React, Vue, Strapi, React Native, Node), SQL (PostgreSQL, MySQL, SQL Server), 
            C# (.NET), Ruby (Ruby on Rails), Java SE, and SpringBoot.`,
        aboutMeResume4: `I take pride in staying at the forefront of the latest technologies and am committed to continuous development. 
            As a passionate critical thinker, 
            I am confident that my experience and skills will significantly contribute to any project I undertake. 
            I am excited about the opportunity to continue growing and contributing to dynamic and ambitious teams.`,
        aboutMePrhase: "True wisdom is knowing that you never stop learning.",
        educationTitle: "Education",
        educationBg: "E",
        educationTitle1: "Systems technician",
        educationDescription1: `This was my first exposure with programming, 
            I learned about computer architecture and I took my first steps in programming.`,
        educationDescription2: `I embraced this learning journey and I learned new technologies, 
            new programming languages, facing different challenges.`,
        educationTitle3: "Software analysis and development",
        educationDescription3: `This profession is constantly changing, so we need to keep learning. 
            Currently, I am studying to improve my skills always thinking about my professional career.`,
        technologiesTitle: "Technologies",
        technologiesBg: "T",
        technologiesDescription: `Throughout my career, both in freelance projects and corporate environments, 
            I have gained valuable experience that has contributed to the development of my skills. 
            This journey has been a continuous learning process, 
            facing various challenges that have led me to explore and master a wide range of technologies and languages. 
            It has shown me that, no matter the challenge, it can always be overcome. Below, 
            I present some of the technologies I have worked with: `,
        skillsTitle: "Skills",
        skillsBg: "S",
        skillsDescription: ` Las habilidades cumplen un papel fundamental en la vida misma, 
            con disciplina y perseverancia se logra desarrollarlas, fortalecerlas, crear nuevas.
            De ellas depende la formulación de una estrategia para cumplir una meta o superar un reto.
            Un conjunto de habilidades puestos a disposición de las personas pueden brindar servicios extremadamente útiles para la sociedad.`,
        skillsSubtitle1:"Análizar",
        skillsSubDescription1:` poseo la capacidad de analizar un problema y verlo desde diferentes angulos, 
           siempre poniendo en practica la experiencia adquirida.`,
        skillsSubtitle2:"Vanguardia",
        skillsSubDescription2:`El conocimiento es un arma poderosa, 
            considero que el conocimiento es una de las cosas mas importantes que se posee,
            me gusta el aprendizaje, estudiar y estar al dia con los temas y tecnologias que estan a la vanguardia, 
            herramientas y tecnologias que
            van surgiendo al final estan hechas para que el desarrollo sea mejor, mas optimo.`,
        skillsSubtitle3:"Retos",
        skillsSubDescription3:`Considero que los retos nos permiten movernos de nuestra zona de confort, 
            ellos sacan quien en realidad somos, 
            ellos nos otorgan sabiduria y conocimiento.`,
        skillsSubtitle4:"Adaptación",
        skillsSubDescription4:`La vida es un ciclo de constante evolución.
            De esta manera sabemos cuán importante es la capacidad de aprender de una manera rápida, 
            de apasionarse con cada tema nuevo y evolucionar con la tecnología.`,
        experienceTitle: "Experience",
        experienceBg: "E",
        experienceResume: "La experiencia son un conjunto de habilidades otorgadas por la suma entre el tiempo y la práctica.",
        experienceYear1: "2015 - 2020",
        experienceTitle1:"Administrador de Servidores / Bd",
        experienceSubTitle1: "Grupo empresarial MR",
        experienceDescription1:` El grupo empresarial MR son un conjunto de empresas formadas por 4 CDA, 
            un hotel  y una Empresa de deshechos hospitalarios.
            La experiencia en estas empresas consta de Analisis de datos.
            administración y mantenimiento de redes, administración y mantenimiento de servidores y desarrollo web, 
            gestión de procesos de seguridad informática, acompañamiento al sistema de gestión de calidad y validación de software.`,
        experienceYear2: "2020-2022",
        experienceTitle2:"Desarrollador web",
        experienceSubTitle2: "IMPROVEMENT AFO",
        experienceDescription2:`Desarrollo de varios aplicativos a la medida, 
            Realizaba un trabajo de outsourcing a la empresa, quien contrataba con la gobernacion del valle del cauca.
            Con contratos por proyectos se hacian las reuniones con el cliente, el levantamiento de requerimientos, 
            direccion de metodologías agiles( SCRUM ), 
            presentacion de proyecto, despliegue, documentacion, soporte y actualizaciones`,
        experienceYear3: "2021-2022",
        experienceTitle3:"Desarrollador staff",
        experienceSubTitle3: "Siesa",
        experienceDescription3:`Soporte tecnico a aplicativo de salud en las diferentes entidades de salud de la zona costera del pais. (ZeusSalud)`,
        experienceYear4: "2022-2023",
        experienceTitle4:"Freelance",
        experienceSubTitle4: "Formula 1",
        experienceDescription4:"Aplicativo de gestion de instructores, vehiculos, encuestas de la entidad.",
        experienceYear5: "2022",
        experienceTitle5:"Freelance",
        experienceSubTitle5: "-",
        experienceDescription5:"Aplicativo de gestion de Asesores y asesorias, para el reporte, manejo y pago de los mismos.",
        experienceYear6: "2022",
        experienceTitle6:"Desarrollador full stack",
        experienceSubTitle6: "Spartan Hill",
        experienceDescription6:`Desarrollo de aplicativo para evento en el salvador con pagos con criptomonedas, desarrollo y mantenimiento de cripto wallet y 
            aplicacion para procesar pagos por medio de las criptomonedas.`,
        experienceYear7: "2023",
        experienceTitle7:"Freelance",
        experienceSubTitle7: "-",
        experienceDescription7: "Desarrollo de aplicativo base para futuros proyectos Angular 15 - Laravel 9 Postgresql.",
        experienceYear8: "2022 -",
        experienceTitle8:"Desarrollador full stack",
        experienceSubTitle8: "Punto Red",
        experienceDescription8:"Diversas aplicaciones, entre ellas una aplicacion interna para procesos de clientes, automatizacion de procesos entre otras.",
        portfolioTitle: "Portfolio",
        portfolioBg: "P",
        portfolioDescription: "Proyectos trabajados de manera independiente",
        referencesTitle: "references",
        referencesBg: "P",
        referencesDescription: `Es importante mantenerse educado mantenerse actualizado, pero también debemos alimentar nuestro espíritu con literatura. 
            Este alimento nos forja un pensamiento ante las diferentes situaciones de la vida misma`,
        referenceName1: `____William Soto`,
        referenceResume1: `La educación es un poder; y somos conscientes de que es el arma más poderosa para transformar mentalidades,
            por ende, un mecanismo para modificar sociedades; y consecuentemente, para cambiar el mundo`,
        referenceName2: `____Linus Torvalds`,
        referenceResume2: `La mayoría de los buenos programadores programan no porque esperan que les paguen o que el público los adore, 
            sino porque programar es divertido.`,
        referenceName3: `____Freddy Vega`,
        referenceResume3: `Tu techo, a nivel de debilidad y a nivel intelectual es una elección. 
            ¡La gente que dice “es que yo no sirvo para esto!" en mi opinion son perdedores, y no son perdedores porque no puedan.
            Son perdedores porque tomaron la decisión de no poder. Todo el mundo puede todo, 
            lo único que hay que hacer es intentarlo y nunca parar de aprender. `,
        interestsTitle: "Interests",
        interestsBg: "I",
        interestsDescription: `Nuestros gustos, carácter y filosofía en la que basamos nuestros actos definen quienes somos.`,
        interestsItem1: "Aprender",
        interestsItem2: "Deportes",
        interestsItem3: "Desarrollar",
        interestsItem4: "Seguridad informática",
        contactMeTitle: "ContactMe",
        contactMeBg: "C",
        phoneNumber: "PhoneNumber",
        email: "Email"
    },
    es: {
        presentationHi: "Hola,",
        presentationIam: "Soy",
        presentationProfession: "Desarrollador backend | Desarrollador de Sofware | Desarrollador Full Stack",
        aboutMeTitle : "Sobre mi",
        aboutMeBg: "S",
        aboutMeItem1: "Tercer Puesto en la Comunity Fest and Code 2021",
        aboutMeItem2: "Actualmente estudio analisis y desarrollo de software",
        aboutMeItem3: "Vivo en Cali - Colombia",
        aboutMeResume: "I live in Cali - Colombia",
        aboutMeResume1: `Programador apasionado con más de ${year} años de experiencia en el desarrollo de software,
            tanto en entornos corporativos como en proyectos de freelance. Mi dedicación al trabajo en equipo se refleja 
            en mi historial de liderar proyectos exitosos, donde he demostrado habilidades excepcionales para la resolución de problemas, 
            gestión del tiempo y adaptabilidad a entornos dinámicos. `,
        aboutMeResume2: `Mi enfoque proactivo y mi capacidad para asumir la iniciativa me han permitido destacar en situaciones desafiantes, 
            mientras que mi habilidad para colaborar de manera efectiva ha contribuido al éxito general de los equipos en los que he trabajado. 
            Además de mi experiencia en empresas, 
            mi labor como freelancer no solo ha fortalecido mis habilidades técnicas, sino que también ha potenciado mis habilidades blandas, 
            como la comunicación efectiva y la empatía.`,
        aboutMeResume3: `Soy un apasionado autodidacta, siempre ansioso por aprender y evolucionar. 
            Mi habilidad para levantar requerimientos y trabajar bajo metodologías ágiles, especialmente SCRUM, 
            ha sido crucial en la entrega puntual de proyectos. Mi experiencia abarca diversas tecnologías, incluyendo PHP (Laravel), 
            JavaScript (Angular, React, Vue, Strapi, React Native, Node), SQL (PostgreSQL, MySQL, SQL Server), C# (.NET), Ruby (Ruby on Rails), 
            Java SE Y SpringBoot.`,
        aboutMeResume4: `Me enorgullece mantenerme a la vanguardia de las últimas tecnologías y estoy comprometido con el desarrollo continuo. 
            Siendo un apasionado del pensamiento crítico, 
            estoy seguro de que mi experiencia y habilidades contribuirán significativamente a cualquier proyecto que aborde. 
            Estoy emocionado por la oportunidad de seguir creciendo y aportando a equipos dinámicos y ambiciosos.`,
        aboutMePrhase: "La verdadera sabiduría es saber que nunca dejas de aprender.",
        educationTitle: "Educación",
        educationBg: "E",
        educationTitle1: "Técnico en sistemas",
        educationDescription1: `Esta fue mi primera experiencia con la programacion, 
            donde adquirí los conocimientos acerca de la arquitectura de computadores y di los primeros pasos en la programación`,
        educationDescription2: `Acepté esta ruta de aprendizaje y aprendí nuevas tecnologías, 
            nuevos lenguajes de programación, enfrentando diferentes desafíos.`,
        educationTitle3: "Software analysis and development",
        educationDescription3: `Esta profesión cambia constantemente, por lo que necesitamos seguir aprendiendo. 
            Actualmente, estoy estudiando para mejorar mis habilidades pensando siempre en la carrera profesional.`,
        technologiesTitle: "Tecnologias",
        technologiesBg: "T",
        technologiesDescription: `A lo largo de mi carrera, tanto en proyectos freelance como en entornos empresariales, 
            he adquirido una valiosa experiencia que ha contribuido al desarrollo de mis habilidades. 
            Esta trayectoria ha sido un continuo aprendizaje, 
            enfrentando diversos desafíos que me han llevado a explorar y dominar una amplia gama de tecnologías y lenguajes. 
            Demostrándome a mí mismo que, sin importar el desafío, siempre se puede superar. A continuación, 
            presento algunas de las tecnologías con las que he trabajado:`,
        skillsTitle: "Habilidades",
        skillsBg: "H",
        skillsDescription: ` Las habilidades cumplen un papel fundamental en la vida misma, 
            con disciplina y perseverancia se logra desarrollarlas, fortalecerlas, crear nuevas.
            De ellas depende la formulación de una estrategia para cumplir una meta o superar un reto.
            Un conjunto de habilidades puestos a disposición de las personas pueden brindar servicios extremadamente útiles para la sociedad.`,
        skillsSubtitle1:"Análizar",
        skillsSubDescription1:` poseo la capacidad de analizar un problema y verlo desde diferentes angulos, 
            siempre poniendo en practica la experiencia adquirida.`,
        skillsSubtitle2:"Vanguardia",
        skillsSubDescription2:`El conocimiento es un arma poderosa, 
            considero que el conocimiento es una de las cosas mas importantes que se posee,
            me gusta el aprendizaje, estudiar y estar al dia con los temas y tecnologias que estan a la vanguardia, 
            herramientas y tecnologias que
            van surgiendo al final estan hechas para que el desarrollo sea mejor, mas optimo.`,
        skillsSubtitle3:"Retos",
        skillsSubDescription3:`Considero que los retos nos permiten movernos de nuestra zona de confort, 
            ellos sacan quien en realidad somos, 
            ellos nos otorgan sabiduria y conocimiento.`,
        skillsSubtitle4:"Adaptación",
        skillsSubDescription4:`La vida es un ciclo de constante evolución.
            De esta manera sabemos cuán importante es la capacidad de aprender de una manera rápida, 
            de apasionarse con cada tema nuevo y evolucionar con la tecnología.`,
        experienceTitle: "Experience",
        experienceBg: "E",
        experienceResume: "La experiencia son un conjunto de habilidades otorgadas por la suma entre el tiempo y la práctica.",
        experienceYear1: "2015 - 2020",
        experienceTitle1:"Administrador de Servidores / Bd",
        experienceSubTitle1: "Grupo empresarial MR",
        experienceDescription1:` El grupo empresarial MR son un conjunto de empresas formadas por 4 CDA, 
            un hotel  y una Empresa de deshechos hospitalarios.
            La experiencia en estas empresas consta de Analisis de datos.
            administración y mantenimiento de redes, administración y mantenimiento de servidores y desarrollo web, 
            gestión de procesos de seguridad informática, acompañamiento al sistema de gestión de calidad y validación de software.`,
        experienceYear2: "2020-2022",
        experienceTitle2:"Desarrollador web",
        experienceSubTitle2: "IMPROVEMENT AFO",
        experienceDescription2:`Desarrollo de varios aplicativos a la medida, 
            Realizaba un trabajo de outsourcing a la empresa, quien contrataba con la gobernacion del valle del cauca.
            Con contratos por proyectos se hacian las reuniones con el cliente, el levantamiento de requerimientos, 
            direccion de metodologías agiles( SCRUM ), 
            presentacion de proyecto, despliegue, documentacion, soporte y actualizaciones`,
        experienceYear3: "2021-2022",
        experienceTitle3:"Desarrollador staff",
        experienceSubTitle3: "Siesa",
        experienceDescription3:`Soporte tecnico a aplicativo de salud en las diferentes entidades de salud de la zona costera del pais. (ZeusSalud)`,
        experienceYear4: "2022-2023",
        experienceTitle4:"Freelance",
        experienceSubTitle4: "Formula 1",
        experienceDescription4:"Aplicativo de gestion de instructores, vehiculos, encuestas de la entidad.",
        experienceYear5: "2022",
        experienceTitle5:"Freelance",
        experienceSubTitle5: "-",
        experienceDescription5:"Aplicativo de gestion de Asesores y asesorias, para el reporte, manejo y pago de los mismos.",
        experienceYear6: "2022",
        experienceTitle6:"Desarrollador full stack",
        experienceSubTitle6: "Spartan Hill",
        experienceDescription6:`Desarrollo de aplicativo para evento en el salvador con pagos con criptomonedas, desarrollo y mantenimiento de cripto wallet y 
            aplicacion para procesar pagos por medio de las criptomonedas.`,
        experienceYear7: "2023",
        experienceTitle7:"Freelance",
        experienceSubTitle7: "-",
        experienceDescription7: "Desarrollo de aplicativo base para futuros proyectos Angular 15 - Laravel 9 Postgresql.",
        experienceYear8: "2022 -",
        experienceTitle8:"Desarrollador full stack",
        experienceSubTitle8: "Punto Red",
        experienceDescription8:"Diversas aplicaciones, entre ellas una aplicacion interna para procesos de clientes, automatizacion de procesos entre otras.",
        portfolioTitle: "Portfolio",
        portfolioBg: "P",
        portfolioDescription: "Proyectos trabajados de manera independiente",
        referencesTitle: "references",
        referencesBg: "P",
        referencesDescription: `Es importante mantenerse educado mantenerse actualizado, pero también debemos alimentar nuestro espíritu con literatura. 
            Este alimento nos forja un pensamiento ante las diferentes situaciones de la vida misma`,
        referenceName1: `____William Soto`,
        referenceResume1: `La educación es un poder; y somos conscientes de que es el arma más poderosa para transformar mentalidades,
            por ende, un mecanismo para modificar sociedades; y consecuentemente, para cambiar el mundo`,
        referenceName2: `____Linus Torvalds`,
        referenceResume2: `La mayoría de los buenos programadores programan no porque esperan que les paguen o que el público los adore, 
            sino porque programar es divertido.`,
        referenceName3: `____Freddy Vega`,
        referenceResume3: `Tu techo, a nivel de debilidad y a nivel intelectual es una elección. 
            ¡La gente que dice “es que yo no sirvo para esto!" en mi opinion son perdedores, y no son perdedores porque no puedan.
            Son perdedores porque tomaron la decisión de no poder. Todo el mundo puede todo, 
            lo único que hay que hacer es intentarlo y nunca parar de aprender. `,
        interestsTitle: "Interests",
        interestsBg: "I",
        interestsDescription: `Nuestros gustos, carácter y filosofía en la que basamos nuestros actos definen quienes somos.`,
        interestsItem1: "Aprender",
        interestsItem2: "Deportes",
        interestsItem3: "Desarrollar",
        interestsItem4: "Seguridad informática",
        contactMeTitle: "ContactMe",
        contactMeBg: "C",
        phoneNumber: "PhoneNumber",
        email: "Email"
    }
}


document.getElementById('presentationHi').textContent = translations[language].presentationHi;
document.getElementById('presentationIam').textContent = translations[language].presentationIam;
document.getElementById('presentationProfession').textContent = translations[language].presentationProfession;
document.getElementById('aboutMeLink').textContent = translations[language].aboutMeLink;
document.getElementById('aboutMeTitle').textContent = translations[language].aboutMeTitle;
//document.getElementById('aboutMeBg').textContent = translations[language].aboutMeBg;
document.getElementById('aboutMeItem1').textContent = translations[language].aboutMeItem1;
document.getElementById('aboutMeItem2').textContent = translations[language].aboutMeItem2;
document.getElementById('aboutMeItem3').textContent = translations[language].aboutMeItem3;
document.getElementById('aboutMeResume1').textContent = translations[language].aboutMeResume1;
document.getElementById('aboutMeResume2').textContent = translations[language].aboutMeResume2;
document.getElementById('aboutMeResume3').textContent = translations[language].aboutMeResume3;
document.getElementById('aboutMeResume4').textContent = translations[language].aboutMeResume4;
document.getElementById('aboutMePrhase').textContent = translations[language].aboutMePrhase;
document.getElementById('educationTitle').textContent = translations[language].educationTitle;
//document.getElementById('educationBg').textContent = translations[language].educationBg;
document.getElementById('educationTitle1').textContent = translations[language].educationTitle1;
document.getElementById('educationDescription1').textContent = translations[language].educationDescription1;
document.getElementById('educationDescription2').textContent = translations[language].educationDescription2;
document.getElementById('educationTitle3').textContent = translations[language].educationTitle3;
document.getElementById('educationDescription3').textContent = translations[language].educationDescription3;
document.getElementById('technologiesTitle').textContent = translations[language].technologiesTitle;
//document.getElementById('technologiesBg').textContent = translations[language].technologiesBg;
document.getElementById('technologiesDescription').textContent = translations[language].technologiesDescription;
document.getElementById('skillsTitle').textContent = translations[language].skillsTitle;
//document.getElementById('skillsBg').textContent = translations[language].skillsBg;
document.getElementById('skillsDescription').textContent = translations[language].skillsDescription;
document.getElementById('skillsSubtitle1').textContent = translations[language].skillsSubtitle1;
document.getElementById('skillsSubDescription1').textContent = translations[language].skillsSubDescription1;
document.getElementById('skillsSubtitle2').textContent = translations[language].skillsSubtitle2;
document.getElementById('skillsSubDescription2').textContent = translations[language].skillsSubDescription2;
document.getElementById('skillsSubtitle3').textContent = translations[language].skillsSubtitle3;
document.getElementById('skillsSubDescription3').textContent = translations[language].skillsSubDescription3;
document.getElementById('skillsSubtitle4').textContent = translations[language].skillsSubtitle4;
document.getElementById('skillsSubDescription4').textContent = translations[language].skillsSubDescription4;
document.getElementById('experienceTitle').textContent = translations[language].experienceTitle;
//document.getElementById('experienceBg').textContent = translations[language].experienceBg;
document.getElementById('experienceResume').textContent = translations[language].experienceResume;
document.getElementById('experienceYear1').textContent = translations[language].experienceYear1;
document.getElementById('experienceTitle1').textContent = translations[language].experienceTitle1;
document.getElementById('experienceSubTitle1').textContent = translations[language].experienceSubTitle1;
document.getElementById('experienceDescription1').textContent = translations[language].experienceDescription1;

document.getElementById('experienceYear2').textContent = translations[language].experienceYear2;
document.getElementById('experienceTitle2').textContent = translations[language].experienceTitle2;
document.getElementById('experienceSubTitle2').textContent = translations[language].experienceSubTitle2;
document.getElementById('experienceDescription2').textContent = translations[language].experienceDescription2;
document.getElementById('experienceYear3').textContent = translations[language].experienceYear3;
document.getElementById('experienceTitle3').textContent = translations[language].experienceTitle3;
document.getElementById('experienceSubTitle3').textContent = translations[language].experienceSubTitle3;
document.getElementById('experienceDescription3').textContent = translations[language].experienceDescription3;
document.getElementById('experienceYear4').textContent = translations[language].experienceYear4;
document.getElementById('experienceTitle4').textContent = translations[language].experienceTitle4;
document.getElementById('experienceSubTitle4').textContent = translations[language].experienceSubTitle4;
document.getElementById('experienceDescription4').textContent = translations[language].experienceDescription4;
document.getElementById('experienceYear5').textContent = translations[language].experienceYear5;
document.getElementById('experienceTitle5').textContent = translations[language].experienceTitle5;
document.getElementById('experienceSubTitle5').textContent = translations[language].experienceSubTitle5;
document.getElementById('experienceDescription5').textContent = translations[language].experienceDescription5;
document.getElementById('experienceYear6').textContent = translations[language].experienceYear6;
document.getElementById('experienceTitle6').textContent = translations[language].experienceTitle6;
document.getElementById('experienceSubTitle6').textContent = translations[language].experienceSubTitle6;
document.getElementById('experienceDescription6').textContent = translations[language].experienceDescription6;
document.getElementById('experienceYear7').textContent = translations[language].experienceYear7;
document.getElementById('experienceTitle7').textContent = translations[language].experienceTitle7;
document.getElementById('experienceSubTitle7').textContent = translations[language].experienceSubTitle7;
document.getElementById('experienceDescription7').textContent = translations[language].experienceDescription7;
document.getElementById('experienceYear8').textContent = translations[language].experienceYear8;
document.getElementById('experienceTitle8').textContent = translations[language].experienceTitle8;
document.getElementById('experienceSubTitle8').textContent = translations[language].experienceSubTitle8;
document.getElementById('experienceDescription8').textContent = translations[language].experienceDescription8;
document.getElementById('portfolioTitle').textContent = translations[language].portfolioTitle;
document.getElementById('portfolioDescription').textContent = translations[language].portfolioDescription;
document.getElementById('referenceName1').textContent = translations[language].referenceName1;
document.getElementById('referenceResume1').textContent = translations[language].referenceResume1;
document.getElementById('referenceName2').textContent = translations[language].referenceName2;
document.getElementById('referenceResume2').textContent = translations[language].referenceResume2;
document.getElementById('referenceName3').textContent = translations[language].referenceName3;
document.getElementById('referenceResume3').textContent = translations[language].referenceResume3;