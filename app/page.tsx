import Image from "next/image";
import "./animations.css"
import { Card } from "./components/card";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="anton-font text-[40px] slide-right border-2">
        Redlimit.
      </div>

      <div className="relative top-30 flex flex-col text-[40px]">
        <div>
          Blazing Fast.
        </div>
        <div>
          No Nonsense.
        </div>      
        <div>
          API monitoring.
        </div>
      </div>


      <div className="relative top-[500px] flex flex-col items-center">
        <Card/>
        <Card/>
        <Card/>
      </div>
      

      
    </div>
  );
}
