const Project = ({ project }) => {
  const { name, image, description } = project;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn bg-[#7c3aed] hover:bg-[#5b21b6] text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
