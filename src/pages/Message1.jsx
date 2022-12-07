import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import NewMessage from "./NewMessage";
const Message = () => {
  const [api, setApi] = useState([]);
  const [api2, setApi2] = useState([]);
  const [open, setOpen] = useState(false);
  const BASE_URL =
    "https://6355181fda523ceadcfa425c.mockapi.io/api/messageprogramming";
  const BASE_URL_2 =
    "https://6355181fda523ceadcfa425c.mockapi.io/api/messagePrgramming2";
  const getMessage = async () => {
    try {
      const { data } = await axios(BASE_URL);
      console.log(data);
      setApi(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getMessage_2 = async () => {
    try {
      const { data } = await axios(BASE_URL_2);
      setApi2(data);
    } catch (error) {}
  };

  useEffect(() => {
    setInterval(() => {
      getMessage_2();
      getMessage();
    }, 3000);
  }, [setApi2]);
  const handleDelMessage1 = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    getMessage();
  };
  const handleDelMessage2 = async (id) => {
    await axios.delete(`${BASE_URL_2}/${id}`);
    getMessage_2();
  };
  return (
    <Box sx={{ maxWidth: 275, mb: 3 }}>
      {api?.map((item, index) => {
        const { username1, message1 } = item;
        return (
          <Box key={index} sx={{ mb: 3, maxWidth: 275 }}>
            <Box sx={{ mb: 3 }}>
              <Card
                sx={{
                  minWidth: 275,
                  maxWidth: 275,
                  bgcolor: "aqua",
                  borderRadius: 5,
                }}
              >
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
                >
                  <Typography
                    sx={{ flexGrow: 1, fontSize: 16, ml: 3 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {username1}
                  </Typography>
                  <ClearIcon
                    sx={{ fontSize: "medium", mr: 2, cursor: "pointer" }}
                    onClick={(e) => handleDelMessage1(item.id)}
                  />
                </Box>

                <CardContent>
                  <Typography variant="body2" sx={{ ml: 1, mb: 1 }}>
                    {message1}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        );
      })}

      {api2?.map((item, index) => {
        const { username2, message2 } = item;
        return (
          <Box key={index} sx={{ mb: 3, maxWidth: 275 }}>
            <Box>
              <Card
                sx={{
                  minWidth: 275,
                  maxWidth: 275,
                  bgcolor: "pink",
                  borderRadius: 5,
                }}
              >
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
                >
                  <Typography
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, fontSize: 16, ml: 3 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {username2}
                  </Typography>
                  <ClearIcon
                    sx={{ fontSize: "medium", mr: 2, cursor: "pointer" }}
                    onClick={(e) => handleDelMessage2(item.id)}
                  />
                </Box>
                <CardContent>
                  <Typography variant="body2" sx={{ ml: 1, mb: 1 }}>
                    {message2}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        );
      })}
      <Box>
        <Button
          sx={{ ml: 2 }}
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          Mesaj Yaz
        </Button>
        <NewMessage
          open={open}
          setOpen={setOpen}
          getMessage={getMessage}
          getMessage_2={getMessage_2}
        />
      </Box>
    </Box>
  );
};
export default Message;
