
type BigCardImg = {
    title?: string,
    subtitle?: string
    img?:string
}

function BigCardImgworks( {title, subtitle,img}: BigCardImg) {
return (
    <>
    <div className="Card-height">
        <div className="Card-Containers">
        {img && <img src={img} alt="" />}
        </div>
       {title && <p className="Titles">{title}</p>}
        {subtitle && <p className="Subtitles">{subtitle}</p>}
      
    </div>
    </>
)
}

export default BigCardImgworks