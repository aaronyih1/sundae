//Total time to complete: 1:19:20
import React, { useState } from 'react';
import styles from './HowItWorks.module.css';

var classNames = require('classnames');


function HowItWorks() {
	const [ mouseOver, setMouseOver ] = useState(false);

	var hoverStepStyle = classNames(styles.steps__list__item, {
	  [styles['steps__list__item--blur']]: mouseOver,
	});
	const handleMouseOver = () => {
		setMouseOver(true);
	}
	const handleMouseOut = () => {
		setMouseOver(false);
	}
	return (
		<section className={styles.container}>
			<div className={styles.steps}>
				<div className={styles.steps__container}>
					<img className={styles.steps__image} src="https://sundae.com/wp-content/uploads/2019/01/how-1@2x.png"/>
				</div>
				<ol className={styles.steps__list}>
					<li className={hoverStepStyle} onMouseOver={()=>handleMouseOver()} onMouseOut={()=>handleMouseOut()}>
						<span className={styles.steps__list__item__number}>1</span>
						<h5 className={styles.steps__list__item__title}>FREE HOME ASSESSMENT</h5>
						<p className={styles.steps__list__item__description}>Fill out the form below and we’ll contact you within 24 hours to schedule your free, no obligation home assessment.</p>
					</li>
					<li className={hoverStepStyle} onMouseOver={()=>handleMouseOver()} onMouseOut={()=>handleMouseOut()}>
						<span className={styles.steps__list__item__number}>2</span>
						<h5 className={styles.steps__list__item__title}>GET A CASH OFFER</h5>
						<p className={styles.steps__list__item__description}>Sundae provides the highest off-market price for your house as-is. We also offer a $10,000 cash advance if you need more immediate financial support prior to closing.</p>
					</li>
					<li className={hoverStepStyle} onMouseOver={()=>handleMouseOver()} onMouseOut={()=>handleMouseOut()}>
						<span className={styles.steps__list__item__number}>3</span>
						<h5 className={styles.steps__list__item__title}>CLOSE AT YOUR PACE</h5>
						<p className={styles.steps__list__item__description}>Close as quickly as 10 days. Or take your time and close up to 60 days after you accept your offer. It’s up to you.</p>
					</li>
				</ol>
			</div>
			<button className={styles.cta}>Get Offer</button>
		</section>
	);
}

export default HowItWorks;
