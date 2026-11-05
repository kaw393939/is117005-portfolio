<script setup lang="ts">
import { computed, ref } from 'vue'
import jobs from '../../data/jobs.json'

const query = ref('')
const level = ref('All')
const geography = ref('All')
const family = ref('All')
const relation = ref('All')

const families = [
  'FDE & deployment',
  'AI software & data',
  'Security & governance',
  'IT & automation',
  'Infrastructure',
  'Product & delivery'
]

const filteredJobs = computed(() => {
  const terms = query.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean)
  return jobs.filter(job => {
    const searchable = [
      job.title,
      job.employer,
      job.family,
      job.location,
      job.summary,
      ...job.requirements
    ].join(' ').toLocaleLowerCase()

    return terms.every(term => searchable.includes(term)) &&
      (level.value === 'All' || job.level === level.value) &&
      (geography.value === 'All' || job.state.includes(geography.value)) &&
      (family.value === 'All' || job.family === family.value) &&
      (relation.value === 'All' || job.aiRelation === relation.value)
  })
})

const hasFilters = computed(() => Boolean(query.value.trim()) ||
  [level.value, geography.value, family.value, relation.value].some(value => value !== 'All'))

function resetFilters() {
  query.value = ''
  level.value = 'All'
  geography.value = 'All'
  family.value = 'All'
  relation.value = 'All'
}
</script>

<template>
  <section class="job-explorer" aria-label="Search the NY and NJ job research sample">
    <div class="job-toolbar">
      <label class="job-search-label" for="job-search">
        Search the sample
        <input
          id="job-search"
          v-model="query"
          type="search"
          placeholder="Title, employer, location, or skill…"
          autocomplete="off"
          aria-describedby="job-search-help"
        >
      </label>
      <p id="job-search-help" class="job-help">Try “FDE”, “Python”, “Jersey City”, or an employer name. Multiple words narrow the results.</p>

      <div class="job-selects">
        <label for="job-level">Experience level
          <select id="job-level" v-model="level">
            <option value="All">All levels</option>
            <option>Internship</option>
            <option value="Entry">Entry level</option>
            <option value="Mid">Mid level</option>
            <option value="Senior">Senior level</option>
          </select>
        </label>
        <label for="job-geography">Geography
          <select id="job-geography" v-model="geography">
            <option value="All">NY &amp; NJ</option>
            <option value="NY">New York</option>
            <option value="NJ">New Jersey</option>
          </select>
        </label>
        <label for="job-family">Type of work
          <select id="job-family" v-model="family">
            <option value="All">All job families</option>
            <option v-for="item in families" :key="item">{{ item }}</option>
          </select>
        </label>
        <label for="job-relation">Connection to AI
          <select id="job-relation" v-model="relation">
            <option value="All">All connections</option>
            <option>AI-specific</option>
            <option>AI-enabled work</option>
            <option>Adjacent pathway</option>
          </select>
        </label>
      </div>
    </div>

    <div class="job-results-bar">
      <p role="status" aria-live="polite" aria-atomic="true">
        <strong>{{ filteredJobs.length }}</strong> of {{ jobs.length }} researched {{ jobs.length === 1 ? 'posting' : 'postings' }}
      </p>
      <button v-if="hasFilters" type="button" @click="resetFilters">Reset filters <span aria-hidden="true">↺</span></button>
    </div>

    <div v-if="!filteredJobs.length" class="job-empty">
      <h3>No postings match these filters.</h3>
      <p>Try fewer search terms, another experience level, or both states.</p>
      <button type="button" @click="resetFilters">Show the full sample →</button>
    </div>

    <article
      v-for="job in filteredJobs"
      :id="`job-${job.id}`"
      :key="job.id"
      class="job-record"
      :aria-labelledby="`title-${job.id}`"
    >
      <header class="job-record-header">
        <p class="job-employer">{{ job.employer }}</p>
        <h3 :id="`title-${job.id}`">{{ job.title }}</h3>
        <div class="job-tags" aria-label="Posting classifications">
          <span class="job-level-tag">{{ job.level === 'Entry' ? 'Entry level' : job.level === 'Mid' ? 'Mid level' : job.level === 'Senior' ? 'Senior level' : job.level }}</span>
          <span>{{ job.family }}</span>
          <span :class="{ 'job-adjacent-tag': job.aiRelation === 'Adjacent pathway' }">{{ job.aiRelation }}</span>
        </div>
      </header>

      <dl class="job-location">
        <div><dt>Location</dt><dd>{{ job.location }}</dd></div>
        <div><dt>Work arrangement</dt><dd>{{ job.workMode }}</dd></div>
      </dl>

      <p class="job-summary">{{ job.summary }}</p>
      <p class="job-requirements-label">Requirements to compare</p>
      <ul class="job-requirements">
        <li v-for="requirement in job.requirements" :key="requirement">{{ requirement }}</li>
      </ul>
      <p class="job-level-basis"><strong>Why this level:</strong> {{ job.levelBasis }}</p>
      <p v-if="job.evidenceNote" class="job-evidence-note"><strong>Evidence note:</strong> {{ job.evidenceNote }}</p>

      <footer class="job-record-footer">
        <div class="job-source-links">
          <a :href="job.sourceUrl" target="_blank" rel="noopener noreferrer">Read primary evidence <span aria-hidden="true">↗</span><span class="job-sr-only"> (opens in a new tab)</span></a>
          <a v-if="job.sourceUrl !== job.url" :href="job.url" target="_blank" rel="noopener noreferrer">View employer posting <span aria-hidden="true">↗</span><span class="job-sr-only"> (opens in a new tab)</span></a>
        </div>
        <div class="job-verification">
          <span>{{ job.status }}</span>
          <span>Checked <time :datetime="job.checkedDate">{{ job.checkedDate }}</time></span>
          <span v-if="job.verificationNote">{{ job.verificationNote }}</span>
          <span v-if="job.jobId">Job ID: {{ job.jobId }}</span>
        </div>
      </footer>
    </article>
  </section>
</template>

<style scoped>
.job-explorer {
  margin: 28px 0;
  color: var(--vp-c-text-1);
}

.job-toolbar {
  padding: 20px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
}

.job-toolbar label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.5;
}

.job-toolbar input,
.job-toolbar select {
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  padding: 9px 10px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font: inherit;
  font-size: 12px;
  font-weight: 400;
}

.job-toolbar select { appearance: auto; }
.job-toolbar input::placeholder { color: var(--vp-c-text-2); opacity: 1; }
.job-toolbar input:focus-visible,
.job-toolbar select:focus-visible,
.job-explorer button:focus-visible,
.job-explorer a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.job-help {
  margin: 7px 0 18px;
  color: var(--vp-c-text-2);
  font-size: 11px;
  line-height: 1.7;
}

.job-selects {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.job-results-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 17px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.job-results-bar p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.job-results-bar strong { color: var(--vp-c-text-1); }
.job-explorer button {
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.job-results-bar button { flex-shrink: 0; }
.job-results-bar button span { margin-left: 4px; }

.job-record {
  padding: 29px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  scroll-margin-top: 95px;
}

.job-employer {
  margin: 0 0 7px;
  color: var(--vp-c-brand-1);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: .4px;
}

.job-record h3 {
  margin: 0 0 13px;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 650;
  line-height: 1.4;
  letter-spacing: -.5px;
  overflow-wrap: anywhere;
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.job-tags span {
  padding: 3px 7px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 3px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.6;
}

.job-tags .job-level-tag {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-color: transparent;
  font-weight: 700;
}

.job-tags .job-adjacent-tag { border-style: dashed; }
.job-location { margin: 18px 0 15px; font-size: 12px; line-height: 1.75; }
.job-location > div { display: grid; grid-template-columns: 111px minmax(0, 1fr); gap: 9px; margin: 5px 0; }
.job-location dt { color: var(--vp-c-text-2); }
.job-location dd { margin: 0; }
.job-summary { margin: 13px 0; font-size: 14px; line-height: 1.85; }
.job-requirements-label { margin: 16px 0 6px; font-size: 11px; font-weight: 700; }
.job-requirements { margin: 0; padding-left: 20px; color: var(--vp-c-text-2); font-size: 12px; line-height: 1.85; }
.job-requirements li + li { margin-top: 4px; }
.job-level-basis { margin: 15px 0 0; color: var(--vp-c-text-2); font-size: 11px; line-height: 1.8; }
.job-level-basis strong { color: var(--vp-c-text-1); font-weight: 600; }
.job-evidence-note { margin: 12px 0 0; padding-left: 11px; border-left: 2px solid var(--vp-c-divider); color: var(--vp-c-text-2); font-size: 11px; line-height: 1.8; }
.job-evidence-note strong { color: var(--vp-c-text-1); font-weight: 600; }

.job-record-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  gap: 13px 20px;
  margin-top: 19px;
}

.job-record-footer a {
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}
.job-record-footer a:hover { text-decoration: underline; }
.job-record-footer a > span[aria-hidden] { margin-left: 6px; }
.job-source-links { display: flex; flex-direction: column; gap: 6px; }
.job-verification { display: flex; flex-direction: column; gap: 2px; color: var(--vp-c-text-2); font-size: 10px; line-height: 1.7; overflow-wrap: anywhere; }
.job-empty { padding: 35px 15px; text-align: center; border-bottom: 1px solid var(--vp-c-divider); }
.job-empty h3 { margin: 0 0 10px; font-size: 17px; }
.job-empty p { color: var(--vp-c-text-2); font-size: 13px; line-height: 1.8; }
.job-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }

@media (min-width: 1200px) {
  .job-selects { grid-template-columns: 1fr 1fr 1.35fr 1.2fr; gap: 10px; }
}

@media (max-width: 479px) {
  .job-toolbar { padding: 15px; }
  .job-selects { grid-template-columns: 1fr; }
  .job-record h3 { font-size: 19px; }
  .job-location > div { grid-template-columns: 1fr; gap: 1px; margin: 9px 0; }
  .job-location dt { font-size: 10px; }
  .job-record-footer { flex-direction: column; }
  .job-verification { font-size: 10px; }
}
</style>
