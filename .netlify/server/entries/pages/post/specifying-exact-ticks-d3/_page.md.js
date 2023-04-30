import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../../../chunks/index.js";
import { L as Layout } from "../../../../chunks/_layout3.js";
import "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import { C as Code } from "../../../../chunks/Code.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/file-highlight/prism-file-highlight.js";
import "prism-svelte";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-r.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-yaml.js";
/* empty css                                                      *//* empty css                                                     */import { scaleLinear } from "d3-scale";
import { range } from "d3-array";
import "../../../../chunks/BackTo.js";
import "gsap/dist/SplitText.js";
import "../../../../chunks/motion.js";
import "../../../../chunks/index2.js";
import "gsap";
import "gsap/dist/MorphSVGPlugin.js";
import "../../../../chunks/CornerTitle.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/Seo.js";
import "../../../../chunks/IntersectionObserver.js";
const TicksExample_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "input.svelte-wx3yi5.svelte-wx3yi5{width:100%;margin-bottom:1rem}.output.svelte-wx3yi5.svelte-wx3yi5{background:rgba(var(--primary-color-rgb), 0.15);backdrop-filter:blur(6px);color:var(--text-color);font-family:var(--font-mono);font-size:1rem;line-height:1.5;display:flex;flex-direction:column;border:1px solid rgba(var(--accent-color-rgb), 0.75);box-shadow:1px 1px 20px rgba(var(--accent-color-rgb), 0.45);border-radius:0.35rem}.output.svelte-wx3yi5 div.svelte-wx3yi5{padding:1rem}.output.svelte-wx3yi5 div.svelte-wx3yi5:not(:last-child){border-bottom:1px solid rgba(var(--accent-color-rgb), 0.4)}.num-ticks.svelte-wx3yi5.svelte-wx3yi5{font-size:0.8rem;font-family:var(--font-sans)}",
  map: null
};
const TicksExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xScale;
  let ticks;
  let str;
  let exactedTicks;
  let numTicks = 5;
  let { includesExact = false } = $$props;
  const exactTicks = function(scale, numTicks2, round = false) {
    const maxVal = scale.domain()[1];
    const minVal = scale.domain()[0];
    const stepValue = (maxVal - minVal) / (numTicks2 - 1);
    const output = range(minVal, maxVal + stepValue, stepValue);
    if (round) {
      return output.map((d) => Math.round(d));
    }
    return output;
  };
  if ($$props.includesExact === void 0 && $$bindings.includesExact && includesExact !== void 0)
    $$bindings.includesExact(includesExact);
  $$result.css.add(css$1);
  xScale = scaleLinear().domain([0, 100]).range([0, 1e3]);
  ticks = xScale.ticks(numTicks);
  str = `
let xScale = d3.scaleLinear()
    .domain([0, 100]) 
    .range([0, 1000]);
    
let ticks = xScale.ticks(${numTicks}); 
${includesExact ? `let exactedTicks = exactTicks(xScale, ${numTicks}, true);` : ""}
    `;
  exactedTicks = exactTicks(xScale, numTicks, true);
  return `<div style="${"margin-bottom: 2rem;"}"><input type="${"range"}" min="${"1"}" max="${"20"}" step="${"1"}" class="${"svelte-wx3yi5"}"${add_attribute("value", numTicks, 0)}>
  ${validate_component(Code, "Code").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(str)}`;
    }
  })}

  
  <div class="${"output svelte-wx3yi5"}"><div class="${"svelte-wx3yi5"}">ticks: [${escape(ticks.join(", "))}]
      <span class="${"num-ticks svelte-wx3yi5"}">\u2190 actual ticks: ${escape(ticks.length)}
        ${escape(ticks.length === numTicks ? "\u2705" : " (not " + numTicks + " \u{1F631})")}</span></div>
    ${includesExact ? `<div class="${"svelte-wx3yi5"}">exactedTicks: [${escape(exactedTicks.join(", "))}]
        <span class="${"num-ticks svelte-wx3yi5"}">\u2190 actual ticks: ${escape(exactedTicks.length)}
          ${escape(exactedTicks.length === numTicks ? "\u2705" : " (not " + numTicks + ")")}</span></div>` : ``}</div>
</div>`;
});
const _page_md_svelte_type_style_lang = "";
const css = {
  code: ".note.svelte-mwn7u5{margin-bottom:3rem;color:var(--text-color);font-size:.8rem;opacity:.8;font-family:var(--font-sans);text-align:right;width:100%}",
  map: null
};
const metadata = {
  "layout": "blog",
  "title": "Specifying an exact number of ticks for your D3 scale",
  "description": "A convenient utility function, which allows you to specify an exact number of ticks for your D3 scale.",
  "date": "2023-02-03",
  "featured": true,
  "tags": ["d3", "tutorial"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>The year is 2023, and you\u2019re trying to do something you think should be simple: specify an exact number of ticks for your D3 scale.</p>
<p>You do some research online and encounter the <a href="${"https://observablehq.com/@d3/scale-ticks"}" rel="${"nofollow"}"><code>scale.ticks</code> method</a>, which is supposed to do exactly that:</p>
<blockquote><p>scale.ticks returns an array of values sampled from the scale\u2019s domain.</p></blockquote>
<p>The method takes a single (optional) argument, which is the number of ticks you want to generate. So you pass a number, say <code>5</code>, and expect to get an array of five ticks.</p>
<p>But when you try it out, you get a different result:</p>
${validate_component(TicksExample, "TicksExample").$$render($$result, {}, {}, {})}
<p>What\u2019s happening here? It\u2019s not a bug. The documentation for this method explains:</p>
<blockquote><p>The number of ticks returned, however, is not necessarily equal to the requested count. Ticks are restricted to nicely-rounded values (multiples of 1, 2, 5 and powers of 10), and the scale\u2019s domain can not always be subdivided in exactly count (<em>sic</em>) such intervals.</p></blockquote>
<p>That\u2019s nice, except when its not. Sometimes you want to specify an exact number of ticks, and you don\u2019t want D3 to round them. Perhaps you have a series of small multiple charts, and you want each to have a consistent number of ticks.</p>
<p>As far as I know, there\u2019s no built-in way to do this. So we can write our own utility function to handle the task.</p>
<h2 id="${"the-utility-function"}"><a href="${"#the-utility-function"}">The utility function</a></h2>
<p>The function is pretty simple. It takes a D3 scale and a number of ticks, and returns an array of ticks. Optionally, we can pass a third argument, which is a boolean indicating whether we want the ticks to be rounded or not.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> range <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"d3-array"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">exactTicks</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">scale<span class="token punctuation">,</span> numTicks<span class="token punctuation">,</span> round <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> maxVal <span class="token operator">=</span> scale<span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> minVal <span class="token operator">=</span> scale<span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> stepValue <span class="token operator">=</span> <span class="token punctuation">(</span>maxVal <span class="token operator">-</span> minVal<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>numTicks <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token function">range</span><span class="token punctuation">(</span>minVal<span class="token punctuation">,</span> maxVal <span class="token operator">+</span> stepValue<span class="token punctuation">,</span> stepValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>round<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> output<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> output<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<div class="${"note svelte-mwn7u5"}">\u{1F4A1} The function is adapted from <a href="${"https://stackoverflow.com/a/51497981"}" target="${"_blank"}" rel="${"noopener noreferrer"}">this StackOverflow answer</a>.</div>
<p>Go ahead and see how <code>exactTicks</code> works in action, compared to the default <code>scale.ticks</code> method:</p>
${validate_component(TicksExample, "TicksExample").$$render($$result, { includesExact: true }, {}, {})}
<p>Obviously, the tradeoff here is that we\u2019re not getting nicely-rounded values. And so this isn\u2019t a replacement for <code>scale.ticks</code>. But it\u2019s a useful utility function to have in your toolbox. Optionally, you could also format the returned values using some other method, like <code>d3.format</code>.</p>
<p>You can play around with the code for yourself in this <a href="${"https://svelte.dev/repl/8c96f0bd743449b08b0d2fe15e97854e?version=3.55.1"}" rel="${"nofollow"}">Svelte REPL</a>. Have fun!</p>
<div class="${"note svelte-mwn7u5"}" style="${"margin-top: 3rem; font-style:italic;"}">Psst: thanks for reading. In 2023, I&#39;m trying to blog more often with quickly-useful tutorials like this one. I hope you found it helpful!</div>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
