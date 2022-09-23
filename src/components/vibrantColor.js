Vibrant.from(imageSrc).maxColorCount(200).getPalette().then((palette)=> {
const colors = []
number = 0;
   for (let color in palette) {
	number = number  +1
	   	const type = color
	   const typetextColor = palette[color].getTitleTextColor()
	   const hex = palette[color].getHex()
	   const hexTextColor = palette[color].getBodyTextColor()
	   const = getColorName(hex)
	   const nameTextColor = palette[color].getBodyTextColor()

	   color.push({number,type,typeTextColor , hex,hexTextColor , name,nameTextColor})
   }
	this.palette = colors
   });
}
