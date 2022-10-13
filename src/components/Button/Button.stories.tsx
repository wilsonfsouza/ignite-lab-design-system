import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Login',
    width: 'auto',
  },
  argTypes: {
    width: {
      options: ['auto', 'full'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    width: 'full',
  },
}
