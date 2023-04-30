import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout4.js";
import { I as Image } from "../../../../chunks/Image.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/BackTo.js";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "gsap";
import "gsap/dist/MorphSVGPlugin.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/IntersectionObserver.js";
/* empty css                                                      */const metadata = {
  "layout": "project",
  "title": "Mapping Police Killings",
  "description": "Visualizing officer-involved deaths since 2013.",
  "date": "2020-12-22",
  "audience": "Mapping Police Violence",
  "featured": false,
  "image": "police-killings/header.png",
  "img_alt": "Police killings header, includes an image of a MacBook with the application open.",
  "techstack": ["D3.js", "Vue.js", "Bulma", "R"],
  "github": "https://github.com/connorrothschild/police-killings",
  "url": "https://mappingpoliceviolence.org/"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render(
        $$result,
        {
          href: "https://connorrothschild.github.io/police-killings/",
          src: "/images/project/police-killings/header.png",
          alt: "Header"
        },
        {},
        {}
      )}
<p><a href="${"https://connorrothschild.github.io/police-killings/"}" rel="${"nofollow"}"><strong>Mapping Police Killings</strong></a> is an application that allows for user exploration of officer-involved deaths across any US city or state. It leverages data from <a href="${"https://mappingpoliceviolence.org/"}" rel="${"nofollow"}">Mapping Police Violence</a> and visualizes shootings in a geographic area using a <a href="${"https://observablehq.com/@d3/force-directed-graph"}" rel="${"nofollow"}">force-directed graph</a> built in D3. Users are able to filter by city or state, and upon initail selection, they are able to group by a variety of victim characteristics, such as age, race, armed status, or cause of death.</p>
<p>The application is featured on the <a href="${"https://mappingpoliceviolence.org/"}" rel="${"nofollow"}">Mapping Police Violence homepage</a>. It is seen by thousands of visitors on a daily basis.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>I used <a href="${"https://vuejs.org/"}" rel="${"nofollow"}">Vue</a> to design the application and handle user interaction. I used <a href="${"https://d3js.org/"}" rel="${"nofollow"}">D3.js</a> for visualization and for its force-directed diagram capabilities. Additional styling was done with <a href="${"https://bulma.io/"}" rel="${"nofollow"}">Bulma</a>.</p>
<p>This was actually the second iteration of this visualization. <a href="${"https://connorrothschild.github.io/police-killings-v1/"}" rel="${"nofollow"}">Version 1 can be found here</a>. Although that version was <a href="${"https://github.com/connorrothschild/police-killings-v1"}" rel="${"nofollow"}">built</a> with vanilla JavaScript and no CSS library (everything was built from scratch!). Upon deploying this to a more serious and more visited site (Mapping Police Violence\u2019s homepage), I decided an upgrade would be worth the investment.</p>
<h1 id="${"at-a-glance"}"><a href="${"#at-a-glance"}">At a glance</a></h1>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/police-killings/mac-1.png",
          alt: "Project image for 'Mapping Police Killings'",
          width: "74%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/police-killings/phone-1.png",
          alt: "Project image for 'Mapping Police Killings'",
          width: "22%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/police-killings/phone-2.png",
          alt: "Project image for 'Mapping Police Killings'",
          width: "22%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/police-killings/mac-2.png",
          alt: "Project image for 'Mapping Police Killings'",
          width: "74%"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
