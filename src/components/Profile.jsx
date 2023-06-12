import React, { useState } from 'react'
import Show from './Show'
import { FaGithub } from 'react-icons/fa';
import './profile.css'

export default function Profile() {
  const [userName, setUserName] = useState('')
  const [data, setData] = useState('')
  const [repo, setRepo] = useState('')

  const submitHandler = async e => {
    e.preventDefault();
    if (userName === '') {
      alert('Please enter username')
    }
    else {
      const profile = await fetch(`https://api.github.com/users/${userName}`);
      const profileJson = await profile.json();
      setData(profileJson)
      // console.log(profileJson);
      // const repositorie = await fetch(profileJson.repos_url)
      // const repoJson = await repositorie.json()
      // console.log(repoJson);

      // if (profileJson.cod === 'undefined') {
      //   alert('username not found ')
      // }
      // else
      // setRepo(repoJson)

    }
  }
  return (
    <>
      < div className='search' >
        <input value={userName}
          type="text"
          className='input-success'
          placeholder='Enter username...'
          onChange={(e) => setUserName(e.target.value)} />
        <button className='btn btn-secondary m-1' onClick={submitHandler}><FaGithub className='icon' /> search</button>
      </div >
      <Show data={data} repositories={repo} />
    </>
  )
}
