import certificate from "../img/certifivate.jpg";
import group from "../img/group.jpg";
import lingua from "../img/school.jpg";

export type CardsType = {
	id: number
	image: string
	message: string
}

const message = "Фото будут другие, а это заглушки 😄"

export const defState = [
	{id: 0, image: certificate, message},
	{id: 1, image: group, message},
	{id: 2, image: lingua, message},
]