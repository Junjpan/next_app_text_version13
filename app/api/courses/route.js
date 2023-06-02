import { NextResponse } from 'next/server';
import courses from './data.json';
import {v4 as uuidv4} from 'uuid';

//it uses to use handler function
/**
 * 
 * export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
 */
export async function GET(request){
    return NextResponse.json(courses)
}

//geting  body data
export async function POST(request){
    const {title,description,level,link}=await request.json();

    const newCourse={
        id:uuidv4(),
        title,
        description,
        level,
        link
    }
    courses.push(newCourse);
    return NextResponse.json({courses})
}