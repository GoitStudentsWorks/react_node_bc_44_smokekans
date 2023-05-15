const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: { mobile: '473px', tablet: '549px' },
    width: { mobile: '280px', tablet: '608px' },
    position: 'relative',
    boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    borderRadius: '20px',
    marginTop: { mobile: '44px', tablet: '80px' },
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: { mobile: '12px 40px', tablet: '60px 75px' },
    justifyContent: 'center',
    alignItems: 'center',
  },
  // input: {
  //   boxSizing: 'border-box',

  //   /* Auto layout */

  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   padding: '4px 12px',
  //   width: '255px',
  //   height: '32px',
  //   borderBottom: 'none',

  //   border: '1px solid #54ADFF',
  //   borderRadius: '50px',
  // },
  box: {
    // display: 'flex',
    gap: '12px',
  },
  input: {
    // border: '1px solid #54ADFF',
    // borderRadius: '40px',
    padding: '12px 16px',
    width: '256px',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '33px',
    color: 'primary',
    // textDecoration: 'none',
    mb: '40px',
  },
  text: {
    display: 'flex',
    gap: '3px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: { mobile: '12px', tablet: '14px', desktop: '16px' },
    lineHeight: { mobile: '16px', tablet: '19px', desktop: '22px' },
    textDecoration: 'none',
    m: 0,
    // textAlign: 'center',
    color: "#888888",
  },
  button: {
    width: '256px',
    padding: '10px 100px',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '33px',
    textDecoration: 'none',
    borderRadius: '40px',
    mb: '24px',
  },
  // media: {
  //   height: 288,
  // },
  // content: {
  //   flexGrow: 1,
  //   padding: 2,
  //   height: 168,
  // },
  // category: {
  //   position: 'absolute',
  //   top: 16,
  //   left: 1,
  //   bgcolor: 'primary.secondary',
  //   color: 'primary',
  //   p: 1,
  //   height: 32,
  //   width: 126,
  //   borderRadius: '0px  16px 16px 0px',
  //   fontSize: theme => theme.typography.subtitle2.fontSize,
  //   fontWeight: theme => theme.typography.subtitle2.fontWeight,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // favorite: {
  //   position: 'absolute',
  //   top: 1,
  //   right: 1,
  // },
  // components: {
  //   position: 'absolute',
  //   bottom: 180,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 1,
  // },
  component: {
     display: 'flex',
    flexDirection: 'column',
    // gap: '24px',
  // mb: '80px',
  },
};

export default styles;
