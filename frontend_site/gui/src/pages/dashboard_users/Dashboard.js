import React, { Component } from 'react';
import {Navbar,Nav, Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/auth'
import FooterMainPage from '../../components/footer/FooterMainPage'
import FormsEachTerm from './forms_each_term'
 class Dashboard extends Component {
  render() {
    return (
      <div> 
       <Navbar bg="light">
         <Container>
          <Navbar.Brand href="#home">
          Students Page
        </Navbar.Brand>

        {
          this.props.isAuthenticated ?
          <Nav.Link href="/login" >login</Nav.Link> 

          :

          <Nav.Link href="/login">logout </Nav.Link>

        }

          <Navbar.Toggle /> 
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
       </Navbar.Collapse>
       </Container>
    </Navbar>
    <Container>
    <FormsEachTerm />
    </Container>
    
    <FooterMainPage />
     </div>
    );
  }
}

// const mapStateToProps = (state) => {

//   return {

//     isAuthenticated : state.token !== null ,

//     loading : state.loading,
//     error: state.error     
//   }
// }

const mapDispatchToProps = (dispatch) => {

  return {

    // logout :() => dispatch(actions.logout())    

  }
}

export default connect(null,mapDispatchToProps)(Dashboard)



