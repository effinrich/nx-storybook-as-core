import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders with image when src attribute is populated', () => {
    render(<Avatar src="avatar.jpg" alt="John Smith" />)
    const imageElement = screen.getByRole('img')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', 'avatar.jpg')
    expect(imageElement).toHaveAttribute('alt', 'John Smith')
  })

  it('renders with initials when src attribute is missing', () => {
    render(<Avatar name="John Smith" />)
    const initialsElement = screen.getByText('JS')
    expect(initialsElement).toBeInTheDocument();
  })

  it('renders with UserIcon when src and name attributes are missing', () => {
    render(<Avatar />)
    const userIconElement = screen.getByRole('img')
    expect(userIconElement).toBeInTheDocument()
    expect(userIconElement).toHaveAttribute('aria-label', 'User Icon')
  })
})
