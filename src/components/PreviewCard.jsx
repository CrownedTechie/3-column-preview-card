import styles from "./styles.module.css";

export const PreviewCard = ({
 title, 
 icon, 
 description,  
 articleClass
}) => {
  return (
    <article 
     className={`${styles.article} preview-card ${articleClass}`}
    >
     <div className={styles.content}>
      <img src={icon} alt={`${title} icon`}  className={styles.icon}/>
      {title && <h1 className={styles.title}>{title}</h1>}
      {description && <p className={styles.description}>{description}</p>}
     </div>
      
      <button className={styles.button}>Learn More</button>
    </article>
  )
};