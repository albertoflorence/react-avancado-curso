import { ParsedUrlQueryInput } from 'querystring'

export interface ItemProps {
  name: string
  type: 'radio' | 'checkbox'
}

interface ParseArgs {
  queryString: ParsedUrlQueryInput
  filterItems: ItemProps[]
}

const isCheckBox = (filterItems: ItemProps[], name: string): boolean =>
  filterItems.some(item => item.type === 'checkbox' && item.name === name)

export const parseQueryStringToWhere = ({ queryString, filterItems }: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parsedQuery: any = {}

  Object.keys(queryString)
    .filter(key => key !== 'sort')
    .forEach(key => {
      const value = queryString[key]

      parsedQuery[key] = isCheckBox(filterItems, key) ? { name_contains: value } : value
    })

  return parsedQuery
}

export const parseQueryStringToFilter = ({ queryString, filterItems }: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parsedQuery: any = {}

  for (const key in queryString) {
    const value = queryString[key]
    parsedQuery[key] = isCheckBox(filterItems, key) ? Array.prototype.concat(value) : value
  }

  return parsedQuery
}
