import { Navbar } from "@/app/components/navbar";

export default function Dashboard(){
    return(
        <>
        <Navbar/>
        <div className="h-screen border flex justify-start">
            <div className="h-screen w-30">
                this is the side bar

            </div>

        </div>
        
        </>
    )
}