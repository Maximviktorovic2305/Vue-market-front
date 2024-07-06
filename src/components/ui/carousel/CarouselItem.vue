<script setup lang="ts">
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '../../../lib/utils'

const props = defineProps<WithClassAsProps>()

const { orientation } = useCarousel()
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cn(
      'w-full h-full shrink-0 ',
      orientation === 'horizontal' ? '' : '',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
