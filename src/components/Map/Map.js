import React, { PureComponent } from 'react';
// import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Container, Col, Row } from 'reactstrap';
import './Map.css';

const mapStyle = {
  width: '1000px',
  height: 600,
};

const mapboxApiKey =
  'pk.eyJ1Ijoicm93ZW4wOCIsImEiOiJja3dzaW93MGEwc3E3Mm5xbHhwODl3ZHdjIn0.suCrTYweGk0ASHkCi4rmWg';

const params = {
  country: 'ca',
};

const CustomMarker = ({ index, marker }) => {
  return (
    <Marker longitude={marker.longitude} latitude={marker.latitude}>
      <div className="marker">
        <span>
          <b>{index + 1}</b>
        </span>
      </div>
    </Marker>
  );
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 45.50884,
        longitude: -73.58781,
        zoom: 15,
      },
      tempMarker: null,
      markers: [],
    };
  }

  onSelected = (viewport, item) => {
    this.setState({
      viewport,
      tempMarker: {
        name: item.place_name,
        longitude: item.center[0],
        latitude: item.center[1],
      },
    });
  };

  add = () => {
    var { tempMarker } = this.state;

    this.setState((prevState) => ({
      markers: [...prevState.markers, tempMarker],
      tempMarker: null,
    }));
  };

  render() {
    const { viewport, tempMarker, markers } = this.state;
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h2>Mapbox Tutorial</h2>
          </Col>
        </Row>
        <Row className="py-4">
          <Col xs={2}>
            <Geocoder
              mapboxApiAccessToken={mapboxApiKey}
              onSelected={this.onSelected}
              viewport={viewport}
              hideOnSelect={true}
              value=""
              queryParams={params}
            />
          </Col>
          <Col>
            <Button color="primary" onClick={this.add}>
              Add
            </Button>
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
            >
              {tempMarker && (
                <Marker
                  longitude={tempMarker.longitude}
                  latitude={tempMarker.latitude}
                >
                  <div className="marker temporary-marker">
                    <span></span>
                  </div>
                </Marker>
              )}
              {this.state.markers.map((marker, index) => {
                return (
                  <CustomMarker
                    key={`marker-${index}`}
                    index={index}
                    marker={marker}
                  />
                );
              })}
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Map;
