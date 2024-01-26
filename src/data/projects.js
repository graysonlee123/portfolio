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
  phasmo: {
    title: 'Phasmophobia Helper',
    href: '/projects/phasmophobia-helper',
    img: '/images/phasmo.png',
    width: 2732,
    height: 1536,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc felis,venenatis ut dolor sit amet.',
    intro: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc felis,
        venenatis ut dolor sit amet, interdum fringilla dui. Nullam sed rutrum
        lorem, nec mollis enim. Nunc id faucibus risus. Morbi arcu orci,
        dignissim eget ipsum et, dignissim venenatis nisl.
      </p>
    ),
    items: {
      techStack: ['NextJS', 'TypeScript'],
      links: [
        {
          title: 'Visit project',
          url: 'https://phasmo.monster',
        },
        {
          title: 'View code',
          url: 'https://github.com/graysonlee123/phasmophobia-helper',
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
    desc: 'A personal open-source project. Its goal is to allow anyone to host a customized and enhanced bookmarks page.',
    intro: (
      <p>
        The purpose of this project is to allow anyone to host a customized and
        enhanced bookmarks page. It can be configured as the &quot;new tab&quot;
        or home page in your browser. It features organizing links into groups,
        quick searching, recently used links, and JSON data storage.
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
        agency right after my Georgia Tech Coding Boot Camp. A few months later,
        I was hired full-time there. Throughout my time here, I have grown as a
        developer in many aspects. From working with a team to constantly
        improving code, I continue to work towards becoming the developer that I
        aspire to be.
      </p>
    ),
  },
}

export default projects
