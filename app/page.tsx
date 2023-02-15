import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="/DataSciIcon.png"
          width={500}
          height={500}
          alt="DataSci logo"
          className=""
        />
      </div>
      <div className="flex flex-col italic mt-12">
        <span className="flex justify-center text-3xl">
          &quot;Data is a precious thing and will last longer than the systems
          themselves.&quot;
        </span>
        <span className="flex justify-end mt-8 mr-20 text-xl">
          Tim-Berners Lee
        </span>
      </div>
      <div className="flex justify-center text-6xl mt-20">Coming soon...</div>
    </div>
  );
}
