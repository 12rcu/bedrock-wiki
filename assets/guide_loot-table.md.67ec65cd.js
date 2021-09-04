import{r as n,o as s,c as a,a as t,w as p,b as e,d as o}from"./404.md.7bdd5a60.js";const r='{"title":"Adding a Loot Table","description":"","frontmatter":{"title":"Adding a Loot Table","nav_order":8,"prefix":"8."},"headers":[{"level":2,"title":"Loot tables","slug":"loot-tables"},{"level":2,"title":"Spawn rules","slug":"spawn-rules"},{"level":2,"title":"Crafting recipes","slug":"crafting-recipes"},{"level":2,"title":"Your progress so far:","slug":"your-progress-so-far"}],"relativePath":"guide/loot-table.md","lastUpdated":1630773485598}',l={},u=t("p",null,"Next, we'll enhance the custom Ghost entity by adding some more basic mechanics to it:",-1),c=t("h2",{id:"loot-tables"},[t("a",{class:"header-anchor",href:"#loot-tables","aria-hidden":"true"},"#"),e(" Loot tables")],-1),i=t("p",null,"First, we'll make the ghost drop Ectoplasm upon death: create the following file:",-1),k=t("p",null,"TODO: needs to be finished",-1),b=e("BP/loot_tables/entities/ghost.json"),m=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;pools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;rolls&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;entries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:ectoplasm&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t\t\t<span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set_count&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t\t<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t\t\t<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t\t\t<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">3</span>\n\t\t\t\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t\t<span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">]</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="spawn-rules"><a class="header-anchor" href="#spawn-rules" aria-hidden="true">#</a> Spawn rules</h2><p>Next, we&#39;ll make the ghost spawn in deserts at night:</p>',3),q=e("BP/spawn_rules/ghost.json"),d=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;minecraft:spawn_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:ghost&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;population_control&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monster&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;minecraft:spawns_on_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;minecraft:brightness_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;adjust_for_weather&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;minecraft:difficulty_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hard&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;minecraft:weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;minecraft:herd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;min_size&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">3</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;minecraft:biome_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_biome_tag&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desert&quot;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="crafting-recipes"><a class="header-anchor" href="#crafting-recipes" aria-hidden="true">#</a> Crafting recipes</h2><p>And finally, as an introduction to recipes, we&#39;ll make the Ectoplasm craftable into Slime Blocks:</p>',3),_=e("BP/recipes/ectoplasm_slime_blocks.json"),y=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.12.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:recipe_shaped&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:ectoplasm_slime_block&quot;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;crafting_table&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token string">&quot;###&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">&quot;###&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">&quot;###&quot;</span>\n\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;#&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:ectoplasm&quot;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:slime&quot;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="your-progress-so-far"><a class="header-anchor" href="#your-progress-so-far" aria-hidden="true">#</a> Your progress so far:</h2><p><strong>What you&#39;ve done:</strong></p><ul><li>[x] Setup your pack;</li><li>[x] Create a custom item;</li><li>[x] Create a custom entity;</li><li>[x] Create the entity&#39;s loot, spawn rules, and a custom recipe;</li></ul><p><strong>What are you to do next:</strong> Congratulations! you have finished the Guide and created your first Add-on.</p>',5);l.render=function(e,o,r,l,g,h){const f=n("CodeHeader");return s(),a("div",null,[u,c,i,k,t(f,null,{default:p((()=>[b])),_:1}),m,t(f,null,{default:p((()=>[q])),_:1}),d,t(f,null,{default:p((()=>[_])),_:1}),y])};export default l;export{r as __pageData};