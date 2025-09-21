import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { id, name, image, short_description } = project;
  return (
    <div className="card bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <figure className="overflow-hidden w-full">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>
      <div className="card-body text-center px-6 py-4">
        <h2 className="card-title text-xl font-semibold text-gray-800">
          {name}
        </h2>
        <p className="text-gray-600 text-sm mt-2">{short_description}</p>
        <div className="card-actions justify-center mt-4">
          <Link to={`/project/${id}`}>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full font-medium shadow-md transition-all duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
