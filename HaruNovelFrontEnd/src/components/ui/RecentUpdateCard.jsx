export const RecentUpdateCard = ({ update }) => {
  return (
    <>
      <div
        key={update.title}
        className="flex items-center gap-6 group cursor-pointer bg-surface-container-lowest p-4 rounded-xl hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10"
      >
        <div className="w-16 h-24 shrink-0 overflow-hidden rounded shadow-sm">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={update.img}
            alt={update.title}
          />
        </div>
        <div className="grow">
          <h4 className="font-body-md font-bold text-[16px] text-primary group-hover:text-primary-container transition-colors line-clamp-1">
            {update.title}
          </h4>
          <div className="flex items-center justify-between mt-3">
            <span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container text-[12px] font-bold">
              {update.chapter}
            </span>
            <span className="text-on-surface-variant text-[12px] font-medium">
              {update.time}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
