<template>
  <div id="app">
    <!-- Northern Lights and Stars Background -->
    <div class="bg-elements">
      <div class="aurora"></div>
      <div class="stars"></div>
    </div>

    <!-- Navigation -->
    <nav id="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>{{ name }}</h1>
        <p>{{ description }}</p>
        <a href="#about" class="contact-link">More About Me!</a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>I am currently a software engineer intern and a full-time computer science student graduating in 2027. I specialize in backend systems, cybersecurity, and distributed systems. My goal in life is to create software so impactful that it will outlive me. I want to challenge the narrative that "technology will be humanity's greatest demise." I am passionate about startups and have many ideas; please get in contact if you would like to collaborate!</p>
          <p>Outside of development, I spend most of my time reading my Bible, playing ultimate frisbee, and taking photos of the night sky.</p>
        </div>
        <div class="skills">
          <div v-for="skill in skills" :key="skill" class="skill">{{ skill }}</div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <!-- <section id="projects"> -->
    <!--   <h2>Projects</h2> -->
    <!--   <div class="projects-grid"> -->
    <!--     <div v-for="project in projects" :key="project.title" class="project"> -->
    <!--       <div class="project-header"> -->
    <!--         {{ project.icon }} {{ project.title }} -->
    <!--       </div> -->
    <!--       <div class="project-content"> -->
    <!--         <h3>{{ project.subtitle }}</h3> -->
    <!--         <p>{{ project.description }}</p> -->
    <!--         <div class="project-tech"> -->
    <!--           <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span> -->
    <!--         </div> -->
    <!--       </div> -->
    <!--     </div> -->
    <!--   </div> -->
    <!-- </section> -->

    <!-- Contact Section -->
    <section id="contact">
      <div class="contact">
        <h2>Let's Connect</h2>
        <p>I'm always open to discussing new opportunities, collaborations, or just to connect!.</p>
        <div class="contact-links">
          <a v-for="link in contactLinks" :key="link.url" :href="link.url" class="contact-link">{{ link.name }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Sean Yan",
      description: "Backend Developer, CS/Math Student & Tutor",
      skills: ["C/C++", "Python", "Rust", "PostgreSQL", "AWS", "JS/TS", "Vue.JS", "Nix/NixOS", "Linux", "Java", "Pandas", "Playwright"],
      projects: [
        {
          icon: "🌌",
          title: "AuroraCode",
          subtitle: "Real-time Aurora Predictor",
          description: "A web application that predicts northern lights visibility using space weather data and provides optimal viewing locations for aurora enthusiasts.",
          tech: ["React", "Node.js", "Space APIs"]
        },
        {
          icon: "🏔️",
          title: "NightSky",
          subtitle: "Astrophotography Planner",
          description: "A dark theme application for planning perfect night sky photography sessions with moon phases, weather, and light pollution maps.",
          tech: ["Next.js", "TypeScript", "Maps API"]
        },
        {
          icon: "⭐",
          title: "StarTracker",
          subtitle: "Constellation Learning App",
          description: "An interactive progressive web app that helps users identify constellations and learn about celestial navigation in the night sky.",
          tech: ["Vue.js", "PWA", "WebGL"]
        }
      ],
      contactLinks: [
        { name: "Email", url: "mailto:dhsyan@student.ubc.ca" },
        { name: "GitHub", url: "https://github.com/dhsyan" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/dhsyan/" }
      ]
    };
  }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --aurora-green: #00ff88;
    --aurora-blue: #0099ff;
    --aurora-purple: #cc00ff;
    --dark-bg: #0a0a0f;
    --darker-bg: #050508;
    --light-text: #e0e0e0;
    --dim-text: #a0a0a0;
    --card-bg: #1a1a24;
    --border-color: #333344;
    --accent-glow: #00ff8844;
}

#app {
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
    line-height: 1.6;
    color: var(--light-text);
    overflow-x: hidden;
}

.bg-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    background: radial-gradient(ellipse at center, var(--dark-bg) 0%, var(--darker-bg) 100%);
}

.aurora {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
}

.aurora::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
    radial-gradient(ellipse 800px 300px at 50% 0%, var(--aurora-green) 0%, transparent 50%),
    radial-gradient(ellipse 600px 200px at 20% 10%, var(--aurora-blue) 0%, transparent 50%),
    radial-gradient(ellipse 700px 250px at 80% 5%, var(--aurora-purple) 0%, transparent 50%);
    animation: aurora-dance 8s ease-in-out infinite;
    opacity: 0.3;
}

.aurora::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
    radial-gradient(ellipse 900px 350px at 30% 0%, var(--aurora-blue) 0%, transparent 60%),
    radial-gradient(ellipse 500px 150px at 70% 8%, var(--aurora-green) 0%, transparent 60%),
    radial-gradient(ellipse 600px 200px at 10% 3%, var(--aurora-purple) 0%, transparent 60%);
    animation: aurora-dance 12s ease-in-out infinite reverse;
    opacity: 0.2;
}

@keyframes aurora-dance {
    0%, 100% { 
        transform: translateX(0%) scaleY(1);
        opacity: 0.3;
    }
    25% { 
        transform: translateX(5%) scaleY(1.1);
        opacity: 0.5;
    }
    50% { 
        transform: translateX(-3%) scaleY(0.9);
        opacity: 0.4;
    }
    75% { 
        transform: translateX(2%) scaleY(1.05);
        opacity: 0.6;
    }
}

.stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
    radial-gradient(2px 2px at 20px 30px, var(--light-text), transparent),
    radial-gradient(2px 2px at 40px 70px, var(--light-text), transparent),
    radial-gradient(1px 1px at 90px 40px, var(--light-text), transparent),
    radial-gradient(1px 1px at 130px 80px, var(--light-text), transparent),
    radial-gradient(2px 2px at 160px 30px, var(--light-text), transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    animation: twinkle 3s ease-in-out infinite;
    opacity: 0.8;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}

/* Navigation */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(20px);
    z-index: 1000;
    padding: 1rem 0;
    transition: all 0.3s ease;
    border-bottom: 1px solid var(--border-color);
}

nav.scrolled {
    background: rgba(10, 10, 15, 0.95);
    box-shadow: 0 2px 20px rgba(0, 255, 136, 0.1);
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    text-decoration: none;
    color: var(--light-text);
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

nav a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--aurora-green);
    transition: width 0.3s ease;
    box-shadow: 0 0 5px var(--aurora-green);
}

nav a:hover::after {
    width: 100%;
}

nav a:hover {
    color: var(--aurora-green);
    text-shadow: 0 0 8px var(--aurora-green);
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--aurora-green);
    text-shadow: 0 0 20px var(--aurora-green);
    opacity: 0;
    animation: fadeInUp 1s ease 0.5s forwards;
}

.hero-content p {
    font-size: 1.2rem;
    color: var(--dim-text);
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeInUp 1s ease 1s forwards;
}

.hero-content a {
    font-size: 1.2rem;
    color: var(--dim-text);
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeInUp 1s ease 1.5s forwards;
}

.code-snippet {
    background: var(--card-bg);
    color: var(--aurora-green);
    padding: 1rem;
    border-radius: 8px;
    font-family: 'SF Mono', monospace;
    font-size: 0.9rem;
    text-align: left;
    max-width: 300px;
    margin: 0 auto;
    opacity: 0;
    animation: fadeInUp 1s ease 1.5s forwards;
    border: 1px solid var(--border-color);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.1);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Sections */
section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: var(--aurora-blue);
    text-shadow: 0 0 15px var(--aurora-blue);
    position: relative;
}

h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: var(--aurora-green);
    box-shadow: 0 0 10px var(--aurora-green);
}

/* About Section */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--dim-text);
}

.skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.skill {
    background: var(--card-bg);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    color: var(--light-text);
}

.skill:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
    border-color: var(--aurora-green);
    color: var(--aurora-green);
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
}

.project:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.1);
    border-color: var(--aurora-green);
}

.project-header {
    height: 200px;
    background: linear-gradient(135deg, var(--aurora-blue), var(--aurora-purple));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light-text);
    font-size: 1.5rem;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.project-content {
    padding: 1.5rem;
}

.project h3 {
    color: var(--aurora-green);
    margin-bottom: 0.5rem;
}

.project p {
    color: var(--dim-text);
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.tech-tag {
    background: var(--dark-bg);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    color: var(--aurora-green);
    border: 1px solid var(--border-color);
}

/* Contact Section */
.contact {
    text-align: center;
    background: var(--card-bg);
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.1);
    border: 1px solid var(--border-color);
}

.contact p {
    color: var(--dim-text);
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.contact-link {
    text-decoration: none;
    color: var(--aurora-green);
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border: 2px solid var(--aurora-green);
    border-radius: 6px;
    background: transparent;
}

.contact-link:hover {
    background: var(--aurora-green);
    color: var(--dark-bg);
    box-shadow: 0 0 20px var(--aurora-green);
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 2.5rem;
    }

    .about-content {
        grid-template-columns: 1fr;
    }

    nav ul {
        gap: 1rem;
    }

    .contact-links {
        flex-direction: column;
        gap: 1rem;
    }

    section {
        padding: 3rem 1rem;
    }
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}
</style>
