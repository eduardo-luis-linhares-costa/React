

type Rectanglestatisticsprops = {
    title: string,
    subtitle: string,
    secondTitle: string,
    secondSubtitle: string,
    thirdTitle: string,
    thirdSubtitle: string
    
}

function Rectanglestatistics({ title, subtitle, secondSubtitle,secondTitle, thirdTitle, thirdSubtitle}: Rectanglestatisticsprops) {
    return (
        <div className="rectanglebox">
            <div>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>
            <div>
            <h3>{secondTitle}</h3>
            <h4>{secondSubtitle}</h4>
            </div>
            <div>
            <h3>{thirdTitle}</h3>
            <h4>{thirdSubtitle}</h4>
            </div>
        </div>
    )
}

export default Rectanglestatistics
