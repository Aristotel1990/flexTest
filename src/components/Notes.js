import { useEffect } from "react";

import SingleNote from "./SingleNote";
import { useDispatch } from "../redux/store";

import { Card, Typography, Grid } from "@mui/material";
import { useSelector } from "../redux/store";
import { getdataFromStorage } from "../redux/slices/data";

export default function data() {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getdataFromStorage());
  }, [dispatch]);
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="overline" sx={{ display: "block" }}>
        My data{" "}
      </Typography>
      <Grid container spacing={2}>
        {data.map((row, index) => {
          return (
            <Grid key={row.id} item xs={3}>
              <SingleNote note={row} />
            </Grid>
          );
        })}{" "}
      </Grid>
    </Card>
  );
}
