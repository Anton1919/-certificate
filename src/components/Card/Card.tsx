import React from 'react';
import s from "./Card.module.css";

type PropsType = {
	image: string
	message: string
}

const Card = ({image, message}: PropsType) => {
	return (
		<div className={s.card}>
			<div className={s.label}>
				<span>{message}</span>
			</div>
			<img src={image} alt="photo"/>
		</div>
	);
};

export default Card;