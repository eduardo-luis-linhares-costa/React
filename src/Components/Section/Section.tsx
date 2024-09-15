import styles from './Section.module.scss'


function Section(props: any){
const {children} = props;
    return(
        <div className={styles.section}>
            {children}
        </div>
    )
}

export default Section