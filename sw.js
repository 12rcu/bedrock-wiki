if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-b6ef96bd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.1a168271.js",revision:"972c1a770a018f7dd63d9a460b5ef2ad"},{url:"assets/concepts_animation-controllers.md.cc4e593b.js",revision:"02e9ade38f94614970ea11338b878419"},{url:"assets/concepts_animation-controllers.md.cc4e593b.lean.js",revision:"02e9ade38f94614970ea11338b878419"},{url:"assets/concepts_biomes.md.2e5f03d2.js",revision:"71bd5ec8e37d5e94922702e26edec5bb"},{url:"assets/concepts_biomes.md.2e5f03d2.lean.js",revision:"f137e2d65eafb1370b303cd336ab779d"},{url:"assets/concepts_blocks.md.8c5a6eb8.js",revision:"702e2afa85116f4d875e1577cc73bfa2"},{url:"assets/concepts_blocks.md.8c5a6eb8.lean.js",revision:"04929f2648ff5f5153b90251aef2ac51"},{url:"assets/concepts_components-events-groups.md.a1240e52.js",revision:"9f672da2bb87d558e20f81e8992446a8"},{url:"assets/concepts_components-events-groups.md.a1240e52.lean.js",revision:"fb4f605542680adc2da9c5c6564d3a6e"},{url:"assets/concepts_format-version.md.f8091738.js",revision:"64651f1f61ae3b1eab5014dac7448e67"},{url:"assets/concepts_format-version.md.f8091738.lean.js",revision:"230a282c030ca56126cd5c97cf9e6a69"},{url:"assets/concepts_index.md.4e1ed884.js",revision:"420cd2b307f4cbfcd2e2a850479c2c11"},{url:"assets/concepts_index.md.4e1ed884.lean.js",revision:"420cd2b307f4cbfcd2e2a850479c2c11"},{url:"assets/concepts_items.md.0eba15e9.js",revision:"0c01c26516ba487b94197ca2ca10afd4"},{url:"assets/concepts_items.md.0eba15e9.lean.js",revision:"22ac5088445c66e4f00586175fde67f8"},{url:"assets/concepts_json-ui.md.773424d7.js",revision:"bf352066bc1ed4cd77061c0fb1a2370c"},{url:"assets/concepts_json-ui.md.773424d7.lean.js",revision:"0cd6b3da9524c8d2767c8684929b7691"},{url:"assets/concepts_lang.md.2bc35f96.js",revision:"7da9d8b22da8266178dd67c3ee4b8b37"},{url:"assets/concepts_lang.md.2bc35f96.lean.js",revision:"f42077c32c9c7f31391dda4e3883e3e2"},{url:"assets/concepts_materials.md.cac27819.js",revision:"3631a462fe6056f4a6ccbe3515034943"},{url:"assets/concepts_materials.md.cac27819.lean.js",revision:"06a8d5e920dd3cdbb71bb89d5b55528f"},{url:"assets/concepts_math-based-animations.md.c8ad4c6e.js",revision:"12c88da54deb111f075df2b4c24fddef"},{url:"assets/concepts_math-based-animations.md.c8ad4c6e.lean.js",revision:"73956de9954dd095a5f8561d588ce30b"},{url:"assets/concepts_mcfunction.md.750ecb80.js",revision:"30bab30c501ad11977794a82180c1783"},{url:"assets/concepts_mcfunction.md.750ecb80.lean.js",revision:"61a26aaa80ca8e9cae6bce83253fb140"},{url:"assets/concepts_mcstructure.md.d0d286b6.js",revision:"1dc3ab4c60052592001c01a591e5da30"},{url:"assets/concepts_mcstructure.md.d0d286b6.lean.js",revision:"563ec0e14c0e50f9a1e5677e9bb6251d"},{url:"assets/concepts_namespaces.md.fb6cc66e.js",revision:"c94e2d23ac1712d490492f7784451d98"},{url:"assets/concepts_namespaces.md.fb6cc66e.lean.js",revision:"6360e016c7542125469bf190e8a08bc4"},{url:"assets/concepts_render-controller.md.7264679c.js",revision:"4dc418eb8319b628fb785944bd6c74d4"},{url:"assets/concepts_render-controller.md.7264679c.lean.js",revision:"330e8fbec525b80da0d4f9ec04bb7e3c"},{url:"assets/concepts_shaders.md.a161b47d.js",revision:"cf354c970a0f23ab154428e6d13b7cf8"},{url:"assets/concepts_shaders.md.a161b47d.lean.js",revision:"cf354c970a0f23ab154428e6d13b7cf8"},{url:"assets/concepts_sounds.md.cc0b46bd.js",revision:"914f0c3b148f320fdd6dc0cbc03e01e0"},{url:"assets/concepts_sounds.md.cc0b46bd.lean.js",revision:"5345f27cccd7f8cf811458d2fbb36b42"},{url:"assets/concepts_textures-list.md.9334a43d.js",revision:"029a0b55f48f4586abff057b69288ce6"},{url:"assets/concepts_textures-list.md.9334a43d.lean.js",revision:"ca8b61139feb3a62759e6cc17fdd2fa0"},{url:"assets/documentation_biome-tags.md.c10ed5bf.js",revision:"5b94244c2ac15927bd713a310519c00e"},{url:"assets/documentation_biome-tags.md.c10ed5bf.lean.js",revision:"e2a8b30b09d1e5c298e9e2f62de8e93e"},{url:"assets/documentation_block-model-materials.md.c357ca6a.js",revision:"86047de0b2ac8f5f8af6c4e95c72103e"},{url:"assets/documentation_block-model-materials.md.c357ca6a.lean.js",revision:"9d55060ee58f07414fa71f12de82446f"},{url:"assets/documentation_block-shapes.md.150277c2.js",revision:"140b43490828dfb35e5055d86768ace0"},{url:"assets/documentation_block-shapes.md.150277c2.lean.js",revision:"731873c26835d71febaee99c05269d14"},{url:"assets/documentation_block-tags.md.7cede28b.js",revision:"bff12db6d64e85e4e562c773b840782b"},{url:"assets/documentation_block-tags.md.7cede28b.lean.js",revision:"9b3c768d932f692d3ac330fe974fc155"},{url:"assets/documentation_color-codes.md.b3140d7e.js",revision:"0a8c2ba913bb56f95a5f47c89fbc9e8e"},{url:"assets/documentation_color-codes.md.b3140d7e.lean.js",revision:"e6c47d68b038007225ce3749f4952d24"},{url:"assets/documentation_dummy-components.md.7736eaf6.js",revision:"77f7d520b0c9b65030c54630030e4f47"},{url:"assets/documentation_dummy-components.md.7736eaf6.lean.js",revision:"aaaee78861e94d2bd152188b40af033f"},{url:"assets/documentation_emojis.md.7255a4de.js",revision:"ae0396b990d8bc3890d87f94c8f7bd0d"},{url:"assets/documentation_emojis.md.7255a4de.lean.js",revision:"ae0396b990d8bc3890d87f94c8f7bd0d"},{url:"assets/documentation_fog-ids.md.a1be343b.js",revision:"37c6bdcefeec7330a2426f43ba70c281"},{url:"assets/documentation_fog-ids.md.a1be343b.lean.js",revision:"4b60ae3f30bba0358ebe07d3b0344599"},{url:"assets/documentation_index.md.fb70b438.js",revision:"a6c5c3c51f81c614157d45c27a24ea4d"},{url:"assets/documentation_index.md.fb70b438.lean.js",revision:"a6c5c3c51f81c614157d45c27a24ea4d"},{url:"assets/documentation_item-groups.md.1f694888.js",revision:"e63a6aec3c10d636d82143b1ca2beb7f"},{url:"assets/documentation_item-groups.md.1f694888.lean.js",revision:"5d6fa5e8ad0459f7fce27b4a44c068a3"},{url:"assets/documentation_json-ui.md.fd9f0c6c.js",revision:"a908719880ddae475473806e533e2998"},{url:"assets/documentation_json-ui.md.fd9f0c6c.lean.js",revision:"896841e9205a044ddaf68454403a9b24"},{url:"assets/documentation_materials.md.5a4f634d.js",revision:"9d9f6f32ed0a53a7df35aa355549f486"},{url:"assets/documentation_materials.md.5a4f634d.lean.js",revision:"bce0234775181734817e5a7af36e793b"},{url:"assets/documentation_particles.md.c3d9070e.js",revision:"816eaf9bda749333f56c393b62df5dae"},{url:"assets/documentation_particles.md.c3d9070e.lean.js",revision:"6f05d72d04edc6021f680c3ebed11ce3"},{url:"assets/documentation_projectiles.md.c7770820.js",revision:"fdf8422595a8f52f2b90d003c1ffb570"},{url:"assets/documentation_projectiles.md.c7770820.lean.js",revision:"9c80af20d7b51403dbdabec2f3dcc5fe"},{url:"assets/documentation_queries.md.7e9c5857.js",revision:"80765c8aa8c9989ca3851170d9a17717"},{url:"assets/documentation_queries.md.7e9c5857.lean.js",revision:"2baa8bcd4eb59897c2f7af7de02ef773"},{url:"assets/documentation_runtime-identifier.md.c4c39255.js",revision:"125030d8d92cf4557724daabdaef60b5"},{url:"assets/documentation_runtime-identifier.md.c4c39255.lean.js",revision:"0540a2493b0c6d9c96642d5fb148760f"},{url:"assets/documentation_sound-definitions.md.f0fdeab3.js",revision:"8b525b13e5bdbcd1b5c77e7034d99e85"},{url:"assets/documentation_sound-definitions.md.f0fdeab3.lean.js",revision:"b6cd07a19b652c1283939e1315c59096"},{url:"assets/documentation_subpacks.md.916e7056.js",revision:"000ec4c55eabc1c4af5c49e9b2a57596"},{url:"assets/documentation_subpacks.md.916e7056.lean.js",revision:"92bc50fe68a63f5805ae0f69cff09c7a"},{url:"assets/documentation_tellraw.md.90188b35.js",revision:"7c2ecfda35fddf46e8bff2e7f565dd02"},{url:"assets/documentation_tellraw.md.90188b35.lean.js",revision:"7c2ecfda35fddf46e8bff2e7f565dd02"},{url:"assets/guide_animation-controllers.md.ccde5de0.js",revision:"ba59ccc2d95584cfb2e2d4e1e61fd4c1"},{url:"assets/guide_animation-controllers.md.ccde5de0.lean.js",revision:"ba59ccc2d95584cfb2e2d4e1e61fd4c1"},{url:"assets/guide_creating-entity-visuals.md.004142af.js",revision:"f7f472005485a2346edb43e3be3e5bc0"},{url:"assets/guide_creating-entity-visuals.md.004142af.lean.js",revision:"f7f472005485a2346edb43e3be3e5bc0"},{url:"assets/guide_custom-blocks.md.5cb87da8.js",revision:"5df1b465f98be50c441a431160477107"},{url:"assets/guide_custom-blocks.md.5cb87da8.lean.js",revision:"5df1b465f98be50c441a431160477107"},{url:"assets/guide_custom-entity-full.md.323046ed.js",revision:"0374113b3780ee4fc3fff72f2b0b63ef"},{url:"assets/guide_custom-entity-full.md.323046ed.lean.js",revision:"0374113b3780ee4fc3fff72f2b0b63ef"},{url:"assets/guide_custom-generation.md.cbbd7b4d.js",revision:"635a7d2614cb56dd181355cc182bf102"},{url:"assets/guide_custom-generation.md.cbbd7b4d.lean.js",revision:"635a7d2614cb56dd181355cc182bf102"},{url:"assets/guide_custom-items.md.40089eb3.js",revision:"f2887b058f94ace8c5f91f00a3073ef7"},{url:"assets/guide_custom-items.md.40089eb3.lean.js",revision:"d1adb33f4c102f447d4a6c5b0a3cceae"},{url:"assets/guide_custom-particles.md.c09d1c71.js",revision:"3cc3016a9280013672f81018d4bdc29a"},{url:"assets/guide_custom-particles.md.c09d1c71.lean.js",revision:"3cc3016a9280013672f81018d4bdc29a"},{url:"assets/guide_custom-skin-packs.md.4d98b7b3.js",revision:"97fccc784e67a752a1ca1298d770d566"},{url:"assets/guide_custom-skin-packs.md.4d98b7b3.lean.js",revision:"daff6903c376843fb8d18ccf6fee2d1f"},{url:"assets/guide_custom-trades.md.0d3a9d65.js",revision:"34e2ff646416841983cde46e88c67cc2"},{url:"assets/guide_custom-trades.md.0d3a9d65.lean.js",revision:"34e2ff646416841983cde46e88c67cc2"},{url:"assets/guide_download-packs.md.09dd0266.js",revision:"4db2a54bc33b324fa4fc7f98d31679b6"},{url:"assets/guide_download-packs.md.09dd0266.lean.js",revision:"42b363dde024a6132577b7e51e239500"},{url:"assets/guide_index.md.b424f79b.js",revision:"693e06a9a24eee7f32c0c72eee03c3a1"},{url:"assets/guide_index.md.b424f79b.lean.js",revision:"1f43abfaac7392fd8b8ea0a3d5c6ecba"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.9af950e3.js",revision:"ed3c5f8d8e4e5d4d37c02bf80a1d6ae0"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.9af950e3.lean.js",revision:"acc8ef497762ffbecbd798cf8f77a307"},{url:"assets/guide_project-setup.md.2f096cc1.js",revision:"bc0924e312fb7d77d93db7d1699e16bc"},{url:"assets/guide_project-setup.md.2f096cc1.lean.js",revision:"bc0924e312fb7d77d93db7d1699e16bc"},{url:"assets/guide_render-controllers.md.ae4d6e6e.js",revision:"da557fee4545fb6c5186674123af2847"},{url:"assets/guide_render-controllers.md.ae4d6e6e.lean.js",revision:"da557fee4545fb6c5186674123af2847"},{url:"assets/guide_software-preparation.md.eeb07033.js",revision:"9454d095781e6e402ea0bdbcd1752cde"},{url:"assets/guide_software-preparation.md.eeb07033.lean.js",revision:"9454d095781e6e402ea0bdbcd1752cde"},{url:"assets/guide_understanding-json.md.0c31bf6a.js",revision:"efb58c8302dd742479542ff8f5061dbd"},{url:"assets/guide_understanding-json.md.0c31bf6a.lean.js",revision:"2042d89e504145f242fceda186d52202"},{url:"assets/index.md.facfa19a.js",revision:"3c05522d9e72946fbe86e7c1f504c95f"},{url:"assets/index.md.facfa19a.lean.js",revision:"e011ea261ee23c62409a80822db7e10c"},{url:"assets/knowledge_addon-performance.md.f0c9de18.js",revision:"5893b9e574193a9d16876f6fbee10ec2"},{url:"assets/knowledge_addon-performance.md.f0c9de18.lean.js",revision:"f5dcaf6ce62c5b44bfe9a1ed05d98674"},{url:"assets/knowledge_addon-programming.md.4c20771c.js",revision:"612480a99cc9ac2cc79af3fc2888ff5c"},{url:"assets/knowledge_addon-programming.md.4c20771c.lean.js",revision:"f15def1b8201be6e47914490a6346423"},{url:"assets/knowledge_bedrock-modeling.md.979569f9.js",revision:"f8dfa38fe7d38deda320340e1e695df0"},{url:"assets/knowledge_bedrock-modeling.md.979569f9.lean.js",revision:"850bf57eed8a46fe3634ed25f4f519a4"},{url:"assets/knowledge_entity-movement.md.df50def6.js",revision:"c2e2da1ec6e64f26469702573bb9f701"},{url:"assets/knowledge_entity-movement.md.df50def6.lean.js",revision:"313ac206eedc219524891f4777c17632"},{url:"assets/knowledge_faq.md.1bd62ec8.js",revision:"b5db4c4404194934ecad731dea4b7d21"},{url:"assets/knowledge_faq.md.1bd62ec8.lean.js",revision:"0f2d4b9a4c67649351bacab837186093"},{url:"assets/knowledge_index.md.1c662db1.js",revision:"5b1c2907e9b5657646dae849755e829a"},{url:"assets/knowledge_index.md.1c662db1.lean.js",revision:"5b1c2907e9b5657646dae849755e829a"},{url:"assets/knowledge_jq.md.f212a85c.js",revision:"61f3fa5d2ea2535d4888cb7a857b9432"},{url:"assets/knowledge_jq.md.f212a85c.lean.js",revision:"9320d0207fb614e09dcefeed83f80686"},{url:"assets/knowledge_nbt_commands.md.26e81d7b.js",revision:"e3cb419f39b7eef463f211d173aaf327"},{url:"assets/knowledge_nbt_commands.md.26e81d7b.lean.js",revision:"1bd4f1ddd72dc15538ca222ff5fa9229"},{url:"assets/knowledge_style-guide.md.2889aceb.js",revision:"c5b823d7f051598c265fa7cd99acaba7"},{url:"assets/knowledge_style-guide.md.2889aceb.lean.js",revision:"0ac4190975df001f75045b70451b22d0"},{url:"assets/knowledge_useful-links.md.6eb11028.js",revision:"406047daf5769450289c41a136784bba"},{url:"assets/knowledge_useful-links.md.6eb11028.lean.js",revision:"967240d3c48d9d94ca903efc0fcc04b9"},{url:"assets/knowledge_using-schemas.md.e1adf1ee.js",revision:"1038dee3aea77738e75c1d668a49258e"},{url:"assets/knowledge_using-schemas.md.e1adf1ee.lean.js",revision:"b852f802cae061c947454ac86baec41c"},{url:"assets/knowledge_version-control.md.4b4c7be9.js",revision:"d6e884813f104b03b53fc64aab11e021"},{url:"assets/knowledge_version-control.md.4b4c7be9.lean.js",revision:"49a2df3eb0b35fef46a4a98e24bc7a19"},{url:"assets/scripting_game-tests.md.6c1f52c3.js",revision:"5a0e977a9f256174aa6afb64e50e8e3e"},{url:"assets/scripting_game-tests.md.6c1f52c3.lean.js",revision:"5cfd4d90f41501c43db6bf699f17a8ef"},{url:"assets/scripting_hello-world-tutorial.md.e8085034.js",revision:"3197c7163c81bac2eb39e7d69b86fe3e"},{url:"assets/scripting_hello-world-tutorial.md.e8085034.lean.js",revision:"3197c7163c81bac2eb39e7d69b86fe3e"},{url:"assets/scripting_index.md.f2ddb634.js",revision:"890589b67ba9ff052048f498e800fade"},{url:"assets/scripting_index.md.f2ddb634.lean.js",revision:"890589b67ba9ff052048f498e800fade"},{url:"assets/scripting_saving_loading.md.0c1e1f58.js",revision:"b4c72e2b0f36b40f51c03a4050165cfc"},{url:"assets/scripting_saving_loading.md.0c1e1f58.lean.js",revision:"2c855ef2479659353010bc412344a3de"},{url:"assets/style.1a909ad1.css",revision:"c185d8151aed8a0a902a90e8307b798b"},{url:"assets/troubleshooting_entities.md.54921462.js",revision:"2a6a6a0320b71d19f23c84815180e2dc"},{url:"assets/troubleshooting_entities.md.54921462.lean.js",revision:"5fa1578f9da6750a287f35b95412ffa9"},{url:"assets/troubleshooting_index.md.581fe5c1.js",revision:"3a58caa5d2f50633cf8f9ce99103a092"},{url:"assets/troubleshooting_index.md.581fe5c1.lean.js",revision:"3578af05cabef521fa04c9461f40384b"},{url:"assets/tutorials_beginner-commands.md.2dc37ba0.js",revision:"eceaaf2d05bdf138d442100ab89cd66f"},{url:"assets/tutorials_beginner-commands.md.2dc37ba0.lean.js",revision:"a34c4ecf69cec2e0bbd916239ebf85e1"},{url:"assets/tutorials_block-texture-variation.md.ad6c8574.js",revision:"d09e74ab9f189364817014bd70b69e06"},{url:"assets/tutorials_block-texture-variation.md.ad6c8574.lean.js",revision:"739aa30d56636db3cad969b676b8e900"},{url:"assets/tutorials_boat-entities.md.469dcf91.js",revision:"90335c6e934518a15cf00d5e82567402"},{url:"assets/tutorials_boat-entities.md.469dcf91.lean.js",revision:"135096c13770422423e0d758563a4e96"},{url:"assets/tutorials_cancelling-death-animations.md.5b52036c.js",revision:"97a362825134299ac02f51e4a51dde8d"},{url:"assets/tutorials_cancelling-death-animations.md.5b52036c.lean.js",revision:"3158b811f4726a33ba3cf0fc22f0563c"},{url:"assets/tutorials_controlling-flying-entities.md.7669d464.js",revision:"814723468cb818bf376b11fb794dcfe8"},{url:"assets/tutorials_controlling-flying-entities.md.7669d464.lean.js",revision:"f83cc5872f9b2b5d9d0317ed5b628bfa"},{url:"assets/tutorials_craftable-spawneggs.md.40e89626.js",revision:"e141a7c7fcaa2495b802ffa7370315f5"},{url:"assets/tutorials_craftable-spawneggs.md.40e89626.lean.js",revision:"3e2f3554c337ffefd8d0aea5fb18fd94"},{url:"assets/tutorials_custom-item-models.md.19c1a965.js",revision:"89f9fba111ca19f7da4969d2a667339e"},{url:"assets/tutorials_custom-item-models.md.19c1a965.lean.js",revision:"89f9fba111ca19f7da4969d2a667339e"},{url:"assets/tutorials_death-effects.md.21f567b7.js",revision:"b484133400f5f22a2e8f7c235fa72f39"},{url:"assets/tutorials_death-effects.md.21f567b7.lean.js",revision:"d8923d8857fd2548a55af2d58e8131f1"},{url:"assets/tutorials_disabling-particles.md.e7147ecc.js",revision:"3636c920388b644504b7319f642ab16e"},{url:"assets/tutorials_disabling-particles.md.e7147ecc.lean.js",revision:"68fc6e3a0a7ac3630a184e4ec72a4262"},{url:"assets/tutorials_disabling-team-damage.md.01d8925a.js",revision:"650eed225f9ce9c9ea5853126b9535c4"},{url:"assets/tutorials_disabling-team-damage.md.01d8925a.lean.js",revision:"47cfc01f1cd3f72515be991cb88c7aa9"},{url:"assets/tutorials_dummy-entities.md.39d9d8a0.js",revision:"3e85781b58b1ef5aaa995e09ca59950f"},{url:"assets/tutorials_dummy-entities.md.39d9d8a0.lean.js",revision:"480a7cb858d541f621bb8aaca424b9eb"},{url:"assets/tutorials_egg-drops.md.a85a7613.js",revision:"7e82fd66c74dc7c1ac47cca3114c449c"},{url:"assets/tutorials_egg-drops.md.a85a7613.lean.js",revision:"409d230502b885f7df8d9f25f8883d82"},{url:"assets/tutorials_entity-commands.md.d8b6f0f9.js",revision:"b4eafb95c534f3d6d99ff81d8d1bc46c"},{url:"assets/tutorials_entity-commands.md.d8b6f0f9.lean.js",revision:"3e00dc039d2e65497630845ead03492e"},{url:"assets/tutorials_entity-events.md.598923d6.js",revision:"4ba5ba0517fe4a3310cc81b55ca083cc"},{url:"assets/tutorials_entity-events.md.598923d6.lean.js",revision:"50584a7e7868d1789b72973568624c41"},{url:"assets/tutorials_entity-holds-item.md.1164c0a6.js",revision:"997da116953b398d810c5c2688ded8bf"},{url:"assets/tutorials_entity-holds-item.md.1164c0a6.lean.js",revision:"997da116953b398d810c5c2688ded8bf"},{url:"assets/tutorials_fake_blocks.md.34e62294.js",revision:"558987ec04079c9794ec9357aa907761"},{url:"assets/tutorials_fake_blocks.md.34e62294.lean.js",revision:"ad3a6ac8732344dfbcce667fdf2117b2"},{url:"assets/tutorials_index.md.2e24e043.js",revision:"cf68afc051b6576eec4214c7a4f7e366"},{url:"assets/tutorials_index.md.2e24e043.lean.js",revision:"cf68afc051b6576eec4214c7a4f7e366"},{url:"assets/tutorials_invulnerable-entities.md.988bdb17.js",revision:"a477dff624b893baf9f21059e307ef06"},{url:"assets/tutorials_invulnerable-entities.md.988bdb17.lean.js",revision:"bceb2deb59b14dcf64e605cb57949c7e"},{url:"assets/tutorials_pathfinding-entities.md.ea08c151.js",revision:"8890f4d210f5bfa788370407d7315559"},{url:"assets/tutorials_pathfinding-entities.md.ea08c151.lean.js",revision:"27f08301702a163b143b1d909e153101"},{url:"assets/tutorials_player-geometry.md.70b675e3.js",revision:"5bfb099ec4a0157602bb1388aa53de19"},{url:"assets/tutorials_player-geometry.md.70b675e3.lean.js",revision:"2cabce196583ee08975ddbe1ee5ba32d"},{url:"assets/tutorials_remove-shadows.md.6290d8c5.js",revision:"0d6b3ca5f10ad8097a5502478a5cd41f"},{url:"assets/tutorials_remove-shadows.md.6290d8c5.lean.js",revision:"1a82851751ab0a331fdaf4051342e322"},{url:"assets/tutorials_respawn-commands.md.6f2c3212.js",revision:"c9498cc74d48801940cf52acf6e5171a"},{url:"assets/tutorials_respawn-commands.md.6f2c3212.lean.js",revision:"ecba67eb13c08e8a6c0f0b33a08472f2"},{url:"assets/tutorials_retexturing-spawn-eggs.md.051664ce.js",revision:"d4b2527e88129eb428617d037dfdd33a"},{url:"assets/tutorials_retexturing-spawn-eggs.md.051664ce.lean.js",revision:"47c68ad1b320c7a0a6b4e3030a490c1f"},{url:"assets/tutorials_solid-entities.md.ae0edf9a.js",revision:"abfcb24351d8822e5b6c88851f5246ab"},{url:"assets/tutorials_solid-entities.md.ae0edf9a.lean.js",revision:"77822fa2a68177ddf245f384f87e0d85"},{url:"assets/tutorials_spawning-items.md.67ea9f7a.js",revision:"36547b0aa44a65d0c1d33a4f566c395d"},{url:"assets/tutorials_spawning-items.md.67ea9f7a.lean.js",revision:"72762d057fc0cedcb360f05f2d17e3c3"},{url:"assets/tutorials_text-localization.md.6f8fe3c4.js",revision:"6d35172d53135290022455a05d77a4fc"},{url:"assets/tutorials_text-localization.md.6f8fe3c4.lean.js",revision:"27486f6c8ea6f614ca1fd95145aad76a"},{url:"assets/tutorials_timers.md.973896f8.js",revision:"4cdffb0d9b4b4b55f50395bbd58676a9"},{url:"assets/tutorials_timers.md.973896f8.lean.js",revision:"0d6256644bb9f9e1faf108541ba117b7"},{url:"assets/vanilla-usage_biomes.md.49413cac.js",revision:"0c69ecbe802b1d3a008af4349d5c640b"},{url:"assets/vanilla-usage_biomes.md.49413cac.lean.js",revision:"106f7cb61c104f7f313adbe3e1d0428a"},{url:"assets/vanilla-usage_components.md.48c5f50a.lean.js",revision:"77d83d5756e029ec252a859ff83569cb"},{url:"assets/vanilla-usage_feature-rules.md.23978429.js",revision:"11bcec41aede3f9a4fbf99f04cd89614"},{url:"assets/vanilla-usage_feature-rules.md.23978429.lean.js",revision:"5dd104c504555d723016d371c434befd"},{url:"assets/vanilla-usage_index.md.1fcda173.js",revision:"b3b94d436361f69a4a1236c4407a5983"},{url:"assets/vanilla-usage_index.md.1fcda173.lean.js",revision:"b3b94d436361f69a4a1236c4407a5983"},{url:"assets/vanilla-usage_items-beta.md.f74c4c85.js",revision:"3afd15c5ce7f0a8a928d766fd5579886"},{url:"assets/vanilla-usage_items-beta.md.f74c4c85.lean.js",revision:"9adf18d4fd9887c5b74b7ad0c30e1ecb"},{url:"assets/vanilla-usage_items.md.556faa94.js",revision:"39a9e0189caaed23094972c4127a1db5"},{url:"assets/vanilla-usage_items.md.556faa94.lean.js",revision:"fb89911d12bd6fa63b1d9a9d183851a6"},{url:"assets/vanilla-usage_spawn-rules.md.ef8f494f.js",revision:"95f1518e554d9b949543a01a6f25a34e"},{url:"assets/vanilla-usage_spawn-rules.md.ef8f494f.lean.js",revision:"43d35e2c27e8572e2f1bb2bb563cce84"},{url:"registerSW.js",revision:"3be22912fd14291c200edaae7ff5f610"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map