import type { NextApiResponse,NextApiRequest } from "next";


type ResponseData={
    message:string
}

export default function handler(req:NextApiRequest,res:NextApiResponse<ResponseData>){
    res.json({message:"Hello from backend!"})
}