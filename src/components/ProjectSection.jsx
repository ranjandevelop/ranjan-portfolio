import React from "react";

const ProjectSection = () => {
  const projects = [
    {
      title: "This Day in History",
      desc: "A website where you can find the historical events on specific date.",
      url: "https://this-day-in-history-eta.vercel.app/",
      githubUrl: "https://github.com/ranjandevelop/ThisDayInHistory",
      imageUrl:
        "https://img.icons8.com/?size=100&id=XpgUyFyd18ju&format=png&color=000000",
      technologies: "#ReactJS",
      github: true,
    },
    {
      title: "Harry Potter Fandom",
      desc: "A Harry Potter Fandom website where you visting the Wizarding World.",
      url: "https://harry-potter-db-dusky.vercel.app/",
      girhubUrl: "https://github.com/ranjandevelop/harry-potter-db",
      imageUrl:
        "https://img.icons8.com/?size=100&id=ahsvvqMPVW8o&format=png&color=000000",
      technologies: "#ReactJS",
      github: true,
    },
    {
      title: "Weather Web App",
      desc: "A live weather web app.",
      url: "https://ranjandevelop.github.io/weather-app",
      githubUrl: "https://github.com/ranjandevelop/weather-app",
      imageUrl:
        "https://img.icons8.com/?size=100&id=OFU5h8HeWK3z&format=png&color=000000",
      technologies: "#VannilaJS",
      github: true,
    },
    {
      title: "Travelling Blog Website",
      desc: "A travel and Tour website",
      url: "https://perfecttripcreator.com/",
      githubUrl: "",
      imageUrl:
        "https://img.icons8.com/?size=100&id=CkLnyqkKRBmy&format=png&color=000000",
      technologies: "#WordPress",
      github: false,
    },
    {
      title: "Assignment Website",
      desc: "Assignment blog website.",
      url: "https://highgradeassignmenthelp.com/",
      githubUrl: "",
      imageUrl:
        "https://img.icons8.com/?size=100&id=qyAVxHyDhL04&format=png&color=000000",
      technologies: "#WordPress",
      github: false,
    },
    {
      title: "Writing Service Website",
      desc: "This writing service blog.",
      url: "https://perfectassignmentcreator.com/",
      githubUrl: "",
      imageUrl:
        "https://img.icons8.com/?size=100&id=xOnyQ7TLR4PU&format=png&color=000000",
      technologies: "#Wordpress",
      github: false,
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
      <div className="flex flex-wrap justify-center m-10">
        {projects.map((project, index) => (
          <div key={index} className="m-4 card">
            <div className="card-img">
              <div className="img">
                <img
                  className="w-[74px] rounded"
                  src={project.imageUrl}
                  alt="ranjan"
                />
              </div>
            </div>
            <div className="flex justify-center card-title">
              <a href={project.url} className="flex align-center">
                {project.title}{" "}
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
                  className="ml-1 w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
            <div className="card-subtitle h-20">{project.desc}</div>
            <hr className="card-divider" />
            <div className="card-footer">
              <div className="card-price">
                <span>{project.technologies}</span>
              </div>
              {project.github ? (
                <a href={project.githubUrl} className="card-btn">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
