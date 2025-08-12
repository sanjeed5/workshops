<template>
  <div class="grid2x2" :style="containerStyle">
    <div class="corner"></div>
    <div v-for="(label, c) in safeColLabels" :key="`col-${c}`" class="colHeader">{{ label }}</div>

    <template v-for="(row, r) in 2" :key="`row-${r}`">
      <div class="rowHeader">{{ safeRowLabels[r] }}</div>
      <div
        v-for="c in 2"
        :key="`cell-${r}-${c-1}`"
        class="cell"
        :class="{ filled: !!safeCells[r][c-1] }"
      >
        {{ safeCells[r][c-1] }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Grid2x2Props {
  cells?: string[][]
  rowLabels?: string[]
  colLabels?: string[]
  width?: number | string
  height?: number | string
  headerWidth?: number | string
}

const props = defineProps<Grid2x2Props>()

function normalizeLabels(labels?: string[], length = 2): string[] {
  const base = Array.from({ length }, () => "")
  if (!labels) return base
  return base.map((_, i) => labels[i] ?? "")
}

function normalizeCells(cells?: string[][], size = 2): string[][] {
  const emptyRow = Array.from({ length: size }, () => "")
  const base = Array.from({ length: size }, () => emptyRow.slice())
  if (!cells) return base
  return base.map((row, r) => row.map((_, c) => cells?.[r]?.[c] ?? ""))
}

const safeRowLabels = normalizeLabels(props.rowLabels)
const safeColLabels = normalizeLabels(props.colLabels)
const safeCells = normalizeCells(props.cells)

function toPx(value: number | string | undefined, fallback: string): string {
  if (value === undefined || value === null) return fallback
  return typeof value === 'number' ? `${value}px` : value
}

const containerStyle = computed(() => ({
  width: toPx(props.width, '100%'),
  height: toPx(props.height, 'auto'),
  '--header-w': toPx(props.headerWidth, '140px'),
} as Record<string, string>))
</script>

<style scoped>
.grid2x2 {
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: var(--header-w) repeat(2, 1fr);
  grid-template-rows: auto auto auto; /* header row + 2 data rows sized to content */
  gap: 4px;
  align-items: center;
  align-content: start;
}

.corner {}

.colHeader,
.rowHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
  color: #e5e7eb; /* gray-200 for dark bg */
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  line-height: 1.2;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4px 6px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  color: #f3f4f6; /* gray-100 */
  font-size: 0.9rem;
  line-height: 1.2;
}

.cell.filled {
  background: rgba(99,102,241,0.12); /* indigo tint */
  border-color: rgba(129,140,248,0.35);
  font-weight: 600;
}
</style>


