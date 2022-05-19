import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getRockets, joinRocket, leaveRocket } from '../../store/rocket';
import RocketCard from './RocketCard';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <>
      {/* TODO: Header here */}

      <Container className="px-5">
        <Row>
          <Col>
            <ul className="list-unstyled">
              {rockets.list.map((rocket) => (
                <RocketCard
                  key={rocket.id}
                  rocketName={rocket.rocket_name}
                  description={rocket.description}
                  flckrImg={rocket.flickr_images[0]}
                  reserved={rocket.reserved}
                  reserve={() => dispatch(joinRocket(rocket.id))}
                  cancel={() => dispatch(leaveRocket(rocket.id))}
                />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rockets;
