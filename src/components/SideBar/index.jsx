import {AiOutlineArrowRight,AiFillGift} from "react-icons/ai";
import {MdSpaceDashboard} from "react-icons/md";
import {BsGraphUp,BsWallet,BsFileBarGraph,BsFillGearFill} from "react-icons/bs";
import {BiMedal} from "react-icons/bi";
import {GoLightBulb} from "react-icons/go";


import "./sidebar.css";

export default function SideBar(){
    return(
        <div className="sidebar-container">
            <div className="sidebar-top">
                <AiOutlineArrowRight className="sidebar-icons"/>
            </div>
            <div className="sidebar-middle"> 
                <MdSpaceDashboard className="sidebar-icons"/>
                <BsFileBarGraph className="sidebar-icons"/>
                <BsWallet className="sidebar-icons"/>
                <BsGraphUp className="sidebar-icons"/>
                <BiMedal className="sidebar-icons"/>
                <AiFillGift className="sidebar-icons"/>
                <BsFillGearFill className="sidebar-icons"/>
            </div>
            <div className="sidebar-bottom">
                <div className="darkmode-switch">
                    <GoLightBulb className="sidebar-icons"/>
                </div>
            </div>
        </div>
    )
}