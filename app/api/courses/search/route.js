import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request){
    const {searchParams}=new URL(request.url);
    const query=searchParams.get('query');
     /**
      * 
      *  console.log(new URL(request.url))
URL {
  href: 'http://localhost:3000/api/courses/search?query=react&name=jun',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/api/courses/search',
  search: '?query=react&name=jun',
  searchParams: URLSearchParams { 'query' => 'react', 'name' => 'jun' },
  hash: ''
}

to get the value for params value,we can do searchParams.get('query') or searchParams.get('name')
      */
  
const filterCourses=courses.filter((course)=>{
    return course.title.toLowerCase().includes(query.toLowerCase())
});

return NextResponse.json(filterCourses)
}