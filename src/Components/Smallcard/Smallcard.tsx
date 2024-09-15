
type propscard = {
    title: string,
    subtitle: string,
    
}


function Smallcard({ title, subtitle, }: propscard) {

   

    return (
        <div className='card'>
            <div id='imgOne'>
                <img src="" alt="" />
            </div>
            <div className='cardBottom'>
                <div>
                    <span className='title'>{title}</span>
                    <span className='subtitle'>{subtitle}</span>
                </div>
                <div>               
                <svg width="46" height="41" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.9224 20.2468C25.1291 20.2468 24.618 23.825 24.618 26.3809C24.618 20.5875 21.5509 20.2468 17.9727 20.2468C24.618 20.2468 24.618 16.3278 24.618 13.9423C24.618 19.3948 27.8554 20.2468 30.9224 20.2468Z" stroke="white" stroke-opacity="0.2"/>
<rect y="20.7435" width="0.999999" height="18" transform="rotate(-90 0 20.7435)" fill="white" fill-opacity="0.2"/>
<path d="M9.93715 15.9009C10.9514 12.1155 13.2829 8.81615 16.5123 6.59604C19.7417 4.37593 23.6571 3.38072 27.5547 3.78935C31.4522 4.19799 35.0762 5.98366 37.7749 8.8253C40.4736 11.6669 42.07 15.3781 42.2771 19.2915C42.4842 23.205 41.2884 27.0639 38.9047 30.1746C36.5211 33.2852 33.1059 35.4434 29.2732 36.2611C25.4406 37.0789 21.4419 36.5025 17.9962 34.6357C14.5505 32.7688 11.8839 29.734 10.4757 26.0768" stroke="white" stroke-opacity="0.2" stroke-linecap="round"/>
</svg>   
                </div>
            </div>

        </div>
    )

}

export default Smallcard