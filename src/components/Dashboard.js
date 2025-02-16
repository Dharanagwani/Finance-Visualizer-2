import { Container, Row, Col, Card } from "react-bootstrap";

export default function Dashboard({ transactions }) {
  const totalExpenses = transactions.reduce((acc, t) => acc + t.amount, 0);
  const lastTransaction = transactions[transactions.length - 1];

  return (
    <Container className="p-4 border rounded shadow bg-white mt-3">
      <h3 className="mb-3">Dashboard Summary</h3>
      <Row>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Total Expenses</Card.Title>
              <Card.Text className="fs-4">${totalExpenses.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Most Recent Transaction</Card.Title>
              <Card.Text>
                {lastTransaction ? `${lastTransaction.description} - $${lastTransaction.amount}` : "No Transactions"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
