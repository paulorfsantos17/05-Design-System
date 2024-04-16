import { Label, MultiStepContainer, Step, Steps } from './style'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ currentStep = 1, size }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          const isActiveStep = currentStep >= step
          return <Step key={step} active={isActiveStep} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
