import Cat from "./_components/Cat";
import Socials from "./_components/Socials/Socials";

export default function Home() {
  return (
    <main className="h-screen max-w-[1200px] mx-auto select-none">
      <section className="h-full flex max-md:flex-col md:gap-2 p-5">
        <div className="flex-1 max-md:gap-2 gap-1 flex flex-col justify-center max-md:p-4 px-10 max-md:mt-10 max-md:items-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black">
            I am <span className="text-blue-700">pitr</span>
          </h1>
          <p className="text-base max-md:w-[90%] max-md:text-center leading-tight md:text-lg lg:text-xl">
            This site and this domain is just for my side projects.. totally
            random things. Enjoy your stay{" "}
          </p>
          <Socials />
        </div>
        <div className="flex-1 flex justify-center p-5 items-center">
          <Cat />
        </div>
      </section>
    </main>
  );
}
