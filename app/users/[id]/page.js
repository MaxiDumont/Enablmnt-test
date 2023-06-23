"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ResponsiveAppBar from "../../../components/appBar";
import Card from "../../../components/card/card";
import { useParams } from "next/navigation";
import {
  Container,
  Grid,
  Typography,
  ImageList,
  Box,
  CircularProgress,
  Button
} from "@mui/material";
import FollowButton from "../../../handler/follow";
import Link from "next/link";

export default function UserPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!res.ok) {
          // Handle case when API request fails
          throw new Error("User not found");
        }
        const data = await res.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        // Handle case when an error occurs during fetching
        console.error(error);
        setUserData({ notFound: true });
      }
    };

    fetchUserData();
  }, [id]);

  //get photos for .map
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/1/photos`
        );
        if (!res.ok) {
          // Handle case when API request fails
          throw new Error("Photos not found");
        }
        const data = await res.json();
        //only show 9 photos
        data.length = 9;
        setPhotos(data);
      } catch (error) {
        // Handle case when an error occurs during fetching
        console.error(error);
        setPhotos({ notFound: true });
      }
    };

    fetchPhotos();
  }, []);

  if (!userData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (userData.notFound) {
    return (
      <main className="">
      <ResponsiveAppBar />

      {/* go to the first user */}

      <Grid container justifyContent="center" sx={{
        position: "relative",
        top: "200px",
        display: "Grid",
        alignItems: "center",
        justifyContent: "center",

        }}>
        <Typography
          sx={{
            color: "#350010",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: "20px",
            fontWeight: "700",
            fontSize: "30px",
            fontFamily: "pt serif"
          }}
          variant="h1"
        >
          User not found
        </Typography>
      <Grid container justifyContent="center" sx={{
        backgroundColor: "#496692",
        width: "300px",
        borderRadius: "5px",
        top: "250px",
       }}>


        <Link href="/users/1">
          <Button variant="contained" color="success" sx={{
            width: "300px",
            fontFamily: "pt serif"
          }}>Go to the first user</Button>
        </Link>
      </Grid>
      </Grid>
    </main>
    );
  }
  return (
    <main>
      <ResponsiveAppBar />

      {userData && (
        <Grid
          sx={{
            backgroundImage: "url(/estudio.jpg)",
            width: "100%",
            height: "400px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              width: "65%",
              height: "200px",
            }}
          >
            <Grid item xs={3}>
              <Image
                src="/placeholder-img.jpg"
                width={200}
                height={200}
                className="rounded-full"
                alt="photo"
              />
            </Grid>
            <Grid item xs={9}>
              <Typography
                sx={{
                  color: "#F9EDE0",
                  fontFamily: "pt serif",
                }}
                variant="h2"
              >
                {userData.name}
              </Typography>
              <Typography
                sx={{
                  color: "#F9EDE0",
                  fontFamily: "pt serif",
                }}
                variant="h1"
              >
                {userData.website}
              </Typography>
              <FollowButton />
            </Grid>
            <Grid item xs={10} sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}>
              <Typography
                sx={{
                  color: "#F9EDE0",
                  fontFamily: "pt serif",
                  ml: 20,
                  mt: 2,
                }}
                variant="h9"
              >
                Photographs are not made by the camera; they are made by the
                eye, heart, and head.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}

      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography
          sx={{
            color: "#350010",
            fontWeight: "400",
            mt: 2,
            mb: 2,
            //font pt serif
            fontFamily: "pt serif",
          }}
          variant="h3"
        >
          Explore YourPhotos
        </Typography>
      </Grid>

      {photos && (
        <Container
          sx={{
            backgroundColor: "#F7F9FB",
            width: "70%",
            mt: 2,
            borderRadius: 2,
            // box shadow inset
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <ImageList sx={{ width: 1020, height: 800 }} cols={3} rowHeight={164}>
            <Grid
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 0.01fr)",
                gap: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {photos.map((photo) => (
                <Card key={photo.id} photo={photo} />
              ))}
            </Grid>
          </ImageList>
        </Container>
      )}
      {/* footer */}
      <Grid
        sx={{
          backgroundColor: "#496692",
          width: "100%",
          height: "70px",
          mt: 5,
        }}
      >
        <Typography
          sx={{
            color: "#F9EDE0",
            ml: 75,
            fontWeight: "400",
            position: "relative",
            top: "20%",
            fontFamily: "pt serif"
          }}
          variant="h9"
        >
          © 2021 YourPhotos Inc. All rights reserved.
        </Typography>
      </Grid>
    </main>
  );
}
