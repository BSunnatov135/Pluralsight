import styles from '../CourseWrapper/courseWrapper.module.css';



function ChannelWrapper({title,subtitle}) {
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
          <div className={styles.ChannelWrapper}>
             <div className={styles.ChannelSvg}>
             <svg width="52px" height="53px" viewBox="0 0 52 53" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="v3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="home+channels-v6" transform="translate(-304.000000, -2891.000000)" stroke-width="2"><g id="Group-9-Copy-2" transform="translate(255.000000, 2891.879997)"><g id="Group-8-Copy-9" transform="translate(49.000000, 0.000000)"><circle id="Oval-2" stroke="#737373" cx="26" cy="26" r="25"></circle><g id="Group-7" transform="translate(25.500000, 25.792893) rotate(-315.000000) translate(-25.500000, -25.792893) translate(18.500000, 18.792893)" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"><path d="M14,0 L0,14" id="Stroke-194" transform="translate(7.000000, 7.000000) rotate(-630.000000) translate(-7.000000, -7.000000) "></path><path d="M14,14 L0,0" id="Stroke-195" transform="translate(7.000000, 7.000000) rotate(-630.000000) translate(-7.000000, -7.000000) "></path></g></g></g></g></g></svg>
              </div>
              <div className={styles.ChannelSubtitle}>
                Create new channel
              </div>
            {/* <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
               
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                        Rewriting Git 2.x History
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Brad Bow</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Intermediate</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>1h 3m</span>
                </div>
              </div>
            </div> */}
            {/* <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_1} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Working with Git Branches
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Craig Golightly</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Intermediate</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>2h 25m</span>
                </div>
              </div>
            </div>
            <div className={`${styles.CarouselItemWrapper} ${styles.CarouselItemMargin}`}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_2} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Building Websites with HTML, CSS, and JavaScript: Getting Started
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Craig Shoemaker</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Beginner</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>3h 51m</span>
                </div>
              </div>
            </div>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_3} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Developing Docker Apps: Core Principles
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Nigel Brown</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Intermediate</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>2h 41m</span>
                </div>
              </div>
            </div> */}
          </div>
    </div>
  );
}

export default ChannelWrapper;
