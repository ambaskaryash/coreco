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
  "title": "Mapping Houston Homicides",
  "description": "An exploration of homicides in Houston.",
  "date": "2020-02-04",
  "audience": "Rice Datathon",
  "featured": false,
  "image": "map-houston-homicides/header.png",
  "img_alt": "An example screen of the 'Mapping Houston Homicides' article",
  "techstack": ["Mapbox", "R"],
  "github": "https://github.com/connorrothschild/datathon-2020/",
  "url": "https://connorrothschild.github.io/datathon-2020/source"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render(
        $$result,
        {
          href: "https://connorrothschild.github.io/datathon-2020/source/",
          src: "/images/project/map-houston-homicides/header.png",
          alt: "Header"
        },
        {},
        {}
      )}
<p><a href="${"https://connorrothschild.github.io/datathon-2020/source/"}" rel="${"nofollow"}"><strong>Mapping Houston Homicides</strong></a> is a visual storytelling piece focused on homicides in Houston. It was recognized as the winner of the Houston/Trends track at the <a href="${"http://news.rice.edu/2020/02/10/rice-students-sweep-second-datathon/"}" rel="${"nofollow"}">2020 Rice Datathon</a>.</p>
<h1 id="${"tools-used"}"><a href="${"#tools-used"}">Tools used</a></h1>
<p>This project was an example of a low-code but high-impact story. Rather than reinventing the wheel and implementing my own scrollytelling capabilities, my team used two tools from Mapbox: their <a href="${"https://www.mapbox.com/solutions/interactive-storytelling"}" rel="${"nofollow"}">interactive storytelling template</a> and <a href="${"https://www.mapbox.com/mapbox-studio"}" rel="${"nofollow"}">Mapbox Studio</a>. In combination, we were able to write very little code but provide a highly tailored, powerful user experience for the reader.</p>
<p>We used Mapbox Studio to create each of the bubbles that is present on the map. As a corollary, we used Studio to define the size, fill, and location of each bubble. we created many different layers that toggled visibility on scroll.</p>
<p>To trigger scroll events, We used the Mapbox storytelling template. This was a simple JSON where, for each \u2018view\u2019, I defined three elements: the <em>text</em>, the <em>layer</em>, and the <em>location</em>.</p>
<h1 id="${"at-a-glance"}"><a href="${"#at-a-glance"}">At a glance</a></h1>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-houston-homicides/mac-1.png",
          alt: "Project image for 'Mapping Houston Homicides'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-houston-homicides/mac-2.png",
          alt: "Project image for 'Mapping Houston Homicides'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-houston-homicides/mac-3.png",
          alt: "Project image for 'Mapping Houston Homicides'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-houston-homicides/mac-4.png",
          alt: "Project image for 'Mapping Houston Homicides'",
          width: "48%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-houston-homicides/phone-1.png",
          alt: "Project image for 'Mapping Houston Homicides'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-houston-homicides/phone-2.png",
          alt: "Project image for 'Mapping Houston Homicides'",
          width: "32%"
        },
        {},
        {}
      )}
${validate_component(Image, "Image").$$render(
        $$result,
        {
          style: "box-shadow: none;",
          src: "/images/project/map-houston-homicides/phone-3.png",
          alt: "Project image for 'Mapping Houston Homicides'",
          width: "32%"
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
