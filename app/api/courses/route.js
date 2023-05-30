import { NextResponse } from 'next/server';
import courses from './data.json';

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