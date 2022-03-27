import * as S from './CartDropdownStyles'
import Dropdown from 'components/Dropdown'
import Icon from 'components/Icon'
import CartList, { CartListProps } from 'components/CartList'

export type CartDropdownProps = Omit<CartListProps, 'hasButton'>

const CartDropdown = (props: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown
      title={
        <Icon label="ShoppingCart" title={'Shopping Cart'} size={24} badge={props.items?.length} />
      }
    >
      <CartList {...props} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
