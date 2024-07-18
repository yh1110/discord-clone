import React from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { SidebarChannel } from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* sidebarLeft */}
            <div className="sidebarLeft">
                <div className="serverIcon">
                    <img src="./logo192.png" alt="" />
                </div>
                <div className="serverIcon">
                    <img src="./logo192.png" alt="" />
                </div>
            </div>

            {/* sidebarRight */}
            <div className="sidebarRight">
                {/* sidebarTop */}
                <div className="sidebarTop">
                    <h3>Discord</h3>
                    <ExpandMoreIcon />
                </div>

                {/* sidebarChannels */}
                <div className="sidebarChannels">
                    <div className="sidebarChannelsHeader">
                        <div className="sidebarHeader">
                            <ExpandMoreIcon />
                            <h4>テキストチャンネル</h4>
                        </div>
                        <AddIcon className="sidebarAddIcon" />
                    </div>

                    <div className="sidebarChannelList">
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                    </div>
                </div>

                {/* sidebarFooter */}
                <div className="sidebarFooter">
                    <div className="sidebarAccount">
                        <img src="./icon.png" alt="" />
                        <div className="accountName">
                            <h4>Neon</h4>
                            <span>#8162</span>
                        </div>
                    </div>

                    <div className="sidebarVoice">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
