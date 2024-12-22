import Image from "next/image";
import "./animations.css"

export default function Home() {
  return (
    <>
    <div className="h-screen bg">
      <div className="anton-font text-[80px] slide-right border-2">
        Redlimit.
      </div>

      <div className="relative top-30 flex flex-col text-[40px]">
        <div>
          The.
        </div>
        <div>
          No Nonsense.
        </div>      
        <div>
          API monitoring.
        </div>
      </div>
    </div>
    </>
  );
}
