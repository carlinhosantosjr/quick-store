import { styled } from '..'

export const HeaderContainer = styled('header', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ShoppingBagButton = styled('button', {
  position: 'relative',
  background: 'linear-gradient(180deg, #ffd476ff 0%, #e79c0fff 100%)',
  height: '46px',
  width: '46px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'default',
  },

  variants: {
    isFooter: {
      true: {
        backgroundColor: '$gold900',
        height: '54px',
        width: '54px',
      },
    },
  },
})

export const BadgeBag = styled('span', {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gold900',
  border: 'none',
  borderRadius: '9999px',
  width: '20px',
  height: '20px',
  position: 'absolute',
  fontSize: '$sm',
  top: '-5px',
  right: '-5px',
})
