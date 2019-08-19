import React, { Component, ReactNode } from 'react';
import Helmet from 'react-helmet';
import Header from '../common/Header'
import Footer from '../common/Footer'

type Props = {
    children: ReactNode
}

class Main extends Component<Props> {

  // TODO: Update this lifecycle method to remove warning from console
  componentWillMount() {
    window.scrollTo({
      top:0,
      left: 0,
      behavior: 'smooth'
    })
  }


  render () {
    return (
          <div id="wrapper">
            <Helmet titleTemplate="%s | Michael Ross" defaultTitle="Michael Ross" />
            <Header />
            <div id="main">
              {this.props.children}
            </div>
            <Footer />
          </div>
    );
  }
}

export default Main;