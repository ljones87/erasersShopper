/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as OrderDetail} from './OrderDetail'
export {default as Orders} from './Orders'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as Products} from './Products'
export {default as SingleProduct} from './SingleProduct'
export {default as UserAccount} from './UserAccount'
export {default as ManageProduct} from './ManageProduct'
export {default as Checkout} from './Checkout'
export {default as OrderConfirmation} from './OrderConfirmation'
