"use client";
import * as React from "react";
import { Button,Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";


export default function FollowButton() {
  const { id } = useParams();
  const [follow, setFollow] = React.useState(false);
  const storage = `follow + ${id}`


  useEffect(() => {
    const checkFollow = () => {
      const follow = localStorage.getItem(storage);
      if (follow) {
        setFollow(true);
      }
    }
    checkFollow();
  }, [id]);


  const handleFollow = () => {
   // asve id in local storage
    localStorage.setItem(storage ,id);
    setFollow(true);
    console.log("followed");

  }
  const handleUnfollow = () => {
    // remove id from local storage
    localStorage.removeItem(storage, id);
    setFollow(false);
    console.log("unfollowed");
  }

  return (
    <div>
      {follow ? (
        <Grid sx={{
          backgroundColor: "#496692",
          width: "115px",
          borderRadius: "5px",
        }}>
        <Button variant="contained" color="error" onClick={handleUnfollow}>Unfollow</Button>
        </Grid>
      ) : (
        <Grid sx={{
          backgroundColor: "#496692",
          width: "94px",
          borderRadius: "5px",
        }}>
        <Button variant="contained" color="success" onClick={handleFollow}>Follow</Button>
        </Grid>
      )}
    </div>
  );


}