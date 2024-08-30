import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
}
export default meta
type Story = StoryObj<typeof Avatar>

export const Primary = {
  args: {}
}

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Welcome to Avatar!/gi)).toBeTruthy()
  }
}
