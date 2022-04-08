import * as S from './CartDropdownStyles'
import Dropdown from 'components/Dropdown'
import CartList from 'components/CartList'
import CartIcon from 'components/CartIcon'

const CartDropdown = () => {
  return (
    <S.Wrapper>
      <Dropdown title={<CartIcon />}>
        <CartList hasButton />
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown
