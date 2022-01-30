import style from "./About.module.css";
import Image from 'next/image';

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.image}>
        <Image alt="photo" src="/me.jpg" width="250" height="250"/>
        <h1>Arash Kariznovi</h1>
        <h2>Undergraduate Researcher</h2>
        <h3>Ferdowsi University</h3>
      </div>
      <div className={style.description}>
        <h1>About me</h1>
        <p>
          I am Arash Kariznovi, A computer Engineering student at the Ferdowsi
          University of Mashhad. My passion is Software Engineering, and I am a
          Front-End and Mobile developer. I have developed and designed plenty
          of web applications and software including AI Search Algorithms, image processing filters, Data
          mining, Web scraping, CPU scheduling, and a lot more.<br/> Recently,
          I've started research on the application of deep learning and neural networks in health
          and optimizing those algorithms to be usable in smartphones. You can
          see my projects on my Github page. Finally do not hesitate to contact
          me if I can help you.
        </p>
      </div>
    </div>
  );
};
export default About;
