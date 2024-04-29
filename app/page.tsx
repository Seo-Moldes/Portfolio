import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(darkSouls.gif)" }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
           Eliseo Moldes
           <br />
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

          <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] ">
            {/* <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/> */}
            My Projects
          </Link>

          <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] ">
            {/* <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/> */}
            Contact Me
          </Link>

          </div>
        </div>

      </div>
    </main>
  );
}

/*minuto 6.40*/