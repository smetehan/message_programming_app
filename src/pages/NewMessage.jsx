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
  getMessage,
  getMessage_2,
}) {
  const BASE_URL =
    "https://6355181fda523ceadcfa425c.mockapi.io/api/messageprogramming";

  const [message1, setMessage1] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { message1 };
    addTutorial(newTutor);

    setOpen(true);
  };

  const addTutorial = async (newTutor) => {
    try {
      await axios.post(BASE_URL, newTutor);
    } catch (error) {
      console.log(error);
    }
    getMessage();
    getMessage_2();
    setOpen(false);
    setMessage1("");
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
              name="message1"
              id="message1"
              type="text"
              required
              variant="outlined"
              value={message1 || ""}
              onChange={(e) => setMessage1(e.target.value)}
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
