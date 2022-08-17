import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import styled from "styled-components"
import axios from "axios"
import {useLocation} from 'react-router-dom';
import Card from "../components/Card"

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`

const Search = () => {
	const [videos, setVideos] = useState([])
	const query = useLocation().search

	useEffect(() => {
		const fetchVideos = async () => {
			const {data} = await axios.get(`https://youtube-clone-lyshka-back.herokuapp.com/api/videos/search${query}`)

			setVideos(data)
		}

		fetchVideos()
	}, [query])

	return (
		<Container>
			{videos.map(video => (
				<Card key={video._id} video={video} />
			))}
		</Container>
	);
};

export default Search;