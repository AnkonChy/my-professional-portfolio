import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { id, name, image, short_description } = project;
  return (
    <div className="card bg-base-100 shadow-xl rounded-none">
      <figure className="">
        <img src={image} alt="Shoes" className="h-64" />
      </figure>
      <div className="card-body items-center text-center object-fill">
        <h2 className="card-title">{name}</h2>
        <p>{short_description}</p>
        <div className="card-actions">
          <Link to={`/project/${id}`}>
            <button className="btn bg-black hover:bg-[#5b21b6] text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
