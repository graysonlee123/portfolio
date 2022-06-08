import utilStyles from '/src/styles/utils.module.scss'

const projects = {
  precision: {
    title: 'Rebuilding Precision Creative',
    href: '/projects/rebuilding-precision-creative',
    img: '/images/precision-website-mockup-01.jpg',
    desc: 'Read about my overall experience and challenges I faced while recreating our website for from scratch.',
    intro: (
      <p>
        I have worked at{' '}
        <a
          className={utilStyles.textLink}
          href="https://precisioncreative.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Precision Creative
        </a>{' '}
        since January of 2020. It started off as a start-up in 2016 with less
        than a few people, and has since grown to about a dozen employees.
        Because of that, our first website was not built by a web developer,
        which left it heavy, inaccessible, unorganized, and unoptimized. I was
        tasked with fixing all of those things.
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

export default projects
