import React, { Component, Fragment } from 'react'
import { Col, Container, Modal, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
class Video extends Component {

     constructor() {
          super();
          this.state = {
               show: false
               // video_desciption: "",
               // video_url: "",
               // loading: true
          }
     }


     // componentDidMount() {
     //      RestClient.GetRequest(AppUrl.HomeVideo).then(result => {
     //           this.setState({
     //                video_desciption: result[0]['video_desciption'],
     //                video_url: result[0]['video_url'],
     //                loading: false

     //           });
     //      })
     // }

     modalClose = () => this.setState({ show: false })
     modalOpen = () => this.setState({ show: true })
     render() {
          return (
               <Fragment>
                    <Container className="text-center">
                         <h1 className="serviceMainTitle">OUR VIDEOS</h1>
                         <div className="bottom"></div>
                         <Row>
                              <Col lg={6} md={6} sm={12} className="videText">
                                   <Zoom top>
                                        <p className="serviceDescription text-justify px-3">
                                             {/* {ReactHtmlParser(this.state.video_desciption)} */}
                                             If you are looking to use custom breakpoints, you must wrap your application with a theme provider and use the breakpoints prop to specify the breakpoints you will use. This ensures that components such as Row or Col can parse the correct custom breakpoint props.  
                                             If you are looking to use custom breakpoints, you must wrap your application with a theme provider and use the breakpoints prop to specify the breakpoints you will use. This ensures that components such as Row or Col can parse the correct custom breakpoint props. 
                                        </p> </Zoom>
                              </Col>
                              <Col lg={6} md={6} sm={12} className="videoCard">
                                   <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoSlash} />
                              </Col>
                         </Row>
                    </Container>
                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                         <Modal.Body>
                              <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                   <BigPlayButton position="center" />
                              </Player>
                         </Modal.Body>
                         <Modal.Footer>
                              <Button variant="secondary" onClick={this.modalClose}>
                                   Close
                              </Button>
                         </Modal.Footer>
                    </Modal>
               </Fragment>
          )
     } // end Else
}

export default Video
