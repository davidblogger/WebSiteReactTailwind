import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
      <NewArticle
        titulo="Hydrogen VS Electric Cars"
        texto=" Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <NewArticle
        titulo="The Downsides of AI Artistry"
        texto="What are the possible adverse effects of on-demand AI image generation?"
      />
      <NewArticle
        titulo="Is VC Funding Drying Up?"
        texto="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </aside>
  );
};
