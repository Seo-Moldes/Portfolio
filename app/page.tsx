import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(background4.jpg)" }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make Anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              web development
            </span>

          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente molestiae esse iure inventore repellendus molestias a perspiciatis. Quia, sit libero soluta assumenda quasi non, magnam, aut aliquid ex quis accusamus!
          </p>
          <div className="flex-col md:flex-row hidden md:flex">
          <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] ">
            Learn More
          </Link>

          </div>
        </div>

      </div>
    </main>
  );
}

