import utilStyles from '/src/styles/utils.module.scss'

export default {
  precision: {
    title: 'Rebuilding Precision Creative',
    href: '/projects/rebuilding-precision-creative',
    img: '/images/precision-website-mockup-01.jpg',
    desc: 'Read about my overall experience and challenges I faced while recreating our website for from scratch, with a focus on speed.',
    intro: (
      <p>
        At{' '}
        <a
          className={utilStyles.textLink}
          href="https://precisioncreative.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Precision Creative
        </a>
        , we have always focused on the quality of our websites. However,
        recently we've put a microscope over site speed. Because Google is now
        punishing the ranking of slower websites, we wanted to rebuild our own
        site from scratch. That is exactly what I was tasked to do. Here are
        some of the challenges I faced and steps I took to make it happen.
      </p>
    ),
    items: {
      techStack: ['WordPress', 'PHP', 'Gulp', 'Sass'],
      links: [
        {
          title: 'Visit project',
          url: 'https://precisioncreative.com/',
        },
      ],
      details: ['Sole developer'],
    },
  },
  articulate: {
    title: 'Articulate',
    href: '/projects/articulate',
    img: '/images/articulate-website-mockup-01.jpg',
    desc: 'Articulate is a scraping website where users can load, save, and comment on web development articles from Smashing Magazine.',
    intro: (
      <p>
        The goal of this project is to provide a place to discuss articles from{' '}
        <a
          className={utilStyles.textLink}
          href="https://www.smashingmagazine.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Smashing Magazine
        </a>
        , while crediting the website and the authors. It also provides
        experience with interacting with MongoDB on the front-end, as well as
        exercising best database structure practices.
      </p>
    ),
    items: {
      techStack: ['Express', 'MongoDB', 'Axios', 'Cheerio'],
      links: [
        {
          title: 'Visit project',
          url: 'https://articulate-mongo-scraper.herokuapp.com/',
        },
        {
          title: 'View code',
          url: 'https://github.com/graysonlee123/Articulate',
        },
      ],
      details: ['Sole developer'],
    },
  },
}
