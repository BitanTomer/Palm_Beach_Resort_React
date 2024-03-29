import React from 'react'
import {useContext} from 'react'
import {RoomContext} from "../context";
import Title from '../components/Title'
import index from "styled-components/dist/styled-components-macro.esm";

//get unique value
const getUnique= (items,value)=>{
    return [...new Set(items.map(item=> item[value]))];
}
function RoomFilter() {
    const context = useContext(RoomContext);
    console.log(context);
    const {
        handleChange, type, capacity, price, minPrice, rooms,
        maxPrice, minSize, maxSize, breakfast, pets} = context;

    // get only unique value
    let types=getUnique(rooms, 'type');
    types=["all", ...types];
    types=types.map((item,index)=> {
            return <option value={item} key={index}>{item}</option>
        }
    );

    let guests = getUnique(rooms, 'capacity');
    guests= guests.map((item, index)=> {
        return <option key={index} value={item} >{item}</option>
    });

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Select Room Type Start*/}
                <div className="form-group">
                    <label htmlFor="type"> room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* Select End*/}

                {/* Select Guests Start*/}
                <div className="form-group">
                    <label htmlFor="capacity"> Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {guests}
                    </select>
                </div>
                {/* Guests End*/}
                {/* Price Range Start*/}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                </div>
                {/* Price Range End*/}
                {/* Price Range Start*/}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input">
                        </input>
                        <input
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input">
                        </input>
                    </div>
                </div>
                {/* Size End*/}
                {/* checkbox*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}/>
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default RoomFilter;
