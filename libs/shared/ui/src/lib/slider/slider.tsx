import { Slider as ArkSlider } from '@ark-ui/react'

export const Slider = () => {
  return (
    <ArkSlider.Root>
      <ArkSlider.Label>Label</ArkSlider.Label>
      <ArkSlider.ValueText />
      <ArkSlider.Control>
        <ArkSlider.Track>
          <ArkSlider.Range />
        </ArkSlider.Track>
        <ArkSlider.Thumb index={0}>
          <ArkSlider.HiddenInput />
        </ArkSlider.Thumb>
      </ArkSlider.Control>
    </ArkSlider.Root>
  )
}

export default Slider
