import Approach from "@/components/Approach";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-cente items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <Hero/>
       
        
       
          <Approach/>  {/* Three js --> imported from file CanvasRevealEffect */}
       
      </div>
    </main>
  );
}
