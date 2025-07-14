export default function Projects() {
  const projectList = [
    {
      title: "🛒 Online Grocery Store",
      desc: "Responsive frontend with React.js featuring product listing, filtering, and a shopping cart. Focused on smooth UX and clean UI design.",
    },
    {
      title: "🏢 Sahakari Activity Store",
      desc: "Full-stack system built with React and backend API to manage and track organizational activities with secure data storage.",
    },
    {
      title: "🌐 Portfolio Website",
      desc: "Modern portfolio built with React.js showcasing personal skills, projects, and professional background with elegant styling and animations.",
    },
  ];

  return (
    <section style={{ padding: "60px 20px", background: "#f9f9f9" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          marginBottom: "50px",
          color: "#1a1a1a",
        }}
      >
        💼 My Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "30px 25px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              borderLeft: "5px solid #0072ff",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 16px 28px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(0, 0, 0, 0.08)";
            }}
          >
            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: "12px",
                color: "#0072ff",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "#444",
              }}
            >
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
