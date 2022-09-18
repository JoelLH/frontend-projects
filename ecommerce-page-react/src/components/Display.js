
import icoNext from "../images/icon-next.svg"
import icoPrev from "../images/icon-previous.svg"
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg";
import thumb1 from "../images/image-product-1-thumbnail.jpg"
import thumb2 from "../images/image-product-2-thumbnail.jpg"
import thumb3 from "../images/image-product-3-thumbnail.jpg"
import thumb4 from "../images/image-product-4-thumbnail.jpg"
import icoClose from "../images/icon-close.svg"


import React from "react"
import { useState } from "react"


export default function Display(){
    let imageArr = [product1, product2 , product3, product4]
    const [imageVal, setImageVal] = useState({
        imageVal : 0
    })
    let [lightBox, setLigthBox] = useState({
    lightBoxState: false
    })
    
    function changeDisplay(event){
        let action = event.target.id
        switch(action){
            case "prev":
                    setImageVal(prev =>({
                        imageVal : prev.imageVal === 0 ? 3 : prev.imageVal - 1
                    }))
                break;
            case "next":
                    setImageVal(prev =>({
                        imageVal : prev.imageVal === 3 ? 0 : prev.imageVal + 1
                    }))
                break;
            default:
            return action
        }
    }
    function thumbnailControl(event){
        let imageId= event.target.id
        switch(imageId){
            case "img-0":
                setImageVal(prev =>({
                        imageVal : 0,
                    }));
                break;
            case "img-1":
                setImageVal(prev =>({
                        imageVal : 1,
                    }));
                break;
            case "img-2":
                setImageVal(prev =>({
                        imageVal : 2,
                    }));
                break;
            case "img-3":
                setImageVal(prev =>({
                        imageVal : 3,
                    }));
                break;
            default:
                return imageId
        }
    }
    function toggleLigthBox(event){
        let actionId = event.target.id
        switch(actionId){
            case "open-light":
                setLigthBox({
                    lightBoxState: true
                })
                break;
            case "close-light":
                setLigthBox({
                    lightBoxState: false
                })
                break;
            default:
                return actionId
        }
        console.log(actionId)
    }
    return(
        <section className="display-section">
            <div className="product-div">
                <img src={imageArr[imageVal.imageVal]} alt="Product display" className="product-display" id="open-light" />
                <img src={imageArr[imageVal.imageVal]} alt="Product display" className="product-display desktop" id="open-light" onClick={toggleLigthBox}/>
                <button className="arrow-div arrow-prev"  id="prev" onClick={changeDisplay}>
                    <img src={icoPrev} alt="arrow icon"  className="arrow-icon "/>
                </button>
                <button className="arrow-div arrow-next"  id="next" onClick={changeDisplay}>
                    <img src={icoNext} alt="arrow icon"  className="arrow-icon"/>
                </button>
                <div className="thumbnail-div">
                    <div className={imageVal.imageVal === 0 ? "thumbnail-wrapper focus" : "thumbnail-wrapper"}>
                        <img src={thumb1} alt="Shoe Thumbnail" className="thumbnail" id="img-0" onMouseOver={thumbnailControl} />
                    </div>
                    <div className={imageVal.imageVal === 1 ? "thumbnail-wrapper focus" : "thumbnail-wrapper"}>
                        <img src={thumb2} alt="Shoe Thumbnail" className="thumbnail" id="img-1" onMouseOver={thumbnailControl} />
                    </div>
                    <div className={imageVal.imageVal === 2 ? "thumbnail-wrapper focus" : "thumbnail-wrapper"}>
                        <img src={thumb3} alt="Shoe Thumbnail" className="thumbnail" id="img-2" onMouseOver={thumbnailControl} />
                    </div>
                    <div className={imageVal.imageVal === 3 ? "thumbnail-wrapper focus" : "thumbnail-wrapper"}>
                        <img src={thumb4} alt="Shoe Thumbnail" className="thumbnail" id="img-3" onMouseOver={thumbnailControl} />
                    </div>  
                </div>
            </div>
            {lightBox.lightBoxState && <div className="light-box">
                <div className="light-box-header">
                    <img src={icoClose} alt="Close Icon" className="light-box-close" id="close-light" onClick={toggleLigthBox}/>
                </div>
                <div className="product-div">
                    <img src={imageArr[imageVal.imageVal]} alt="Product display" className="product-display desktop"/>
                    <button className="arrow-div arrow-prev lightBox-arrow"  id="prev" onClick={changeDisplay}>
                        <img src={icoPrev} alt="arrow icon"  className="arrow-icon"/>
                    </button>
                    <button className="arrow-div arrow-next lightBox-arrow"  id="next" onClick={changeDisplay}>
                        <img src={icoNext} alt="arrow icon"  className="arrow-icon"/>
                    </button>
                    <div className="thumbnail-div">
                        <div className={imageVal.imageVal === 0 ? "thumbnail-wrapper focus" : "thumbnail-wrapper"}>
                            <img src={thumb1} alt="Shoe Thumbnail" className="thumbnail" id="img-0"/>
                        </div>
                        <div className={imageVal.imageVal === 1 ? "thumbnail-wrapper focus" : "thumbnail-wrapper"}>
                            <img src={thumb2} alt="Shoe Thumbnail" className="thumbnail" id="img-1"/>
                        </div>
                        <div className={imageVal.imageVal === 2 ? "thumbnail-wrapper focus" : "thumbnail-wrapper"}>
                            <img src={thumb3} alt="Shoe Thumbnail" className="thumbnail" id="img-2"/>
                        </div>
                        <div className={imageVal.imageVal === 3 ? "thumbnail-wrapper focus" : "thumbnail-wrapper"}>
                            <img src={thumb4} alt="Shoe Thumbnail" className="thumbnail" id="img-3"/>
                        </div>  
                    </div>
                </div> 
            </div>}
        </section>
    )
}