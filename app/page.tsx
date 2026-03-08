"use client";

import ThemeToggle from "./components/ThemeToggle";

const dpEditVideos = [
  { title: "Thirty6kealo - Ricky Owens (feat. Trap Dickey) [Official Music Video]", url: "https://youtu.be/XfkHMppVyHA?si=VjBsP41OqUFpyXEd" },
  { title: "Thirty6Kealo - Dirty Glove (Official Music Video)", url: "https://youtu.be/qxiZRw2T5Qw?si=IyfyC3wWk4OfHyTU" },
  { title: "Big YBA - John Doe (Official Video)", url: "https://youtu.be/yjC3UgcM5cE?si=VUk_yjfZqtu3vAIw" },
  { title: "Big YBA - Breathe (Official Video)", url: "https://youtu.be/ehcrPZLQ9fc?si=pb25hSC2r9tI3BtF" },
  { title: "BLE DLO - Stop Doubting (Official Music Video)", url: "https://youtu.be/Oyf0pCL_Cso?si=8FLRXSyftm3jmFdT" },
  { title: "Hurricane Wisdom - Rose Gold (Official Video)", url: "https://youtu.be/MLIDRDjG4Zg?si=4Ve8iwKM9magB8TM" },
];

const vfxVideos = [
  { title: "Brent Faiyaz - WY@ [Official Video]", url: "https://youtu.be/YjCtucn29JQ?si=0Np9mnGypDf-71nn" },
  { title: "David Guetta & Willy William & Nicky Jam - Cuentale (Official Video)", url: "https://youtu.be/JXzHn1CFRvE?si=6vFSdJFLje3vFb_U" },
  { title: "Joe West - TOTM (Official Video)", url: "https://youtu.be/K43YfT6L6Ok?si=5mYoh1SueQxsQRl6" },
  { title: "Quavo - Wall to Wall (Official Video)", url: "https://youtu.be/cGjqCbP9I28?si=JDZHRRy669WQBpIQ" },
  { title: "Chris Brown - Sensational (Official Video) ft. Davido, Lojay", url: "https://youtu.be/_t0qtSKOpO4?si=Qfxkfs51WsnY7xoh" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EBEBEB] dark:bg-black text-black dark:text-white transition-colors duration-200 p-8">
      <div className="max-w-3xl mx-auto">
        <ThemeToggle />
        <h1 className="text-base mb-16">Jordan Bennett</h1>
        <div className="space-y-12">
          <section>
            <h2 className="text-base mb-6 underline">DP/Edit</h2>
            <div className="space-y-6">
              {dpEditVideos.map((video, index) => (
                <a key={index} href={video.url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-60 transition-opacity text-base">
                  {video.title}
                </a>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-base mb-6 underline">VFX</h2>
            <div className="space-y-6">
              {vfxVideos.map((video, index) => (
                <a key={index} href={video.url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-60 transition-opacity text-base">
                  {video.title}
                </a>
              ))}
            </div>
          </section>
          <section className="mt-16 pt-12 border-t border-gray-300 dark:border-gray-700">
            <div className="space-y-3 text-base">
              <a href="https://instagram.com/1jbvisual" target="_blank" rel="noopener noreferrer" className="block hover:opacity-60 transition-opacity flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @1jbvisual
              </a>
              <a href="mailto:Jbthecreatorr@gmail.com" className="block hover:opacity-60 transition-opacity">
                Jbthecreatorr@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
