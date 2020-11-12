import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user-selectors'
import { checkUserSession } from './redux/user/user-actions'

// @ToDo - We call this here to insert the shop collections in batches to the firebase store
// import { selectCatalogCollectionOverview } from './redux/shop/shop-selectors' 
// import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import Header from './components/header/Header'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Checkout from './pages/checkout/Checkout'
import SigninRegister from './pages/signin-register/SigninRegister'

import './App.css'

function App({ checkUserSession, currentUser }) {
  
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])  

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SigninRegister />) }  />
      </Switch>
    </div>
  )
  
}

const mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser,
  // collectionsArray: selectCatalogCollectionOverview 
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);