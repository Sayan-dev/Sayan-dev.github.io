import React from 'react'
import "./Home.css"
import Who_am_i from './Who_am_i'

export default function Home(): JSX.Element {
    return (
        <div className="home-container">
            <Who_am_i/>
            <h1>My Projects</h1>
            <div className="home-table-container">
                <div className="home-cell">
                    <div className="home-cell-inner">

                    </div>

                </div>
                <div className="home-cell-1">
                    <div className="home-cell-1-inner">

                    </div>
                </div>
                <div className="home-cell-2">
                    <div className="home-cell-2-inner">

                    </div>
                </div>
                <div className="home-cell-3">
                    <div className="home-cell-3-inner">

                    </div>
                </div>
                <div className="home-cell-4">
                    <h1>
                        Hey there,
                    </h1>
                    <p>Enjoy my world</p>
                </div>
                <div className="home-cell-5">
                    <div className="home-cell-5-inner">

                    </div>
                </div>
                <div className="home-cell-6">
                    <div className="home-cell-6-inner">

                    </div>
                </div>
                <div className="home-cell-7">
                    <div className="home-cell-7-inner">

                    </div>
                </div>
                <div className="home-cell-8">
                    <div className="home-cell-8-inner">

                    </div>
                </div>
            </div>
        </div>
    )
}
