import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 bg-red-200">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className="w-96 flex-shrink object-contain" />
      </div>
      <div className="flex w-48 flex-col flex-shrink-0 border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
