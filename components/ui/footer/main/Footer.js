import classes from '../../../../styles/Home.module.scss';

const Footer = () => {

    let d = new Date();
    let year = d.getFullYear();
    
    return (
        <>  
          <div className={classes.footer}>&copy; {year} Accsesslong</div>
        </>
    )
}

export default Footer;