import DashboardFilters from "./dashboard-filters";

import VideoThumbnail from "./video-thumbnail";
const AppDashboard =()=> {

    return(
        <div className="app-dashboard">
            <div className="app-dashboard-body">
                <DashboardFilters />
                <div className="app-videos-dashboard">
                    <div className="video-items">
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                   
                </div>
                </div>
                </div>
            </div>
    );
}
 
export default AppDashboard;