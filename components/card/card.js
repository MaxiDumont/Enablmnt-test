"use client";
import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import "./style.css";

export default function Card(photo) {

  return (
    <div className="box-container">
      <div className="box-item">
        <Grid className="flip-box">
          <div
            className="flip-box-front text-center"
            style={{
                backgroundImage: "url(/paper.jpg)",
            }}
          >
            <Image
              src={photo.photo.url}
              width={275}
              height={300}
              style={{
                marginLeft: 12,
                marginTop: 15,
                position: "absolute",
              }}
              alt="Picture of the author"
            />

            <div className="inner color-white">
              <Image
                src="/yourphotos-logo-black.svg"
                width={100}
                height={100}
                priority
                style={{
                  marginLeft: 40,
                  position: "absolute",
                  marginTop: 135,
                  opacity: 0.5,
                }}
                alt="logo"
              />
            </div>
          </div>

          <div
            className="flip-box-back text-center"
            style={{
                backgroundImage: "url(/paper.jpg)",
            }}
          >
            <div className="inner color-black">
              <p>{photo.photo.title}</p>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
}
