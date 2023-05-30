import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';


const fetchRepos=async()=>{
    //It means wait for 60 seconds to fetch fresh data again,it's good for use when data is chaing all the time.
    //if the data doesn't change often, you don't even need the revalidate method
    const response=await fetch('https://api.github.com/users/Junjpan/repos',{
        next:{
            revalidate:60
        }
    });

    //wait for 1 sec, so that we can see the loading componnt
    await new Promise((resolve)=>setTimeout(resolve,1000));
    const repos=await response.json();
return repos ;
}
const ReposPage = async() => {
    const repos=await fetchRepos();

  return (
    <div className='repos-container'>
    <h2>Repositories</h2>
    <ul className='repo-list'>
      {repos.map((repo) => (
        <li key={repo.id}>
          <Link href={`/code/repos/${repo.name}`}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className='repo-details'>
              <span>
                <FaStar /> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch /> {repo.forks_count}
              </span>
              <span>
                <FaEye /> {repo.watchers_count}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ReposPage