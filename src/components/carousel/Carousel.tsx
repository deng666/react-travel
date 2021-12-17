import React from "react"
import styles from "./Carousel.module.css"
import { Image, Carousel as AntCarousel } from "antd"
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"

export const Carousel: React.FC = () => {
	return <AntCarousel autoplay className={styles.slider}>
			<Image src={img1} />
			<Image src={img2} />
			<Image src={img3} />
	</AntCarousel>
}