import styles from '../Main/main.module.css'
 
function InfoWrapper() {
    return (
        <div className={styles.RightContainer}>
            <div className={styles.MainRight}>
                <div className={styles.PersonInfo}>
                    <div className={styles.PersonInfoContent}>
                        <div className={styles.PersonIcon}>
                            <div className={styles.PersonIconContent}>
                                B
                            </div>
                        </div>
                        <div className={styles.PersonInfoText}>
                            <a className={styles.PersonInfoLink}>
                                Bobur Sunnatov
                            </a>
                            <span className={styles.PersonInfoIQ}>What is your Role IQ?</span>
                        </div>
                    </div>
                </div>
                <div className={styles.ProgressContainer}>
                    <div className={styles.ProgressFlexWrapper}>
                        <div className={styles.ProgressTitleContainer}>
                            <h4 className={styles.ProgressTitle}>Weekly goal</h4>
                            <button className={styles.ProgressButton}>edit goal</button>
                        </div>
                        <div className={styles.ProgressTimeContainer}>
                            <span className={styles.ProgressTimeCount}>0 min</span>
                            <span className={styles.OutOf}>&nbsp;/&nbsp;</span>
                            <span className={styles.OutOf}>10 hours</span>
                        </div>
                        <div className={styles.ProgressLine}></div>
                        <span className={styles.ProgressMessage}>Completed this week</span>
                        <br/>
                    </div>
                </div>
                <div className={styles.BadgesContainer}>
                    <div className={styles.BadgesWrapper}>
                        <div className={styles.BadgesHeader}>
                            <h5>Your badges</h5>
                            <a href='#'>View all</a>
                        </div>
                        <div className={styles.BadgesContent}>
                            <div className={styles.BadgesUpcoming}>
                                <h6>Upcoming</h6>
                                <div className={styles.BadgesText}>                                   
                                     <img className={styles.BadgesIcon} src='https://pluralsight2.imgix.net/achievements/assets/badges/content-completion/courses/development/intermediate/disabled-dark.135a7f.svg'></img>
                                    <div className={styles.BadgesParagraph}>
                                        <h4>Rewriting Git 2.x History</h4>
                                        <span className={styles.BadgesDescription}>Watch 65% more clips to unlock this badge.</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.BadgesEarned}>
                                <h6>recently earned</h6>
                                <div className={styles.BadgesEarnedFlexContainer}>
                                    <div className={styles.BadgesTextWrapper}>
                                    <img src='https://pluralsight2.imgix.net/achievements/assets/badges/content-completion/courses/development/beginner/enabled-dark.d2960e.svg' className={styles.BadgesEarnedImage}></img>
                                    <span className={styles.BadgesEarnedText}>JavaScript: Getting Started</span>
                                    </div>
                                    <div className={styles.BadgesTextWrapper}>
                                    <img src='https://pluralsight2.imgix.net/achievements/assets/badges/2022/2-day-streak-20x-2022/enabled-dark.98c105.svg' className={styles.BadgesEarnedImage}></img>
                                    <span className={styles.BadgesEarnedText}>Back to Back Days 20x</span>
                                    </div>
                                    <div className={styles.BadgesTextWrapper}>
                                    <img src='https://pluralsight2.imgix.net/achievements/assets/badges/2022/viewtime-1500-min-2022/enabled-dark.d1cf27.svg' className={styles.BadgesEarnedImage}></img>
                                    <span className={styles.BadgesEarnedText}>Scholarly Pursuit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.InterestsContainer}>
                    <span className={styles.InterestsTitle}><h2 style={{marginTop:0, marginBottom:"27px", lineHeight:"16px"}}>Your interests</h2></span>
                    <div className={styles.InterestsList}>
                        <div className={styles.InterestListItem}>Angular</div>
                        <div className={styles.InterestListItem}>DevOps</div>
                        <div className={styles.InterestListItem}>TypeScript</div>
                        <div className={styles.InterestListItem}>Design Patterns</div>
                        <div className={styles.InterestListItem}>Redux</div>
                        <div className={styles.InterestListItem}>Microservices</div>
                        <div className={styles.InterestListItem}>+56</div>
                    </div>
                    <button className={styles.InterestsLink}><a href='#' style={{textDecoration:"none"}}>Edit Interests</a></button>
                </div>
            </div>
        </div>
)
}
export default InfoWrapper;