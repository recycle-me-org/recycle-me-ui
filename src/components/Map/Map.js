import React, { PureComponent } from 'react';
import ReactMapGL from 'react-map-gl';
import { Container, Col, Row } from 'reactstrap';

const mapStyle = {
  width: '100%',
  height: 600,
};

const mapboxApiKey =
  'pk.eyJ1Ijoicm93ZW4wOCIsImEiOiJja3dzaW93MGEwc3E3Mm5xbHhwODl3ZHdjIn0.suCrTYweGk0ASHkCi4rmWg';

class MapView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 45.50884,
        longitude: -73.58781,
        zoom: 15,
      },
    };
  }

  render() {
    const { viewport } = this.state;
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h2>Mapbox Tutorial</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({ viewport })}
            ></ReactMapGL>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MapView;
