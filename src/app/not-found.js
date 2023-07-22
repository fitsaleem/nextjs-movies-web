import Link from 'next/link'
import styles from '@/app/styles/common.module.css'

export default function NotFound() {

  
 

  return (
    <section className={styles.page_404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col_sm_12} ${styles.text_center}`}>
            <div className={`${styles.col_sm_10} ${styles.col_sm_offset_1} ${styles.text_center}`}>
              <div className={styles.four_zero_four_bg}>
                <h1 className={styles.text_center}>404</h1>
              </div>
              <div className={styles.contant_box_404}>
                <h3 className={styles.h2}>Look like you are lost</h3>
                <p>the page you are looking for not available&apos;</p>
                
                  <div className={styles.link_404}>
                  <Link href={'/'}>go to Home</Link>

                  </div>
      
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
