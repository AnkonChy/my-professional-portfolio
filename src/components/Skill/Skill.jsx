const Skill = ({ skill }) => {
  const { name, image } = skill;
  return (
    <div className="group w- h-28 flex flex-col items-center justify-center gap-2 rounded-2xl bg-white shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
      <img
        className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
        src={image}
        alt={name}
      />
      <p className="text-sm font-medium text-gray-700 group-hover:text-violet-600">
        {name}
      </p>
    </div>
  );
};

export default Skill;
