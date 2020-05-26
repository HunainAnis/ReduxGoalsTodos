import React from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Goals from './Goals'
import Todos from './Todos'

class App extends React.Component {

  componentDidMount() {
      const { dispatch } = this.props

      dispatch(handleInitialData())

      // store.subscribe(()=> this.forceUpdate())


  }

  render() {
      return(
          <div>
              <Todos />
              <Goals />
          </div>
      )
  }
}


export default connect((state)=> ({
  loading:state.loading
}))(App)