import type { IconData } from '$lib/components/Icon.svelte';
const money: Record<string, IconData> = {
  money: {
    width: 1920,
    height: 1792,
    paths: [
      {
        d: 'M768 1152h384v-96h-128v-448h-114l-148 137 77 80q42-37 55-57h2v288h-128v96zM1280 896q0 70-21 142t-59.5 134-101.5 101-138 39-138-39-101.5-101-59.5-134-21-142 21-142 59.5-134 101.5-101 138-39 138 39 101.5 101 59.5 134 21 142zM1792 1152v-512q-106 0-181-75t-75-181h-1152q0 106-75 181t-181 75v512q106 0 181 75t75 181h1152q0-106 75-181t181-75zM1920 320v1152q0 26-19 45t-45 19h-1792q-26 0-45-19t-19-45v-1152q0-26 19-45t45-19h1792q26 0 45 19t19 45z'
      }
    ]
  }
};
export default money;
