import React from "react";

const ProjectSection = () => {
  const projects = [
    {
      title: "Harry Potter Fandom",
      desc: "A Harry Potter Fandom website where you find the all information about Wizarding World.",
      url: "https://harry-potter-db-dusky.vercel.app/",
      technologies: [
        "#ReactJS",
        "#JavaScript",
        "#HTML",
        "#CSS",
        "#Tailwind",
        "#API",
      ],
    },
    {
      title: "Weather Web App",

      url: "https://ranjandevelop.github.io/weather-app",
      desc: "A live weather web app.",
      technologies: ["#HTML", "#CSS", "#JavaScript", "#API", "#VannilaJS"],
    },
    {
      title: "Travelling Blog Website",
      desc: "A travel and Tour website",
      url: "https://perfecttripcreator.com/",
      technologies: ["#WordPress", "#Elementor", "#OceanWP"],
    },
    {
      title: "Assignment Blog Website",
      desc: "",
      url: "https://highgradeassignmenthelp.com/",
      technologies: ["#OceanWP", "#HTML", "#WordPress", "#Elementor"],
    },
    {
      title: "Assignment Writing Service Website",
      desc: "",
      url: "https://perfectassignmentcreator.com/",
      technologies: ["#Wordpress", "#HTML", "#CSS", "#ASTRA"],
    },
  ];
  return (
    <section className="py-9">
      <h1 className="text-center text-4xl p-5">My Recent Work</h1>
      <p className="text-center">
        Want to work with me?{" "}
        <a href="mailto:ranjanprasad745@gmail.com" className="text-blue-600">
          Email here.
        </a>
      </p>
      <div className="flex flex-wrap justify-center mt-10">
        {projects.map((project) => (
          <div
            className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row m-4 shadow bg-[#f4f4f4]"
            key={project.title}
          >
            {/* <div class="h-full w-full md:h-[200px] md:w-[300px]">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="Laptop"
              class="h-full w-full rounded-md object-cover"
            />
          </div> */}
            <div>
              <div className="p-4">
                <a href={project.url}>
                  <h1 className="inline-flex items-center text-lg font-semibold">
                    {project.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </h1>
                </a>
                <p className="mt-3 text-sm text-gray-600">{project.desc}</p>

                <div className="mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
