import React from 'react'
import Avatar from "@material-ui/core/Avatar";

function VideoCard({image, title,channel, views, timestamp,channelImage}) {
    return (
        <div className ="videoCard"> 
           <img className = "videoCard_thumb"src = {image} alt =""/>
           <div className ="video_info">
               <Avatar className = "video_avatar"
                alt = {channel}
                src = {channelImage}

               />
               <div className = "videoText">
                   <h4>{title}</h4>
                   <p>{channel}</p>
                   <p>
                       {views} • {timestamp}
                   </p>
               </div>

           </div>
        </div>
    )
}

export default VideoCard;