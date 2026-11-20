
import featureData from "../data/featureData";
import statsData from "../data/statsData";
import "./Sections.css";

function Sections() {
  return (
    <section className="features">
      <div className="features-container">

        <h2>Explore our investment options</h2>

        <div className="features-grid">
          {featureData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-section">
          <h2>Our Numbers</h2>

          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div className="stats-card" key={index}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sections;
