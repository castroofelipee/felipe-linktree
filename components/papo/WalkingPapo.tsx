import styles from './WalkingPapo.module.css'

export function WalkingPapo() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.walk}>
        <svg
          className={styles.duck}
          viewBox="0 0 160 140"
          role="img"
          focusable="false"
        >
          {/* shadow */}
          <ellipse
            className={styles.shadow}
            cx="86"
            cy="124"
            rx="44"
            ry="10"
            fill="rgba(0,0,0,0.45)"
          />

          {/* body */}
          <path
            d="M52 86c0-22 18-40 40-40h6c19 0 36 14 39 33 1 8-1 16-6 22-9 12-26 20-46 20-25 0-33-14-33-35Z"
            fill="#f7c948"
            stroke="rgba(0,0,0,0.25)"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* wing */}
          <path
            d="M72 86c6-12 20-16 30-8 8 7 7 18-2 25-10 7-23 3-28-9"
            fill="#f1b844"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* head */}
          <path
            d="M44 66c0-18 14-32 32-32 16 0 29 11 32 26 1 6 0 12-3 17-6 9-17 15-30 15-18 0-31-12-31-26Z"
            fill="#f7c948"
            stroke="rgba(0,0,0,0.25)"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* beak */}
          <path
            d="M26 70c7-6 16-9 26-8 5 1 8 4 8 8s-3 7-8 8c-10 1-19-2-26-8Z"
            fill="#ff8b3d"
            stroke="rgba(0,0,0,0.22)"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* eye */}
          <circle cx="66" cy="60" r="4.5" fill="#1b1b1b" />
          <circle cx="68" cy="58.5" r="1.5" fill="#ffffff" opacity="0.9" />

          {/* legs */}
          <g className={styles.legLeft}>
            <path
              d="M78 108c0 10-4 14-10 14"
              fill="none"
              stroke="#ff8b3d"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M62 122c7 2 14 2 20 0"
              fill="none"
              stroke="#ff8b3d"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>
          <g className={styles.legRight}>
            <path
              d="M96 108c0 10-4 14-10 14"
              fill="none"
              stroke="#ff8b3d"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M80 122c7 2 14 2 20 0"
              fill="none"
              stroke="#ff8b3d"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
