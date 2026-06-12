export const CategoryCard = ({ cat }) => {
  return (
    <a
      key={cat.name}
      href="#"
      className={`group relative aspect-square overflow-hidden rounded-xl ${cat.bgClass} shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all duration-300 z-10"></div>
      <img
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
        src={cat.img}
        alt={cat.name}
      />
      <span className="absolute bottom-4 left-4 z-20 font-headline-sm text-[20px] font-bold text-white tracking-wide">
        {cat.name}
      </span>
    </a>
  );
};
