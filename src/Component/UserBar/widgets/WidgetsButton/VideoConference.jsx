import React from "react";
import Slider from "@material-ui/core/Slider";
import { FaVideo } from "react-icons/fa";
import { ImSkype } from "react-icons/im";
import { SiGooglehangoutsmeet } from "react-icons/si";
import { GiBeveledStar } from "react-icons/gi";
import { getButtonLink, getButtonText } from "../../../../redux/CounterSlice"
import { useDispatch,useSelector } from "react-redux";
const VideoConference = () => {
	const dispatch=useDispatch()
	const { buttonText }=useSelector(state=>state.counter)
	const handleButtonText=(e)=>{
     dispatch(getButtonText(e.target.value))
	}
	const handleButtonLink=(e)=>{
		dispatch(getButtonLink(e.target.value))
	}
	return (
		<>
			<article>
				<hr />
				<section className="grid gap-4 items-center justify-items-center mt-7 ">
					<div className="flex items-center gap-4">
						<button
							class=" flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm
                        rounded-full py-2 px-3"
						>
							<FaVideo fontSize="18" />
							Zoom 
						</button>
						<button
							class=" flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm
                        rounded-full py-2 px-3"
						>
							<ImSkype fontSize="18" />
							Skype
						</button>
					</div>

					<div className="flex items-center gap-4">
						<button
							class=" flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm
                        rounded-full py-2 px-3"
						>
							<SiGooglehangoutsmeet fontSize="18" />
							Google Meet
						</button>
						<button
							class=" flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm
                        rounded-full py-2 px-3"
						>
							<GiBeveledStar fontSize="18" />
							GoTOMeeting
						</button>
					</div>
				</section>
				<article>
					<section className="grid gap-8 mt-8 justify-items-center">
						<div className="flex items-center gap-12 ">
							<h1>Button text</h1>
							<input
							    onChange={handleButtonText}
								class="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-last-name"
								type="text"
								placeholder="Meet me on GoToMeeting"
							/>
						</div>
						<div className="flex items-center gap-12 ">
							<h1>Button URL</h1>
							<input
							onChange={handleButtonLink}
								class="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-last-name"
								type="text"
								placeholder="https://www.gotomeeting.com"
							/>
						</div>
					</section>
					<div className="flex items-center px-8  mt-10">
						<div className="flex-1 text-gray-600 text-lg">Shape</div>
						<div className="w-44">
							<Slider color="primary" defaulValue={1} step={3} max={100} />
						</div>
					</div>
					<div className="flex items-center px-8  mt-10">
						<div className="flex-1 text-gray-600 text-lg">Height</div>
						<div className="w-44">
							<Slider color="primary" defaulValue={1} step={3} max={100} />
						</div>
					</div>
					<div className="flex items-center px-8  py-10">
						<div className="flex-1 text-gray-600 text-lg">Padding top</div>
						<div className="w-44">
							<Slider color="primary" defaulValue={1} step={3} max={100} />
						</div>
					</div>
				</article>
			</article>
		</>
	);
};

export default VideoConference;
