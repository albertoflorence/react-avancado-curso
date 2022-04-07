import * as S from './CartDropdownStyles'
import Dropdown from 'components/Dropdown'
import CartList, { CartListProps } from 'components/CartList'
import CartIcon from 'components/CartIcon'

export type CartDropdownProps = Omit<CartListProps, 'hasButton'>

const CartDropdown = (props: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList {...props} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
