import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Slider'
}
export default meta
type Story = StoryObj<typeof Slider>

export const Primary = {
  args: {}
}

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Welcome to Slider!/gi)).toBeTruthy()
  }
}
