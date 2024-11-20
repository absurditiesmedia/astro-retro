# Astro - Retro Website Theme
*by Absurdities Media Group <[absurditiesmediallc@gmail.com]> <[contact@absurditiesmedia.com]>* 

Journey back to the 90s with this retro website theme. When pages were not
overthought, we just posted them. All of this without giving up any of the
features, SEO, and compatability provided by a modern web framework. This
simple design will change the way you think about building websites, and
we hope it will be widely adopted and change the way people think about
building websites. The web has come a long way, and there have been so many 
design mistakes. From the first time a table was used to create an image 
heavy layout because it looked cool, to the use of media queries to create
a responsive design. Developers have promised designers pixel perfect layouts
when we've known damn well these were promises we could not keep. And what's 
worse, they've undermined the key features of the technologies we use.

If this were a video game, I'd hit the reset button right here and start the
level over. Let this theme be that reset button. Let's forget everything we
know about web design, and start over. This time, let's build on a set of 
principles that work. And instead of getting caught up in hacks trying to 
force designs into some sort of prconceived idea about what we want to 
make the websites look like. Let's allow the medium to determine what 
constitutes good design. 

HTML, CSS, JavaScript and the Browser constitue a visual *medium*. 
Just like  Watercolor, Woodcut or Silkscreen. Artisic media have historically 
dictated a set of rules as to their best use. For example, a silkscreen design
rarely uses more than 4 colors, watercolor is poorly suited to non-organic 
forms with bright colors and hard edges. The best woodcuts make use of the 
grain of the wood. At the same time, the web is a publishing medium, like 
Newspapers and Magazines, Televison and Film, Radio and Recorded Audio. 
In fact, the web is so powerful and versatile that it encompasses the 
functionality of all of these media, adds to them, and promises to continue
expanding its capabilities as time goes on.    

The most useful technologies that have emerged on the internet have nearly 
exclusively been the most simple ones. Take a look at the websites that
truly changed the face of the internet. Not as they exist now, but as they
existed at the time of their launch. A halfway decent developer could have
coded any of them in a week or two. What made them special, and what made 
people use them was that they exposed a basic capability of the technology 
that, in most of the cases, had just become possible. 

Based on these concepts, I propose a set of **Design principles for a mature
world wide web:**:

- The browser will ultimately determine how pages appear. No developer has 
  access to all the versions of all the browsers on all of the devices in
  use. Accept that the best you can do is make *suggestions* as to how 
  elements appear on the page. Keep this in mind when designing, and do
  not create designs that will look bad if they are not pixel perfect.
 
- The function of HTML is to create a semantic organization of content. 
  HTML is not a tool for visual design. It is a tool for information. Make
  Use of the elements to create a structure that aids in the presentation of
  information.

- Hyperlinks take the concept of in-text citation to a whole new, and 
  interactive level. Think about the experience of researching a topic
  in the library, consider the amount of time that a researcher might have
  saved if the in-text citations were simply converted into hyperlinks. 
  Consider the legitimacy a link to a reliable source adds to anything
  you have to say.

- URL/URI: (*Uniform* Resource Locator/*Identifier*). The name says what
  they are, try to minimize the use of tracking codes in them when you
  can. 

- Before creating a style **sheet**, write a style **guide** then 
  then translate that guide into a stylesheet. A style guide will prescribe
  the design elements to be used througout the site. Building your 
  stylesheet based on a style guide will greatly reduce the size of 
  your CSS file, will give your site a consistent look, encourage the 
  semantic use of HTML, and when it comes time to redesign, you may find
  that all you must do is edit the stylesheet.

- Consider Accessibility first. 

These guidelines are a work in progress, and I'm very much aware of the many 
similar schools of thought with similar intent. I 

## Further Reading

### Accessibility
- [https://www.w3.org/WAI/fundamentals/accessibility-intro/]
- [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA]

### Design Principles
- [https://piccalil.li/blog/what-are-design-tokens]
- [https://viewports.fyi/]
- [https://piccalil.li/blog/cube-css]
- [https://en.wikipedia.org/wiki/Single-responsibility_principle]
- [https://en.wikipedia.org/wiki/Don%27t_repeat_yourself]
- [https://snipcart.com/blog/organize-css-modular-architecture]
- [https://clubmate.fi/oocss-acss-bem-smacss-what-are-they-what-should-i-use]
- [https://css-tricks.com/bem-101/]
- [http://oocss.org/]
- [https://smacss.com/]
- [https://en.bem.info/]
- [https://buildexcellentwebsit.es/]
- [https://utopia.fyi/]
- [https://every-layout.dev]
- [https://tailwindcss.com/docs]


### Tools
- [https://coolors.co/]
- [https://icons8.com/lunacy/]
- [https://penpot.app/pricing]


### Even More Resources
- [https://github.com/gztchan/awesome-design]


# Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


