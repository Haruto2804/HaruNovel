import { Link } from "react-router-dom";

function BookCard({ novel }) {
  return (
    <Link
      to={`/novel/${novel.id}`}
      className="flex flex-col group cursor-pointer"
    >
      <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg book-card-shadow transition-transform duration-300 group-hover:-translate-y-2">
        <img
          className="w-full h-full object-cover inner-border"
          src={novel.coverImg}
          alt={novel.title}
        />
        {novel.isBookmarked && (
          <div className="absolute top-3 right-3">
            {/* Đã sửa lại bọc dấu nháy kép cho thuộc tính style bên dưới */}
            <span
              className="material-symbols-outlined text-primary-fixed drop-shadow-md"
              style={{ "font-variation-settings": "'FILL' 1" }}
            >
              bookmark
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
      </div>

      <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1 mb-1">
        {novel.title}
      </h3>

      <div className="flex items-center justify-between mb-3">
        <span className="text-primary font-label-md text-label-md">
          Chương {novel.currentChapter}
        </span>
        <span className="text-on-surface-variant font-label-md text-label-md">
          {novel.progress}%
        </span>
      </div>

      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-fixed-dim rounded-full"
          style={{ width: `${novel.progress}%` }}
        ></div>
      </div>
      <p className="mt-3 text-on-surface-variant font-label-md text-[12px] uppercase tracking-wider">
        Đọc gần nhất: {novel.lastRead}
      </p>
    </Link>
  );
}

export default BookCard;
