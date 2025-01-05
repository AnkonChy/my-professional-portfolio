const Skill = ({ skill }) => {
  const { name, image } = skill;
  return (
    <div className="my-2">
      <img className="w-10 h-10" src={image} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default Skill;
