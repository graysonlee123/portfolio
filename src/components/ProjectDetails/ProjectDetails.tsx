import Link from '../Link'
import { ProjectFrontmatterDetails } from '../ProjectLayout/ProjectLayout'
import styles from './ProjectDetails.module.css'

/**
 * The props for the ProjectDetails component.
 */
type ProjectDetailsProps = {
  /**
   * The details about a project.
   */
  details: ProjectFrontmatterDetails
}

/**
 * A component used to display details about a project, from its frontmatter.
 *
 * @param props - The props for the ProjectDetails component.
 * @return A tree of elements that conditionally display the details provided.
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
