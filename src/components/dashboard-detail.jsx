import "../styles/Dashboard.css"

const DashboardHeader = ()=>{
    return(
        <div className="flex justify-between items-center">
            <div id="project-details" className="flex flex-col items-start">
                <h2 className="font-staatliches text-3xl">All Notes</h2>
                <p className="w-sub-heading opacity-60 text-sm font-medium leading-5 line-clamp-2">This is a project that houses all the notes that I have created while practicing React. This project has helped me learn a lot of things.</p>
            </div>
            <div id="right-side" className="flex gap-5 items-center">
                <div id="visibility" className="flex flex-col items-center">
                    <h2 className="font-staatliches text-lg">Visibility</h2>
                    <p className="flex items-center gap-1"><ion-icon name="lock-closed-outline"></ion-icon>Private</p>
                </div>
                <div id="members" className="flex flex-col items-center relative">
                    <h2 className="font-staatliches text-lg">Collaborators</h2>
                    <div id="collaborators" className="flex align-middle jusify-center">
                        <div className="member-details bg-purple-600"></div>
                        <div className="member-details bg-yellow-500"></div>
                        <div className="member-details bg-white"></div>
                        <div className="member-details bg-blue-500"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader