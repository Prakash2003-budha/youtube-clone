import React from 'react'
import './sidebar.css'
import home from '../../Pages/Home/home'
import game_icon from '../../assets/automobiles.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sortcut-links">
            <div className="side-link">
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className="side-link">
                <img src={game_icon} alt="" /><p>Gamming</p>
            </div>
            <div className="side-link">
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className="side-link">
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className="side-link">
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className="side-link">
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className="side-link">
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className="side-link">
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className="side-link">
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
        </div>
    </div>
  )
}