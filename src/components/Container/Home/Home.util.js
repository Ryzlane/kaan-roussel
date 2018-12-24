import BackgroundGreen from 'assets/visuals/green-back.jpg'
import FrontGreen from 'assets/visuals/green-front.png'
import BackgroundTesla from 'assets/visuals/tesla-back.jpg'
import FrontTesla from 'assets/visuals/tesla-front.png'
import BackgroundVoltaire from 'assets/visuals/voltaire-back.jpg'
import FrontVoltaire from 'assets/visuals/voltaire-front.png'
import BackgroundUnesco from 'assets/visuals/unesco-back.jpg'
import FrontUnesco from 'assets/visuals/unesco-front.png'

// {
//   title: 'GREEN',
//   className: 'green-factory',
//   backgroundImage: BackgroundGreen,
//   frontImage: FrontGreen,
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
//         url: {
//           behance: 'https://behance.com'
//         }
//       },
//       footer: {

//       },
//       core: {

//       }
//     }
//   }
// }

const projects = [
  {
    title: 'GREEN',
    className: 'green-factory',
    backgroundImage: BackgroundGreen,
    frontImage: FrontGreen,
    open: {
      header: {
        when: 'June 2018',
        client: 'Green Factory',
        subtitle: 'WEBSITE REDESIGN'
      },
      content: {
        intro: {
          text: 'UNESCO identifies and protects more than 1000 sites and traditions over the world. However, only some of them are known to most individuals and many need to be preserved. Giving people the opportunity to discover new places to with exceptional history and  ureal landscapes.<br /><br />This application allows everyone to discover these sites, to know more, and to learn every day. « Unesco Discoveries » make you discover a new site every day.',
          role: 'UX/UI Designer',
          url: {
            behance: 'https://behance.com'
          }
        },
        footer: {
          conclusion: 'Create in few week (between other project) i’m happy of the result anda motivates me to keep it up with app design.'
        },
        core: {

        }
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
  //         url: {
  //           behance: 'https://behance.com'
  //         }
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
    backgroundImage: BackgroundVoltaire,
    frontImage: FrontVoltaire,
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
          url: {
            QuaiVoltaireImmobilier: 'www.quaivoltaireimmobilier.com'
          }
        },
        footer: {
          thanks: 'To Lucie Chabeau (manager), Johann Desobry (dev), David Salobir (UI), Julien Daguet (SEO). ',
          learned: 'It was the first time I experimented a real UX research. I think i become more observant on this problematic, and it’s good! I want continue in this way. Other thing, it’s been my first real project with a real client so i learn a lot on the realation and communication to have with.',
          conclusion: 'Quai Voltaire Immobilier was a great project for learn a lot of thing, The CEO was very happy at the delivery and at every step in our process.'
        },
        core: {

        }
      }
    }
  },
  {
    title: 'UNESCO',
    className: 'unesco',
    backgroundImage: BackgroundUnesco,
    frontImage: FrontUnesco,
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
          url: {
            dribbble: 'https://dribbble.com',
            behance: 'https://behance.com'
          }
        },
        footer: {
          thanks: 'To Maud Frichement (manager), Meric Fournier &  Bérangère Martin (Android), Antoine Dunn (IOS) Marina  Ferreira Duarte (UX/UI).',
          learned: 'UNESCO Discoveries was my first real app project with a devlopper team. I tried to include atomic design in my design flow,  it’s a success. ',
          conclusion: 'Create in few week ( between other project) i’m happy of the result and motivates me to keep it up with app design.'
        },
        core: {

        }
      }
    }
  }
]

export default projects