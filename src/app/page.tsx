import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 h-48 flex-col">
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
            alt={image.name}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full text-center text-3xl text-white">
          Please Sign In.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
