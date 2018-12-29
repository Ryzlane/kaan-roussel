// Components
import ProjectOpenContentBlockImg from './../Project/ProjectOpen/ProjectOpenContent/ProjectOpenContentBlock/ProjectOpenContentBlockImg/ProjectOpenContentBlockImg'
import ProjectOpenContentBlockText from './../Project/ProjectOpen/ProjectOpenContent/ProjectOpenContentBlock/ProjectOpenContentBlockText/ProjectOpenContentBlockText'
import ProjectOpenContentBlockSlider from './../Project/ProjectOpen/ProjectOpenContent/ProjectOpenContentBlock/ProjectOpenContentBlockSlider/ProjectOpenContentBlockSlider'
import ProjectOpenContentBlockVideo from './../Project/ProjectOpen/ProjectOpenContent/ProjectOpenContentBlock/ProjectOpenContentBlockVideo/ProjectOpenContentBlockVideo'

// GREEN
import GreenBackground from 'assets/visuals/green/green-back.jpg'
import GreenFront from 'assets/visuals/green/green-front.png'
import Green1 from 'assets/visuals/green/green-1.jpg'
import Green2 from 'assets/visuals/green/green-2.jpg'
import Green3 from 'assets/visuals/green/green-3.jpg'
import Green4 from 'assets/visuals/green/green-4.jpg'

// TESLA
import TeslaBackground from 'assets/visuals/tesla/tesla-back.jpg'
import TeslaFront from 'assets/visuals/tesla/tesla-front.png'

// VOLTAIRE
import VoltaireBackground from 'assets/visuals/voltaire/voltaire-back.jpg'
import VoltaireFront from 'assets/visuals/voltaire/voltaire-front.png'
import Voltaire1 from 'assets/visuals/voltaire/voltaire-1.jpg'
import Voltaire21 from 'assets/visuals/voltaire/voltaire-2-1.png'
import Voltaire22 from 'assets/visuals/voltaire/voltaire-2-2.png'
import Voltaire3 from 'assets/visuals/voltaire/voltaire-3.jpg'
import Voltaire4 from 'assets/visuals/voltaire/voltaire-4.jpg'
import VoltaireSlider1 from 'assets/visuals/voltaire/voltaire-slider-1.jpg'
import VoltaireSlider2 from 'assets/visuals/voltaire/voltaire-slider-2.jpg'
import VoltaireSlider3 from 'assets/visuals/voltaire/voltaire-slider-3.jpg'
import VoltaireSlider4 from 'assets/visuals/voltaire/voltaire-slider-4.jpg'

// UNESCO
import UnescoBackground from 'assets/visuals/unesco/unesco-back.jpg'
import UnescoFront from 'assets/visuals/unesco/unesco-front.png'
import Unesco11 from 'assets/visuals/unesco/unesco-1-1.png'
import Unesco12 from 'assets/visuals/unesco/unesco-1-2.png'
import Unesco21 from 'assets/visuals/unesco/unesco-2-1.png'
import Unesco22 from 'assets/visuals/unesco/unesco-2-2.png'
import Unesco31 from 'assets/visuals/unesco/unesco-3-1.png'
import Unesco32 from 'assets/visuals/unesco/unesco-3-2.png'
import Unesco33 from 'assets/visuals/unesco/unesco-3-3.png'
import Unesco4 from 'assets/visuals/unesco/unesco-4.mp4'


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
          text: 'UNESCO identifies and protects more than 1000 sites and traditions over the world. However, only some of them are known to most individuals and many need to be preserved. Giving people the opportunity to discover new places to with exceptional history and  ureal landscapes. \n This application allows everyone to discover these sites, to know more, and to learn every day. « Unesco Discoveries » make you discover a new site every day.',
          role: 'UX/UI Designer',
          url: [
            {
              title: 'BEHANCE',
              link: 'https://behance.com'
            }
          ]
        },
        footer: [
          {
            title: 'CONCLUSION',
            text: 'Create in few week (between other project) i’m happy of the result anda motivates me to keep it up with app design.'
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
              text: 'Actually, UNESCO have a website. But the fact is you can have all information you want but have a bad illustration of every sites wich the UNESCO protect. We have to create an app easy to use with a clean interface and experience for make people interested about discover every site they could. This application should work on IOS and Android phone and with every height, '
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
              text: 'Image-first, Unesco discovery wants to remain minimalist and refined to give full rein to landscapes. We accompany them with three typographies: one without serif for the titles, one for the tags and one for the body of the text. A dominance of white and blue to preserve the freshness of the application with a few notes of light and bright gradient, as varied as the different landscapes protected by unesco.'
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
  // {
  //   title: 'TESLA',
  //   className: 'tesla',
  //   backgroundImage: BackgroundTesla,
  //   frontImage: FrontTesla,
  //   open: {
  //     header: {
  //       when: 'April 2018',
  //       client: 'Q. Voltaire Immobilier',
  //       subtitle: 'CORPORATE WEBSITE'
  //     },
  //     content: {
  //       intro: {
  //         text: 'bla',
  //         role: 'Everything designer',
  //         url: [
  //           {
  //             title: 'BEHANCE',
  //             link: 'https://behance.com'
//             }
//           ]
  //       },
  //       footer: {

  //       },
  //       core: {

  //       }
  //     }
  //   }
  // },
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
          text: 'bla',
          role: 'UX Designer',
          url: [
            {
              title: 'www.quaivoltaireimmobilier.com',
              link: 'www.quaivoltaireimmobilier.com'
            }
          ]
        },
        footer: [
          {
            title: 'SPECIAL THANKS',
            text:'To Lucie Chabeau (manager), Johann Desobry (dev), David Salobir (UI), Julien Daguet (SEO).'
          },
          {
            title: 'WHAT I\'VE LEARNED',
            text: 'It was the first time I experimented a real UX research. I think i become more observant on this problematic, and it’s good! I want continue in this way. Other thing, it’s been my first real project with a real client so i learn a lot on the realation and communication to have with.'
          },
          {
            title: 'CONCLUSION',
            text: 'Quai Voltaire Immobilier was a great project for learn a lot of thing, The CEO was very happy at the delivery and at every step in our process.'
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
              text: 'Actually, UNESCO have a website. But the fact is you can have all information you want but have a bad illustration of every sites wich the UNESCO protect. We have to create an app easy to use with a clean interface and experience for make people interested about discover every site they could. This application should work on IOS and Android phone and with every height, '
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
              text: 'Image-first, Unesco discovery wants to remain minimalist and refined to give full rein to landscapes. We accompany them with three typographies: one without serif for the titles, one for the tags and one for the body of the text. A dominance of white and blue to preserve the freshness of the application with a few notes of light and bright gradient, as varied as the different landscapes protected by unesco.'
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
        client: 'Green Factory',
        subtitle: 'CONCEPT APP'
      },
      content: {
        intro: {
          text: 'UNESCO identifies and protects more than 1000 sites and traditions over the world. However, only some of them are known to most individuals and many need to be preserved. Giving people the opportunity to discover new places to with exceptional history and  ureal landscapes.<br /><br />This application allows everyone to discover these sites, to know more, and to learn every day. « Unesco Discoveries » make you discover a new site every day.',
          role: 'Everything Designer',
          url: [
            {
              title: 'DRIBBBLE',
              link: 'www.dribbble.com'
            },
            {
              title: 'BEHANCE',
              link: 'www.behance.com'
            }
          ]
        },
        footer: [
          {
            title: 'SPECIAL THANKS',
            text:'To Maud Frichement (manager), Meric Fournier &  Bérangère Martin (Android), Antoine Dunn (IOS) Marina  Ferreira Duarte (UX/UI).'
          },
          {
            title: 'WHAT I\'VE LEARNED',
            text: 'UNESCO Discoveries was my first real app project with a devlopper team. I tried to include atomic design in my design flow,  it’s a success.'
          },
          {
            title: 'CONCLUSION',
            text: 'Create in few week (between other project) i’m happy of the result and motivates me to keep it up with app design.'
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
              text: 'Actually, UNESCO have a website. But the fact is you can have all information you want but have a bad illustration of every sites wich the UNESCO protect. We have to create an app easy to use with a clean interface and experience for make people interested about discover every site they could. This application should work on IOS and Android phone and with every height, '
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

export default projects