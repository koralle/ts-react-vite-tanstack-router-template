import { Meta, StoryObj } from '@storybook/react'
import { Index } from '../../src/routes/index.lazy'

const meta = {
  title: 'Pages / Home',
  component: Index
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const IdealState = {} satisfies Story

export const ErrorState = {} satisfies Story

export const EmptyState = {} satisfies Story

export const PartialState = {} satisfies Story

export const LoadingState = {} satisfies Story
