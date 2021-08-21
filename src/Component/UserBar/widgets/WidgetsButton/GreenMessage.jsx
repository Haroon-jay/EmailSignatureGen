import React from "react";
import Slider from "@material-ui/core/Slider";

import GreenImg1 from "../widgetsImage/none.png";
import GreenImg2 from "../widgetsImage/green-earth.png";
import GreenImg3 from "../widgetsImage/recycling.png";
import GreenImg4 from "../widgetsImage/tree.png";
import GreenImg5 from "../widgetsImage/leaf.png";
import GreenImg6 from "../widgetsImage/leaves.png";
import GreenImg7 from "../widgetsImage/hand-leaves.png";
import { useDispatch, useSelector } from "react-redux";
import { getGreenMessageImage,getGreenMessageText } from "../../../../redux/CounterSlice"
const GreenMessage = () => {
	const dispatch=useDispatch()
	const handleTextSelect=(e)=>{
     dispatch(getGreenMessageText(e.target.value))
	}
	const onImageSelect=(e)=>{
		dispatch(getGreenMessageImage(e.target.src))
	}
	return (
		<>
			<article>
				<hr />
				<section className="grid gap-4 items-center justify-items-center mt-7 ">
					<div className="flex items-center gap-20">
						<h1>Type  </h1>
						<div class="relative inline-block text-gray-700 ">
							<select
								class="w-full h-8 pl-3 pr-12  placeholder-gray-600 border rounded-full appearance-none  outline-none"
								placeholder="Regular input"  onChange={handleTextSelect}
							>
								<option>Select one</option>
								<option>Environmental responsibility</option>
								<option>Environmental responsibility short</option>
								<option>Do you really need ...?</option>
								<option>Printing kills trees</option>
								<option>Don't print this</option>
								<option>Printing emails is SO 2009</option>
								<option>Save a tree - kill a beaver</option>
								<option>Be carbon free</option>
								<option>Save ink cartridges</option>
							</select>
							<div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
								<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
									<path
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clip-rule="evenodd"
										fill-rule="evenodd"
									></path>
								</svg>
							</div>
						</div>
					</div>
				</section>

				<article>
					<section className="flex gap-2 ml-6 mt-8 justify-items-center">
						<button class="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 ">
							<img src={GreenImg1} onClick={onImageSelect} alt="" class="w-7 h-7" />
						</button>
						<button class="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 ">
							<img src={GreenImg2} alt="" onClick={onImageSelect} class="w-7 h-7" />
						</button>
						<button class="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 ">
							<img src={GreenImg3} alt="" onClick={onImageSelect} class="w-7 h-7" />
						</button>
						<button class="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 ">
							<img src={GreenImg4} alt="" onClick={onImageSelect} class="w-7 h-7" />
						</button>
						<button class="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 ">
							<img src={GreenImg5} alt="" onClick={onImageSelect} class="w-7 h-7" />
						</button>
						<button class="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 ">
							<img src={GreenImg6} alt="" onClick={onImageSelect} class="w-7 h-7" />
						</button>
						<button class="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 ">
							<img src={GreenImg7} alt="" onClick={onImageSelect} class="w-7 h-7" />
						</button>
					</section>
					<button class="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 mt-4 ml-6">
						<img src={GreenImg7} alt="" onClick={onImageSelect} class="w-7 h-7" />
					</button>
					<div className="flex items-center px-8  mt-10">
						<div className="flex-1 text-gray-600 text-lg items-center mb-8">
							Padding top
						</div>
						<div className="w-44 mb-5">
							<Slider color="primary" defaulValue={1} step={3} max={100} />
						</div>
					</div>
				</article>
			</article>
		</>
	);
};

export default GreenMessage;
