import { Link } from "react-router-dom";
export const TrendingBookCard = ({ book }) => {
  return (
    <Link className="block" to={`/chapter/${book.id}`} key={book.id}>
      <div className="flex gap-4 group cursor-pointer bg-surface-container-lowest p-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(6,78,59,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_-2px_rgba(6,78,59,0.2)] border border-transparent hover:border-primary/10">
        <div className="relative w-24 h-36 shrink-0">
          <img
            className="w-full h-full object-cover rounded-lg border border-outline-variant/20"
            src={book.img}
            alt={book.title}
          />
        </div>
        <div className="flex flex-col justify-between py-1">
          <div>
            <h3 className="font-headline-sm text-[20px] font-bold text-primary group-hover:text-primary-container transition-colors line-clamp-1">
              {book.title}
            </h3>
            <span className="text-label-md text-[14px] text-on-surface-variant">
              {book.genre}
            </span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <span className="flex items-center gap-1 text-[14px] font-medium">
              <span className="material-symbols-outlined text-[18px]">
                visibility
              </span>{" "}
              {book.views}
            </span>
            <span className="flex items-center gap-1 text-[14px] font-medium">
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>{" "}
              {book.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
