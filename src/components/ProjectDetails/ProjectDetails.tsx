import Link from '../Link'
import { ProjectFrontmatterDetails } from '../ProjectLayout/ProjectLayout'
import styles from './ProjectDetails.module.css'

/**
 * Props for the ProjectDetails component.
 */
type ProjectDetailsProps = {
  /**
   * Details about a project.
   */
  details: ProjectFrontmatterDetails
}

/**
 * A component that renders details about a project.
 *
 * Details include the project's tech stack, relevant links, and other misc details.
 *
 * @param props Props for the ProjectDetails component.
 * @return Rendered ProjectDetails component.
 */
export default function ProjectDetails({ details }: ProjectDetailsProps) {
  if (typeof details !== 'object') return

  return (
    <div className={styles.table}>
      {Object.keys(details).map((key) => {
        let label

        switch (key) {
          case 'techStack':
            label = 'Tech stack'
            break
          case 'links':
            label = 'Links'
            break
          default:
            label = 'Details'
            break
        }

        return (
          <div key={key}>
            <div className={styles.label}>{label}</div>
            {details[key].map((item) => {
              if (typeof item === 'string') return <div key={item}>{item}</div>

              return (
                <div key={item.title}>
                  <Link href={item.url} target="_blank" rel="noopener noreferrer" prism>
                    {item.title}
                  </Link>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
