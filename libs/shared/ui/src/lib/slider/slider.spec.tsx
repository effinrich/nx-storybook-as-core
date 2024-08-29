import { render } from '@testing-library/react'
import ResizeObserver from 'resize-observer-polyfill'

import { Slider } from './slider'

describe('Slider', () => {
  it('should render successfully', () => {
    window.ResizeObserver = ResizeObserver // Provide the ResizeObserver constructor
    const { baseElement } = render(<Slider />)
    expect(baseElement).toBeTruthy()
  })
})
