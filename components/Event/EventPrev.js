import React from "react";
import { Button, Card, Container } from "react-bootstrap";

export const EventPrev = () => {
  return (
    <Container>
      <Card
        className="shadow-lg mt-4"
        style={{
          height: "100%",
          minHeight: "150px",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card.Subtitle style={{ fontWeight: "700" }}>
            Upcoming Event
          </Card.Subtitle>
          <div className="d-flex flex-row pt-4">
            <Card.Title
              style={{
                fontSize: "1rem",
                paddingRight: "15px",
              }}
            >
              1st Annual Men's Conference{" "}
              <p style={{ paddingTop: '8px' }}>
                December 18th, 2021 - 6:00pm at Hyatt Hyde Park 5225 S. Harper
                St. Chicago, IL 60615
              </p>{" "}
            </Card.Title>
            <Button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              as="a"
              href="/events"
              variant="info"
              size="md"
              className="ms-auto"
            >
              Event Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
