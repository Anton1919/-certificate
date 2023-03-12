import React from 'react';
import s from './App.module.css'
import group from './img/group.jpg'
import lingua from './img/lingua.jpg'
import certifivate from './img/certifivate.jpg'

function App() {
	return (
		<div className={s.App}>
			<div className={s.wrapper}>
				<div className={s.card}>
					<div className={s.label}><span>Фото будут другие, а это заглушки 😄</span></div>
					<img src={certifivate} alt="photo"/>
				</div>
				<div className={s.card}>
					<div className={s.label}><span>Фото будут другие, а это заглушки 😄</span></div>
					<img src={group} alt="photo"/>
				</div>
				<div className={s.card}>
					<div className={s.label}><span>Фото будут другие, а это заглушки 😄</span></div>
					<img src={lingua} alt="photo"/>
				</div>
			</div>
		</div>
	);
}

export default App;
