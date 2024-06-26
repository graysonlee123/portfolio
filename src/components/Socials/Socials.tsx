import { PROFILE_GITHUB_URL, PROFILE_LINKEDIN_URL } from 'lib/data/constants'
import styles from './Socials.module.css'

const links = [
  {
    name: 'LinkedIn',
    slug: 'linkedin',
    url: PROFILE_LINKEDIN_URL,
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 16.1c0-5.6949 0-8.5424 1.1259-10.7097a9.9999 9.9999 0 0 1 4.2644-4.2644C7.5576 0 10.405 0 16.1 0h15.8c5.6949 0 8.5424 0 10.7097 1.1259a9.9993 9.9993 0 0 1 4.2644 4.2644C48 7.5576 48 10.405 48 16.1v15.8c0 5.6949 0 8.5424-1.1259 10.7097a9.9987 9.9987 0 0 1-4.2644 4.2644C40.4424 48 37.5949 48 31.9 48H16.1c-5.6949 0-8.5424 0-10.7097-1.1259a9.9993 9.9993 0 0 1-4.2644-4.2644C0 40.4424 0 37.5949 0 31.9V16.1Z"
          fill="#1265BF"
        />
        <path
          d="M10.7738 14.9066c2.2997 0 4.164-1.8643 4.164-4.164 0-2.2997-1.8643-4.164-4.164-4.164-2.2997 0-4.164 1.8643-4.164 4.164 0 2.2997 1.8643 4.164 4.164 4.164ZM18.7513 17.9839h6.9011v3.1614s1.8727-3.7454 6.968-3.7454c4.5453 0 8.3106 2.2391 8.3106 9.0641v14.392h-7.1515V28.2079c0-4.0261-2.1495-4.4689-3.7874-4.4689-3.3991 0-3.9811 2.932-3.9811 4.9941V40.856h-7.2597V17.9839ZM7.144 17.9839h7.2597V40.856H7.1439V17.9839Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    slug: 'github',
    url: PROFILE_GITHUB_URL,
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 16.1c0-5.6949 0-8.5424 1.1259-10.7097a9.9999 9.9999 0 0 1 4.2644-4.2644C7.5576 0 10.405 0 16.1 0h15.8c5.6949 0 8.5424 0 10.7097 1.1259a9.9993 9.9993 0 0 1 4.2644 4.2644C48 7.5576 48 10.405 48 16.1v15.8c0 5.6949 0 8.5424-1.1259 10.7097a9.9987 9.9987 0 0 1-4.2644 4.2644C40.4424 48 37.5949 48 31.9 48H16.1c-5.6949 0-8.5424 0-10.7097-1.1259a9.9993 9.9993 0 0 1-4.2644-4.2644C0 40.4424 0 37.5949 0 31.9V16.1Z"
          fill="#101010"
        />
        <path
          d="M24.1133 11C16.8682 10.9971 11 16.8623 11 24.1016c0 5.7246 3.6709 10.5908 8.7832 12.3779.6885.1729.583-.3164.583-.6503v-2.2707c-3.9756.4659-4.1367-2.1649-4.4033-2.6043-.5391-.92-1.8135-1.1544-1.4326-1.5939.9052-.4658 1.8281.1173 2.8974 1.6964.7735 1.1455 2.2823.952 3.0469.7616a3.695 3.695 0 0 1 1.0166-1.7812c-4.1191-.7383-5.8359-3.2519-5.8359-6.2402 0-1.4502.4775-2.7832 1.415-3.8584-.5976-1.7725.0557-3.2901.1436-3.5156 1.7021-.1524 3.4716 1.2187 3.6093 1.3271.9668-.2607 2.0713-.3984 3.3077-.3984 1.2421 0 2.3496.1435 3.3252.4072.331-.252 1.9716-1.4297 3.5537-1.2861.0849.2256.7236 1.708.1611 3.457.9492 1.0782 1.4326 2.4229 1.4326 3.876 0 2.9942-1.7285 5.5107-5.8594 6.2372a3.7355 3.7355 0 0 1 1.1163 2.6661v3.2959c.0234.2637 0 .5245.4394.5245 5.1885-1.7491 8.9238-6.6504 8.9238-12.4249C37.2236 16.8623 31.3525 11 24.1133 11Z"
          fill="#fff"
        />
      </svg>
    ),
  },
]

/**
 * A component that renders my social media links.
 *
 * @returns Rendered Socials component.
 */
export default function Socials() {
  return (
    <div className={styles.flex}>
      {links.map((link) => (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visit me on ${link.name}`}
          key={link.slug}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
