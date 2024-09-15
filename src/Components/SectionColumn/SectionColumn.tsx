import styles from './SectionColumn.module.scss'

function SectionColumn(props: any){
    const {children} = props;
        return(
            <div className={styles.section}>
                {children}
            </div>
        )
    }
    
    export default SectionColumn