import Title from "./Title.js";
import { services } from "../data.js";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />

      <div className="section-center services-center">
        {services.map((services) => {
          return (
            <article key={services.id} className="service">
              <span className="service-icon">
                <i className={services.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{services.title}</h4>
                <p className="service-text">{services.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
