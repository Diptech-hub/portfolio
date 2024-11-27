import Header from "./header";
import "../style/about.css";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <h1>About Me</h1>
        <p>
          I'm <span>Oladipupo Babayemi</span>, a <span>Front-End Developer</span> passionate about
          building, enhancing, and maintaining seamless software solutions. I work primarily with <span>Javascript, its frameworks</span> and other relevant front-end tools. I
          excel in collaborating with designers and developers to create user
          interfaces and implementing APIs that align with project goals and
          requirements. With expertise in code reviews and troubleshooting. I
          stay committed to keeping up with emerging front-end trends and I
          combine technical proficiency with design creativity to deliver
          outstanding results. With few years of experience as a <span>Front-End Developer</span>, i have learnt quite a lot about the craft and it's best practices. 
        </p>
        <br />
        <p>
          Beyond coding,I am a Computer Science graduate. I am a passionate photographer who occasionally
          explores the world of creative design with the camera and other creative tools. I actively engage with the tech
          communities, sharing insights and learning from others. In my
          downtime, I enjoy relaxing with music and enriching my perspective
          through reading and podcasts.
        </p>
        
      </div>
    </div>
  );
};

export default About;
