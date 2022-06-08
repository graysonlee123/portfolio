import utilStyles from '/src/styles/utils.module.scss'

const projects = {
  precision: {
    title: 'Rebuilding Precision Creative',
    href: '/projects/rebuilding-precision-creative',
    img: '/images/precision-website-mockup-01.jpg',
    width: 2960,
    height: 1680,
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
        which left it heavy, inaccessible, unorganized, and un-optimized. I was
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
    width: 2960,
    height: 1680,
    desc: 'Articulate is a website where users can load, save, and comment on web development articles from Smashing Magazine.',
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
  embark: {
    title: 'Embark',
    href: '/projects/embark',
    img: '/images/embark-website-mockup-01.jpg',
    width: 2560,
    height: 1453,
    desc: 'Get to where you need to go. Embark is your bookmarks bar, re-imagined. Built with Next.js, TypeScript, and Docker.',
    intro: (
      <p>
        The purpose of this project is to allow anyone to host a customized and
        enhanced bookmarks page. It can be configured as the &quot;new tab&quot;
        page in your browser.
      </p>
    ),
    items: {
      techStack: ['Next.js', 'Docker', 'TypeScript'],
      links: [
        {
          title: 'View code',
          url: 'https://github.com/graysonlee123/embark/',
        },
        {
          title: 'Docker Hub',
          url: 'https://hub.docker.com/r/ggantek/embark/',
        },
        {
          title: 'Static demo',
          url: 'https://ggantek-embark.vercel.app/',
        },
      ],
      details: ['Sole developer'],
    },
  },
  work: {
    title: 'Working at Precision Creative',
    href: '/projects/working-at-precision-creative',
    img: '/images/work-photo-01.jpg',
    width: 1920,
    height: 1090,
    desc: "Starting as an intern, to part-time, to full-time, I've grown a lot throughout my journey at Precision Creative.",
    intro: (
      <p>
        I had the opportunity to intern at a digital marketing and web design
        agency called Precision Creative right after my Georgia Tech Coding Boot
        Camp. A few months later, I was hired full-time. Throughout my time at
        Precision, I have grown as a developer in many aspects. From working
        with a team to constantly improving code, I continue to work towards
        becoming the developer that I aspire to be.
      </p>
    ),
  },
}

export default projects
