import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function TableUser(props) {
  const [listUsers, setListUser] = useState();
  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : [];
    setListUser(data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);
  console.log(listUsers);
  const handleDeletaUser = (users) => {
    console.log(users);
  };
  return (
    <>
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <tr key={`users-${item.index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>

                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => handleDeletaUser(item)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
