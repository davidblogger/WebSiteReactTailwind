export const NewArticle = ({ titulo, texto }) => {
  return (
    <article className="h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none lg:h-[160px] lg:py-4">
      <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold lg:text-[16]">
        {titulo}
      </h2>
      <p className="text-[15px]">{texto}</p>
    </article>
  );
};
