import React from 'react'
import './profile.css'


export default function Show(props, data, repo) {
    return (
        <div className='tble'>
            <table className='table '>
                <thead>
                    <tr className=' table-success'>
                        <th>name</th>
                        <th> avatar </th>
                        <th>location</th>
                        <th>bio</th>
                        <th>repositories</th>
                    </tr>
                </thead>
                <tr>
                    <td>{props.data.login}</td>
                    <td>{!props.data.avatar_url ? "" : (
                        <img src={props.data.avatar_url} alt={props.data.avatar_url} />
                    )}</td>
                    <td>{props.data.location}</td>
                    <td>{props.data.bio}</td>
                    <td>{props.data.public_repos }</td>
                </tr>
            </table>
        </div>
    )
}
