// Components
import ProjectOpenContentBlockImg from './../Project/ProjectOpen/ProjectOpenContent/ProjectOpenContentBlock/ProjectOpenContentBlockImg/ProjectOpenContentBlockImg'
import ProjectOpenContentBlockText from './../Project/ProjectOpen/ProjectOpenContent/ProjectOpenContentBlock/ProjectOpenContentBlockText/ProjectOpenContentBlockText'
import ProjectOpenContentBlockSlider from './../Project/ProjectOpen/ProjectOpenContent/ProjectOpenContentBlock/ProjectOpenContentBlockSlider/ProjectOpenContentBlockSlider'
import ProjectOpenContentBlockVideo from './../Project/ProjectOpen/ProjectOpenContent/ProjectOpenContentBlock/ProjectOpenContentBlockVideo/ProjectOpenContentBlockVideo'

// GREEN
import GreenBackground from './../../../assets/visuals/green/green-back.jpg'
import GreenFront from './../../../assets/visuals/green/green-front.png'
import Green1 from './../../../assets/visuals/green/green-1.jpg'
import Green2 from './../../../assets/visuals/green/green-2.jpg'
import Green3 from './../../../assets/visuals/green/green-3.jpg'
import Green4 from './../../../assets/visuals/green/green-4.jpg'

// TESLA
import TeslaBackground from './../../../assets/visuals/tesla/tesla-back.jpg'
import TeslaFront from './../../../assets/visuals/tesla/tesla-front.png'
import Tesla1 from './../../../assets/visuals/tesla/tesla-1.mp4'
import Tesla2 from './../../../assets/visuals/tesla/tesla-2.jpg'
import Tesla3 from './../../../assets/visuals/tesla/tesla-2.jpg'
import Tesla41 from './../../../assets/visuals/tesla/tesla-4-1.png'
import Tesla42 from './../../../assets/visuals/tesla/tesla-4-2.png'
import Tesla51 from './../../../assets/visuals/tesla/tesla-5-1.png'
import Tesla52 from './../../../assets/visuals/tesla/tesla-5-2.png'
import Tesla61 from './../../../assets/visuals/tesla/tesla-6-1.png'
import Tesla62 from './../../../assets/visuals/tesla/tesla-6-2.png'
import Tesla7 from './../../../assets/visuals/tesla/tesla-7.mp4'
import TeslaSlider1 from './../../../assets/visuals/tesla/tesla-slider-1.png'
import TeslaSlider2 from './../../../assets/visuals/tesla/tesla-slider-2.jpg'

// VOLTAIRE
import VoltaireBackground from './../../../assets/visuals/voltaire/voltaire-back.jpg'
import VoltaireFront from './../../../assets/visuals/voltaire/voltaire-front-test.png'
import Voltaire1 from './../../../assets/visuals/voltaire/voltaire-1.jpg'
import Voltaire21 from './../../../assets/visuals/voltaire/voltaire-2-1.png'
import Voltaire22 from './../../../assets/visuals/voltaire/voltaire-2-2.png'
import Voltaire3 from './../../../assets/visuals/voltaire/voltaire-3.jpg'
import Voltaire4 from './../../../assets/visuals/voltaire/voltaire-4.jpg'
import VoltaireSlider1 from './../../../assets/visuals/voltaire/voltaire-slider-1.jpg'
import VoltaireSlider2 from './../../../assets/visuals/voltaire/voltaire-slider-2.jpg'
import VoltaireSlider3 from './../../../assets/visuals/voltaire/voltaire-slider-3.jpg'
import VoltaireSlider4 from './../../../assets/visuals/voltaire/voltaire-slider-4.jpg'

// UNESCO
import UnescoBackground from './../../../assets/visuals/unesco/unesco-back.jpg'
import UnescoFront from './../../../assets/visuals/unesco/unesco-front.png'
import Unesco11 from './../../../assets/visuals/unesco/unesco-1-1.png'
import Unesco12 from './../../../assets/visuals/unesco/unesco-1-2.png'
import Unesco21 from './../../../assets/visuals/unesco/unesco-2-1.png'
import Unesco22 from './../../../assets/visuals/unesco/unesco-2-2.png'
import Unesco31 from './../../../assets/visuals/unesco/unesco-3-1.png'
import Unesco32 from './../../../assets/visuals/unesco/unesco-3-2.png'
import Unesco33 from './../../../assets/visuals/unesco/unesco-3-3.png'
import Unesco4 from './../../../assets/visuals/unesco/unesco-4.mp4'

const contentToLoad  = [
  GreenBackground,
  GreenFront,
  Green1,
  Green2,
  Green3,
  Green4,
  TeslaBackground,
  TeslaFront,
  Tesla1,
  Tesla2,
  Tesla3,
  Tesla41,
  Tesla42,
  Tesla51,
  Tesla52,
  Tesla61,
  Tesla62,
  Tesla7,
  TeslaSlider1,
  TeslaSlider2,
  VoltaireBackground,
  VoltaireFront,
  Voltaire1,
  Voltaire21,
  Voltaire22,
  Voltaire3,
  Voltaire4,
  VoltaireSlider1,
  VoltaireSlider2,
  VoltaireSlider3,
  VoltaireSlider4,
  UnescoBackground,
  UnescoFront,
  Unesco11,
  Unesco12,
  Unesco21,
  Unesco22,
  Unesco31,
  Unesco32,
  Unesco33,
  Unesco4
]

const projects = [
  {
    title: 'GREEN',
    className: 'green-factory',
    backgroundImage: GreenBackground,
    frontImage: GreenFront,
    open: {
      header: {
        when: 'June 2018',
        client: 'Green Factory',
        subtitle: 'WEBSITE REDESIGN'
      },
      content: {
        intro: {
          text: 'Green Factory offers stand-alone vegetal compositions, a sustainable alternative to ephemeral bouquets and classic houseplants, halfway between the world of decoration and that of the plant.<br /><br />I wanted to work on the identity of this website, review its UX and bring out a graphic chart more adapted to the product. It was my first study case alone.',
          role: 'UX/UI Designer',
          url: [
            {
              title: 'BEHANCE',
              link: 'https://www.behance.net/gallery/67818345/Green-Factory-Redesign-website'
            }
          ]
        },
        footer: [
          {
            title: 'CONCLUSION',
            text: 'It was my first solo case-study very happy to have it done several times before reaching this result. I still have to learn but it made me feel good to progress.'
          }
        ],
        core: [
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'desktop',
              background: false,
              img: Green1
            }
          },
          {
            component: ProjectOpenContentBlockText,
            content: {
              type: 'approach',
              background: true,
              text: 'Green factory offers decorative plant creations and requiring very little maintenance. The current website is not as consistent as their warm stores so I had to revisit the UI. <br /><br />A lightweight website with consistent interactions to magnify the product.'
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'desktop',
              background: true,
              img: Green2
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'desktop',
              background: false,
              img: Green3
            }
          },
          {
            component: ProjectOpenContentBlockText,
            content: {
              type: 'final-design',
              background: true,
              text: 'Plants & the earth, green & brown. It was the zero level of my brainstorm. Highlight the important and differentiated information, rework the images to make the page breathe, there has been a lot of thinking about the UX to make it better. A font that can stick with the "nature" style. Just enough text and you\'re done with a new gorgeous website.'
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'desktop',
              background: true,
              img: Green4
            }
          }
        ]
      }
    }
  },

  {
    title: 'TESLA',
    className: 'tesla',
    backgroundImage: TeslaBackground,
    frontImage: TeslaFront,
    open: {
      header: {
        when: 'April 2018',
        client: 'TESLA',
        subtitle: 'REDESIGN TOUCHSCREEN & APP'
      },
      content: {
        intro: {
          text: 'Our challenge was to reinvent a new limited edition of Model 3 Tesla merging with a chosen brand. The one that inspired us was a french company named « Nature & Découvertes », an éco-friendly company which embodies well-being.<br /><br />For this project we redesigned the touchscreen, the mobile app and the watch app.',
          role: 'UX/UI Designer<br />Interactive Designer',
          url: [
            {
              title: 'BEHANCE',
              link: 'https://www.behance.net/gallery/72258109/Tesla-Interface-Redesign'
            }
          ]
        },
        footer: [
          {
            title: 'SPECIAL THANKS',
            text:'To Charlotte (Touchscreen), Thanh-Thao and Kimberly (App) and Méric (Watch). '
          },
          {
            title: 'WHAT I\'VE LEARNED',
            text: 'Working in a team with several designers is not easy when you have to agree on an identity, a page, a button. This project was very good training to work in a designer team.'
          },
          {
            title: 'CONCLUSION',
            text: 'This project was really big, it took a lot of time but the result is worth it!'
          }
        ],
        core: [
          {
            component: ProjectOpenContentBlockVideo,
            content: {
              type: 'video',
              background: false,
              video: Tesla1
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'desktop',
              background: false,
              img: Tesla2
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'desktop',
              background: false,
              img: Tesla3
            }
          },
          {
            component: ProjectOpenContentBlockText,
            content: {
              type: 'approach',
              background: true,
              text: 'After some research, here was our statement : people can be stressed out during their driving due to traffic jam, other drivers behavior and so on. Hence, our aim was to create a relaxing driving trip time for all passagers of this new Tesla.<br /><br />To make this experience even more intense, we focused on four human senses: hearing, sight, smell and touch. Everything is there to immerse the passengers in a relaxing or energizing atmosphere, according to their wishes.'
            }
          },
          {
            component: ProjectOpenContentBlockSlider,
            content: {
              type: 'slider',
              background: true,
              imgs: [TeslaSlider1, TeslaSlider2]
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'mobile',
              background: false,
              img1: Tesla41,
              img2: Tesla42
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'mobile',
              background: false,
              img1: Tesla51,
              img2: Tesla52
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'mobile',
              background: false,
              img1: Tesla61,
              img2: Tesla62
            }
          },
          {
            component: ProjectOpenContentBlockText,
            content: {
              type: 'final-design',
              background: true,
              text: 'The driver can use the mobile application to control all Tesla options. It’s easy for him to select whatever he wants as projecting an abyss with beautiful sea animals or as spreading a great spicy smell composed of cinnamon and cardamom.<br /><br />To offer the user  the possibility to live a total sensory experience, the driver has the opportunity to create his own senses mixes, called Mood and save them for now or later.'
            }
          },
          {
            component: ProjectOpenContentBlockVideo,
            content: {
              type: 'video',
              background: true,
              video: Tesla7
            }
          }
        ]
      }
    }
  },

  {
    title: 'VOLTAIRE',
    className: 'voltaire',
    backgroundImage: VoltaireBackground,
    frontImage: VoltaireFront,
    open: {
      header: {
        when: 'April 2018',
        client: 'Q. Voltaire Immobilier',
        subtitle: 'CORPORATE WEBSITE'
      },
      content: {
        intro: {
          text: 'Quai Voltaire Immobilier is a prestigious real estate agency located in the 7th arrondissement in Paris, opposite of Louvre. Jean-Nicolas Zevaco is the CEO of Quai Voltaire Immobilier and expressed his will to create website where we feel the prestige of this agency.<br /><br />Our mission was to create a unique brand identity unlike other parisian real estate agency and stand has an important and prestigious agency.',
          role: 'UX Designer',
          url: [
            {
              title: 'www.quaivoltaireimmobilier.com',
              link: 'https://quaivoltaireimmobilier.com/'
            }
          ]
        },
        footer: [
          {
            title: 'SPECIAL THANKS',
            text:'To Lucie Chabeau (manager), Johann Desobry (dev), David Salobir (UI), Julien Daguet (SEO). '
          },
          {
            title: 'WHAT I\'VE LEARNED',
            text: 'It was the first time I experimented a real UX research. I think I became more observant on this problematic, and it’s good! I want to continue in this way. Other thing, it’s been my first real project with a real client soIi learned a lot on the relation and communication to have with.'
          },
          {
            title: 'CONCLUSION',
            text: 'Quai Voltaire Immobilier was a great project for learn a lot of things, the CEO was very happy at the delivery and at every step in our process.'
          }
        ],
        core: [
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'desktop',
              background: false,
              img: Voltaire1
            }
          },
          {
            component: ProjectOpenContentBlockText,
            content: {
              type: 'approach',
              background: true,
              text: 'The current website of QVI did not insure the maintainability of good for sale and the identity was not well exploited. I worked on the hierarchy of every page after a long audit on every french real estate agency. I optimized the usability to have the most logic navigation.<br /><br />The website should be manageable at 100%, the client wanted the possibility to manage this website every day for change good to sell himself.'
            }
          },
          {
            component: ProjectOpenContentBlockSlider,
            content: {
              type: 'slider',
              background: true,
              imgs: [VoltaireSlider1, VoltaireSlider2, VoltaireSlider3, VoltaireSlider4]
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'mobile',
              background: false,
              img1: Voltaire21,
              img2: Voltaire22
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'desktop',
              background: false,
              img: Voltaire3
            }
          },
          {
            component: ProjectOpenContentBlockText,
            content: {
              type: 'final-design',
              background: true,
              text: 'The goals of the graphic redesign were to give the image of the site, and therefore the company up to date and enhance the prestige of the goods sold and the agency.<br /><br />We reused the purple color, more deeper and introduce golden for the prestigious part. The combinasion serif/no-serif was used for the prestigious part too.'
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'desktop',
              background: true,
              img: Voltaire4
            }
          }
        ]
      }
    }
  },
  {
    title: 'UNESCO',
    className: 'unesco',
    backgroundImage: UnescoBackground,
    frontImage: UnescoFront,
    open: {
      header: {
        when: 'May 2018',
        client: 'UNESCO',
        subtitle: 'CONCEPT APP'
      },
      content: {
        intro: {
          text: 'UNESCO identifies and protects more than 1000 sites and traditions over the world. However, only some of them are known to most individuals and many need to be preserved. Giving people the opportunity to discover new places to with exceptional history and  ureal landscapes.<br /><br />This application allows everyone to discover these sites, to know more, and to learn every day. « Unesco Discoveries » make you discover a new site every day.',
          role: 'Everything Designer',
          url: [
            {
              title: 'DRIBBBLE',
              link: 'https://www.dribbble.com'
            },
            {
              title: 'BEHANCE',
              link: 'https://www.behance.net/gallery/72625031/UNESCO-Discovery-Concept-App'
            }
          ]
        },
        footer: [
          {
            title: 'SPECIAL THANKS',
            text:'To Maud Frichement (manager), Meric Fournier & Bérangère Martin (Android), Antoine Dunn (IOS) Marina Ferreira Duarte (UX/UI).'
          },
          {
            title: 'WHAT I\'VE LEARNED',
            text: 'UNESCO Discoveries was my first real app project with a developper team. I tried to include atomic design in my design flow, it’s a success. '
          },
          {
            title: 'CONCLUSION',
            text: 'Created in few week ( between other projects), I’m happy of the result and it motivates me to keep it up with app design.'
          }
        ],
        core: [
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'mobile',
              background: false,
              img1: Unesco11,
              img2: Unesco12
            }
          },
          {
            component: ProjectOpenContentBlockText,
            content: {
              type: 'approach',
              background: true,
              text: 'Actually, UNESCO has a website. But the fact is you can have all information you want but have a bad illustration of every sites wich the UNESCO protects. We have to create an app easy to use with a clean interface and experience for make people interested about discover every site they could.<br /><br />This application should work on IOS and Android phone and with every height.'
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'mobile',
              background: true,
              img1: Unesco21,
              img2: Unesco22
            }
          },
          {
            component: ProjectOpenContentBlockImg,
            content: {
              type: 'mobile',
              background: false,
              img1: Unesco31,
              img2: Unesco32,
              img3: Unesco33
            }
          },
          {
            component: ProjectOpenContentBlockText,
            content: {
              type: 'final-design',
              background: true,
              text: 'Image-first, Unesco discovery wants to remain minimalist and refined to give full rein to landscapes. We accompany them with three typographies: one without serif for the titles, one for the tags and one for the body of the text. A dominance of white and blue to preserve the freshness of the application with a few notes of light and bright gradient, as varied as the different landscapes protected by unesco.'
            }
          },
          {
            component: ProjectOpenContentBlockVideo,
            content: {
              type: 'video',
              background: true,
              video: Unesco4
            }
          }
        ]
      }
    }
  }
]

export { projects, contentToLoad }