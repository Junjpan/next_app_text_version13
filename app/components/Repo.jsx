import Link from "next/link";
import {FaStar,FaCodeBranch,FaEye} from "react-icons/fa";

const fetchRepo=async(name)=>{
const response=await fetch(`https://api.github.com/repos/Junjpan/${name}`);

const repo=await response.json();

return repo;
}

const Repo = async({name}) => {
    const repo=await fetchRepo(name);
  
  return (
    <>
    <h2>{repo.name}</h2>
    <p>Discription:{repo.discription}</p>
    <div className="card-stats">
        <div className="card-stat">
            <FaStar />
            <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
            <FaCodeBranch />
            <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
            <FaStar />
            <span>{repo.watchers_count}</span>
        </div>
    </div>
    </>
  )
}

export default Repo