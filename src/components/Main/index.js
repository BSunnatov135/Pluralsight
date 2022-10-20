import CourseWrapper from '../CourseWrapper';
import ChannelWrapper from '../ChannelWrapper';
import Info from '../InfoWrapper';
import styles from './main.module.css';

import { courses,channels,paths,news} from '../../mock-data/courses';

function Main() {
  return (
   <div className={styles.MainContainer}>
     <div className={styles.MainWrapper}>
       <div className={styles.LeftContainer}>
          {courses.map(course=>(
           <CourseWrapper key={course.id} title={course.title} items={course.items}/>
         ))}
          {channels.map(channel=>(
           <ChannelWrapper key={channel.id} title={channel.title} items={channel.items}/>
         ))}
          {paths.map(path=>(
           <CourseWrapper key={path.id} title={path.title} items={path.items}/>
         ))}
         {news.map(newcourse=>(
           <CourseWrapper key={newcourse.id} title={newcourse.title} items={newcourse.items}/>
         ))}


        {/* <div className={styles.MainLeft}> 
          <div className={styles.MainLeftTitle}>
            <div>
              <h2 className={styles.MainLeftTitleText}>Continue learning</h2>
              <span className={styles.MainLeftLinkContainer}>
                <a className={styles.MainLeftLink}>
                  View all
                  <span className={styles.MainLinkIcon}>
                  <svg aria-label="caret right icon" viewBox="0 0 24 24" role="img"><path d="M16 12l-5-5-1.41 1.41L13.17 12l-3.58 3.59L11 17"></path></svg>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div className={styles.CarouselContainer}>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage} ${styles.CarouselImage}`}></div>
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
            </div>
            <div className={styles.CarouselItemWrapper}>
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
            </div>
          </div>
        </div>

        <div className={styles.MainLeft}> 
          <div className={styles.MainLeftTitle}>
            <div>
              <h2 className={styles.MainLeftTitleText}>Recommended courses based on your course activity</h2>
              <span className={styles.MainLeftLinkContainer}>
                <a className={styles.MainLeftLink}>
                  View all
                  <span className={styles.MainLinkIcon}>
                  <svg aria-label="caret right icon" viewBox="0 0 24 24" role="img"><path d="M16 12l-5-5-1.41 1.41L13.17 12l-3.58 3.59L11 17"></path></svg>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div className={styles.CarouselContainer}>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_4} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Algorithms and Data Structures - Part 2
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Robert Horvick</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Beginner</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>2h 48m</span>
                </div>
              </div>
            </div>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_5} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      React 16 Fundamentals
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Liam McLennan</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Intermediate</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>4h 13m</span>
                </div>
              </div>
            </div>
            <div className={`${styles.CarouselItemWrapper} ${styles.CarouselItemMargin}`}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_6} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Implementing and Understanding Data Structures in Java 8
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Dan Bunker</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Intermediate</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>3h 9m</span>
                </div>
              </div>
            </div>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_7} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      HTML5 Fundamentals
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
                <span className={styles.CarouselName}>3h 47m</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.MainLeft}> 
          <div className={styles.MainLeftTitle}>
            <div>
              <h2 className={styles.MainLeftTitleText}>Recommended courses to watch nextcarouse</h2>
              <span className={styles.MainLeftLinkContainer}>
                <a className={styles.MainLeftLink}>
                  View all
                  <span className={styles.MainLinkIcon}>
                  <svg aria-label="caret right icon" viewBox="0 0 24 24" role="img"><path d="M16 12l-5-5-1.41 1.41L13.17 12l-3.58 3.59L11 17"></path></svg>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div className={styles.CarouselContainer}>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_8} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Working with Inheritance (Java SE 8 Programmer I Certification 1Z0-808)
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Jose Paumard</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Intermediate</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>2h 5m</span>
                </div>
              </div>
            </div>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_9} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Git 2 Administration
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>David Tucker</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Advanced</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>1h 19m</span>
                </div>
              </div>
            </div>
            <div className={`${styles.CarouselItemWrapper} ${styles.CarouselItemMargin}`}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_10} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Angular: Getting Started
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Deborah Kurata</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Beginner</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>5h 52m</span>
                </div>
              </div>
            </div>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_11} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Microsoft Azure Solutions Architect: Design Migrations
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>John Savill</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Advanced</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>54m</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.MainLeft}> 
          <div className={styles.MainLeftTitle}>
            <div>
              <h2 className={styles.MainLeftTitleText}>Hands-on recommendations</h2>
            </div>
          </div>
          <div className={styles.CarouselContainer}>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_8} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Build a Temperature Converter CLI in Go
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Carlos Souza</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Beginner</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>1h 25m</span>
                </div>
              </div>
            </div>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_9} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Create a StarChart Web API using ASP.NET Core
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Eric Fisher</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Intermediate</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>2h 45m</span>
                </div>
              </div>
            </div>
            <div className={`${styles.CarouselItemWrapper} ${styles.CarouselItemMargin}`}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_10} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Build a Wishlist Application with ASP.NET Core
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Eric Fisher</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Beginner</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>2h 30m</span>
                </div>
              </div>
            </div>
            <div className={styles.CarouselItemWrapper}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselBackground}>
                  <div className={`${styles.CarouselBackgroundImage_11} ${styles.CarouselImage}`}></div>
                </div>
                <div className={styles.CarouselItemTitle}>
                  <h3 className={styles.CarouselItemHeader}>
                    <a className={styles.CarouselItemLink} href='#'>
                      <div className={styles.CarouselTitleText}>
                      Build an Album Store Product Page with Angular
                        </div>
                      </a>
                  </h3>
                </div>
                <div className={styles.CarouselInfo}>
                  <span className={styles.CarouselName}>Jon Friskics</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.CarouselName}>Beginner</span>
                </div>
                <div className={styles.CarouselInfo}>
                <span className={styles.CarouselName}>2h 30m</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        </div>
        
          <Info/>
        
     </div>
   </div>
   








  );
}

export default Main;
