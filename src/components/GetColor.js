import React, {useState,useEffect} from "react";
import Vibrant from 'node-vibrant'

function ImageWithPalette( props ){
    const [palette,setPalette] = useState(null);

    useEffect(()=>{
        const extractColors = async() => {
            try{
                const vibrant = await Vibrant.from(props).getPalette();
                setPalette(vibrant)
            } catch (error) {
                console.error('Error extracting colors:', error)
            }

        };
        extractColors();
    },[props]);

    return(
        <div>
            {palette && (
                <div>
                    {props}
                    <img src={props} alt="original" />
                    <h3>Vibrant Color Paltette</h3>
                    <div style={{display: 'flex' ,justifyContent:'space-between'}}>
                        {Object.keys(palette).map((key) => (
                            <div key={key} style={{ backgroundColor: palette[key].hex,paddding:'10px', margin:'5px'}}>
                                <p>{key}</p>
                                <p>{palette[key].hex}</p>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
    )
}
export default ImageWithPalette;