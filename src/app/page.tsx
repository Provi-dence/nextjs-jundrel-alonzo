"use client";
import React from "react";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      //once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-base-200 text-base-content">

      {/* Hero Section with Parallax */}
      <section
        className="hero min-h-screen bg-fixed bg-cover bg-center sm:bg-auto"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
        data-aos="fade-up"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero bg-base-200 bg-opacity min-h-screen flex items-center justify-center">
          <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto w-full p-4">
            <Image
              width={500}
              height={500}
              src="/images/jundrel.png"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-cover"
              alt="Jundrel Alonzo"
            />
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="text-primary">Jundrel Alonzo</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
                FULL STACK DEVELOPER
              </h2>
              <p className="py-4 text-sm sm:text-base md:text-lg text-justify">
                A passionate Web Developer skilled in crafting dynamic and responsive applications. I specialize in front-end, back-end, and mobile app development, bringing ideas to life with clean code and modern technologies.
              </p>
              <button className="btn btn-primary btn-wide sm:btn-lg">Get in touch</button>
            </div>
          </div>
        </div>
      </section>


      {/* What I Do Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-base-200 to-base-300" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          What I Do
        </h2>
        <p className="text-center md:text-lg max-w-3xl mx-auto mb-12 text-base-content opacity-90">
          I specialize in crafting innovative web and mobile solutions, leveraging cutting-edge technologies to build responsive front-end interfaces, robust back-end systems, and seamless cross-platform applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
              `,
              title: "Frontend Development",
              desc: "I build engaging and responsive user interfaces with Angular and Tailwind CSS. I focus on performance, accessibility, and visual appeal, with hands-on experience in projects like Renthings and JuanBayan.",
            },
            {
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                  <path fill-rule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                </svg>
              `,
              title: "Backend Development",
              desc: "I design and maintain server-side logic using Node.js, Firebase, creating RESTful APIs and managing database interactions with MySQL.",
            },
            {
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              `,
              title: "Mobile Application",
              desc: "Developing cross-platform apps with React Native for intuitive and efficient mobile experiences.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-primary/30 transition-transform duration-400 ease-in-out transform hover:-translate-y-2 rounded-xl border border-base-300 hover:border-primary"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="500"
            >
              <div className="card-body items-left text-left p-6">
                <span
                  className="card-icon mb-6 text-primary"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                ></span>
                <span className="card-title text-2xl font-semibold text-base-content mb-4">
                  {item.title}
                </span>
                <p className="text-base text-base-content/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-base-300" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <p className="text-center md:text-lg max-w-3xl mx-auto mb-12 text-base-content opacity-90">
          Here are some of my recent projects that showcase my skills in web and mobile development. Each project highlights my ability to create responsive, user-friendly applications using modern technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              image: "/images/project-1.png",
              title: "Cruddies – A Test CRUD Operation",
              desc: "A full-stack practice project deployed using free tools. Demonstrates CRUD operations using Google Sheet and GoogleScript as backend, with Angular for frontend.",
              link: "https://junwell-cruddy.netlify.app",
              techStack: ["Angular", "Google Sheet", "GoogleScript", "Tailwind CSS"],
            },
            {
              image: "/images/renthings.png",
              title: "Renthings – Online Rental Platform",
              desc: "A modern rental item platform featuring dynamic item listings, user accounts, and rental functionality. Developed as a full-featured frontend using Angular and connected to a backend Node.js API.",
              link: "#",
              techStack: ["HTML/CSS", "Angular", "Node.js","MySQL", "Tailwind CSS"],
            },
          ].map((project, index) => (
            
            <div
              key={index}
              className="card lg:card-side bg-base-100 shadow-lg
              hover:shadow-xl hover:shadow-primary/30 hover:transition-transform duration-400 ease-in-out transform border border-base-300 hover:border-primary"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <figure className="w-full lg:w-3/3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover rounded-lg transition-transform opacity-50 duration-300 ease-in-out hover:scale-105"
                  style={{ objectFit: "cover" }}
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <div className="card-actions mb-4">
                  <span className="text-bold"><strong>Technology stacks:</strong></span>
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`badge badge-outline badge-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <p>{project.desc}</p>
                <div className="card-actions mt-5">
                  <a href={project.link} className="btn btn-outline btn-primary" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section className="py-20 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <p className="text-center md:text-lg max-w-3xl mx-auto mb-12 text-base-content opacity-90">
          {`Through my journey as web developer, I've experienced a vast range of skills. Here's a comprehensive overview of my technical skills.`}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              `,
              title: "Programming Languages",
              tech: ["HTML", "CSS", "TypeScript", "C#", "Java", "GoogleScript", "PHP", "JavaScript"],
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>

              `,
              title: "Frameworks & Libraries",
              tech: ["Angular", "Next.js", "Node.js", "ASP.NET", "Tailwind CSS"],
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
              `,
              title: "Databases & Storage",
              tech: ["Firebase", "MySQL", "SQL"],
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>

              `,
              title: "Tools & Platforms",
              tech: ["Git", "GitHub", "GitLab", "POSTMAN", "Figma", "Netlify"],
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-lg hover:shadow-primary hover:shadow-sm transition-all duration-300 ease-in-out rounded-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center">
                <span className="mb-4 text-primary"
                dangerouslySetInnerHTML={{ __html: skill.icon }}>
                </span>
                <span className="font-semibold text-xl mb-4 text-base-content">{skill.title}</span>
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.tech.map((item, itemIndex) => (
                    <span key={itemIndex} className="badge badge-primary badge-outline">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="py-20 px-4 bg-base-300" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-6">Feel free to reach out for collaborations or inquiries!</p>
          <p className="mb-6">
            <strong>Email:</strong> jundrelalonzo@gmail.com
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/Provi-dence" className="btn btn-circle btn-outline">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.49v-1.73c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.93.68 1.88v2.79c0 .27.16.58.67.49A10.001 10.001 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/jundrel" className="btn btn-circle btn-outline">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-1.5 14.25v-5.5a3.5 3.5 0 00-7 0v5.5h2v-5.5a1.5 1.5 0 013 0v5.5h2zM7.5 8.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 2.25v7h2v-7h-2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}