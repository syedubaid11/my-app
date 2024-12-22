type propStructure={
    imageUrl:string,
    text:string
}

export const Card=(props:propStructure)=>{
    return(
        <>
        <div className="w-[200px] h-[200px] border-1 rounded-lg flex flex-col mt-[10px] mb-[10px] shadow-md">
            <div className="">
                <img src={props.imageUrl}></img>
            </div>
            <div className="">
                <p>{props.text}</p>
            </div>

        </div>

        </>
    )
}