import styles from './courseItem.module.css'
function CourseItem ({image,title,tutor,level, duration}) {
return (
<div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                
                <img src={image} className={styles.CarouselImage}></img>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      {title}
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>{tutor}</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselLevel}>{level}</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselDuration}>{duration}</span>
                </div>
              </div>
            </div>
)}
export default CourseItem;
