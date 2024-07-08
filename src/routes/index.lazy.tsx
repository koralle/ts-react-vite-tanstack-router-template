import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: () => <div>Hello /!</div>
})

const Index = () => {
  return <div>Hello!</div>
}

export { Index }
