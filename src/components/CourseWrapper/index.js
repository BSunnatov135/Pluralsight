import styles from './courseWrapper.module.css';
import  CourseItem from '../CourseItem/index.js'


function CourseWrapper({ items, title}) {
  return (
    <div className={styles.MainLeft}> 
          <div className={styles.MainLeftTitle}>
            <div>
              <h2 className={styles.MainLeftTitleText}>{title}</h2>
              <span className={styles.MainLeftLinkContainer}>
                <a className={styles.MainLeftLink}>
                  View all
                  <span className={styles.MainLinkIcon}>
                  <svg ariaLabel="caret right icon" viewBox="0 0 24 24" role="img"><path d="M16 12l-5-5-1.41 1.41L13.17 12l-3.58 3.59L11 17"></path></svg>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div className={styles.CarouselContainer}>
             {items.map(item=>(
             <CourseItem key={item.id} title={item.title} tutor={item.tutor} level={item.level} duration={item.duration} image={item.image}/>
                ))}
          </div>
    </div>
  );
}

export default CourseWrapper;
