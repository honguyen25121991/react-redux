import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../action/counter.action";

export default function TableUser(props) {
  // const [listUsers, setListUser] = useState();
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => {
    return state.user.listUsers;
  });
  const isLoading = useSelector((state) => {
    return state.user.isLoading;
  });
  const isError = useSelector((state) => {
    return state.user.isError;
  });
  console.log("test");
  // const fetchAllUser = async () => {
  //   const res = await axios.get("http://localhost:8080/users/all");
  //   const data = res && res.data ? res.data : [];
  //   setListUser(data);
  // };

  useEffect(() => {
    // fetchAllUser();
    dispatch(fetchAllUsers());
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
            {isError === true ? (
              <>
                <div>Something went wrong</div>
              </>
            ) : (
              <>
                {isLoading === true ? (
                  <>
                    <div>Loading data ...</div>
                  </>
                ) : (
                  <>
                    {listUsers &&
                      listUsers.length > 0 &&
                      listUsers.map((item, index) => {
                        return (
                          <tr key={`users-${item.index}`}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>
                              <Button
                                className="btn btn-danger"
                                onClick={() => handleDeletaUser(item)}
                              >
                                Delete
                              </Button>
                              {"   "}
                              <Button variant="btn btn-danger">Edit</Button>
                            </td>
                          </tr>
                        );
                      })}
                  </>
                )}
              </>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
