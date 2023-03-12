import React from 'react';
import s from './App.module.css'
import group from './img/group.jpg'
import lingua from './img/lingua.jpg'
import certifivate from './img/certifivate.jpg'
import Card from "./components/Card/Card";

function App() {

	const message = "Фото будут другие, а это заглушки 😄"

	const cards = [
		{id: 1, image: certifivate, message},
		{id: 2, image: group, message},
		{id: 3, image: lingua, message},
	]

	return (
		<div className={s.App}>
			<div className={s.wrapper}>
				{cards.map((c) => {
				return	<Card key={c.id} image={c.image} message={c.message}/>
				})}
			</div>
		</div>
	);
}

export default App;
