<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { careers } from '../../data/careers'

const categories = ['All careers', 'Build', 'Data', 'Trust', 'Strategy']
const category = ref('All careers')
const query = ref('')
const filtered = computed(() => careers.filter(career =>
  (category.value === 'All careers' || career.category === category.value) &&
  `${career.title} ${career.summary} ${career.skills.join(' ')}`.toLowerCase().includes(query.value.toLowerCase().trim())
))
const measured = [...careers].filter(career => career.growth !== null).sort((a, b) => b.growth! - a.growth!)
</script>

<template>
  <div class="field-guide">
    <section class="guide-hero" aria-labelledby="guide-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> IS117005 RESEARCH PORTFOLIO <span class="edition">VOL. 01 / 2026</span></p>
        <h1 id="guide-title">The future of work.<br><em>Your place in AI.</em></h1>
        <p class="hero-description">New titles. Evolving skills. More ways in.<br>A field guide to the people building, running, and making sense of artificial intelligence.</p>
        <div class="hero-actions">
          <a class="primary-action" href="#explore">Find your direction <span aria-hidden="true">↗</span></a>
          <a class="text-action" :href="withBase('/research.html')">Follow the evidence <span aria-hidden="true">→</span></a>
        </div>
        <div class="hero-footnote"><span>RESEARCH, WITH CONTEXT.</span> Real sources. Clear distinctions. Practical next steps.</div>
      </div>
      <div class="field-map" aria-label="AI careers connect building, data, trust, and strategy">
        <div class="map-grid"></div>
        <div class="map-heading"><span>THE AI CAREER LANDSCAPE</span><span>FIG. 01</span></div>
        <svg class="orbit-art" viewBox="0 0 460 350" role="img" aria-label="Four overlapping orbits surround AI, representing connected career disciplines">
          <g fill="none" stroke="currentColor" stroke-width="1.1">
            <ellipse cx="230" cy="175" rx="170" ry="70" transform="rotate(-36 230 175)"/>
            <ellipse cx="230" cy="175" rx="170" ry="70" transform="rotate(36 230 175)"/>
            <ellipse cx="230" cy="175" rx="146" ry="115"/>
            <ellipse cx="230" cy="175" rx="75" ry="147"/>
          </g>
          <circle cx="230" cy="175" r="51" fill="#d7f275"/>
          <text x="230" y="185" text-anchor="middle" class="map-ai">AI</text>
          <g fill="#d7f275"><circle cx="112" cy="95" r="6"/><circle cx="372" cy="203" r="6"/><circle cx="226" cy="321" r="6"/><circle cx="114" cy="256" r="6"/></g>
        </svg>
        <span class="map-label label-build">01 / BUILD</span><span class="map-label label-data">02 / DATA</span>
        <span class="map-label label-trust">03 / TRUST</span><span class="map-label label-strategy">04 / STRATEGY</span>
        <div class="map-footer"><span>ONE TECHNOLOGY.<br>MANY KINDS OF WORK.</span><span class="map-plus" aria-hidden="true">+</span></div>
      </div>
    </section>

    <div class="research-strip">
      <p><strong>Not every AI career starts with a model.</strong><br>Explore software, infrastructure, security, data, and product work.</p>
      <div class="strip-meta"><span>LAST REVIEWED</span><strong>05 NOV 2026</strong></div>
      <a :href="withBase('/methodology.html')">How we research <span aria-hidden="true">↗</span></a>
    </div>

    <section id="explore" class="explore-section" aria-labelledby="explore-heading">
      <div class="section-heading">
        <div><p class="eyebrow">01 / EXPLORE THE POSSIBILITIES</p><h2 id="explore-heading">What kind of work<br>are you drawn to?</h2></div>
        <p>Start with the work, then explore the title.<br>Compare responsibilities, skills, and ways to begin.</p>
      </div>
      <div class="explorer-controls">
        <div class="category-filters" aria-label="Filter careers by discipline">
          <button v-for="item in categories" :key="item" :aria-pressed="category === item" :class="{ active: category === item }" @click="category = item">{{ item }}</button>
        </div>
        <label class="career-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input v-model="query" type="search" placeholder="Search titles or skills" aria-label="Search career titles or skills"></label>
      </div>
      <p class="result-count" role="status" aria-live="polite">{{ filtered.length }} career {{ filtered.length === 1 ? 'direction' : 'directions' }} <span> / {{ category === 'All careers' ? 'across the AI landscape' : category.toLowerCase() }}</span></p>
      <div class="career-grid">
        <a v-for="career in filtered" :key="career.id" class="career-card" :href="withBase(career.link.replace('#', '.html#'))">
          <div class="card-top"><span class="discipline" :class="career.category.toLowerCase()">{{ career.category }}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
          <h3>{{ career.title }}</h3><p>{{ career.summary }}</p>
          <div class="skills"><span v-for="skill in career.skills.slice(0, 3)" :key="skill">{{ skill }}</span></div>
          <div class="card-evidence"><strong>{{ career.growth === null ? 'Emerging title' : `+${career.growth}% projected growth` }}</strong><span>{{ career.growth === null ? 'No separate forecast' : career.growthLabel }}</span></div>
        </a>
      </div>
      <div v-if="filtered.length === 0" class="empty-state"><h3>No matching careers yet.</h3><p>Try a skill like Python, or choose another discipline.</p><button @click="query = ''; category = 'All careers'">Reset filters →</button></div>
      <p class="explorer-note">A selected guide, not a ranking. Emerging titles vary by employer. <a :href="withBase('/methodology.html')">Understand the labels →</a></p>
    </section>

    <section class="evidence-section" aria-labelledby="evidence-heading">
      <div class="evidence-intro"><p class="eyebrow">02 / THE SIGNAL BEHIND THE SHIFT</p><h2 id="evidence-heading">Opportunity deserves<br>a closer look.</h2><p>The Bureau of Labor Statistics projects growth in several occupations connected to AI. These figures describe broad U.S. occupations, including work outside AI.</p><a class="text-action" :href="withBase('/research.html')">Read the growth research <span aria-hidden="true">→</span></a></div>
      <div class="growth-chart"><div class="chart-heading"><span>PROJECTED EMPLOYMENT GROWTH</span><span>U.S. · 2025–35</span></div>
        <div v-for="career in measured" :key="career.id" class="chart-row"><div><span>{{ career.title === 'Computer & Information Research Scientist' ? 'Computing research scientists' : `${career.title}s` }}</span><strong>{{ career.growth }}%</strong></div><div class="bar-track"><span :style="{ width: `${career.growth! / 40 * 100}%` }"></span></div></div>
        <div class="chart-row baseline"><div><span>All occupations</span><strong>3%</strong></div><div class="bar-track"><span style="width:7.5%"></span></div></div>
        <p>Source: <a :href="withBase('/sources.html')">BLS Occupational Outlook Handbook</a>, updated Aug. 27, 2026. Forecasts are estimates.</p>
      </div>
    </section>

    <section class="next-section" aria-labelledby="next-heading"><p class="eyebrow">03 / FROM RESEARCH TO ACTION</p><div class="next-content"><h2 id="next-heading">Turn curiosity<br>into something you can show.</h2><div><p>Choose a direction. Build a small project.<br>Document what you learned and what you would change.</p><a class="primary-action" :href="withBase('/pathways.html')">Build your learning path <span aria-hidden="true">↗</span></a></div></div></section>
  </div>
</template>
