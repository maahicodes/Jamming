import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        const tracks = this.props.tracks;
        let mytrack;
        if (tracks) {
           mytrack = tracks.map(track => {
               return <Track track={track} 
               key={track.id} 
               onAdd={this.props.onAdd} 
               onRemove={this.props.onRemove} 
               isRemoval={this.props.isRemoval} />
           });
        } 
        return (
            <div className="TrackList">
                {mytrack}      
            </div>
        );
    }
}

export default TrackList;