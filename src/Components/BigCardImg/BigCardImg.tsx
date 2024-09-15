
type BigCardImg = {
    title?: string,
    subtitle?: string,
    img?:string
}

function BigCardImg( {title, subtitle, img}: BigCardImg) {
return (
    <>
    <div className="Card">
        <div className="Card-Container">
         {img && <img src={img} alt="" />}
        </div>
       {title && <p className="Title">{title}</p>}
        {subtitle && <p className="Subtitle">{subtitle}</p>}
      
    </div>
    </>
)
}

export default BigCardImg