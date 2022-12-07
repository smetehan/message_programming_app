import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { flexColumn, modalStyle } from "../styled/Styled";

export default function NewMessage({
  open,
  setOpen,
  getMessage_2,
  getMessage,
}) {
  const BASE_URL_2 =
    "https://6355181fda523ceadcfa425c.mockapi.io/api/messagePrgramming2";

  const [message2, setMessage2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { message2 };
    addTutorial(newTutor);

    setOpen(true);
  };

  const addTutorial = async (newTutor) => {
    try {
      await axios.post(BASE_URL_2, newTutor);
    } catch (error) {
      console.log(error);
    }
    getMessage_2();
    getMessage();
    setOpen(false);
    setMessage2("");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={flexColumn} component="form" onSubmit={handleSubmit}>
            <TextField
              label="Mesajınızı yazınız"
              name="message2"
              id="message2"
              type="text"
              required
              variant="outlined"
              value={message2 || ""}
              onChange={(e) => setMessage2(e.target.value)}
            />

            <Button type="submit" variant="contained" size="medium">
              gönder
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
