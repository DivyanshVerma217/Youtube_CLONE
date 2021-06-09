import React from 'react'
import './SidebarRow.css';
 
/*import TrendingIcon from '@material-ui/icons/Trending';*/

function SidebarRow({selected,Icon,Title}) {
    
    return (
        <div className = {`sidebarRow ${selected && "selected"}`}>
            <Icon className = "sidebarRow_Icon"/>
            <h2 className = "sidebarRow_title">{Title}</h2>
        </div>
    )
}

export default SidebarRow;
