import React from "react"
import {RoomContext} from "../context"
import Title from "./Title";
import Loading from "../components/Loading"
import Room from "./Room";


class FeaturedRooms extends React.Component{
    static contextType = RoomContext;
    render() {
        let {loading,  featuredRooms : rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        });

        return(
            <section className="featured-rooms">
                <Title title="featured room" />
                <div className="featured-rooms-center">
                    {loading? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}

export default FeaturedRooms;