import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/0d6c8843-5336-4793-b44c-8003f20a7aa4-u67e10.png",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
