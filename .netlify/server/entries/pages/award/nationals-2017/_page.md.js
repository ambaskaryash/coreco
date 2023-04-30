import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout.js";
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
const metadata = {
  "title": "National Champion, IX Speaking",
  "place": "International Extemporaneous Speaking",
  "place_code": "gold",
  "award": "National Champion",
  "organization": "National Speech and Debate Association",
  "date": "2017-07-15",
  "featured": false,
  "media_url": "https://www.news-leader.com/story/news/business/2017/06/28/kickapoo-high-school-senior-earns-accolades-national-speech-and-debate-tournament/435570001/",
  "project_url": "https://www.youtube.com/watch?v=lzoUu1fDmWE"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Awarded National Champion in International Extemporaneous Speaking. Sponsored by the Council on Foreign Relations and EF Hutton. Competed against hundreds of high schoolers throughout 13 rounds.</p>
<p>(Yes, this was when I peaked, way back in high school.)</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
