import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { id, name, image, short_description } = project;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-4">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{short_description}</p>
        <div className="card-actions">
          <Link to={`/project/${id}`}>
            <button className="btn bg-[#7c3aed] hover:bg-[#5b21b6] text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
