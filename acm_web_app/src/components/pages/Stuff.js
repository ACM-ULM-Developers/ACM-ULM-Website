import React from 'react'
import { leaderboardData } from './leaderboardData'

//changed class based component into functional component
export default function Stuff(){

  const users = leaderboardData.map((user) => {
      return ({
          userName: user.name,
          userLocation: user.location,
          userImage: user.imgUrl,
          userPoints: user.points
      })
  })

  return (
    <div className = "leaderboard">
      <p className = "leaderboard--title">Leaderboard</p>

      <div className = "leaderboard--interval">
        <button className = "button"> 7 Days </button>
        <button className = "button"> 30 Days </button>
        <button className = "button"> All-Time </button>
      </div>

      {users.map((item) => {
        return(
          <div className = "users"> 
            <div className = "users--panel">
              <img src = {item.userImage} alt = "User profile pic" className='users--image' />
              
              <div className = "users--info">
                <p className = "users--info--name">{item.userName}</p>
                <p className = 'users--info--location'>{item.userLocation}</p>
              </div>
            
            </div>

            <div className = "usersScore">
              {item.userPoints}
            </div>
          </div>
          )
      })}
    </div>
  ) 
}


