import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Heading from 'components/Heading'
import * as S from './ExploreSidebarStyles'
import Button from 'components/Button'
import { useState } from 'react'

interface InputProps {
  label: string
  name: string
}

export interface FilterProps {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  inputs: InputProps[]
}

interface Values {
  [field: string]: string | string[]
}

export interface ExploreSidebarProps {
  items: FilterProps[]
  initialValues?: Values
  onFilter: (value: Values) => void
}

const ExploreSidebar = ({ items, initialValues = {}, onFilter }: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)

  const handleRadio = (field: string, value: string) => {
    setValues(old => ({ ...old, [field]: value }))
  }

  const handleCheckbox = (field: string, value: string) => {
    const list = (values[field] as string[]) || []
    setValues(old => ({
      ...old,
      [field]: addOrRemove(list, value)
    }))
  }

  return (
    <S.Wrapper>
      <S.Content>
        {items.map(item => (
          <S.ItemWrapper key={item.name}>
            <Heading line="bottom" lineColor="secondary" size="small">
              {item.title}
            </Heading>
            {item.inputs.map(props =>
              item.type === 'checkbox' ? (
                <Checkbox
                  key={props.label}
                  color="white"
                  {...props}
                  defaultChecked={values[item.name]?.includes(props.name)}
                  onCheck={() => handleCheckbox(item.name, props.name)}
                />
              ) : (
                <Radio
                  key={props.label}
                  color="white"
                  name={item.name}
                  value={props.name}
                  label={props.label}
                  defaultChecked={values[item.name] === props.name}
                  onCheck={() => handleRadio(item.name, props.name)}
                />
              )
            )}
          </S.ItemWrapper>
        ))}
      </S.Content>
      <S.ButtonWrapper>
        <Button fullWidth onClick={() => onFilter(values)}>
          Filter
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

const addOrRemove = (array: string[], value: string) => {
  const newArray = array.filter(e => e !== value)
  return newArray.length === array.length ? array.concat(value) : newArray
}

export default ExploreSidebar
