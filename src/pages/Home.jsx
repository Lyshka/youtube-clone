import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
	const [videos, setVideos] = useState([])

	// todo
	// try catch 
	// usestate - error

	useEffect(() => {
		const fetchVideos = async () => {
			const {data} = await axios.get(`https://youtube-clone-lyshka-back.herokuapp.com/api/videos/${type}`)

			setVideos(data)
		}

		fetchVideos()
	}, [type])

	return (
		<Container>
			{videos.map(video => (
				<Card key={video._id} video={video} />
			))}
		</Container>
	);
};

export default Home;
