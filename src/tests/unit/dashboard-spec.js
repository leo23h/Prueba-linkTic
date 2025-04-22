import { shallowMount } from '@vue/test-utils'
import {DashboardMain } from '@/views/dashboard.vue'


describe('increment', () => {
    test('increments the integer by 1', () => {
      expect(increment(0, 10)).toBe(1)
    })
})