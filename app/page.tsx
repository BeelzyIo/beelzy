import Image from "next/image";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full max-w-4xl py-16 px-6 bg-white dark:bg-black">
        <h1 className="mb-8 text-2xl font-semibold text-black dark:text-white">Project Images</h1>
        {/* list of image filenames in public/ */}
        {/* Update this array if you add/remove images in public/ */}
        <div className="grid grid-cols-3 gap-4">
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2">
              <Image
                src={src}
                alt={`image-${idx + 1}`}
                width={320}
                height={210}
                className="w-full h-48 object-contain"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
