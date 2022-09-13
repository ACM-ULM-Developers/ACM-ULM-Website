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
        <button className = "leaderboard-buttton"> 7 Days </button>
        <button className = "leaderboard-buttton"> 30 Days </button>
        <button className = "leaderboard-buttton"> All-Time </button>
      </div>

      {users.map((item) => {
        return(
          <div className = "leaderboard--users"> 
            <div className = "leaderboard--userInfo">
              <img src = {item.userImage} alt = "User profile pic" className='leaderboard--userImg' />
              <div>
                <p>{item.userName}</p>
                <p>{item.userLocation}</p>
              </div>
            </div>

            <div className = "leaderboard--userScore">
              {item.userPoints}
            </div>
          </div>
          )
      })}
    </div>
  ) 
}


