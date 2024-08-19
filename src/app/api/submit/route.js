import fs from 'fs';
import { NextResponse } from 'next/server';

export async function POST (req){
    // const formData = await req.formData()
    // console.log(formData)
    console.log(req)
    return Response.json({success: true})
}

export async function GET () {
    return Response.json({success: true})
}