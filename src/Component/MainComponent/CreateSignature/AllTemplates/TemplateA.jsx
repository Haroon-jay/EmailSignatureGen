import React from "react";
import ProfileImage from "../../../image/default-sig-photo.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./DesignFonts.css";

const TemplateA = () => {
	const {
		counter,
		name,
		company,
		position,
		email,
		phonenumber,
		website,
		address,
		facebookLink,
		twitterLink,
		twitterLinkA,
		twitterLinkB,
		colors,
		FontsizeChange,
		spacings,
		youtubeLink,
		youtubeLinkdesc,
		youtubeTitle,
		youtubeUrl,
		quoteTitle,
		signOffImage,
		CompactMargins,
	} = useSelector(state => state.counter);

	return (
		<div>
			<section
				style={{ minWidth: "500px", minHeight: "387px", background: "#fff" }}
				className=" shadow-2xl rounded-md h-72 w-full"
			>
				<div class=" h-10 bg-gray-300  flex rounded-t pt-2 px-4">
					<span>JASON ERICKSON</span>
				</div>
				<div class=" bg-white pt-2 px-4">
					<Link href="#">
						<img alt="" src={signOffImage} class="w-1/4 py-3" />
					</Link>
				</div>
				<div class="flex px-4 bg-white py-9">
					<div class="">
						<Link href="#">
							<img alt="" src={ProfileImage} class="w-50 px-1" />
						</Link>
					</div>
					<div class=" w-full ">
						<div class="px-4 float-left md:px-2">
							<h4 class="font-bold text-blue-700 text-lg leading-none">
								<h1
									style={{
										fontSize: `${counter}px`,
										color: colors,
										fontFamily: FontsizeChange,
										padding: `${CompactMargins}`,
									}}
								>
									{name}
								</h1>
							</h4>
							<span class="font-bold text-gray-500 text-xs float-left mt-1 pb-2">
								<h1
									style={{
										fontSize: `${counter}px`,
										color: colors,
										fontFamily: FontsizeChange,
										padding: `${CompactMargins}px`,
									}}
								>
									{position}
								</h1>

								<br class="font-bold" />
								<h1
									style={{
										fontSize: `${counter}px`,
										color: colors,
										fontFamily: FontsizeChange,
										padding: `${CompactMargins}px`,
									}}
								>
									{company}
								</h1>
							</span>
						</div>
						<div class="ml-20 float-left md:ml-2">
							<ul class="text-sm mt-1 float-left">
								<span class="float-left text-gray-600 font-bold mt-1 mr-2">
									<img
										alt=""
										src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
										style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
									/>
								</span>
								<li class="px-3">
									<a href="tel:212-931-0000">
										<h1
											style={{
												fontSize: `${counter}px`,
												color: colors,
												fontFamily: FontsizeChange,
												padding: `${CompactMargins}px`,
											}}
										>
											{phonenumber}
										</h1>
									</a>
								</li>

								<span class="float-left text-gray-600 font-bold mt-1 mr-2">
									<img
										alt=""
										src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
										style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
									/>
								</span>
								<li class=" px-3">
									<Link href="#">
										<h1
											style={{
												fontSize: `${counter}px`,
												color: colors,
												fontFamily: FontsizeChange,
											}}
										>
											{website}
										</h1>
									</Link>
								</li>

								<span class="float-left text-gray-600 font-bold mt-1 mr-2">
									<img
										alt=""
										src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
										style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
									/>
								</span>
								<li class=" px-3">
									<Link href="#">
										<h1
											style={{
												fontSize: `${counter}px`,
												color: colors,
												fontFamily: FontsizeChange,
											}}
										>
											{email}
										</h1>
									</Link>
								</li>

								<li class="">
									<Link href="#">
										<span class="float-left text-gray-600 font-bold mt-1 mr-2">
											<img
												alt=""
												src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
												style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
											/>
										</span>
										<h1
											style={{
												fontSize: `${counter}px`,
												color: colors,
												fontFamily: FontsizeChange,
											}}
										>
											{address}
										</h1>
									</Link>
								</li>
							</ul>
						</div>
						<div class="float-left mt-2">
							<a href={facebookLink}>
								<img
									alt=""
									width="25"
									height="25"
									src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/32/0/background.png"
									style={{
										float: " left",
										border: "none",
										width: `${spacings}px`,
										height: `${spacings}`,
									}}
								/>
							</a>
							<Link href="">
								<Link href="">
									<a href={twitterLink}>
										<img
											alt=""
											width="25"
											height="25"
											src="https://cdn.gifo.wisestamp.com/social/linkedin/0077b5/32/0/background.png"
											style={{
												float: " left",
												border: "none",
												width: `${spacings}px`,
												height: `${spacings}`,
											}}
											class="mr-2 ml-2"
										/>
									</a>
								</Link>
							</Link>
							<Link href="">
								<a href={twitterLinkA}>
									<img
										alt=""
										width="25"
										height="25"
										src="https://cdn.gifo.wisestamp.com/social/twitter/55acee/32/0/background.png"
										style={{
											float: " left",
											border: "none",
											width: `${spacings}px`,
											height: `${spacings}`,
										}}
										class="mr-2"
									/>
								</a>
							</Link>
							<a href={twitterLinkB}>
								<img
									alt=""
									width="25"
									height="25"
									src="https://cdn.gifo.wisestamp.com/social/instagram/E4405F/32/0/background.png"
									style={{
										float: " left",
										border: "none",
										width: `${spacings}px`,
										height: `${spacings}`,
									}}
								/>
							</a>
						</div>
					</div>
				</div>
				<div class="float-left mt-2 video-thumbnail" style={{ color: "black" }}>
					<img alt="" src={youtubeLink} class="video-thumbnail" />
					{youtubeTitle}
				</div>
				<div class="float-left video-desc" style={{ color: "black" }}>
					{youtubeLinkdesc ? youtubeLinkdesc.substr(0, 300) + "..." : ""}
					{youtubeLinkdesc ? (
						<a rel="noreferrer" href={youtubeUrl} target="_blank">
							<img
								alt="yt-icon"
								src="https://s3.amazonaws.com/images.wisestamp.com/icons/youtube-new.png"
							/>
						</a>
					) : null}
				</div>
				<div id="quote" style={{ color: "black" }}>
					{quoteTitle}
				</div>
			</section>
		</div>
	);
};

export default TemplateA;
