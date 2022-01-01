export default function contarOvejas(ovejas) {
	const RED_COLOR = 'rojo'
	 return ovejas.filter(({name, color}) => {
		return /a/i.test(name) && /n/i.test(name) && color === RED_COLOR
	 })
}
